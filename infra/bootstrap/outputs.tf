output "bucket_name" {
  description = "Name of the tfstate GCS bucket."
  value       = module.tfstate_bucket.bucket_name
}

output "bucket_url" {
  description = "gs:// URL of the tfstate GCS bucket, for use in backend \"gcs\" blocks."
  value       = module.tfstate_bucket.bucket_url
}
