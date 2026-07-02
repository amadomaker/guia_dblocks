# infra/environments/production Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement `infra/environments/production`, the root module that wires `infra/modules/cloud-run` to the remote GCS backend created by `infra/bootstrap`, per `docs/superpowers/specs/2026-07-02-environments-production-design.md`.

**Architecture:** A root module with a `backend "gcs"` block (remote state), one `google` provider, and a single call to `infra/modules/cloud-run`. Real values (`project_id`, `service_name`, `image`) live only in a gitignored `terraform.tfvars`, matching the pattern already used in `infra/bootstrap`.

**Tech Stack:** Terraform (CLI v1.13.2 installed locally), `hashicorp/google` provider `>= 6.0, < 8.0` (matches all other modules/roots in `infra/`).

## Global Constraints

- `project_id = "dblocks-500317"`, `service_name = "guia-prod"`, `image = "us-docker.pkg.dev/cloudrun/container/hello"` (public Google "Hello World" sample image — the real app image isn't in the project's Artifact Registry yet) — real values, go only in `terraform.tfvars`, never in `.tf` files.
- Backend: `bucket = "guia-dblocks-500317-tfstate"`, `prefix = "environments/production"`.
- `*.tfvars` already gitignored (added in the `infra/bootstrap` plan) — no `.gitignore` change needed here.
- No `terraform.tfvars.example` or extra docs — out of scope per spec.
- Validation is static only (`fmt`, `init -backend=false`, `validate`) — no real `terraform plan`/`apply`/backend init in this environment (no GCP credentials configured here).
- No `staging` environment — out of scope.

---

### Task 1: Create the production root module

**Files:**
- Create: `infra/environments/production/versions.tf`
- Create: `infra/environments/production/backend.tf`
- Create: `infra/environments/production/provider.tf`
- Create: `infra/environments/production/variables.tf`
- Create: `infra/environments/production/main.tf`
- Create: `infra/environments/production/outputs.tf`
- Create: `infra/environments/production/terraform.tfvars` (gitignored, not committed)

**Interfaces:**
- Consumes: `infra/modules/cloud-run` module inputs `project_id` (string), `service_name` (string), `image` (string), and outputs `service_name` (string), `url` (string) — as defined in `infra/modules/cloud-run/variables.tf` and `outputs.tf`.
- Produces: root module outputs `service_name`, `url` — the final observable result of this plan (no further plan consumes them yet).

- [ ] **Step 1: Write `versions.tf`**

```hcl
terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 6.0, < 8.0"
    }
  }
}
```

- [ ] **Step 2: Write `backend.tf`**

```hcl
terraform {
  backend "gcs" {
    bucket = "guia-dblocks-500317-tfstate"
    prefix = "environments/production"
  }
}
```

- [ ] **Step 3: Write `provider.tf`**

```hcl
provider "google" {
  project = var.project_id
  region  = "us-central1"
}
```

- [ ] **Step 4: Write `variables.tf`**

```hcl
variable "project_id" {
  description = "GCP project where the production service is created."
  type        = string
}

variable "service_name" {
  description = "Name of the production Cloud Run service."
  type        = string
}

variable "image" {
  description = "Container image used on initial creation. Ignored on subsequent updates (CI owns image deploys via gcloud run deploy)."
  type        = string
}
```

- [ ] **Step 5: Write `main.tf`**

```hcl
module "cloud_run" {
  source = "../../modules/cloud-run"

  project_id   = var.project_id
  service_name = var.service_name
  image        = var.image
}
```

- [ ] **Step 6: Write `outputs.tf`**

```hcl
output "service_name" {
  description = "Name of the production Cloud Run service."
  value       = module.cloud_run.service_name
}

output "url" {
  description = "URL where the production Cloud Run service is serving traffic."
  value       = module.cloud_run.url
}
```

- [ ] **Step 7: Write `terraform.tfvars` (not committed)**

```hcl
project_id   = "dblocks-500317"
service_name = "guia-prod"
image        = "us-docker.pkg.dev/cloudrun/container/hello"
```

- [ ] **Step 8: Format check**

Run: `terraform fmt -check -diff infra/environments/production`
Expected: no output, exit code `0`. If it prints a diff, run `terraform fmt infra/environments/production` and re-check.

- [ ] **Step 9: Initialize (without backend) and validate**

Run: `cd infra/environments/production && terraform init -backend=false && terraform validate`
Expected: `terraform init` reports `Terraform has been successfully initialized!` (resolving the `google` provider and the local `../../modules/cloud-run` module source, skipping the `gcs` backend since no GCP credentials are configured here); `terraform validate` reports `Success! The configuration is valid.`

If `terraform init` fails to reach `registry.terraform.io` (sandboxed/offline environment), note the failure explicitly and skip to Step 10 without validating — do not treat a network failure as a code defect.

- [ ] **Step 10: Verify `terraform.tfvars` is ignored by git**

Run: `cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks && git check-ignore -v infra/environments/production/terraform.tfvars`
Expected: prints the matching `.gitignore` rule (`*.tfvars`) and the file path — confirms it's ignored.

- [ ] **Step 11: Commit**

```bash
cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks
git add infra/environments/production/versions.tf infra/environments/production/backend.tf infra/environments/production/provider.tf infra/environments/production/variables.tf infra/environments/production/main.tf infra/environments/production/outputs.tf infra/environments/production/.terraform.lock.hcl
git status --short  # confirm terraform.tfvars and .terraform/ are NOT staged
git commit -m "Adiciona infra/environments/production conectando cloud-run ao backend remoto"
```
