#!/usr/bin/env python3
"""Compara a altura de cada capítulo no site (1920px) com a altura do frame no Figma.
Use um Vite com o José ligado (VITE_JOSE_PUBLICADO=true), que é como o Figma foi desenhado:
  VITE_JOSE_PUBLICADO=true npx vite --port 5174
Uso: regressao.py [porta]"""
import sys, pathlib, re
from playwright.sync_api import sync_playwright
FIGMA = {1:4436,2:4833,3:8244,4:7856,5:7190,6:6096,7:5429,8:5214,9:6597,10:5770,11:4440,12:5220,13:6986,14:6732,15:10031,16:9868,17:8228,18:6866,19:5643,20:5705,21:4078,22:5979,23:7345,24:8120}
porta = sys.argv[1] if len(sys.argv) > 1 else "5174"
pastas = sorted(p.name for p in pathlib.Path("src/content/capitulos").iterdir())
with sync_playwright() as pw:
    b = pw.chromium.launch(args=["--no-sandbox"]); pg = b.new_page(viewport={"width": 1920, "height": 1080})
    for nome in pastas:
        n = int(nome[:2]); slug = nome[3:]
        if n not in FIGMA: continue
        pg.goto(f"http://localhost:{porta}/capitulos/{slug}", wait_until="networkidle")
        pg.evaluate("async()=>{document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));await document.fonts.ready;}")
        h = pg.evaluate("document.documentElement.scrollHeight")
        print(f"{n:02d} site {h:5d}  figma {FIGMA[n]:5d}  dif {h - FIGMA[n]:+d}")
    b.close()
