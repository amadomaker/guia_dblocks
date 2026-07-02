# Módulo Terraform: tfstate-bucket

## Contexto

`infra/modules/` guarda módulos Terraform reutilizáveis, um diretório por
serviço/recurso (ver `docs/superpowers/specs/2026-07-02-infra-cloud-run-structure-design.md`).
O primeiro módulo a implementar é o bucket GCS que vai armazenar o
`.tfstate` remoto usado pelos ambientes em `infra/environments/`.

Este módulo **não é conectado a nenhum root module ainda** — `infra/bootstrap`
(que instanciaria este módulo com backend local) fica para uma etapa
seguinte. Aqui o objetivo é só o módulo em si, validável isoladamente com
`terraform validate` / `terraform fmt`.

## Escopo

Criar `infra/modules/tfstate-bucket/` com um único recurso
`google_storage_bucket`, seguindo boas práticas para um bucket de state:
versionamento habilitado, uniform bucket-level access, acesso público
bloqueado.

## Estrutura de arquivos

```
infra/modules/tfstate-bucket/
├── versions.tf     # terraform { required_version, required_providers }
├── variables.tf    # project_id, bucket_name, location, force_destroy, labels
├── main.tf         # resource "google_storage_bucket" "this"
└── outputs.tf       # bucket_name, bucket_url
```

### versions.tf

- `required_version = ">= 1.5.0"`
- `required_providers.google.source = "hashicorp/google"`
- `required_providers.google.version = ">= 6.0, < 8.0"` — permite patches/minors
  dentro das majors 6 e 7 (via `terraform init -upgrade`), mas não pula
  automaticamente para uma major nova (7→8) sem revisão manual, já que majors
  do provider Google costumam ter mudanças que quebram compatibilidade.

### variables.tf

| Nome | Tipo | Obrigatória | Default | Descrição |
|---|---|---|---|---|
| `project_id` | string | sim | — | Projeto GCP onde o bucket é criado |
| `bucket_name` | string | sim | — | Nome globalmente único do bucket (definido por quem chama o módulo) |
| `location` | string | não | `"us-central1"` | Região do bucket (mesma região do Cloud Run) |
| `force_destroy` | bool | não | `false` | Se `true`, permite `terraform destroy` apagar o bucket mesmo com objetos dentro — mantido `false` para não apagar acidentalmente o tfstate |
| `labels` | map(string) | não | `{}` | Labels do GCS aplicadas ao bucket |

### main.tf

`resource "google_storage_bucket" "this"` com:
- `name = var.bucket_name`
- `project = var.project_id`
- `location = var.location`
- `storage_class = "STANDARD"`
- `force_destroy = var.force_destroy`
- `uniform_bucket_level_access = true`
- `public_access_prevention = "enforced"`
- `versioning { enabled = true }`
- `labels = var.labels`

### outputs.tf

- `bucket_name` — `google_storage_bucket.this.name`
- `bucket_url` — `google_storage_bucket.this.url` (formato `gs://<bucket>`, usado no bloco `backend "gcs"` dos ambientes)

## Validação

Como não há projeto GCP real conectado neste ambiente de desenvolvimento,
a validação desta etapa é estática:
- `terraform fmt -check` — formatação consistente
- `terraform validate` (após `terraform init` com o provider, sem
  credenciais/backend remoto — só valida sintaxe e tipos)

`terraform plan` contra um projeto GCP real fica para quando o módulo for
consumido pelo `infra/bootstrap`.

## Fora de escopo

- `infra/bootstrap` chamando este módulo.
- Lifecycle rules de expiração de versões antigas do objeto.
- `retention_policy` / bucket lock.
- Qualquer outro módulo em `infra/modules/` (ex: `cloud-run`, que já tem o
  diretório placeholder mas nenhum código ainda).
