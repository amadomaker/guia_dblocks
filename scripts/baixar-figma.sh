#!/usr/bin/env bash
# Baixa exports do Figma para .figma-cache/<pasta>/ e gera os WebP otimizados.
# Uso: scripts/baixar-figma.sh capitulos/02 nome-do-arquivo=<asset-id>.png [...]
# (o asset-id é o final da URL https://www.figma.com/api/mcp/asset/<asset-id>)
set -euo pipefail
pasta=".figma-cache/$1"
shift
mkdir -p "$pasta"
for par in "$@"; do
  nome="${par%%=*}"
  asset="${par#*=}"
  curl -fsSL -o "$pasta/$nome.png" "https://www.figma.com/api/mcp/asset/$asset"
done
node scripts/otimizar-imagens.mjs
