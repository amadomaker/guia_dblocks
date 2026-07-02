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
