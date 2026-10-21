output "service_name" {
  description = "Name of the production Cloud Run service."
  value       = module.cloud_run.service_name
}

output "url" {
  description = "URL where the production Cloud Run service is serving traffic."
  value       = module.cloud_run.url
}

output "materiais_url" {
  description = "Base URL of the public bucket with the PDFs (VITE_PDF_BASE_URL)."
  value       = module.materiais.public_url
}
