import { preview } from "vite";
import * as pw from "playwright";

const engines = process.argv.slice(2).length ? process.argv.slice(2) : ["chromium", "webkit", "firefox"];
const s = await preview({ preview: { port: 0 } });
const url = s.resolvedUrls.local[0];
let fails = 0;

for (const name of engines) {
  let browser;
  try {
    browser = await pw[name].launch();
  } catch {
    console.log(`SKIP  ${name} (not installed)`);
    continue;
  }
  const p = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  await p.goto(url, { waitUntil: "load" });
  await p.waitForTimeout(600);
  const h1 = await p.textContent("h1");
  const overflow = await p.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  const wa = (await p.$("a[href='https://wa.me/27846167000']")) !== null;
  await p.click("button[aria-label='Open menu']");
  const menu = (await p.$("nav[aria-label='Primary'] a[href='#faq']")) !== null;
  const pass = h1?.includes("real life") && !overflow && wa && menu && errs.length === 0;
  if (!pass) fails++;
  console.log(`${pass ? "PASS" : "FAIL"}  ${name.padEnd(9)} h1:${!!h1} overflow:${overflow} wa:${wa} menu:${menu} errs:${errs.length}`);
  if (errs.length) console.log("   " + errs.join("\n   "));
  await browser.close();
}
await s.httpServer.close();
process.exit(fails ? 1 : 0);
