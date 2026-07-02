# cloud-run Terraform Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement `infra/modules/cloud-run`, a reusable Terraform module that provisions a Cloud Run v2 service, per `docs/superpowers/specs/2026-07-02-cloud-run-module-design.md`.

**Architecture:** A single Cloud Run service (`google_cloud_run_v2_service`) plus a conditional public-access IAM member (`google_cloud_run_v2_service_iam_member`), with no root module wiring yet. The container image field is created from `var.image` but has `lifecycle.ignore_changes` so future CI-driven `gcloud run deploy` updates aren't reverted by `terraform apply`. Validated statically via `terraform fmt`/`validate` (no live GCP project connected).

**Tech Stack:** Terraform (CLI v1.13.2 installed locally), `hashicorp/google` provider `>= 6.0, < 8.0` (matches `infra/modules/tfstate-bucket` and `infra/bootstrap`).

## Global Constraints

- `required_version = ">= 1.5.0"`; provider `google` version `">= 6.0, < 8.0"`.
- No README or other placeholder/doc files — only the four `.tf` files listed in the spec.
- Use `google_cloud_run_v2_service` (GA v2 resource), not the older `google_cloud_run_service` (v1).
- Use the standard `google` provider (not `google-beta`) — public access is granted via `google_cloud_run_v2_service_iam_member`, not `invoker_iam_disabled` (which requires `google-beta`).
- `template.containers[0].image` must be in `lifecycle.ignore_changes` — CI continues to own image updates via `gcloud run deploy`, not Terraform.
- Do not create or modify `infra/environments/production` — this plan only touches `infra/modules/cloud-run`.

---

### Task 1: Create the cloud-run module

**Files:**
- Create: `infra/modules/cloud-run/versions.tf`
- Create: `infra/modules/cloud-run/variables.tf`
- Create: `infra/modules/cloud-run/main.tf`
- Create: `infra/modules/cloud-run/outputs.tf`

**Interfaces:**
- Consumes: nothing (independent module, same pattern as `tfstate-bucket`).
- Produces: a module callable as `module "cloud_run" { source = "../../modules/cloud-run" ... }` with inputs `project_id` (string, required), `service_name` (string, required), `image` (string, required), `region` (string, optional, default `"us-central1"`), `container_port` (number, optional, default `8080`), `cpu` (string, optional, default `"1"`), `memory` (string, optional, default `"256Mi"`), `allow_unauthenticated` (bool, optional, default `true`), `deletion_protection` (bool, optional, default `true`); and outputs `service_name` (string), `url` (string). A future `infra/environments/production` plan will consume these exact names.

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
  description = "GCP project where the Cloud Run service is created."
  type        = string
}

variable "service_name" {
  description = "Name of the Cloud Run service."
  type        = string
}

variable "image" {
  description = "Container image used on initial creation. Ignored on subsequent updates (CI owns image deploys via gcloud run deploy)."
  type        = string
}

variable "region" {
  description = "Region for the Cloud Run service."
  type        = string
  default     = "us-central1"
}

variable "container_port" {
  description = "Port exposed by the container."
  type        = number
  default     = 8080
}

variable "cpu" {
  description = "CPU limit for the container."
  type        = string
  default     = "1"
}

variable "memory" {
  description = "Memory limit for the container."
  type        = string
  default     = "256Mi"
}

variable "allow_unauthenticated" {
  description = "If true, grants roles/run.invoker to allUsers."
  type        = bool
  default     = true
}

variable "deletion_protection" {
  description = "If true, prevents terraform destroy from deleting the service."
  type        = bool
  default     = true
}
```

- [ ] **Step 3: Write `main.tf`**

```hcl
resource "google_cloud_run_v2_service" "this" {
  name     = var.service_name
  project  = var.project_id
  location = var.region

  deletion_protection = var.deletion_protection
  ingress             = "INGRESS_TRAFFIC_ALL"

  template {
    containers {
      image = var.image

      ports {
        container_port = var.container_port
      }

      resources {
        limits = {
          cpu    = var.cpu
          memory = var.memory
        }
      }
    }
  }

  lifecycle {
    ignore_changes = [template[0].containers[0].image]
  }
}

resource "google_cloud_run_v2_service_iam_member" "public" {
  count = var.allow_unauthenticated ? 1 : 0

  project  = google_cloud_run_v2_service.this.project
  location = google_cloud_run_v2_service.this.location
  name     = google_cloud_run_v2_service.this.name

  role   = "roles/run.invoker"
  member = "allUsers"
}
```

- [ ] **Step 4: Write `outputs.tf`**

```hcl
output "service_name" {
  description = "Name of the created Cloud Run service."
  value       = google_cloud_run_v2_service.this.name
}

output "url" {
  description = "URL where the Cloud Run service is serving traffic."
  value       = google_cloud_run_v2_service.this.uri
}
```

- [ ] **Step 5: Format check**

Run: `terraform fmt -check -diff infra/modules/cloud-run`
Expected: no output, exit code `0`. If it prints a diff, run `terraform fmt infra/modules/cloud-run` and re-check.

- [ ] **Step 6: Initialize and validate**

Run: `cd infra/modules/cloud-run && terraform init -backend=false && terraform validate`
Expected: `terraform init` reports `Terraform has been successfully initialized!`; `terraform validate` reports `Success! The configuration is valid.`

If `terraform init` fails to reach `registry.terraform.io` (sandboxed/offline environment), note the failure explicitly and skip to Step 7 without validating — do not treat a network failure as a code defect.

- [ ] **Step 7: Commit**

```bash
cd /home/vinicius/Documentos/amadomaker/applications/guia_dblocks
git add infra/modules/cloud-run/versions.tf infra/modules/cloud-run/variables.tf infra/modules/cloud-run/main.tf infra/modules/cloud-run/outputs.tf infra/modules/cloud-run/.terraform.lock.hcl
git status --short  # confirm .terraform/ is NOT staged
git commit -m "Adiciona modulo Terraform cloud-run"
```
