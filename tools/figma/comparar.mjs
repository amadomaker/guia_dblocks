// Compara um export novo do Figma (PNG) com o WebP que está no repo.
// Uso: node tools/figma/comparar.mjs <novo.png> <atual.webp>   -> imprime a diferença média (0 = idênticas)
import sharp from 'sharp';
const [novo, atual] = process.argv.slice(2);
const a = await sharp(novo).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const b = await sharp(atual).resize(a.info.width, a.info.height).removeAlpha().raw().toBuffer();
let soma = 0;
for (let i = 0; i < a.data.length; i++) soma += Math.abs(a.data[i] - b[i]);
console.log((soma / a.data.length).toFixed(3), `(${a.info.width}x${a.info.height})`);
