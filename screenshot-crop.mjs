import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('./node_modules/puppeteer/lib/puppeteer/puppeteer.js');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const selector = process.argv[3] || '#calculator';
const label = process.argv[4] || 'crop';

const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(dir, `screenshot-${n}-${label}.png`))) n++;
const outFile = path.join(dir, `screenshot-${n}-${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));

const el = await page.$(selector);
if (el) {
  const box = await el.boundingBox();
  await page.screenshot({ path: outFile, clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 1400) } });
} else {
  await page.screenshot({ path: outFile, fullPage: true });
}
await browser.close();
console.log('Screenshot saved:', outFile);
