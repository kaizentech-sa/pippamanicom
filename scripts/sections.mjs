import { preview } from "vite";
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const w = Number(process.argv[2] || 390);
const s = await preview({ preview: { port: 0 } });
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage({ viewport: { width: w, height: 800 } });
await p.goto(s.resolvedUrls.local[0], { waitUntil: "networkidle" });
await p.evaluate(async () => {
  for (const i of document.querySelectorAll("img")) { i.loading = "eager"; const x = i.src; i.src = ""; i.src = x; }
});
await p.waitForTimeout(1500);
const dir = `docs/screenshots/sec-${w}`;
mkdirSync(dir, { recursive: true });
const ids = ["top", "services", "conditions", "areas", "about", "work", "testimonials", "faq", "contact"];
for (const id of ids) {
  const el = await p.$(`#${id}`);
  if (!el) { console.log("no", id); continue; }
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(200);
  await el.screenshot({ path: `${dir}/${id}.png` }).catch((e) => console.log(id, "err", e.message));
  console.log("ok", id);
}
const foot = await p.$("footer");
await foot.scrollIntoViewIfNeeded();
await p.waitForTimeout(200);
await foot.screenshot({ path: `${dir}/footer.png` });
await b.close();
await s.httpServer.close();
