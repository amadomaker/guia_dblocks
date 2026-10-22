#!/usr/bin/env python3
"""Altura de cada seção da página no site, para comparar com as seções do frame do Figma.
Uso: secoes.py slug-ou-rota"""
import sys
from playwright.sync_api import sync_playwright
rota = sys.argv[1] if sys.argv[1].startswith("/") else f"/capitulos/{sys.argv[1]}"
with sync_playwright() as pw:
    b = pw.chromium.launch(args=["--no-sandbox"]); p = b.new_page(viewport={"width": 1920, "height": 1080})
    p.goto(f"http://localhost:5173{rota}", wait_until="networkidle")
    p.evaluate("async()=>{document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));await document.fonts.ready;}")
    print(p.evaluate("()=>[...document.querySelectorAll('section[id]')].map(s=>s.id.slice(0,30)+' '+Math.round(s.getBoundingClientRect().height))"))
    b.close()
