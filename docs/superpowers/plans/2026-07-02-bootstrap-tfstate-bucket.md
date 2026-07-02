# infra/bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement `infra/bootstrap`, the Terraform root module that instantiates `infra/modules/tfstate-bucket` to create the real GCS state bucket, per `docs/superpowers/specs/2026-07-02-bootstrap-tfstate-bucket-design.md`.

**Architecture:** A root module with local state (no `backend` block), one `google` provider, and a single call to the existing `tfstate-bucket` module. Real values (`project_id`, `bucket_name`) live only in a gitignored `terraform.tfvars` — `variables.tf` declares them with no default.

**Tech Stack:** Terraform (CLI v1.13.2 installed locally), `hashicorp/google` provider `>= 6.0, < 8.0` (matches `infra/modules/tfstate-bucket`).

## Global Constraints

- `project_id = "dblocks-500317"`, `bucket_name = "guia-dblocks-500317-tfstate"` — real values, go only in `terraform.tfvars`, never in `.tf` files.
- No `backend` block in `infra/bootstrap` — state stays local by design (chicken-and-egg: the state bucket doesn't exist yet).
- `*.tfvars` must be gitignored.
- No `terraform.tfvars.example` or extra docs — out of scope per spec.
- Validation is static only (`fmt`, `init -backend=false`, `validate`) — no real `terraform plan`/`apply` in this environment (no GCP credentials configured here).

---

### Task 1: Create the bootstrap root module

**Files:**
- Create: `infra/bootstrap/versions.tf`
- Create: `infra/bootstrap/provider.tf`
- Create: `infra/bootstrap/variables.tf`
- Create: `infra/bootstrap/main.tf`
- Create: `infra/bootstrap/outputs.tf`
- Create: `infra/bootstrap/terraform.tfvars` (gitignored, not committed)
- Modify: `.gitignore` (root) — add `*.tfvars`

**Interfaces:**
- Consumes: `infra/modules/tfstate-bucket` module inputs `project_id` (string), `bucket_name` (string), and outputs `bucket_name` (string), `bucket_url` (string) — as defined in `infra/modules/tfstate-bucket/variables.tf` and `outputs.tf`.
- Produces: root module outputs `bucket_name`, `bucket_url`, consumed by a future plan that wires `infra/environments/production`'s `backend "gcs"` block.

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

- [ ] **Step 2: Write `provider.tf`**

```hcl
provider "google" {
  project = var.project_id
  region  = "us-central1"
}
```

- [ ] **Step 3: Write `variables.tf`**

```hcl
variable "project_id" {
  description = "GCP project where the tfstate bucket is created."
  type        = string
}

variable "bucket_name" {
  description = "Globally unique name for the tfstate bucket."
  type        = string
}
```

- [ ] **Step 4: Write `main.tf`**

```hcl
module "tfstate_bucket" {
  source = "../modules/tfstate-bucket"

  project_id  = var.project_id
  bucket_name = var.bucket_name
}
```

- [ ] **Step 5: Write `outputs.tf`**

```hcl
output "bucket_name" {
  description = "Name of the tfstate GCS bucket."
  value       = module.tfstate_bucket.bucket_name
}

output "bucket_url" {
  description = "gs:// URL of the tfstate GCS bucket, for use in backend \"gcs\" blocks."
  value       = module.tfstate_bucket.bucket_url
}
```

- [ ] **Step 6: Write `terraform.tfvars` (not committed)**

```hcl
project_id  = "dblocks-500317"
bucket_name = "guia-dblocks-500317-tfstate"
```

- [ ] **Step 7: Add `*.tfvars` to `.gitignore`**

Read the current root `.gitignore`, then add `*.tfvars` under the existing `# Terraform` section (below `.terraformrc` / `terraform.rc`).

- [ ] **Step 8: Format check**

Run: `terraform fmt -check -diff infra/bootstrap`
Expected: no output, exit code `0`. If it prints a diff, run `terraform fmt infra/bootstrap` and re-check.

- [ ] **Step 9: Initialize and validate**

Run: `cd infra/bootstrap && terraform init -backend=false && terraform validate`
Expected: `terraform init` reports `Terraform has been successfully initialized!` (resolving both the `google` provider and the local `../modules/tfstate-bucket` module source); `terraform validate` reports `Success! The configuration is valid.`

If `terraform init` fails to reach `registry.terraform.io` (sandboxed/offline environment), note the failure explicitly and skip to Step 10 without validating — do not treat a network failure as a code defect.

- [ ] **Step 10: Verify `terraform.tfvars` is ignored by git**

Run: `cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks && git status --short infra/bootstrap/`
Expected: `terraform.tfvars` does NOT appear in the output (only the tracked `.tf` files, if not yet staged, show as `??` — `terraform.tfvars` must be absent entirely because it's gitignored).

- [ ] **Step 11: Commit**

```bash
cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks
git add .gitignore infra/bootstrap/versions.tf infra/bootstrap/provider.tf infra/bootstrap/variables.tf infra/bootstrap/main.tf infra/bootstrap/outputs.tf
git status --short  # confirm terraform.tfvars and .terraform/ are NOT staged
git commit -m "Adiciona infra/bootstrap conectando o modulo tfstate-bucket"
```
