# Pipeline CI: provisionar infra via Terraform

## Contexto

Toda a infra já existe (`infra/bootstrap`, `infra/modules/tfstate-bucket`,
`infra/modules/cloud-run`, `infra/environments/production`), mas até agora
só foi validada estaticamente (`fmt`/`init -backend=false`/`validate`) neste
ambiente de desenvolvimento, sem credenciais GCP reais. Este spec cria a
pipeline de CI que roda `terraform plan`/`apply` de verdade contra
`infra/environments/production`, usando o backend remoto (`bucket
guia-dblocks-500317-tfstate`) já configurado em `infra/environments/production/backend.tf`.

> **Correção (2026-07-02, após revisão do usuário):** a primeira versão
> deste spec/pipeline usava chave estática (`secrets.GCP_SA_KEY`) e backend
> com bucket/prefix hardcoded em `backend.tf`. O usuário apontou que isso
> não segue o padrão já estabelecido no projeto irmão
> `applications/website` (`.github/workflows/deploy.yml`): autenticação via
> **Workload Identity Federation** (sem chave estática) e **backend parcial**
> (`backend "gcs" {}`, bucket/prefix via `-backend-config` no `init`). Este
> spec já reflete a versão corrigida. Ver seção "Autenticação (WIF)" abaixo
> para o que foi criado no GCP.

Referência de convenções de CI já usadas no repo:
`.github/workflows/deploy-gcp.yml` (auth via `google-github-actions/auth@v2`
com `secrets.GCP_SA_KEY`, project id em `secrets.GCP_PROJECT_ID`) — esse
workflow continua como está, não foi alterado. O padrão seguido aqui é o do
job de produção em `applications/website/.github/workflows/deploy.yml`, que
usa WIF.

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

## Autenticação (WIF)

O provider WIF existente no projeto (`github-actions` pool,
provider `github`) está restrito por `attributeCondition` a um único repo
(`amadomaker/BIPES_Amado`) e não podia ser alterado (instrução explícita do
usuário: só criar coisas novas, nunca remover/alterar o que já existe).
Criado **de forma aditiva** no GCP (via `gcloud`, fora do Terraform, mesmo
padrão do projeto `website` que também não gerencia WIF via `.tf`):

- Novo provider `github-guia-dblocks` no mesmo pool `github-actions`,
  `attributeCondition = assertion.repository=='amadomaker/guia_dblocks'`.
  Resource name completo: `projects/2077626448/locations/global/workloadIdentityPools/github-actions/providers/github-guia-dblocks`.
- Novo binding `roles/iam.workloadIdentityUser` na service account já
  existente `github-actions-ci@dblocks-500317.iam.gserviceaccount.com`
  (que já tinha `roles/editor` no projeto, suficiente pra gerenciar o
  bucket de state e o Cloud Run), para o `principalSet` do repo
  `amadomaker/guia_dblocks`. O binding existente do BIPES_Amado nessa
  mesma SA não foi tocado.

## Jobs

Dois jobs (`plan` e `apply`), cada um rodando em `infra/environments/production`
(`working-directory`), com os mesmos passos de setup:

1. `actions/checkout@v4`
2. `permissions: id-token: write` no job (obrigatório pra pedir o token OIDC do WIF)
3. `google-github-actions/auth@v2` com `workload_identity_provider` e
   `service_account` (ver seção "Autenticação (WIF)" acima) — sem chave
   estática
4. `hashicorp/setup-terraform@v3` com `terraform_version: "1.13.2"` (mesma
   versão instalada no ambiente de desenvolvimento local)
5. `terraform fmt -check`
6. `terraform init -backend-config="bucket=guia-dblocks-500317-tfstate"
   -backend-config="prefix=environments/production"` (backend parcial,
   igual ao `backend.tf`; autenticado via a service account do passo 3)
7. `terraform validate`

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
então não existe no checkout da CI.

> **Correção (2026-07-02):** a versão anterior deste spec hardcodeava esses
> valores direto no workflow (bloco `env:`). O usuário apontou que isso não
> segue o padrão de `applications/website/.github/workflows/deploy.yml`,
> que usa `vars.*` (GitHub Actions repository variables) pra tudo que
> identifica o ambiente. Corrigido pra seguir o mesmo padrão — os
> identificadores não são secretos, mas ficam como variáveis do GitHub em
> vez de hardcoded no YAML, o que permite reconfigurar sem editar código e
> mantém o workflow igual ao do projeto irmão.

Variáveis de repositório (`Settings → Secrets and variables → Actions →
Variables`) que precisam existir — **eu não consigo criá-las por aqui**
(sem `gh` CLI/token nesta sessão), então o usuário precisa criá-las
manualmente com estes valores:

| Nome | Valor |
|---|---|
| `GCP_PROD_PROJECT` | `dblocks-500317` |
| `GCP_PROD_WIF_PROVIDER` | `projects/2077626448/locations/global/workloadIdentityPools/github-actions/providers/github-guia-dblocks` |
| `GCP_PROD_SA_EMAIL` | `github-actions-ci@dblocks-500317.iam.gserviceaccount.com` |
| `TF_STATE_BUCKET_PROD` | `guia-dblocks-500317-tfstate` |

Usadas no workflow como `${{ vars.GCP_PROD_PROJECT }}`,
`${{ vars.GCP_PROD_WIF_PROVIDER }}`, `${{ vars.GCP_PROD_SA_EMAIL }}`,
`${{ vars.TF_STATE_BUCKET_PROD }}` — mesmos nomes usados em
`applications/website/.github/workflows/deploy.yml`.

`service_name` e `image` continuam fixos direto no `-var=` (mesmo padrão do
projeto `website`, que também hardcoda `REGION`/`IMAGE_NAME` como `env:`
constantes em vez de `vars.*`, por serem valores realmente estáticos do
próprio workflow, não configuração de ambiente):

```
-var="project_id=${{ vars.GCP_PROD_PROJECT }}"
-var="service_name=guia-prod"
-var="image=us-docker.pkg.dev/cloudrun/container/hello"
```

`image` usa a
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
