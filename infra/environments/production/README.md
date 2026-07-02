# environments/production

Ambiente de produção do Cloud Run. Usa o bucket GCS criado em
`infra/bootstrap` como backend remoto do Terraform e instancia
`infra/modules/cloud-run` com as variáveis de produção.
