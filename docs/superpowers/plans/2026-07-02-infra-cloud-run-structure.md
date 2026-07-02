# Infra Directory Structure (Terraform / Cloud Run) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the `infra/` directory skeleton (bootstrap, modules, environments/production) that will later hold Terraform code to provision a GCP Cloud Run service, per `docs/superpowers/specs/2026-07-02-infra-cloud-run-structure-design.md`.

**Architecture:** Pure directory scaffolding. No Terraform code is written in this plan — only directories with a short `README.md` in each explaining its purpose, since git does not track empty directories.

**Tech Stack:** None (filesystem/git only). Terraform tooling comes in a later plan.

## Global Constraints

- Only `infra/environments/production/` is created now — `staging/` is explicitly out of scope until that environment is worked on (per spec).
- No `.tf` files are created in this plan.
- Work happens on branch `infra-cloud-run-provisionamento` (already created), not on `main`.

---

### Task 1: Create infra directory skeleton with README markers

**Files:**
- Create: `infra/bootstrap/README.md`
- Create: `infra/modules/cloud-run/README.md`
- Create: `infra/environments/production/README.md`

**Interfaces:**
- Consumes: nothing (first task in the infra effort).
- Produces: the three directories above, which future plans (bootstrap Terraform, cloud-run module, production environment) will populate with `.tf` files.

- [ ] **Step 1: Create the directories and README files**

Create `infra/bootstrap/README.md`:

```markdown
# bootstrap

Provisiona o bucket GCS usado como remote state do Terraform (backend) para
os ambientes em `infra/environments/`.

Roda com state **local** (não remoto), pois o bucket de state não pode ser
seu próprio backend. Execução única (ou sempre que o bucket precisar mudar),
não faz parte do fluxo normal de deploy dos ambientes.
```

Create `infra/modules/cloud-run/README.md`:

```markdown
# modules/cloud-run

Módulo Terraform reutilizável que define um serviço Cloud Run. Consumido
pelos diretórios em `infra/environments/` (ex: `production`), que passam
variáveis específicas de cada ambiente (nome do serviço, imagem, região,
etc).
```

Create `infra/environments/production/README.md`:

```markdown
# environments/production

Ambiente de produção do Cloud Run. Usa o bucket GCS criado em
`infra/bootstrap` como backend remoto do Terraform e instancia
`infra/modules/cloud-run` com as variáveis de produção.
```

- [ ] **Step 2: Verify the structure**

Run: `find infra -type f | sort`

Expected output:
```
infra/bootstrap/README.md
infra/environments/production/README.md
infra/modules/cloud-run/README.md
```

- [ ] **Step 3: Commit**

```bash
git add infra/
git commit -m "Cria esqueleto de diretorios para infra (Terraform/Cloud Run)"
```
