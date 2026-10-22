#!/usr/bin/env python3
"""Compara os textos de um capítulo/projeto do código com o frame do Figma, sem despejar tudo na tela.

Passo 1:  dif_textos.py hashes <pasta-do-conteudo>
          imprime `const CODIGO = [...]`, para colar no script do Figma (ver FIGMA_JS abaixo).
Passo 2:  dif_textos.py resto <pasta-do-conteudo> <hashes-do-figma separados por vírgula>
          imprime os textos que só existem no código.
Os textos do Figma que não estão no código são devolvidos pelo próprio script do Figma.
"""
import re, sys, pathlib

def norm(s):
    s = s.replace('‑', '-').replace(' ', ' ')
    s = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', s)
    s = s.replace('**', '').replace('`', '')
    s = re.sub(r'\\(.)', r'\1', s)
    return re.sub(r'\s+', ' ', s).strip()

def djb2(s):
    h = 5381
    for c in s.encode('utf-16-le')[::2] if False else [ord(x) for x in s]:
        h = ((h * 33) ^ c) & 0xFFFFFFFF
    return h

def textos_do_codigo(pasta):
    src = (pathlib.Path(pasta) / 'pt.ts').read_text(encoding='utf-8')
    src = re.sub(r"alt:\s*'(?:[^'\\]|\\.)*'", '', src)
    src = re.sub(r'alt:\s*"(?:[^"\\]|\\.)*"', '', src)
    achados = re.findall(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"", src)
    out = []
    for a, b in achados:
        t = norm(a or b)
        if len(t) >= 6 and (' ' in t or len(t) > 12):
            out.append(t)
    return out

if __name__ == '__main__':
    modo, pasta = sys.argv[1], sys.argv[2]
    textos = textos_do_codigo(pasta)
    if modo == 'hashes':
        print('const CODIGO = ' + str(sorted({djb2(t) for t in textos})) + ';')
    else:
        figma = {int(x) for x in sys.argv[3].split(',') if x}
        for t in textos:
            if djb2(t) not in figma:
                print('SÓ NO CÓDIGO:', t[:150])
