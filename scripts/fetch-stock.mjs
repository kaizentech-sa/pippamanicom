// Downloads the curated licensed stock set (Pexels License — free commercial
// use, no attribution required) and emits optimised webp at 1600w + 800w.
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { execSync } from "child_process";
import sharp from "sharp";

const RAW = "scripts/.stock-raw";
const OUT = "src/assets/images/stock";
mkdirSync(RAW, { recursive: true });
mkdirSync(OUT, { recursive: true });

// slug -> pexels photo id
const SET = {
  "hero-produce": 3987348,
  consult: 15319046,
  corporate: 1640771,
  talks: 3872370,
  conditions: 6065181,
  contact: 5425794,
  bowl: 19318453,
  berries: 566564,
};

const credits = ["# Stock imagery\n", "Source: Pexels (Pexels License — free for commercial use, no attribution required).\n"];

for (const [slug, id] of Object.entries(SET)) {
  const raw = `${RAW}/${slug}.jpg`;
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;
  if (!existsSync(raw)) {
    execSync(`curl -sL --max-time 40 -o '${raw}' '${url}'`);
  }
  for (const w of [1280, 640]) {
    const suffix = w === 1280 ? "" : "@0.5x";
    await sharp(raw)
      .resize({ width: w, height: Math.round(w * 1.4), fit: "inside", withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(`${OUT}/${slug}${suffix}.webp`);
  }
  const meta = await sharp(raw).metadata();
  credits.push(`- ${slug}: https://www.pexels.com/photo/${id}/  (${meta.width}×${meta.height} source)`);
  console.log(`${slug}  ${meta.width}x${meta.height}`);
}

writeFileSync(`${OUT}/CREDITS.md`, credits.join("\n") + "\n");
console.log("done");
