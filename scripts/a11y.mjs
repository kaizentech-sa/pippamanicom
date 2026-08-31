import { preview } from "vite";
import { chromium } from "playwright";
import { readFileSync } from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const axe = readFileSync(require.resolve("axe-core"), "utf8");

const s = await preview({ preview: { port: 0 } });
const b = await chromium.launch({ channel: "chrome" });
let total = 0;
for (const w of [390, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(s.resolvedUrls.local[0], { waitUntil: "networkidle" });
  await p.evaluate(axe);
  const r = await p.evaluate(() => window.axe.run(document, { runOnly: ["wcag2a","wcag2aa","wcag21a","wcag21aa"] }));
  console.log(`\n=== ${w}px — ${r.violations.length} violation(s) ===`);
  for (const v of r.violations) {
    total++;
    console.log(`• [${v.impact}] ${v.id}: ${v.help}`);
    v.nodes.slice(0,3).forEach(n => console.log(`   ${n.target.join(" ")}  ${(n.any[0]?.message||"").slice(0,90)}`));
  }
  await p.close();
}
await b.close();
await s.httpServer.close();
process.exit(total ? 1 : 0);
