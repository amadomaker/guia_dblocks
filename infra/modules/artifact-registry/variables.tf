variable "project_id" {
  description = "GCP project where the repository is created."
  type        = string
}

variable "repository_id" {
  description = "Last part of the repository name (e.g. \"aplication\")."
  type        = string
}

variable "location" {
  description = "Location of the repository."
  type        = string
  default     = "us-central1"
}

variable "description" {
  description = "Description of the repository."
  type        = string
  default     = ""
}
