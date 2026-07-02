# Infra: estrutura de diretórios para provisionamento do Cloud Run via Terraform

## Contexto

O deploy atual (`.github/workflows/deploy-gcp.yml`) roda `gcloud run deploy` de forma
imperativa a partir da CI, sem nenhum estado de infraestrutura versionado. Vamos
introduzir Terraform para provisionar o serviço Cloud Run de forma declarativa, com
state remoto armazenado em um bucket GCS dedicado.

Esta é a primeira etapa de um esforço maior: por ora, o objetivo é **apenas criar a
estrutura de diretórios** em `infra/` na raiz do projeto. Nenhum arquivo `.tf` será
escrito nesta etapa.

## Escopo desta etapa

- Criar branch de trabalho para a infra.
- Criar a árvore de diretórios abaixo, com um `README.md` curto em cada pasta
  explicando seu propósito (já que diretórios vazios não são versionados pelo git).
- Não escrever nenhum código Terraform ainda.

## Estrutura

```
infra/
├── bootstrap/              # Provisiona o bucket GCS do remote state (roda com state local, uma única vez)
├── modules/
│   └── cloud-run/          # Módulo Terraform reutilizável do serviço Cloud Run
└── environments/
    └── production/         # Ambiente ativo agora: usa o bucket remoto como backend e chama modules/cloud-run
```

- `bootstrap/` existe separado dos ambientes porque o bucket de state não pode ser seu
  próprio backend (problema do ovo e da galinha): ele precisa rodar com state local a
  primeira vez.
- `modules/cloud-run/` fica isolado para ser reaproveitado por um futuro
  `environments/staging/` sem duplicar código, quando esse ambiente entrar em escopo.
- `environments/staging/` **não é criado nesta etapa** — só produção está em escopo
  agora. Será criado quando o trabalho em staging começar.

## Fora de escopo

- Escrever qualquer arquivo `.tf` (bootstrap, módulo ou ambiente).
- Criar o bucket GCS de fato (isso depende do código do `bootstrap/`).
- Ambiente `staging/`.
- Alterar o workflow de CI existente.
