#!/usr/bin/env python3
"""Atualiza largura/altura de uma imagem no imagens.ts de um capítulo.
Uso: tamanho.py <pasta-do-conteudo> var:largura:altura [...]"""
import re, sys, pathlib
pasta, *itens = sys.argv[1:]
arq = pathlib.Path(pasta) / 'imagens.ts'
t = arq.read_text(encoding='utf-8')
for item in itens:
    var, w, h = item.split(':')
    t, n = re.subn(rf"(  {var}: \{{ src: {var}, largura: )\d+(, altura: )\d+", rf"\g<1>{w}\g<2>{h}", t)
    if n != 1: sys.exit(f"não achei {var}")
arq.write_text(t, encoding='utf-8')
