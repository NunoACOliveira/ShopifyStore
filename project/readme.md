# IKKEN — Design System

IKKEN is an independent store built on the Japanese **wabi-sabi** aesthetic: the beauty of the
imperfect, the weathered and the incomplete. It launches with garments — T-shirts, long sleeves and a
poncho — and is designed to extend into tea, teapots, ashtrays and other objects for the house without
changing a single rule of the visual language.

The first surface is a **customised Shopify storefront**. The store is not a scrolling e-commerce page;
the supplied layouts describe a full-viewport, almost gallery-like composition: one idea per screen, a
fixed frame of small stamped type at the four corners, and the merchandise floating in the middle of a
pale mineral ground.

## Sources given

| Source | What it is | Where it lives now |
| --- | --- | --- |
| `IKKEN WEBSITE/` (mounted local folder, read-only) | The brand's working folder | copied selectively into `assets/` and `refs/` |
| `IKKEN WEBSITE/Store layout/*.jpg` | 4 designed screen mockups: `PAGE 1` (splash), `SHOP PAGE`, `PRODUCT PAGE`, `ABOUT PAGE` | `refs/layout-home.jpg`, `refs/layout-shop.jpg`, `refs/layout-product.jpg`, `refs/layout-about.jpg` |
| `IKKEN WEBSITE/logos/` | Logo mark, small mark, brush wordmark, 3 photographed logo applications | `assets/logo-*.png`, `refs/logo-alt-*.jpg` |
| `IKKEN WEBSITE/Background.png` | The interference / moiré background plate used on every screen | `assets/background.png` (+ `-small`) |
| `IKKEN WEBSITE/Newshound/*.otf` | The brand typeface, 5 cuts | `assets/fonts/` |
| `IKKEN WEBSITE/products/` | 8 tee colourway photographs (front + back) and 3 cut-out stone PNGs | `assets/products/` |
| `IKKEN WEBSITE/Inspirations/` | 21 moodboard images | 12 sampled into `refs/insp-*.jpg` |
| Instagram | <https://www.instagram.com/ikken_____> | **not readable from here** — see Caveats |
| `IKKEN WEBSITE/Photos-1-001 (3)/` | empty folder in the mount | nothing to read |

There is **no code** in the mount: no Shopify theme, no Liquid, no CSS. Every value in this system was
read off the supplied mockups, photographs and font binaries, or sampled pixel-wise from them. Where a
number could not be measured it is marked as an assumption in the notes below.

## Products represented

- **Garments (launch).** A washed/distressed short-sleeve tee in eight colourways — brick, bone, black,
  teal, forest, dusty blue, plum, ochre. Front carries a hand-cut sun/star stamp; back carries the IKKEN
  stone mark. Long sleeves and a poncho are planned in the same treatment.
- **Objects (roadmap).** Tea, teapots, ashtrays, house decor. The shop grid already treats products as
  *objects photographed against nothing* — cut-out, no set, no model — which is why it extends to
  ceramics without redesign.
- **Stones.** Three cut-out stone photographs act as the placeholder product object in the shop and
  product mockups. They are also the brand's core metaphor and are used as real imagery, not decoration.

---

## CONTENT FUNDAMENTALS

**The register is a museum label, not a shop.** Short declarative lines, no persuasion, no urgency, no
exclamation. The mockups never once say "buy", "shop now", "free shipping" or "sale".

**Casing carries the hierarchy.**

- Navigation, cart, wayfinding: **UPPERCASE, widely letterspaced** — `SHOP  ABOUT  CONTACT  T&C`,
  `CART (1)`, `BACK`, `NEXT`, `PRESS TO ENTER`, `PRICE`.
- Section titles inside a page: **lowercase** — the About screen is titled simply `about`.
- Product names: **UPPERCASE**, set over two short lines (`NOME DO PRODUTO / NESTA AREA` in the mockup).
- Running copy: **lowercase throughout**, including the first word of a sentence. Sentences end in a
  full stop. Lines break on meaning, one thought per line, blank line between thoughts.

**Person.** Third person for the label, second person never. The brand describes itself and the object;
it does not address the shopper. "started in new york, based in california." — not "we're based in…" and
not "you'll love…".

**Rhythm.** Copy is written as a stack of one-line statements separated by full blank lines, closing on
a two-line aphorism. From the About mockup:

> every action has a reaction,
>
> cause & effect.

That closing-couplet shape is a brand device: keep it, write new ones, never fill the space with a
paragraph.

**Ampersands and abbreviation.** `&` is used freely in place of "and" (`cause & effect`, `T&C`).
Abbreviations are set without periods (`T&C`, not `T. & C.`).

**Numbers and price.** Price sits under a tracked uppercase `PRICE` label, in muted grey — deliberately
quieter than the product name. Never colour-highlighted, never struck through, never "from €".

**Portuguese and English.** The mockups use Portuguese placeholders (`NOME DO PRODUTO NESTA AREA`),
so the store is being built by a Portuguese-speaking team; shipped copy in the mockups is English and
lowercase. Assume **English as the shipping language** unless told otherwise.

**Emoji: never.** No emoji appear anywhere in the supplied material and none should be introduced.

**Words the brand can use.** stone, weathered, unfinished, one, single, mark, trace, wear, quiet, raw,
mended, salt, ash, clay, tea, hand-cut, limited.

**Words to avoid.** premium, luxury, curated, elevated, must-have, drop-anxiety language, anything with
an exclamation mark.

> ⚠️ The About mockup's body copy is **placeholder text describing another label** ("siberia hills is a
> contemporary fashion label founded in 2017 … started in new york, based in california"). It is kept
> here only as a *shape* reference for length, rhythm and casing. It must not be shipped, and no IKKEN
> UI kit screen in this system reuses those sentences as fact.

---

## VISUAL FOUNDATIONS

### The ground

Every screen is one flat sheet of **pale cool mineral grey** — sampled `#e4e9e9` (`--paper-200`) — with
the supplied `Background.png` interference plate laid over it. That plate is the single most identifying
element of the brand after the logo: a near-white field of very fine vertical scanlines fanning out from
the lower centre, with faint blue and cream iridescence (`--iris-blue #bcd9e8`, `--iris-cream #f0eadd`)
bleeding through the middle. It reads like a scanner artefact or the sheen on a sheet of vellum.

Rules: the plate is **always full-bleed, always behind everything, never tinted, never cropped to a
card**. Screens are otherwise **empty** — 60–75% of every supplied layout is bare ground. Whitespace is
the product.

### Colour

- **Two colours run the interface**: paper (`--paper-200`) and ink (`--ink-900 #1c1e1e` / `--ink-800
  #2a2a2b`, a warm near-black). All type, the logo and the wordmark are ink on paper. There is no
  interface colour — no brand blue, no button fill, no coloured state.
- **Colour enters only through product.** The eight garment colourways are tokenised
  (`--cw-brick #9a4f53`, `--cw-bone #d5d4c2`, `--cw-black #2a2a2b`, `--cw-teal #356b65`,
  `--cw-forest #476851`, `--cw-dust-blue #6596aa`, `--cw-plum #554872`, `--cw-ochre #ceaa43`) and are
  used for swatches and size/colour pickers — never as UI accents, never as backgrounds.
- **Stone neutrals** (`--stone-light` → `--stone-shadow`) come from the stone photographs and are the
  only greys allowed for non-type marks.
- Muted grey (`--ink-400`) is a deliberate demotion device: `PRICE`, secondary metadata.
- No gradients as decoration. The only gradient in the system is the iridescence already inside the
  background photograph, and the `--scanline` repeating overlay.

### Type

Newshound is the entire typographic voice — there is no second typeface. It is a rough, hand-drawn
gothic; edges are slightly eroded, so it *looks stamped* rather than set.

- `--font-ui` (Newshound, **700**, `--tr-nav 0.34em`, uppercase) — nav, `CART (n)`, `BACK`/`NEXT`,
  `PRESS TO ENTER`. Small: 12–16px. The extreme tracking is the brand's fingerprint.
- `--font-display` (Newshound 700, `--tr-title 0.06em`, uppercase) — product titles, 28–40px, ragged
  two-line breaks.
- `--font-body` (Newshound 400, `--lh-body 1.6`) — running copy, 14–16px. Product descriptions are
  **right-aligned** against the product image; About copy is **centre-aligned**. Never justified.
- `--font-subhead` (Newshound Subhead) — the lowercase section title (`about`).
- `--font-condensed` / `--font-condensed-tight` (Headline, Banner) — reserved for long legal/care text
  and lookbook captions.
- Measure is tight: `--measure-body 34ch` beside a product, `--measure-about 64ch` for centred prose.

### Layout

The store is a **fixed gallery frame with scrolling content** — the direction the brand chose for the
redesign. The four anchors never move; the band between them scrolls. Pages are therefore composed as a
short stack of full-width sections (hero, statement, grid, editorial pair), never as a dense
above-the-fold layout. The supplied mockups were drawn at 2560×1440 and are expressed here in relative
terms:

- A frame of four fixed anchors, inset `--frame-inset-x 56px` / `--frame-inset-y 40px`:
  logo mark **top-left**, `CART (n)` **top-right**, nav **bottom-centre**, brush wordmark
  **bottom-right**. These persist on every screen and never scroll.
- Content lives in the middle band. Shop = a 4-column × 3-row grid of cut-out objects with very large
  gaps (`--gutter-product 88px`, `--row-product 120px`). Product = object left / text right, with
  `BACK` and `NEXT` pinned at the vertical centre of the far left and right edges. About = a single
  centred column.
- No sidebars, no sticky headers with backgrounds, no breadcrumbs, no footer bar. The nav *is* the
  footer.
- Product image carousels are marked by **four small squares**, not dots and not arrows.

### Objects, cards, borders, shadows

There are **no cards**. Nothing is boxed, filled, outlined or rounded — `--radius-none: 0` everywhere,
including images. Products are cut-outs sitting directly on the paper.

Depth comes from a single device: a **ground halo** under the object
(`--halo-object: 0 40px 60px -30px rgba(75,77,74,.28)`) — a soft, wide, low-contrast pool, closer to a
photograph's own shadow than a UI drop shadow. Never a hard offset shadow, never an inner shadow, never
a glow.

Borders are used only as **hairlines** (`--border-hair`, 1px `--ink-200`) and only where a real
separation is needed (a cart line item, a form field underline). Prefer whitespace to a rule.

### Motion

Slow, weightless, no bounce — sediment settling.

- `--dur-fast 180ms` for link fades, `--dur-base 420ms` for screen transitions, `--dur-slow 900ms` for
  the splash-to-shop dissolve, `--dur-drift 16s` for ambient movement.
- `--ease-settle cubic-bezier(.22,.61,.36,1)` for everything; `linear` only for ambient drift.
- Screens **cross-fade**; they do not slide. Objects fade up a few pixels at most.
- Shop objects may drift a couple of pixels over `--dur-drift` so the grid never feels locked.
- No spring, no scale-in, no parallax, no scroll-triggered reveals.
- Respect `prefers-reduced-motion`: drop drift and dissolve, keep opacity changes.

### States

- **Hover:** opacity only. Ink type fades to `--hover-fade .45`; product objects lift 2px and gain
  `--halo-object` at full strength. No colour change, no underline, no scale.
- **Press:** opacity `--press-fade .28` and a 1px downward `--press-shift` — the type behaves like a
  rubber stamp pressed into the page. Nothing shrinks.
- **Focus:** 1px solid `--focus-ring` outline offset 4px. Visible, unstyled, honest.
- **Selected:** for colour/size choices, a 1px ink hairline under or around the swatch. No fill.
- **Disabled / sold out:** `--ink-300` type, no strikethrough on the price; the word `SOLD` sits under
  the object.

### Imagery

- **Colour vibe:** cool, desaturated, high-key. Garments are photographed flat, cut out, front and back
  side by side on a near-white ground. Stones are cut out with transparency.
- The moodboard runs warmer and darker than the store chrome: olive canvas with petroglyph-like
  block prints, carved bone and driftwood, weathered plaster, ink-on-paper portraits, raw suede, waxed
  canvas, sun-faded tees, hand-lettered woven labels. Use these for editorial/lookbook imagery.
- Grain is welcome and comes from the subject (weave, erosion, wash) — do not add a grain filter.
- Full-bleed photography is reserved for the splash screen, where it sits under stamped type with a
  barely-there veil (`--veil-image`). No protection gradients, no capsules behind type — if type is not
  legible, the photograph is wrong.
- Transparency and blur are used almost never: `--blur-veil blur(2px)` exists only for a full-screen
  image behind an overlay. No frosted glass, no backdrop blur on chrome.

---

## ICONOGRAPHY

**IKKEN has no icon set, and this system does not invent one.** Nothing in the supplied layouts is an
icon: the cart is the word `CART (1)`, pagination is four small squares, carousel navigation is the
words `BACK` and `NEXT`, and the menu is four spelled-out words. That is the brand's position — *type
instead of glyphs*.

Consequences for anyone designing with this system:

- **Do not add** a hamburger, a magnifier, a bag glyph, chevrons, social icons or a checkmark. Write the
  word. `SEARCH`, `CLOSE`, `MENU`, `NEXT`, `REMOVE`.
- **No icon font, no sprite sheet, no CDN icon library** is linked, and none should be. There was no icon
  asset of any kind in the mount, so there is nothing to substitute and no substitution was made.
- **No emoji. No unicode dingbats** as icons. The only non-alphabetic marks in use are `&`, `(`, `)` and
  the four-square pagination block, which is built from four `<span>`s of ink, not a glyph.
- The three marks that *do* exist are brand assets, used as images, at exact sizes:
  - `assets/logo-mark.png` — the abstract stone/brushstroke mark. Top-left anchor, ~110px wide,
    ink-on-transparent.
  - `assets/logo-mark-small.png` — same mark for small sizes (favicon, label, garment print).
  - `assets/logo-wordmark.png` — the brush-script "IKKEN" signature. Bottom-right anchor, ~150px wide.
    Never re-set the wordmark in type; it is a drawn signature.
- The garment's front stamp (a hand-cut sun/star) lives only on product photography. It is not an
  interface asset and is not extracted as an SVG.
- Where a mark is needed and no asset fits, **set the word IKKEN in Newshound 700** rather than
  approximating the logo.

---

## Intentional additions

The mockups define four screens, so a shoppable Shopify store needs a few parts they never drew. These
are additions, flagged so nobody mistakes them for source truth:

- **`Button`** — the product mockup shows a price but no add-to-cart affordance. Built as tracked
  uppercase ink type over an underline hairline, in the brand's existing vocabulary. Needs the client's
  approval.
- **`SwatchRow`** — colour/size selection for eight colourways. Uses the colourway tokens; unfilled
  hairline selection.
- **`CartPanel` / `CartLine`** — the frame says `CART (1)`, so a cart view must exist. Composed only
  from existing devices: hairlines, tracked labels, right-aligned prices.
- **`Field`** — contact and checkout inputs, drawn as a bottom hairline with a tracked uppercase label.
- **`MediaSlot`** — a labelled hairline-dashed placeholder carrying a shot brief, standing in for
  photography and film that has not been produced yet. Never ship one. See
  `ui_kits/storefront/SHOTLIST.md`.
- **`LangToggle`** — EN / PT switch in the frame's top-right. The store is bilingual, EN default.
- **`StickyBuyBar`** — the one conversion device the brand asked for: a sticky purchase strip at the
  bottom of the scrolling product page.

Everything else in `components/` is traced directly from a supplied mockup.

---

## Index

**Root**

- `styles.css` — the only file consumers link. `@import`s the six token files.
- `readme.md` — this document.
- `SKILL.md` — Agent-Skill wrapper so this folder works as a portable Claude skill.
- `thumbnail.html` — homepage tile for the system.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `surfaces.css`, `motion.css`

**`assets/`** — `logo-mark.png`, `logo-mark-small.png`, `logo-wordmark.png`, `background.png`,
`background-small.png`, `fonts/newshound-{regular,bold,subhead,headline,banner}.otf`,
`products/product-01…11.jpg`

**`refs/`** — the four store layout mockups, 12 moodboard images, contact sheets. Reference only; not
shipped to consumers.

**`components/`**

- `frame/` — `LogoMark`, `Wordmark`, `CartLabel`, `SiteNav`, `LangToggle`, `PageFrame`
- `catalog/` — `ObjectTile`, `ObjectGrid`, `SwatchRow`, `MediaSlot`
- `product/` — `ProductTitle`, `PriceLabel`, `ProductCopy`, `SquarePager`, `EdgeNav`, `StickyBuyBar`
- `core/` — `TextLink`, `Button`, `Field`, `Hairline`
- `overlay/` — `EnterSplash`, `CartPanel`

**`guidelines/`** — foundation specimen cards (Colours, Type, Spacing, Brand, Motion).

**`ui_kits/storefront/`** — the Shopify storefront: splash, home, shop, product, about, contact, T&C
and cart. `index.html` is the interactive click-through; `SHOTLIST.md` is the media you still need to
produce.

---

## Caveats

- **Instagram was not readable** from this environment, so no imagery, captions or real product copy
  were taken from `@ikken_____`. The CONTENT FUNDAMENTALS section is derived from the four mockups only.
  Send a screen-recording or an export and the tone section can be tightened with real sentences.
- **No theme code existed** in the mount, so all spacing, tracking and size values are measured or
  inferred from raster mockups. Treat them as accurate to a pixel or two, not as source-of-truth CSS.
- **The About copy is another brand's placeholder** (see the warning above) and needs replacing.
- Fonts are the client's supplied OTFs; **no Google Fonts substitution was needed**.
