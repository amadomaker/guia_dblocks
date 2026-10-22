Script para o `use_figma` (cole `const CODIGO = [...]` gerado por `dif_textos.py hashes`, e troque FRAME_ID):

```js
const CODIGO = new Set([/* hashes */]);
const norm = s => s.replace(/‑/g,'-').replace(/ /g,' ').replace(/\s+/g,' ').trim();
const djb2 = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = (((h * 33) ^ s.charCodeAt(i)) >>> 0); return h; };
const f = await figma.getNodeByIdAsync("FRAME_ID");
const c = f.findOne(n => n.type === "FRAME" && n.name === "Conteúdo");
const meio = c.children.filter(x => x.name !== "Trilha de navegação" && x.name !== "Fim do capítulo");
const figmaOnly = [], hashes = [];
for (const b of meio) for (const t of b.findAll(n => n.type === "TEXT")) {
  const s = norm(t.characters); if (s.length < 6) continue;
  hashes.push(djb2(s)); if (!CODIGO.has(djb2(s))) figmaOnly.push(s);
}
const prints = c.findAll(n => n.type === "RECTANGLE" && /^Print/.test(n.name)).map(r => r.name + " " + Math.round(r.width) + "x" + Math.round(r.height) + " " + r.id);
return { h: Math.round(f.height), figmaOnly, prints, hashes: hashes.join(",") };
```
