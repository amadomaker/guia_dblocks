output "service_name" {
  description = "Name of the created Cloud Run service."
  value       = google_cloud_run_v2_service.this.name
}

output "url" {
  description = "URL where the Cloud Run service is serving traffic."
  value       = google_cloud_run_v2_service.this.uri
}
