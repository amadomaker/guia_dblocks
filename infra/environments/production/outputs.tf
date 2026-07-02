output "service_name" {
  description = "Name of the production Cloud Run service."
  value       = module.cloud_run.service_name
}

output "url" {
  description = "URL where the production Cloud Run service is serving traffic."
  value       = module.cloud_run.url
}
