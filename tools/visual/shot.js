// Uso: node shot.js <url> <saida.png> [largura] [seletor] [altura]
const { chromium } = require('playwright');
const [, , url, out, width = '1920', selector, height = '1080'] = process.argv;
(async () => {
  const browser = await chromium.launch({
    executablePath: `${process.env.HOME}/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome`,
  });
  const page = await browser.newPage({ viewport: { width: +width, height: +height }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { document.querySelectorAll('img[loading=lazy]').forEach((i) => (i.loading = 'eager')); await Promise.all([...document.images].map((i) => i.decode().catch(() => {}))); await document.fonts.ready; });
  if (selector) await (await page.$(selector)).screenshot({ path: out });
  else await page.screenshot({ path: out, fullPage: true });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(JSON.stringify({ height: h, errors }));
  await browser.close();
})();
