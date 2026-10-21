output "name" {
  description = "Name of the bucket."
  value       = google_storage_bucket.this.name
}

output "public_url" {
  description = "Base URL for public reads (append the object name)."
  value       = "https://storage.googleapis.com/${google_storage_bucket.this.name}"
}

output "objects" {
  description = "Names of the uploaded objects."
  value       = sort(keys(google_storage_bucket_object.files))
}
