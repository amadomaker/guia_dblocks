#!/usr/bin/env python3
"""Gera src/content/capitulos/<pasta>/imagens.ts.
Uso: scripts/gerar-imagens-ts.py <pasta-do-conteudo> <pasta-dos-assets> nomeVar:arquivo:largura:altura ...
"""
import os, sys

destino, assets, *itens = sys.argv[1:]
os.makedirs(destino, exist_ok=True)
linhas = []
defs = []
for item in itens:
    var, arq, w, h = item.split(':')
    linhas.append(f"import {var} from '../../../assets/{assets}/{arq}.webp';")
    defs.append(f'  {var}: {{ src: {var}, largura: {w}, altura: {h} }},')
open(os.path.join(destino, 'imagens.ts'), 'w').write('\n'.join(linhas) + '\n\n// Tamanhos das caixas no Figma; os textos alternativos ficam em cada idioma.\nexport const img = {\n' + '\n'.join(defs) + '\n};\n')
