import { preview } from "vite";
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const s = await preview({ preview: { port: 0 } });
const url = s.resolvedUrls.local[0];
const b = await chromium.launch({ channel: "chrome" });
const dir = process.argv[2] || "restyle";
mkdirSync(`docs/screenshots/${dir}`, { recursive: true });

for (const w of [390, 768, 1024, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: "networkidle" });
  // force lazy images to load for a complete capture
  await p.evaluate(async () => {
    const imgs = [...document.querySelectorAll("img")];
    imgs.forEach((i) => {
      i.loading = "eager";
      const s = i.src;
      i.src = "";
      i.src = s;
    });
    await Promise.all(
      imgs.map((i) => (i.complete ? null : i.decode().catch(() => {}))),
    );
  });
  await p.waitForLoadState("networkidle");
  await p.waitForTimeout(1200);
  const of = await p.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  console.log(w, of ? "HORIZONTAL OVERFLOW" : "ok");
  await p.screenshot({ path: `docs/screenshots/${dir}/home-${w}.png`, fullPage: true });
  await p.close();
}
await b.close();
await s.httpServer.close();
