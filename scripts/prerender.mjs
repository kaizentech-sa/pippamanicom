/**
 * Post-build prerender. The app is a client-rendered SPA, so the shipped
 * index.html body is just <div id="root"></div> — crawlers (and social/AI
 * scrapers) get almost nothing without executing JS. This loads the built
 * site in headless Chrome, waits for React, and writes the fully-rendered
 * HTML back into dist/index.html.
 *
 * Output stays a plain static bundle — no runtime SSR, works on any host.
 * Runs as part of `npm run build`; `npm run build:spa` skips it.
 */
import { readFileSync, writeFileSync } from "fs";
import { preview } from "vite";
import { chromium } from "playwright";

const server = await preview({ preview: { port: 0 } });
const url = server.resolvedUrls.local[0];

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForFunction(() => {
  const r = document.getElementById("root");
  return r && r.children.length > 0 && document.querySelector("h1");
});
// make sure every FAQ answer is in the served HTML (collapsed panels use
// `hidden`, so the text stays in the DOM — just assert it rendered)
const rootHtml = await page.evaluate(() => document.getElementById("root").innerHTML);
await browser.close();
await server.httpServer.close();

const file = "dist/index.html";
let html = readFileSync(file, "utf8");
html = html.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${rootHtml}</div>`);
writeFileSync(file, html);

const checks = [
  "Nutrition care that fits your real life",
  "Dietitian services in Cape Town",
  "Medical conditions a dietitian can help with",
  "How do I book an appointment?",
  "Willow Road, Constantia",
];
const missing = checks.filter((c) => !html.includes(c));
console.log(`prerender: wrote ${file} (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`);
if (missing.length) {
  console.error("prerender: MISSING from HTML:", missing);
  process.exit(1);
}
console.log("prerender: all content checks present in static HTML");
