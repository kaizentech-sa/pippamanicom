import { preview } from "vite";
import { chromium } from "playwright";

const s = await preview({ preview: { port: 0 } });
const url = s.resolvedUrls.local[0];
const b = await chromium.launch({ channel: "chrome" });
const out = [];
const ok = (n, c) => out.push([c ? "PASS" : "FAIL", n]);

// overflow across widths
for (const w of [320, 375, 768, 1024, 1440, 2560]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(url, { waitUntil: "networkidle" });
  const of = await p.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  ok(`no horizontal overflow @ ${w}px`, !of);
  await p.close();
}

const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const errs = [];
p.on("pageerror", (e) => errs.push(e.message));
p.on("console", (m) => (m.type() === "error" || m.type() === "warning") && errs.push(`[${m.type()}] ${m.text()}`));
await p.goto(url, { waitUntil: "networkidle" });
await p.waitForTimeout(400);
ok("zero console errors/warnings", errs.length === 0);
if (errs.length) console.log(errs.join("\n"));

ok("one <h1>", (await p.$$("h1")).length === 1);
ok("WhatsApp number intact", (await p.$$eval("a[href*='wa.me']", (a) => a.every((x) => x.href.includes("27846167000")))) && (await p.$$("a[href*='wa.me']")).length >= 2);
ok("tel intact", (await p.$("a[href='tel:+27846167000']")) !== null);
ok("mailto intact", (await p.$("a[href='mailto:hello@pippamanicom.co.za']")) !== null);
ok("no dead /privacy-policy link", (await p.$("a[href='/privacy-policy']")) === null);

// nav anchors resolve
const hrefs = await p.$$eval("nav a[href^='#'], main a[href^='#']", (as) => [...new Set(as.map((a) => a.getAttribute("href")))]);
let anchorsOk = true;
for (const h of hrefs) {
  if (h === "#") continue;
  if (!(await p.evaluate((id) => !!document.getElementById(id), h.slice(1)))) { anchorsOk = false; console.log("missing", h); }
}
ok(`in-page anchors resolve (${hrefs.length})`, anchorsOk);

// service modal
await p.locator("button", { hasText: "Details & Rates" }).click();
ok("service modal opens", (await p.$("[role=dialog]")) !== null);
await p.keyboard.press("Escape");
ok("modal closes on Esc", (await p.$("[role=dialog]")) === null);

// FAQ keyboard
const q = p.locator("#faq button[aria-expanded]").first();
await q.focus();
const a1 = await q.getAttribute("aria-expanded");
await p.keyboard.press("Enter");
const a2 = await q.getAttribute("aria-expanded");
ok("FAQ toggles by keyboard", a1 === "true" && a2 === "false");

// fonts applied
const h1font = await p.$eval("h1", (e) => getComputedStyle(e).fontFamily);
const bodyfont = await p.$eval("#faq p", (e) => getComputedStyle(e).fontFamily);
ok(`h1 uses Fraunces (${h1font})`, /fraunces/i.test(h1font));
ok(`body uses Figtree (${bodyfont})`, /figtree/i.test(bodyfont));

await b.close();
await s.httpServer.close();
let fails = 0;
for (const [st, n] of out) { if (st === "FAIL") fails++; console.log(`${st}  ${n}`); }
process.exit(fails ? 1 : 0);
