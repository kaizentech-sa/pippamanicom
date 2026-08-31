# Rework — pippamanicom.co.za

A structural redesign. Same content, same reading order, same purpose — but a
different skeleton, palette, type treatment, imagery and texture, so it no
longer reads as a restyle of the previous build. See `rework-plan.md` for the
section-by-section audit and intent. Before/after: `docs/screenshots/{before,rework}/`.

## Identity

| | Previous build | Now |
| --- | --- | --- |
| Palette | pink + white + pale blue | **forest green** as the ink, warm cream ground, **sage + sand** alternating sections, **honey/gold** accent — brand **pink kept** (logo) as a highlight only |
| Sections | all white | alternate cream / white / sage / forest-green |
| Display type | — | **Fraunces** now sets *every* heading; eyebrows / pull-quotes are Fraunces *italic* (was a pink uppercase-tracked sans label) |
| Body type | — | Figtree, unchanged |
| Texture | none | faint film grain site-wide; botanical sprig watermark on the forest bands |
| Imagery | 8 stock produce photos (disputed ownership) / then flat SVGs | **8 licensed photographs** (Pexels License, commercial-safe, `srcset`) — see `src/assets/images/stock/CREDITS.md` |

## Structure — every section rebuilt

| Section | Was | Now |
| --- | --- | --- |
| Header | absolute transparent overlay, centred nav, pink phone pill | **sticky solid** bar + hairline, nav right in forest green, phone as an outline chip, full-screen drawer on mobile |
| Hero | full-bleed produce photo + left text + separate 3-icon row | **split** — text left (Fraunces italic kicker, Fraunces h1, intro, two buttons, ruled badge row) + **photo collage right** (portrait + produce inset + honey blob) |
| Pillars | plain white 3-col with green circle icons | **forest-green band** under the hero, split by vertical rules, honey icons, sprig watermark |
| Services | 3 identical cards in a row | **alternating full-width photo rows** — image one side, text + links the other |
| Conditions | text-left / vertical icon list-right | title + supporting photo, then a **3-column bordered tag grid** |
| Areas | centred title + wrapped pill tags | left-aligned title/intro + suburbs in a **3-column column-list** with honey dots |
| About | image-L / text-R 2-col | editorial: large Fraunces lead, **2-column body**, portrait as an offset framed break-out |
| Work | text-L / image-R 2-col + label rows | **vertical timeline** (London → Joburg → corporate → Cape Town 2023) + a **3-column card grid** for quals / associations / hobbies |
| Testimonials | full-width **pink gradient band** + carousel + arrows + dots | light-free **dark forest section**, **all three quotes visible** as cards (featured + two stacked), no carousel |
| FAQ | centred `max-w-3xl` accordion in a tinted box, pink chevron | **2-column** — sticky heading left, borderless rows right, honey `+/−` |
| Contact | centred `max-w-xl`, quick pills, form | **split** — contact list + photo + reassurance left, form on a bordered card right |
| Footer | 3-col + serving line + **"Made with ♥ by Kaizen Technology"** | **forest-green**, brand + socials / Explore nav / Contact / bottom bar. **Kaizen credit and `kaizentech.co.za` link removed.** (No other agency reference — email/contract — exists in the codebase.) |

## Behaviour changes

- Contact form now assembles a `mailto:hello@pippamanicom.co.za` with the field
  values (was a dead confirmation). Real submission path, no dependency.
- Testimonial carousel removed (all three quotes shown) — less JS, and the
  `prefers-reduced-motion` concern with it goes away.

## Unchanged

- Every URL and `#anchor` (`#services #conditions #about #work #areas #faq #contact`).
- The entire `<head>`: title, meta description/keywords, canonical, Open Graph,
  Twitter, both JSON-LD blocks, `robots`, `theme-color`. **The only `index.html`
  change is the Google Fonts `<link>`** (Poppins → Figtree + Fraunces).
- `robots.txt`, `sitemap.xml`.
- FAQ copy, the three testimonial quotes (verbatim, attributed), contact
  details, the condition list, the area list, qualifications & associations,
  the WhatsApp number and payload.
- Pippa's own photos and the logo file.

Copy that *was* reworked: hero headline + supporting line, section headings and
intros, the Services descriptions, and the About / Work Experience paragraphs
(recast as a timeline).

## Image indirection

`src/assets/imagery.ts` — one place mapping every semantic key to a source
(`images["services.private"]` etc.), with `srcset` variants and intrinsic
dimensions. Swapping any image (e.g. dropping in the client's own photography
later) is a one-line change. Regenerate the stock set with
`node scripts/fetch-stock.mjs`.

## Verification (`scripts/verify.mjs`, `scripts/a11y.mjs`, `scripts/shot.mjs`)

| Check | Result |
| --- | --- |
| `tsc -b` type errors | 0 |
| `oxlint` errors | 0 |
| production build | passes |
| runtime console errors / warnings | 0 |
| axe-core (WCAG 2.1 A/AA) @ 390 + 1440 | **0 violations** |
| horizontal overflow, 320 → 2560px | none |
| one `<h1>` | yes |
| nav + in-page anchors resolve | 6/6 |
| service modal open / Esc close | pass |
| FAQ accordion by keyboard | pass |
| WhatsApp / tel / mailto / privacy links intact | pass |
| `index.html` SEO surfaces unchanged | pass (font link only) |
| headings render Fraunces, body renders Figtree | pass |

`playwright` + `axe-core` are dev-only (scripts in `scripts/`); nothing new
ships to the browser bundle.
