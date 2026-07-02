terraform {
  backend "gcs" {
    bucket = "guia-dblocks-500317-tfstate"
    prefix = "environments/production"
  }
}
