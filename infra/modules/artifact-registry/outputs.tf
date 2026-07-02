output "repository_id" {
  description = "Last part of the repository name."
  value       = google_artifact_registry_repository.this.repository_id
}

output "name" {
  description = "Full resource name of the repository."
  value       = google_artifact_registry_repository.this.name
}
