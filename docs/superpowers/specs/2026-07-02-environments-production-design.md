# infra/environments/production: root module de produção

## Contexto

Último passo da primeira fase da infra: conectar os dois módulos já
existentes (`infra/modules/tfstate-bucket`, `infra/modules/cloud-run`) num
root module real para o ambiente de produção, usando o bucket remoto criado
por `infra/bootstrap` como backend do Terraform.

Ver specs anteriores:
- `docs/superpowers/specs/2026-07-02-infra-cloud-run-structure-design.md`
- `docs/superpowers/specs/2026-07-02-tfstate-bucket-module-design.md`
- `docs/superpowers/specs/2026-07-02-bootstrap-tfstate-bucket-design.md`
- `docs/superpowers/specs/2026-07-02-cloud-run-module-design.md`

## Dados reais

- `project_id` = `dblocks-500317`
- `service_name` = `guia-prod` (mesmo nome já usado pelo CI para a branch `main`, ver `.github/workflows/deploy-gcp.yml`)
- `image` = `us-central1-docker.pkg.dev/dblocks-500317/aplication/guia-prod:latest` (mesmo padrão de path do Artifact Registry usado pelo CI; tag `latest` como valor inicial de bootstrap — deploys seguintes continuam via `gcloud run deploy` com a tag do commit, e o módulo `cloud-run` já ignora mudanças de imagem via `lifecycle`)
- Backend remoto: bucket `guia-dblocks-500317-tfstate` (criado por `infra/bootstrap`), prefix `environments/production`

## Estrutura de arquivos

```
infra/environments/production/
├── versions.tf       # terraform { required_version, required_providers.google } — mesmo range dos modulos
├── backend.tf         # terraform { backend "gcs" { bucket = "guia-dblocks-500317-tfstate", prefix = "environments/production" } }
├── provider.tf         # provider "google" { project = var.project_id, region = "us-central1" }
├── variables.tf        # project_id, service_name, image — sem default (convencao do projeto)
├── main.tf              # module "cloud_run" { source = "../../modules/cloud-run", project_id = var.project_id, service_name = var.service_name, image = var.image }
├── outputs.tf            # service_name, url — repassados de module.cloud_run
└── terraform.tfvars      # gitignored. project_id, service_name, image reais
```

## Validação

Sem credenciais GCP configuradas neste ambiente de desenvolvimento, a
validação é estática:
- `terraform fmt -check -diff infra/environments/production`
- `terraform init -backend=false` (pula a inicialização do backend remoto,
  que exigiria autenticação; ainda resolve o provider e o módulo local
  `../../modules/cloud-run`)
- `terraform validate`

`terraform init` (com backend real) e `terraform plan`/`apply` reais ficam
para quando o usuário rodar isso manualmente com suas credenciais GCP —
nessa ordem: primeiro `infra/bootstrap` (cria o bucket), depois
`infra/environments/production` (usa o bucket como backend).

## Fora de escopo

- Rodar `terraform apply` de fato.
- Ambiente `staging` (continua fora de escopo, conforme decidido desde o
  início do projeto).
- Mudar o workflow de CI.
- README ou qualquer arquivo de documentação não pedido.
