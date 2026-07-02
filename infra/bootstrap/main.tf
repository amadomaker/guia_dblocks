module "tfstate_bucket" {
  source = "../modules/tfstate-bucket"

  project_id  = var.project_id
  bucket_name = var.bucket_name
}
