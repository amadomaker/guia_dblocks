# infra/bootstrap: root module que provisiona o bucket de tfstate

## Contexto

`infra/modules/tfstate-bucket` (ver `docs/superpowers/specs/2026-07-02-tfstate-bucket-module-design.md`)
já existe como módulo reutilizável, mas não é chamado por ninguém. Este spec
define `infra/bootstrap`, o root module que efetivamente instancia esse
módulo e cria o bucket real no GCP.

`infra/bootstrap` roda com **state local** (sem bloco `backend`) — é o único
lugar do projeto que não usa o bucket remoto, porque o bucket ainda não
existe na primeira execução (problema do ovo e da galinha).

## Dados reais do projeto

- `project_id` = `dblocks-500317`
- `bucket_name` = `guia-dblocks-500317-tfstate`
- `location` = `us-central1` (default do módulo `tfstate-bucket`, não
  precisa ser passado explicitamente)

## Estrutura de arquivos

```
infra/bootstrap/
├── versions.tf       # terraform { required_version, required_providers.google } — mesmo range do modulo (>=1.5.0 / google >=6.0,<8.0). Sem bloco backend (state local).
├── provider.tf        # provider "google" { project = var.project_id, region = "us-central1" }
├── variables.tf       # project_id (string, sem default), bucket_name (string, sem default)
├── main.tf             # module "tfstate_bucket" { source = "../modules/tfstate-bucket", project_id = var.project_id, bucket_name = var.bucket_name }
├── outputs.tf          # bucket_name, bucket_url — repassados de module.tfstate_bucket, para configurar o backend "gcs" dos ambientes depois
└── terraform.tfvars    # gitignored. project_id = "dblocks-500317", bucket_name = "guia-dblocks-500317-tfstate"
```

Convenção do projeto (aplicada aqui e em toda infra futura): variáveis com
valor real (não genérico) são declaradas **sem default** em `variables.tf`;
o valor real vive só em `terraform.tfvars`, que é sempre gitignored.

## .gitignore

Adicionar `*.tfvars` ao `.gitignore` da raiz (o arquivo já tem a seção
`# Terraform` criada quando o módulo `tfstate-bucket` foi implementado).

## Validação

Sem credenciais GCP configuradas neste ambiente de desenvolvimento, a
validação é estática, igual ao módulo `tfstate-bucket`:
- `terraform fmt -check -diff infra/bootstrap`
- `terraform init -backend=false` (dentro de `infra/bootstrap`, resolve
  também o módulo local via `-from-module` implícito do `source` relativo)
- `terraform validate`

`terraform plan`/`apply` reais (que efetivamente criam o bucket) ficam para
quando o usuário rodar isso manualmente com suas credenciais GCP — fora do
escopo desta etapa.

## Fora de escopo

- Rodar `terraform apply` de fato / criar o bucket na GCP.
- Conectar `infra/environments/production` ao bucket remoto criado aqui
  (próxima etapa, depois que o bucket existir de verdade).
- `terraform.tfvars.example` ou qualquer arquivo de documentação adicional
  não pedido.
