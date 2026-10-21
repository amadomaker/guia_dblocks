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

variable "source_dir" {
  description = "Local directory whose files are uploaded to the bucket."
  type        = string
}

variable "file_pattern" {
  description = "Glob (relative to source_dir) selecting the files to upload."
  type        = string
  default     = "*"
}

variable "content_type" {
  description = "Content-Type set on every uploaded object."
  type        = string
  default     = null
}

variable "cache_control" {
  description = "Cache-Control header set on every uploaded object."
  type        = string
  default     = "public, max-age=3600"
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
