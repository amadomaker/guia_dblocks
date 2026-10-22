#!/usr/bin/env bash
# Baixa exports do Figma para uma pasta temporária e diz quais são diferentes do WebP que está no repo.
# Uso: tools/figma/conferir.sh <NN-do-capitulo> nome=<asset-id>.png [...]
# Ruído de compressão: média ~1 a 4 e menos de ~1% de pixels fortes; acima disso = print refeito (use baixar-figma.sh para trocar).
set -euo pipefail
cap="$1"; shift
tmp="$(mktemp -d)"
for par in "$@"; do
  nome="${par%%=*}"; asset="${par#*=}"
  curl -fsSL -o "$tmp/$nome.png" "https://www.figma.com/api/mcp/asset/$asset"
  echo "$nome: $(node tools/figma/comparar.mjs "$tmp/$nome.png" "src/assets/capitulos/$cap/$nome.webp")"
done
rm -rf "$tmp"
