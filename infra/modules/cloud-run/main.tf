resource "google_cloud_run_v2_service" "this" {
  name     = var.service_name
  project  = var.project_id
  location = var.region

  deletion_protection = var.deletion_protection
  ingress             = "INGRESS_TRAFFIC_ALL"

  template {
    containers {
      image = var.image

      ports {
        container_port = var.container_port
      }

      resources {
        limits = {
          cpu    = var.cpu
          memory = var.memory
        }
      }
    }
  }

  lifecycle {
    ignore_changes = [template[0].containers[0].image]
  }
}

resource "google_cloud_run_v2_service_iam_member" "public" {
  count = var.allow_unauthenticated ? 1 : 0

  project  = google_cloud_run_v2_service.this.project
  location = google_cloud_run_v2_service.this.location
  name     = google_cloud_run_v2_service.this.name

  role   = "roles/run.invoker"
  member = "allUsers"
}
