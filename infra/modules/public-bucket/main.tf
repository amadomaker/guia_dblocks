resource "google_storage_bucket" "this" {
  name          = var.bucket_name
  project       = var.project_id
  location      = var.location
  storage_class = "STANDARD"
  force_destroy = var.force_destroy

  uniform_bucket_level_access = true
  # Os arquivos são de leitura pública (links de download no site).
  public_access_prevention = "inherited"

  labels = var.labels
}

resource "google_storage_bucket_iam_member" "public_read" {
  bucket = google_storage_bucket.this.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# Um objeto por arquivo da pasta local; trocar o conteúdo do arquivo reenvia o objeto.
resource "google_storage_bucket_object" "files" {
  for_each = fileset(var.source_dir, var.file_pattern)

  bucket         = google_storage_bucket.this.name
  name           = each.value
  source         = "${var.source_dir}/${each.value}"
  source_md5hash = filemd5("${var.source_dir}/${each.value}")
  content_type   = var.content_type
  cache_control  = var.cache_control
}
