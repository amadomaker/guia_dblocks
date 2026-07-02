output "bucket_name" {
  description = "Name of the created GCS bucket."
  value       = google_storage_bucket.this.name
}

output "bucket_url" {
  description = "gs:// URL of the created GCS bucket, for use in backend \"gcs\" blocks."
  value       = google_storage_bucket.this.url
}
