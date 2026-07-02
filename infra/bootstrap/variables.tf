variable "project_id" {
  description = "GCP project where the tfstate bucket is created."
  type        = string
}

variable "bucket_name" {
  description = "Globally unique name for the tfstate bucket."
  type        = string
}
