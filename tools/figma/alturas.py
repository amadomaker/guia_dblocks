#!/usr/bin/env python3
"""Altura da página no site (1920px) para comparar com a altura do frame no Figma.
Uso: alturas.py slug [slug ...]   (precisa do Vite em http://localhost:5173; use /projetos/<slug> para projetos)"""
import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as pw:
    b = pw.chromium.launch(args=["--no-sandbox"])
    p = b.new_page(viewport={"width": 1920, "height": 1080})
    erros = []
    p.on("pageerror", lambda e: erros.append(str(e)))
    for slug in sys.argv[1:]:
        rota = slug if slug.startswith("/") else f"/capitulos/{slug}"
        p.goto(f"http://localhost:5173{rota}", wait_until="networkidle")
        p.evaluate("async()=>{document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));await document.fonts.ready;}")
        print(slug, p.evaluate("document.documentElement.scrollHeight"))
    if erros: print("erros:", erros[:3])
    b.close()
