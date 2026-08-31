# Rework plan — make it read as a different site (same content & flow)

## Re-audit: why the restyle still looked derived

Font + colour + illustrations changed, but **every section's skeleton was
byte-for-byte the original**:

| Section | Structure that gave it away |
| --- | --- |
| Header | absolute transparent overlay · logo L · centred nav · pink phone pill R |
| Hero | pink uppercase eyebrow → big headline → pink pill → 3 check-badges, then a separate 3-icon "Health/Wellness/Food" row |
| Services | 3 identical cards in a row, media-top → title → paragraph → 2 links |
| Conditions | text L (title+intro+image) / vertical icon list R |
| Areas | centred title+intro → wrapped pill tags → note |
| About / Work | image-L/text-R, then text-L/image-R, then 280px+1fr label rows |
| Testimonials | full-width **pink gradient band**, centred carousel + arrows + dots |
| FAQ | centred `max-w-3xl` accordion inside a tinted rounded box, pink chevron |
| Contact | centred `max-w-xl`, title+intro → 3 quick pills → form |
| Footer | 3-col (logo / info / contact) → serving line → © + "Made with ♥ by Kaizen" |

Plus: still had the Kaizen credit + `kaizentech.co.za` link.

## What changes now

**Palette** — pink stays (logo). The neutral system moves from cool/oat to a
**botanical** one: deep forest green becomes the "ink", warm paper cream is the
ground, sage + sand are the alternating section tones, and a **honey/ochre
accent** (new — in neither previous version) carries rules, numbers and small
highlights. Sections now alternate cream / white / sage / forest instead of
all-white.

**Type** — keep Figtree (body) + Fraunces (display), but Fraunces now sets
*every* heading and the eyebrow/quote text is Fraunces *italic* (was a pink
uppercase-tracked sans label — a strong tell). Small labels: Figtree, wider
tracking.

**Texture** — a faint film grain over the whole page; a botanical sprig pattern
watermark behind the forest-green bands.

**Imagery** — real licensed photography (Pexels License, commercial-safe), with
`srcset`. Illustrations removed.

**Per-section structure**

| Section | New skeleton |
| --- | --- |
| Header | **sticky solid** bar + hairline · logo L · nav R in forest green · phone becomes a slim outline chip · full-width drawer on mobile |
| Hero | asymmetric split — text L (Fraunces italic kicker, Fraunces h1, intro, **two** buttons, badges on a ruled row) · **photo collage R** (Pippa portrait + produce inset on a sage panel, honey blob behind) |
| Health/Wellness/Food | pulled into a **forest-green band** under the hero, 3 items split by vertical rules, honey icons, sprig watermark |
| Services | **alternating full-width rows** — big photo one side, text + links the other, Fraunces service name; modals unchanged |
| Conditions | title + supporting photo, then the 10 items as a **3-column bordered tag grid** (not a vertical icon list) |
| Areas | left-aligned title/intro/note + the suburbs as a **3-column `column-count` list** with honey dots (not centred pills) |
| About | editorial: large Fraunces lead, body in 2 text columns, portrait as an **offset framed break-out** |
| Work | **vertical timeline** (London → Joburg → corporate → Cape Town 2023); quals/assoc/hobbies → **3-column card grid** |
| Testimonials | light cream section, **3-up quote cards all visible** (no carousel / no pink band), Fraunces-italic quotes, honey quote mark |
| FAQ | **2-column** — sticky heading L, borderless accordion rows R with honey +/− |
| Contact | **split** — details + photo + reassurance L, form on a bordered cream card R |
| Footer | **forest-green**, 4 blocks (brand+socials / explore nav / contact / bottom bar with serving + ©). **Kaizen credit and link removed.** |

**Unchanged:** every URL and `#anchor`, all `<head>` SEO (title/meta/canonical/
OG/Twitter/JSON-LD/robots/sitemap), FAQ copy, the three testimonial quotes,
contact details, the condition list, the area list, qualifications &
associations, the WhatsApp number/payload, Pippa's own photos, the logo.
