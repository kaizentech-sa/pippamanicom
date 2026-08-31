# Restyle — pippamanicom.co.za

A deliberately light restyle. Every page layout, section, and interaction is
unchanged. The brand pink is unchanged. What changed: the typefaces, the
neutral palette, the imagery, and some of the descriptive copy.

Branch: `restyle/refresh` (off `main` @ `7dd4df5`).
Before/after screenshots: `docs/screenshots/{before,restyle}/` at 390 / 768 / 1024 / 1440.

## What changed

| Area | Before | After |
| --- | --- | --- |
| Body / UI font | Poppins | **Figtree** (same friendly, geometric register) |
| Headings (h1, h2) | Poppins 600 | **Fraunces** 600 — a soft serif, warmer and more personal |
| Neutrals | cool: `#f9f9f9` cloud, `#efeef4` lavender, `#edf1fa` blue card, `#2b2f38` ink | warm: `#faf6f0` oat, `#ece3d8` sand, `#fbecf1` pink-tinted card, `#38322e` ink |
| Greens | `#72c065` / `#61ce70` | slightly deeper, less neon: `#6bb35d` / `#7cc47a` |
| Brand pink | `#ec297a` / `#d1236b` | **unchanged** |
| Base reading size | 14px (`text-sm`) | 15px |
| Stock produce photos (8 files) | licensed-status unresolved | **replaced** with original flat illustrations (`src/components/Produce.tsx`) — also removes the disputed assets |
| Pippa's own photos (portrait, at-desk) + logo | — | **unchanged** |
| Corner radii | hero `rounded-b-[56/80px]`, blob-cornered desk photo, kiwi `rounded-[40px]` | dialled back: `rounded-b-[32/44px]`, plain `rounded-3xl`, no blob |
| Buttons | pink pill, `hover:scale-105` | pink pill, `hover:bg-pink-dark` (no transform) |
| Copy | — | hero headline, one section heading, and the About / Work Experience / Services descriptive paragraphs reworded. **FAQ, testimonials, contact details, area & condition lists, qualifications, and all legal text are verbatim.** |

## What did NOT change

- Every page URL, and the full `<head>`: title, meta description, keywords,
  canonical, Open Graph, Twitter, geo tags, `MedicalBusiness` + `FAQPage`
  JSON-LD, `robots`, `theme-color`. The **only** `index.html` change is the
  Google Fonts `<link>` (Poppins → Figtree + Fraunces).
- `robots.txt`, `sitemap.xml` — untouched.
- Section order, grid structure, navigation, the testimonial carousel, the
  FAQ accordion, the service modals, the contact form behaviour, the WhatsApp
  integration (`wa.me/27846167000`, no payload).
- Internal links and their anchor text.
- All image `alt` text on the photos that were kept.

## Image indirection

`src/assets/imagery.tsx` is now the single place that maps every image slot
to a source (`photos` = owned photography, `artwork` = the illustrations).
Components reference semantic keys, never file paths — so swapping any image
later (e.g. dropping in licensed photography) is a one-file change.

## Fixes made along the way

- **Footer logo distortion** — now `object-contain` in a fixed-width box; holds
  its aspect ratio at every viewport.
- **Testimonial autoplay** — now respects `prefers-reduced-motion` and the
  interval is 6s (was 5s).
- Removed the 8 unreferenced stock produce files from the repo.

## Verification (`scripts/verify.mjs`, `scripts/shot.mjs`)

| Check | Result |
| --- | --- |
| `tsc -b` type errors | 0 |
| `oxlint` errors | 0 |
| production build | passes (JS 74.7 kB gz, CSS 5.5 kB gz) |
| runtime console errors / warnings | 0 |
| horizontal overflow, 320 → 2560px | none |
| one `<h1>` | yes |
| nav + in-page anchors resolve | 6/6 |
| service modal open / Esc close | pass |
| FAQ accordion by keyboard | pass |
| WhatsApp / tel / mailto / privacy links intact | pass |
| `index.html` SEO surfaces unchanged | pass (font link only) |
| h1 renders Fraunces, body renders Figtree | pass |

## Notes

- `playwright` was added to **devDependencies** only, for the screenshot /
  verification scripts in `scripts/`. Nothing new ships to the browser bundle.
- The contact form still only shows a local confirmation (it does not send
  anywhere) — this is pre-existing and out of scope for a restyle; worth
  wiring to an email endpoint separately.
- `/privacy-policy` is still linked in the footer and listed in `sitemap.xml`
  with no page behind it — pre-existing, left untouched.
