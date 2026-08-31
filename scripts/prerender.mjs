/**
 * Post-build prerender. The app is a client-rendered SPA, so the shipped
 * index.html body is just <div id="root"></div>, and crawlers (plus social
 * and AI scrapers) get almost nothing without running JS. This loads the
 * built site in headless Chromium, waits for React, and writes the
 * fully-rendered HTML back into dist/index.html.
 *
 * Output stays a plain static bundle. No runtime SSR, works on any host.
 * Runs as part of `npm run build`; `npm run build:spa` skips it.
 *
 * If the browser cannot launch (e.g. a CI runner without Chromium), this
 * logs a warning and exits 0 so the deploy still ships the SPA HTML.
 * If the browser launches but the rendered HTML is missing expected
 * content, it exits 1 so a broken build is caught.
 */
import { readFileSync, writeFileSync } from "fs";
import { preview } from "vite";
import { chromium } from "playwright";

const server = await preview({ preview: { port: 0 } });
const url = server.resolvedUrls.local[0];

let browser;
try {
  browser = await chromium.launch();
} catch (err) {
  console.warn(
    `prerender: skipped, could not launch a browser (${err.message}). ` +
      "Shipping the client-rendered index.html.",
  );
  await server.httpServer.close();
  process.exit(0);
}

const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForFunction(() => {
  const r = document.getElementById("root");
  return r && r.children.length > 0 && document.querySelector("h1");
});
const rootHtml = await page.evaluate(() => document.getElementById("root").innerHTML);
await browser.close();
await server.httpServer.close();

const file = "dist/index.html";
let html = readFileSync(file, "utf8");
html = html.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${rootHtml}</div>`);
writeFileSync(file, html);

// Collapsed FAQ panels keep their text in the DOM via `hidden`, so every
// answer should be present. Fail loudly if the render came out wrong.
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
  console.error("prerender: expected content missing from HTML:", missing);
  process.exit(1);
}
console.log("prerender: all content checks present in static HTML");
