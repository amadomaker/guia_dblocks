# tfstate-bucket Terraform Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement `infra/modules/tfstate-bucket`, a reusable Terraform module that provisions the GCS bucket used to store the remote `.tfstate`, per `docs/superpowers/specs/2026-07-02-tfstate-bucket-module-design.md`.

**Architecture:** A single-resource Terraform module (`google_storage_bucket`), with no root module/backend wiring yet — that comes in a later plan when `infra/bootstrap` is built. Validated statically via `terraform fmt` and `terraform validate` since no live GCP project is connected in this environment.

**Tech Stack:** Terraform (CLI v1.13.2 installed locally, module requires `>= 1.5.0`), `hashicorp/google` provider.

## Global Constraints

- `required_version = ">= 1.5.0"` (module).
- Provider `google` version constraint: `">= 6.0, < 8.0"`.
- No README or other placeholder/doc files — only the four `.tf` files listed in the spec.
- No lifecycle rules, retention policy, or bucket lock — explicitly out of scope per spec.
- Do not create or modify `infra/bootstrap` — this plan only touches `infra/modules/tfstate-bucket`.

---

### Task 1: Create the tfstate-bucket module

**Files:**
- Create: `infra/modules/tfstate-bucket/versions.tf`
- Create: `infra/modules/tfstate-bucket/variables.tf`
- Create: `infra/modules/tfstate-bucket/main.tf`
- Create: `infra/modules/tfstate-bucket/outputs.tf`

**Interfaces:**
- Consumes: nothing (first module implementation).
- Produces: a module callable as `module "tfstate_bucket" { source = "../../modules/tfstate-bucket" ... }` with inputs `project_id` (string, required), `bucket_name` (string, required), `location` (string, optional, default `"us-central1"`), `force_destroy` (bool, optional, default `false`), `labels` (map(string), optional, default `{}`); and outputs `bucket_name` (string), `bucket_url` (string). Future plans (`infra/bootstrap`) will consume these exact names.

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

- [ ] **Step 2: Write `variables.tf`**

```hcl
variable "project_id" {
  description = "GCP project where the bucket is created."
  type        = string
}

variable "bucket_name" {
  description = "Globally unique name for the GCS bucket."
  type        = string
}

variable "location" {
  description = "GCS location/region for the bucket."
  type        = string
  default     = "us-central1"
}

variable "force_destroy" {
  description = "If true, allows Terraform to destroy the bucket even if it still contains objects."
  type        = bool
  default     = false
}

variable "labels" {
  description = "Labels applied to the bucket."
  type        = map(string)
  default     = {}
}
```

- [ ] **Step 3: Write `main.tf`**

```hcl
resource "google_storage_bucket" "this" {
  name          = var.bucket_name
  project       = var.project_id
  location      = var.location
  storage_class = "STANDARD"
  force_destroy = var.force_destroy

  uniform_bucket_level_access = true
  public_access_prevention    = "enforced"

  versioning {
    enabled = true
  }

  labels = var.labels
}
```

- [ ] **Step 4: Write `outputs.tf`**

```hcl
output "bucket_name" {
  description = "Name of the created GCS bucket."
  value       = google_storage_bucket.this.name
}

output "bucket_url" {
  description = "gs:// URL of the created GCS bucket, for use in backend \"gcs\" blocks."
  value       = google_storage_bucket.this.url
}
```

- [ ] **Step 5: Format check**

Run: `terraform fmt -check -diff infra/modules/tfstate-bucket`
Expected: no output, exit code `0` (files already correctly formatted). If it prints a diff, run `terraform fmt infra/modules/tfstate-bucket` and re-check.

- [ ] **Step 6: Initialize and validate**

Run: `cd infra/modules/tfstate-bucket && terraform init -backend=false && terraform validate`
Expected: `terraform init` reports `Terraform has been successfully initialized!`; `terraform validate` reports `Success! The configuration is valid.`

If `terraform init` fails to reach `registry.terraform.io` (sandboxed/offline environment), note the failure explicitly and skip to Step 7 without validating — do not treat a network failure as a code defect.

- [ ] **Step 7: Commit**

```bash
cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks
git add infra/modules/tfstate-bucket/
git commit -m "Adiciona modulo Terraform tfstate-bucket"
```
