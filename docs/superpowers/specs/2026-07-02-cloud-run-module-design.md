# Módulo Terraform: cloud-run

## Contexto

Segundo módulo em `infra/modules/`, ao lado de `tfstate-bucket` (ver
`docs/superpowers/specs/2026-07-02-tfstate-bucket-module-design.md`).
Provisiona o serviço Cloud Run que hoje é criado imperativamente pelo
workflow `.github/workflows/deploy-gcp.yml` via `gcloud run deploy
$SERVICE_NAME --image ... --region us-central1 --platform managed
--allow-unauthenticated`.

Como o módulo anterior, **não é conectado a nenhum root module ainda** —
isso fica para quando `infra/environments/production` for implementado.

## Decisão: quem controla a imagem do container

O CI continua fazendo `gcloud run deploy` a cada merge para atualizar a
imagem (fora do escopo mudar isso agora). Para o Terraform não reverter a
imagem publicada pelo CI no próximo `terraform apply`, o recurso usa
`lifecycle { ignore_changes = [template[0].containers[0].image] }`. O
módulo ainda recebe `image` como input obrigatório — usado só na criação
inicial do serviço (antes de existir qualquer imagem publicada pelo CI).

## Recurso

`google_cloud_run_v2_service` (API v2, recurso atual recomendado pelo
provider `hashicorp/google` — confirmado via documentação do provider),
mais `google_cloud_run_v2_service_iam_member` condicional para acesso
público, usando o provider `google` padrão (GA), sem depender de
`google-beta`.

## Estrutura de arquivos

```
infra/modules/cloud-run/
├── versions.tf     # terraform { required_version, required_providers } — mesmo range dos outros modulos
├── variables.tf    # project_id, service_name, image, region, container_port, cpu, memory, allow_unauthenticated, deletion_protection
├── main.tf         # google_cloud_run_v2_service + google_cloud_run_v2_service_iam_member condicional
└── outputs.tf      # service_name, url
```

### variables.tf

| Nome | Tipo | Obrigatória | Default | Descrição |
|---|---|---|---|---|
| `project_id` | string | sim | — | Projeto GCP onde o serviço é criado |
| `service_name` | string | sim | — | Nome do serviço Cloud Run (ex: `guia-prod`) |
| `image` | string | sim | — | Imagem do container usada na criação inicial (ignorada em updates posteriores, ver acima) |
| `region` | string | não | `"us-central1"` | Região do Cloud Run |
| `container_port` | number | não | `8080` | Porta exposta pelo container (igual ao `EXPOSE 8080` do `Dockerfile`) |
| `cpu` | string | não | `"1"` | Limite de CPU do container |
| `memory` | string | não | `"256Mi"` | Limite de memória do container (site estático nginx, baixo consumo) |
| `allow_unauthenticated` | bool | não | `true` | Se `true`, concede `roles/run.invoker` a `allUsers` (mesmo comportamento do `--allow-unauthenticated` atual) |
| `deletion_protection` | bool | não | `true` | Protege o serviço de produção contra `terraform destroy` acidental; precisa ser setado `false` explicitamente pra permitir destruição |

### main.tf

`resource "google_cloud_run_v2_service" "this"`:
- `name = var.service_name`
- `project = var.project_id`
- `location = var.region`
- `deletion_protection = var.deletion_protection`
- `ingress = "INGRESS_TRAFFIC_ALL"`
- `template.containers[0]`: `image = var.image`, `ports { container_port = var.container_port }`, `resources { limits = { cpu = var.cpu, memory = var.memory } }`
- `lifecycle { ignore_changes = [template[0].containers[0].image] }`

`resource "google_cloud_run_v2_service_iam_member" "public"` (condicional via `count = var.allow_unauthenticated ? 1 : 0`):
- `project`, `location`, `name` apontando para `google_cloud_run_v2_service.this`
- `role = "roles/run.invoker"`
- `member = "allUsers"`

### outputs.tf

- `service_name` — `google_cloud_run_v2_service.this.name`
- `url` — `google_cloud_run_v2_service.this.uri` (atributo computado pelo provider)

## Validação

Mesma abordagem estática dos módulos anteriores (sem projeto GCP real
conectado neste ambiente):
- `terraform fmt -check -diff`
- `terraform init -backend=false`
- `terraform validate`

## Fora de escopo

- Conectar este módulo a um root module (`infra/environments/production`).
- Mudar o workflow de CI para parar de usar `gcloud run deploy`.
- Variáveis de ambiente do container, volumes, VPC connector, min/max
  instances de scaling — não usados pelo site estático atual.
- README ou qualquer arquivo de documentação além dos `.tf` listados.
