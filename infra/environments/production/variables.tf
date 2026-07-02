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
