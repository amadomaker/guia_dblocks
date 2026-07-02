module "cloud_run" {
  source = "../../modules/cloud-run"

  project_id   = var.project_id
  service_name = var.service_name
  image        = var.image
}

module "artifact_registry" {
  source = "../../modules/artifact-registry"

  project_id    = var.project_id
  repository_id = "guia-prod"
}
