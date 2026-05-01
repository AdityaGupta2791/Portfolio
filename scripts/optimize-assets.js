// One-shot asset pipeline.
//
// Run with:  npm run optimize:assets
//
// 1. Compresses every public/*.png to .webp (~80% smaller).
// 2. Rasterizes public/og-image.svg → public/og-image.png at 1200×630
//    (social platforms expect a raster image for og:image).
//
// Re-run whenever you add/replace a project screenshot or update og-image.svg.

import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

async function compressPngsToWebp() {
  const files = await readdir(publicDir);
  const pngs = files.filter((f) => f.toLowerCase().endsWith(".png") && f !== "og-image.png");

  for (const file of pngs) {
    const input = path.join(publicDir, file);
    const output = path.join(publicDir, file.replace(/\.png$/i, ".webp"));
    const before = (await sharp(input).metadata()).size ?? 0;
    await sharp(input).webp({ quality: 80 }).toFile(output);
    const after = (await sharp(output).metadata()).size ?? 0;
    const saved = before ? Math.round((1 - after / before) * 100) : 0;
    console.log(`  ${file}  →  ${path.basename(output)}  (-${saved}%)`);
  }
}

async function renderOgImage() {
  const svg = path.join(publicDir, "og-image.svg");
  const png = path.join(publicDir, "og-image.png");
  if (!existsSync(svg)) {
    console.log("  og-image.svg not found — skipping");
    return;
  }
  await sharp(svg, { density: 300 })
    .resize(1200, 630)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(png);
  console.log(`  og-image.svg  →  og-image.png  (1200×630)`);
}

console.log("Optimizing public assets…");
await compressPngsToWebp();
await renderOgImage();
console.log("Done.");
