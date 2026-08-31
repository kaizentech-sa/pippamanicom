# SEO — pippamanicom.co.za

Goal: rank at the top of Google (organic + local pack + map) for
"dietitian Cape Town", "dietitian Constantia" and the Southern Suburbs
suburb names, plus the condition keywords (weight loss, diabetes, IBS,
cholesterol, menopause, sports nutrition …), and feed a strong Google
Business Profile.

The existing on-page keyword campaign (title, meta description, keyword
meta, geo tags, canonical, Open Graph) was **kept intact** — this pass
adds to it. Nutrition is a "your money or your life" topic, so Google
applies extra E-E-A-T scrutiny; Pippa's HPCSA registration + ADSA
membership + UCT degree are the strongest trust signals and are now
surfaced everywhere (page copy, headings, and structured data).

---

## 1. What was wrong (audit)

| Issue | Severity | Status |
| --- | --- | --- |
| **Client-rendered SPA** — served HTML was `<div id="root"></div>`; every heading, the service copy, the condition list, the suburb list, the FAQ answers and the testimonials existed only after JavaScript ran. Google *can* render JS but does it on a slow second pass, and other crawlers / AI answer engines / social scrapers get nothing. For a site that needs to win competitive local queries this is the biggest single problem. | **Critical** | ✅ Fixed — build-time prerender |
| Structured data was minimal: `MedicalBusiness` + a `FAQPage` that was out of sync with the visible FAQ (6 vs 7 questions). No `Person`, no reviews, no priced offers, no `knowsAbout`. | High | ✅ Expanded |
| `medicalSpecialty` was `"Dietitian Nutrition"` (not a real value) | Low | ✅ → `"Dietetics"` |
| Headings were keyword-light in a few places ("About Pippa", "Book a consultation", "Medical conditions & lifestyle needs") | Medium | ✅ Tuned |
| Several image `alt` texts were generic ("A dietitian filling in a weekly meal plan") | Low | ✅ Tuned |
| `og:image:alt` / `twitter:image:alt` missing | Low | ✅ Added |
| `sitemap.xml` `lastmod` stale (2026-08-12) | Low | ✅ Refreshed |
| `/privacy-policy` is in the sitemap and footer but no page exists | Medium | ⚠️ Client decision — see §5 |
| Client-side form doesn't submit anywhere server-side | Medium (conversion, not SEO) | ✅ now opens a `mailto:` — a real endpoint would be better |

---

## 2. Technical SEO — what changed in the code

### Prerendering (the big one)
`scripts/prerender.mjs` runs after `vite build` (part of `npm run build`;
`npm run build:spa` skips it). It loads the built site in headless Chrome,
waits for React, and writes the fully-rendered DOM back into
`dist/index.html`. The output is still a **plain static bundle** — no
runtime server, deploys anywhere.

Result — the served HTML now contains, with **no JavaScript required**:

- the single `<h1>` and all 10 `<h2>` headings
- every service description, the full 10-item condition list, all 15 suburbs
- all 7 FAQ questions **and their full answers** (collapsed answers use the
  `hidden` attribute, so the text stays in the HTML source)
- the three client testimonials
- the NAP block (Willow Road, Constantia · 084 616 7000 · hello@pippamanicom.co.za)

The build fails if any of these content checks are missing from the HTML.

### Structured data — one `@graph` in `index.html`

| Node | Purpose |
| --- | --- |
| `WebSite` | site-level entity, `inLanguage: en-ZA`, publisher → the business |
| `MedicalBusiness` (`#business`) | the practice. Now also carries: `knowsAbout` (14 conditions), `hasOfferCatalog` with the **four consultation prices** (R750 / R880 / R400 / R520), `aggregateRating` (5.0, 3 reviews) + three first-party `Review` objects from the real named testimonials, `image` array, `medicalSpecialty: Dietetics`, `founder`/`employee` → Pippa, full `areaServed` (17 places), `geo`, `hasMap`, `sameAs` (FB/IG/LinkedIn) |
| `Person` (`#pippa`) | Pippa Manicom — `jobTitle`, `worksFor`, `alumniOf` (UCT), `memberOf` (ADSA), `hasCredential` (HPCSA licence DT0019429 + UCT BSc(Med)(Hons)), `knowsAbout` |
| `FAQPage` (`#faq`) | synced to the 7 visible questions; cost answer matched to the page |

**Validate on the live URL** with Google's Rich Results Test and the
Schema Markup Validator after deploy. Expected eligible rich results:
FAQ, and (if Google chooses to show it) review stars / merchant info for
the local business.

> Note on the review markup: these are genuine first-party client
> testimonials shown on the page, marked up with consent assumed. If
> Google ever flags the `aggregateRating` (self-serving-review policy),
> remove the `aggregateRating` + `review` block — real Google Business
> Profile reviews are the better long-term signal anyway (see §4).

### On-page

- **Hero intro** reworded to lead with "registered dietitian in Constantia".
- **Headings tuned:** "About Pippa" → "About Pippa Manicom, registered
  dietitian"; "Book a consultation" → "Book a dietitian consultation";
  "Medical conditions & lifestyle needs" → "Medical conditions a dietitian
  can help with".
- **Alt text** now carries "Cape Town dietitian" / "Constantia dietitian" /
  "medical nutrition therapy" where the image genuinely depicts it.
- Heading order is clean: one `<h1>`, section `<h2>`s, `<h3>`s inside.
  Services are `<article>`s; the footer address is an `<address>`.
- Internal linking: the sticky nav + the in-page anchors + a full nav
  block in the footer all cross-link the sections.

### Unchanged (deliberately)

`<title>`, `meta description`, `meta keywords`, `canonical`, all Open
Graph / Twitter card tags, the geo/ICBM tags, `robots`, `lang="en-ZA"`.
`robots.txt`. The two sitemap URLs (only `lastmod` refreshed).

---

## 3. On-page opportunities NOT done (need a content decision)

These would help but add content the brief didn't ask for — flagging for
Pippa / the client to approve:

1. **Dedicated location pages** — `/dietitian-constantia`, `/dietitian-tokai`,
   `/dietitian-claremont` etc. A single homepage can rank for one or two
   "dietitian + suburb" queries; separate thin-but-genuine pages (200–400
   words each, unique, with the suburb in the `<title>`, `<h1>`, URL and
   body) are how you own the whole cluster. Highest-ROI content work.
2. **Condition pages** — `/dietitian-for-diabetes`, `/weight-loss-dietitian-cape-town`,
   `/ibs-dietitian` … one page per major condition, each answering "what a
   dietitian does for X", linked from the Conditions section. Captures the
   long-tail and the "near me" condition searches.
3. **A blog** — one post a month answering a real client question in plain
   English ("How much does a dietitian cost in South Africa?", "Do medical
   aids cover a dietitian?", "Dietitian vs nutritionist — what's the
   difference?"). Compounds over time and is the main lever for non-local
   organic traffic. Each post = a `BlogPosting` / `MedicalWebPage` with an
   author `Person` ref to Pippa (E-E-A-T).
4. **Embed a Google Map** of the Constantia location on the page (an
   `<iframe>` from Google Maps) — a genuine local-relevance signal, and it
   should match the GBP pin exactly.
5. **Add opening hours** to the page and to `openingHoursSpecification` in
   the schema (currently unknown — don't invent).
6. **`priceRange` / medical-aid info** — if Pippa is registered with a BHF
   practice number (she is: 084 00 00 197 971), a short "medical aid &
   payment" line + FAQ entry is a common high-intent query.

---

## 4. Off-site — the things that actually move local rankings

On-page is table stakes. For a local service business the local pack /
map ranking is driven mostly by these, roughly in order of impact:

### Google Business Profile (do this first)
- **Primary category: "Dietitian".** Add secondary categories that fit:
  "Nutritionist", "Wellness centre" if applicable.
- Complete every field: name (exact, no keyword stuffing — "Pippa Manicom
  Registered Dietitian"), address (must match the site NAP **character for
  character**: "Willow Road, Constantia, Cape Town"), service area (list
  the suburbs), phone (084 616 7000 — same everywhere), website
  (https://pippamanicom.co.za/), hours, appointment URL (link to `#contact`).
- **Services**: add each service with a description + price (Initial R750,
  Second R880, Follow-up R400, Vitality assessment R520, Corporate wellness,
  Nutrition talks). These now match the site's schema.
- **Photos**: professional headshot, the consulting room, the Constantia
  exterior, a few produce / meal-plan shots. Add new ones monthly.
- **Products / posts**: post every 1–2 weeks (an offer, a tip, a seasonal
  note). Posts are a live ranking signal.
- **Q&A**: seed 5–10 questions (mirror the site FAQ) and answer them from
  the business account.
- **Keep NAP identical** across GBP, the website footer, and the JSON-LD.
  Any mismatch dilutes the local signal.

### Reviews
- The single biggest ongoing local lever. Ask **every** happy client for a
  Google review, with a direct link (GBP gives you a short review URL).
- Aim for steady flow (2–4/month) rather than a burst.
- Encourage clients to mention what they came for ("helped me with
  pre-diabetes", "weight loss", "Constantia") — keyword-rich review text
  feeds the local algorithm.
- **Respond to every review**, positive and negative, from the business
  account.

### Citations & directories (NAP consistency)
List the practice — same name / address / phone — on:
- **ADSA** (Association for Dietetics in South Africa) practitioner directory
- **HPCSA** iRegister (public listing)
- Discovery / Vitality provider finder (she does Vitality assessments)
- Medical-aid provider directories (BHF practice number 084 00 00 197 971)
- Health directories: HelloPeter, Snupit, WhereIS, Yalwa, Cylex ZA,
  Brabys, Health Pages ZA
- Local: Constantia / Southern Suburbs community sites, local Facebook groups

### Backlinks (local + topical)
- GPs, gyms, physios, running clubs, schools and companies she works with —
  ask for a link from their "partners" / "resources" page.
- The schools / universities she gives nutrition talks at.
- Guest article or quote in a local publication (People's Post, Constantia
  Bulletin) or a SA health site.
- ADSA / professional body member spotlight.

### Consistency & tracking
- One canonical domain (https://pippamanicom.co.za/ — enforce www vs non-www
  and http→https redirects at the host; the canonical tag says non-www).
- Submit the sitemap in Google Search Console; monitor Coverage, Core Web
  Vitals and the Performance report for the target queries.
- Add the site to **Bing Webmaster Tools** too.

---

## 5. `/privacy-policy`

Still referenced in `sitemap.xml` and the footer, with no page behind it.
A privacy policy is genuinely worth having (POPIA, and it's a small trust
signal). **Options:** (a) write a short privacy page at that exact URL
— recommended; (b) remove the sitemap entry and footer link. Either way
it's a change to an SEO surface, so it's left for sign-off.

---

## 6. Verification

- `npm run build` fails if the prerendered HTML is missing key content.
- JSON-LD parses and every rich-result-eligible type has its required
  fields (checked in the build logs / `scripts/`).
- After deploy: run Google Rich Results Test + Schema Validator on the live
  URL, request indexing in Search Console, and confirm the GBP NAP matches.

## Sources

- [SEO for private-practice dietitians (jesscreatives)](https://jesscreatives.com/blog/seo-for-private-practice/)
- [Local SEO for dietitians — how to rank on Google (getindya)](https://getindya.com/en/local-seo-for-dietitians-how-to-rank-on-google-in-your-city/)
- [Squarespace SEO for nutritionists & dietitians, 2026 (squareko)](https://squareko.squarespace.com/website-and-seo/squarespace-seo-for-nutritionists-and-dietitians-rank-in-2026)
- [Healthcare schema markup — the Physician rich result (schemaapp)](https://www.schemaapp.com/schema-markup/healthcare-schema-markup-evolution-of-the-physician-rich-result/)
- [Structured data for medical practices — JSON-LD guide (halcy.ai)](https://www.halcy.ai/learn/healthcare-structured-data-guide)
- [Local Business schema for healthcare practices (direction.com)](https://direction.com/resources/local-business-schema/)
- [7 common SPA SEO challenges and solutions (prerender.io)](https://prerender.io/blog/spa-javascript-seo-challenges-and-solutions/)
- [Making SPAs crawlable in 2026 (weweb.io)](https://www.weweb.io/blog/seo-single-page-application-ultimate-guide)
- [Why Google can't index your React site — SPA SEO 2026 (luminousdigitalvisions)](https://luminousdigitalvisions.com/blog/why-google-cant-index-your-react-site-spa-seo-guide-2026)
