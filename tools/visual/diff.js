// Uso: node diff.js figma.png impl.png outPrefix y0:y1:nome ...
const fs = require('fs'); const { PNG } = require('pngjs'); const pixelmatch = require('pixelmatch');
const [, , a, b, prefix, ...secs] = process.argv;
const A = PNG.sync.read(fs.readFileSync(a)), B = PNG.sync.read(fs.readFileSync(b));
const W = Math.min(A.width, B.width);
const crop = (img, y0, y1) => { const o = new PNG({ width: W, height: y1 - y0 }); for (let y = y0; y < y1; y++) img.data.copy(o.data, (y - y0) * W * 4, (y * img.width) * 4, (y * img.width + W) * 4); return o; };
for (const s of secs) {
  const [y0, y1, nome] = s.split(':'); const h = +y1 - +y0;
  const ca = crop(A, +y0, +y1), cb = crop(B, +y0, +y1);
  const d = new PNG({ width: W * 3, height: h });
  const dd = new PNG({ width: W, height: h });
  const n = pixelmatch(ca.data, cb.data, dd.data, W, h, { threshold: 0.15, includeAA: false });
  PNG.bitblt(ca, d, 0, 0, W, h, 0, 0); PNG.bitblt(cb, d, 0, 0, W, h, W, 0); PNG.bitblt(dd, d, 0, 0, W, h, W * 2, 0);
  fs.writeFileSync(`${prefix}_${nome}.png`, PNG.sync.write(d));
  console.log(nome, (100 * n / (W * h)).toFixed(2) + '% diff');
}
