# modules/cloud-run

Módulo Terraform reutilizável que define um serviço Cloud Run. Consumido
pelos diretórios em `infra/environments/` (ex: `production`), que passam
variáveis específicas de cada ambiente (nome do serviço, imagem, região,
etc).
