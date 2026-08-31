import { preview } from "vite";
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const s = await preview({ preview: { port: 0 } });
const url = s.resolvedUrls.local[0];
const b = await chromium.launch({ channel: "chrome" });
mkdirSync("docs/screenshots/mobile", { recursive: true });

const WIDTHS = [320, 360, 375, 390, 414, 430];
let problems = 0;

for (const w of WIDTHS) {
  const p = await b.newPage({ viewport: { width: w, height: 780 }, deviceScaleFactor: 2 });
  await p.goto(url, { waitUntil: "networkidle" });
  await p.evaluate(async () => {
    for (const i of document.querySelectorAll("img")) { i.loading = "eager"; const x = i.src; i.src = ""; i.src = x; }
    await new Promise((r) => setTimeout(r, 1200));
  });

  // page-level horizontal overflow
  const docOverflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  // any element wider than the viewport
  const wide = await p.evaluate((vw) => {
    const bad = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width > vw + 1 && r.height > 0) {
        bad.push(`${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ").slice(0, 2).join(".")} → ${Math.round(r.width)}px`);
      }
    }
    return [...new Set(bad)].slice(0, 8);
  }, w);

  const status = docOverflow > 1 || wide.length ? "❌" : "✓";
  if (status === "❌") problems++;
  console.log(`${status} ${w}px  docOverflow=${docOverflow}`);
  wide.forEach((x) => console.log(`     wide: ${x}`));

  if (w === 390) {
    await p.screenshot({ path: `docs/screenshots/mobile/full-390.png`, fullPage: true });
    // open the menu and screenshot
    await p.click("button[aria-label='Open menu']");
    await p.waitForTimeout(300);
    const menuCovers = await p.evaluate(() => {
      const menu = document.querySelector(".fixed.inset-0.z-\\[100\\]");
      if (!menu) return { found: false };
      const r = menu.getBoundingClientRect();
      return { found: true, w: Math.round(r.width), h: Math.round(r.height), vh: window.innerHeight, opaque: getComputedStyle(menu).backgroundColor };
    });
    console.log("   menu:", JSON.stringify(menuCovers));
    await p.screenshot({ path: `docs/screenshots/mobile/menu-390.png` });
    await p.click("button[aria-label='Close menu']");
  }
  await p.close();
}

await b.close();
await s.httpServer.close();
process.exit(problems ? 1 : 0);
