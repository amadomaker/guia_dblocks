# Pipeline CI: provisionar infra via Terraform

## Contexto

Toda a infra já existe (`infra/bootstrap`, `infra/modules/tfstate-bucket`,
`infra/modules/cloud-run`, `infra/environments/production`), mas até agora
só foi validada estaticamente (`fmt`/`init -backend=false`/`validate`) neste
ambiente de desenvolvimento, sem credenciais GCP reais. Este spec cria a
pipeline de CI que roda `terraform plan`/`apply` de verdade contra
`infra/environments/production`, usando o backend remoto (`bucket
guia-dblocks-500317-tfstate`) já configurado em `infra/environments/production/backend.tf`.

Referência de convenções de CI já usadas no repo:
`.github/workflows/deploy-gcp.yml` (auth via `google-github-actions/auth@v2`
com `secrets.GCP_SA_KEY`, project id em `secrets.GCP_PROJECT_ID`).

## Escopo

Só `infra/environments/production`. `infra/bootstrap` fica de fora da
pipeline: ele usa state local por design (ver
`docs/superpowers/specs/2026-07-02-bootstrap-tfstate-bucket-design.md`) e
rodar em CI sem state persistido faria o Terraform tentar recriar o bucket
a cada execução. `infra/bootstrap` continua sendo aplicado manualmente, uma
vez, por um humano com credenciais GCP locais.

## Arquivo

`.github/workflows/infra-terraform.yml`

## Trigger

```yaml
on:
  pull_request:
    branches: [main]
    paths: ["infra/**"]
  push:
    branches: [main]
    paths: ["infra/**"]
```

- PR tocando `infra/**` contra `main` → job `plan` (`terraform plan`,
  read-only, permite revisar a mudança antes do merge).
- Push em `main` tocando `infra/**` (inclui merges de PR) → job `apply`
  (`terraform apply -auto-approve`).

## Jobs

Dois jobs (`plan` e `apply`), cada um rodando em `infra/environments/production`
(`working-directory`), com os mesmos passos de setup:

1. `actions/checkout@v4`
2. `google-github-actions/auth@v2` com `credentials_json: ${{ secrets.GCP_SA_KEY }}`
3. `hashicorp/setup-terraform@v3` com `terraform_version: "1.13.2"` (mesma
   versão instalada no ambiente de desenvolvimento local)
4. `terraform fmt -check`
5. `terraform init` (usa o `backend "gcs"` já declarado em `backend.tf`,
   autenticado via a service account do passo 2 — diferente da validação
   local, que usa `-backend=false`)
6. `terraform validate`

Depois dos passos comuns:
- Job `plan`: roda só em eventos `pull_request` — `terraform plan` com as
  vars abaixo.
- Job `apply`: roda só em eventos `push` — `terraform apply -auto-approve`
  com as mesmas vars.

Os dois jobs recebem `if: github.event_name == 'pull_request'` /
`if: github.event_name == 'push'` respectivamente, já que o mesmo workflow
é disparado pelos dois eventos mas cada job só deve agir em um deles.

## Variáveis do Terraform em CI

`infra/environments/production/terraform.tfvars` é gitignored (convenção do
projeto, ver `docs/superpowers/specs/2026-07-02-bootstrap-tfstate-bucket-design.md`),
então não existe no checkout da CI. As vars são passadas via `-var` direto
no comando `terraform plan`/`apply`:

```
-var="project_id=${{ secrets.GCP_PROJECT_ID }}"
-var="service_name=guia-prod"
-var="image=us-docker.pkg.dev/cloudrun/container/hello"
```

`service_name` e `image` são fixos (não há segredo neles). `image` usa a
mesma imagem pública "Hello World" do Google usada no `terraform.tfvars`
local — o módulo `cloud-run` já ignora mudanças de imagem via
`lifecycle.ignore_changes` (ver `docs/superpowers/specs/2026-07-02-cloud-run-module-design.md`),
então isso não conflita com os deploys reais feitos por
`.github/workflows/deploy-gcp.yml`.

## Fora de escopo

- Rodar `infra/bootstrap` em CI.
- Ambiente `staging` (continua fora de escopo geral do projeto).
- Trocar `deploy-gcp.yml` para usar Terraform em vez de `gcloud run deploy`.
- Aprovação manual (`environment` protection rules do GitHub) antes do
  `apply` — pode ser adicionado depois se for necessário.
