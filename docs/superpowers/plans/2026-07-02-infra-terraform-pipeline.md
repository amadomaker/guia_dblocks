# Infra Terraform CI Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `.github/workflows/infra-terraform.yml`, a GitHub Actions pipeline that runs `terraform plan` on PRs and `terraform apply` on pushes to `main` for `infra/environments/production`, per `docs/superpowers/specs/2026-07-02-infra-terraform-pipeline-design.md`.

**Architecture:** A single workflow file with two jobs (`plan`, `apply`) gated by `github.event_name`, both running the same setup steps (checkout, GCP auth, setup-terraform, fmt/init/validate) in `infra/environments/production`, then diverging into `terraform plan` or `terraform apply -auto-approve`.

**Tech Stack:** GitHub Actions, `google-github-actions/auth@v2`, `hashicorp/setup-terraform@v3`, Terraform 1.13.2 (matches local dev version).

> **Correção (2026-07-02, post-execution):** the YAML in Step 1 below is the
> *original* version of this plan and is now stale — it used a static
> `secrets.GCP_SA_KEY` and a fully-hardcoded `backend "gcs"` block, which
> didn't match this repo's actual GCP setup or the pattern used in the
> sibling `applications/website` project. The **committed**
> `.github/workflows/infra-terraform.yml` uses Workload Identity Federation
> (`workload_identity_provider`/`service_account`, `permissions: id-token:
> write`) and `terraform init -backend-config=...` against the partial
> `backend "gcs" {}` in `backend.tf`, per the corrected
> `docs/superpowers/specs/2026-07-02-infra-terraform-pipeline-design.md`.
> Read the actual file for the current, correct content.

## Global Constraints

- Trigger paths: `infra/**`, branch: `main` only (both `pull_request` and `push` events).
- Only `infra/environments/production` — never run `infra/bootstrap` in CI (local-state-only, manual, one-time).
- Auth via Workload Identity Federation (provider `github-guia-dblocks` on the existing `github-actions` pool, SA `github-actions-ci@dblocks-500317.iam.gserviceaccount.com`) — no static keys.
- `terraform init` uses `-backend-config="bucket=guia-dblocks-500317-tfstate" -backend-config="prefix=environments/production"` against the partial `backend "gcs" {}` block.
- Terraform vars passed via `-var` flags (no tfvars file in CI, since `terraform.tfvars` is gitignored): `project_id=dblocks-500317`, `service_name=guia-prod`, `image=us-docker.pkg.dev/cloudrun/container/hello`.
- No `staging` environment, no `deploy-gcp.yml` changes, no manual-approval gate — all out of scope per spec.

---

### Task 1: Add the infra-terraform GitHub Actions workflow

**Files:**
- Create: `.github/workflows/infra-terraform.yml`

**Interfaces:**
- Consumes: `infra/environments/production` root module (backend, variables `project_id`/`service_name`/`image` from `infra/environments/production/variables.tf`), existing repo secrets `GCP_SA_KEY` and `GCP_PROJECT_ID`.
- Produces: nothing consumed by other tasks — this is the final piece of the current infra effort.

- [ ] **Step 1: Write `.github/workflows/infra-terraform.yml`**

```yaml
name: Provisionar Infra (Terraform)

on:
  pull_request:
    branches: [main]
    paths: ["infra/**"]
  push:
    branches: [main]
    paths: ["infra/**"]

jobs:
  plan:
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: infra/environments/production
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Autenticate to GCP
        uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - name: Configurar Terraform
        uses: hashicorp/setup-terraform@v3
        with:
          terraform_version: "1.13.2"

      - name: Terraform fmt
        run: terraform fmt -check

      - name: Terraform init
        run: terraform init

      - name: Terraform validate
        run: terraform validate

      - name: Terraform plan
        run: |
          terraform plan \
            -var="project_id=${{ secrets.GCP_PROJECT_ID }}" \
            -var="service_name=guia-prod" \
            -var="image=us-docker.pkg.dev/cloudrun/container/hello"

  apply:
    if: github.event_name == 'push'
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: infra/environments/production
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Autenticate to GCP
        uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - name: Configurar Terraform
        uses: hashicorp/setup-terraform@v3
        with:
          terraform_version: "1.13.2"

      - name: Terraform fmt
        run: terraform fmt -check

      - name: Terraform init
        run: terraform init

      - name: Terraform validate
        run: terraform validate

      - name: Terraform apply
        run: |
          terraform apply -auto-approve \
            -var="project_id=${{ secrets.GCP_PROJECT_ID }}" \
            -var="service_name=guia-prod" \
            -var="image=us-docker.pkg.dev/cloudrun/container/hello"
```

- [ ] **Step 2: Validate YAML syntax**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/infra-terraform.yml'))" && echo OK`
Expected: `OK` printed, no exception.

- [ ] **Step 3: Commit**

```bash
cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks
git add .github/workflows/infra-terraform.yml
git commit -m "Adiciona pipeline CI para provisionar infra via Terraform"
```
