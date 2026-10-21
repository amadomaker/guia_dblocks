#!/usr/bin/env node
// Converte os exports crus do Figma (.figma-cache/**.png|jpg) em WebP otimizado em src/assets.
// As imagens do Guia aparecem com no máximo 760px de largura, então 1520px cobre telas 2x.
// Uso: npm run imagens [-- --forcar]
import { mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import sharp from 'sharp';

const ORIGEM = '.figma-cache';
const DESTINO = 'src/assets';
const LARGURA_MAX = 1520;
// Imagens exibidas bem menores que 760px: 2x do tamanho no Figma.
const LARGURA_POR_ARQUIVO = { 'home/jose.png': 982 };
const forcar = process.argv.includes('--forcar');

async function* arquivos(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* arquivos(p);
    else if (/\.(png|jpe?g)$/i.test(e.name)) yield p;
  }
}

const maisNovo = async (a, b) => {
  try {
    return (await stat(a)).mtimeMs > (await stat(b)).mtimeMs;
  } catch {
    return true;
  }
};

let feitos = 0;
let antes = 0;
let depois = 0;
for await (const origem of arquivos(ORIGEM)) {
  const destino = join(DESTINO, relative(ORIGEM, origem)).replace(/\.(png|jpe?g)$/i, '.webp');
  if (!forcar && !(await maisNovo(origem, destino))) continue;
  await mkdir(dirname(destino), { recursive: true });
  const info = await sharp(origem)
    .resize({ width: LARGURA_POR_ARQUIVO[relative(ORIGEM, origem)] ?? LARGURA_MAX, withoutEnlargement: true })
    .webp({ quality: 86, effort: 6, smartSubsample: true })
    .toFile(destino);
  antes += (await stat(origem)).size;
  depois += info.size;
  feitos++;
}

const mb = (b) => `${(b / 1024 / 1024).toFixed(1)}MB`;
console.log(feitos ? `${feitos} imagem(ns): ${mb(antes)} → ${mb(depois)}` : 'Nenhuma imagem nova.');
