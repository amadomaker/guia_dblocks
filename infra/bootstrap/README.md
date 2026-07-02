# bootstrap

Provisiona o bucket GCS usado como remote state do Terraform (backend) para
os ambientes em `infra/environments/`.

Roda com state **local** (não remoto), pois o bucket de state não pode ser
seu próprio backend. Execução única (ou sempre que o bucket precisar mudar),
não faz parte do fluxo normal de deploy dos ambientes.
