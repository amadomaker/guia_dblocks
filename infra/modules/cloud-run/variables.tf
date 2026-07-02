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
