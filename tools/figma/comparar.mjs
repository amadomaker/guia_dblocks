// Compara um export novo do Figma (PNG) com o WebP que está no repo.
// Uso: node tools/figma/comparar.mjs <novo.png> <atual.webp>
// Imprime a diferença média (0-255) e a % de pixels bem diferentes (> 48 em algum canal).
// Ruído de compressão: média ~1 a 4 e menos de ~1% de pixels; print refeito passa disso.
import sharp from 'sharp';
const [novo, atual] = process.argv.slice(2);
const a = await sharp(novo).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const b = await sharp(atual).resize(a.info.width, a.info.height).removeAlpha().raw().toBuffer();
let soma = 0;
let fortes = 0;
for (let i = 0; i < a.data.length; i += 3) {
  const d = [0, 1, 2].map((k) => Math.abs(a.data[i + k] - b[i + k]));
  soma += d[0] + d[1] + d[2];
  if (Math.max(...d) > 48) fortes++;
}
const pixels = a.data.length / 3;
console.log((soma / a.data.length).toFixed(3), `${((fortes / pixels) * 100).toFixed(2)}% fortes`, `(${a.info.width}x${a.info.height})`);
