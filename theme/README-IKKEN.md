# IKKEN — Shopify theme

This is the [Shopify Horizon](https://github.com/Shopify/horizon) theme (v4.1.5) with the IKKEN
design system layered on top, built from the `IKKEN Design System` handoff bundle at the root of
this repo (`../project/`, `../chats/chat1.md`). Nothing in Horizon's own Liquid/JS was forked —
every brand change is theme settings (`config/settings_data.json`), section/block content
(`templates/*.json`, `sections/header-group.json`, `sections/footer-group.json`), and one
additional stylesheet (`assets/ikken-theme.css`) that re-points Horizon's existing CSS custom
properties and stable classes at the brand's tokens. That means theme updates from Shopify can
still be merged in later without re-doing this work.

## What's here

- `assets/ikken-theme.css` — the brand layer: Newshound `@font-face` declarations, design tokens
  ported from `project/tokens/*.css`, and overrides of Horizon's own variables/classes (radius,
  shadow, buttons, cards, swatches, forms, cart drawer, motion).
- `assets/` — Newshound font files, logo mark/wordmark, the background plate, and the supplied
  product photography, copied from `project/assets/`.
- `config/settings_data.json` — brand colour palette (paper/ink), zero corner radius everywhere,
  no drop shadows, system-font placeholders swapped in for the unused Google fonts Horizon ships
  with by default.
- `sections/header-group.json` — logo top-left, primary nav as the header's second row, cart +
  language switcher top-right, no announcement bar, sticky, transparent.
- `sections/footer-group.json` — trimmed to two fixed corner marks: the wordmark (bottom-right)
  and a minimal privacy/terms line (bottom-left). No footer bar.
- `templates/index.json` — home: hero media slot, the philosophy statement, an editorial image
  pair.
- `templates/page.about.json` — About: centred prose + the philosophy couplet + an editorial pair.
  Assign this template to your About page.
- `templates/page.terms.json` — Shipping / Returns / Care / Payment. Assign this template to your
  T&C page.
- `templates/product.json`, `templates/collection.json` — restyled gallery (carousel + square-ish
  dot pagination, sticky details column already native to Horizon), right-aligned product copy,
  colour swatches on, large-gutter grid.
- `templates/page.contact.json` — Horizon's default contact page, restyled only (Email + Message
  read as the brand's hairline fields once `ikken-theme.css` is loaded).

## Decisions made with you before building

These were confirmed up front (see session transcript) rather than assumed:

1. **New `theme/` folder**, Horizon cloned in, design bundle kept alongside as reference — not a
   separate repo.
2. **The splash "PRESS TO ENTER" gate is not a real interstitial.** A blocking full-screen gate in
   front of the homepage is bad for SEO, paid-traffic landing, and conversion, so that screen's
   full-bleed media becomes the homepage's hero section instead. The wordmark/logo still only
   appear in the persistent frame, never as a "click to enter" wall.
3. **Language uses Shopify's own localization**, not the prototype's client-side EN/PT toggle.
   Horizon already ships a complete `pt-PT` translation (`locales/pt-PT.json` /
   `pt-PT.schema.json`) for every built-in string. Page/product copy you write in the theme editor
   (hero text, About prose, product descriptions) becomes translatable through Shopify's own
   **Translate & Adapt** flow once Portuguese is added as a shop language in
   **Settings → Languages** — no theme file changes needed there.
4. **No sample products were created.** The theme renders whatever real products/collections you
   add; it doesn't fabricate the five launch SKUs from `project/ui_kits/storefront/data.js`.

## Deviations from the mockups (and why)

Flagging these explicitly, the same way the design bundle's own `README.md` flags its deviations:

- **Primary nav lives in the header's second row, not a fixed bottom-center bar.** The original
  design calls for four fixed corner anchors (logo, cart, nav, wordmark) with only the content
  between them scrolling. Horizon's header has robust, JS-managed sticky/mobile-drawer/accessibility
  behaviour that a `position: fixed` rewrite would risk breaking; its footer has none of that, so
  only the footer half of the frame (wordmark + legal line) is truly pinned to the viewport via
  CSS. The header stays natively sticky at the top instead of being forced to the bottom. Net
  result: 3 of 4 anchors match exactly (logo top-left, cart top-right, wordmark bottom-right); nav
  is top-anchored rather than bottom-anchored, always visible while scrolling either way.
- **No hero/editorial photography or film is shipped.** The mockups' own reference images
  (`project/refs/*`) are explicitly "reference only, not shipped" per the design system's own
  rules, and I can't generate photography. Every media slot in `index.json`, `page.about.json`,
  and `product.json` is left as an empty `image_picker`/hero media setting for you to fill in via
  the theme editor. **`project/ui_kits/storefront/SHOTLIST.md` is still the shot list** — nothing
  there has changed.
- **Product gallery pagination is Horizon's native dot carousel**, not the mockup's four small
  squares — theme-check-safe, no custom JS. Cosmetically close, not pixel-identical.
- **T&C content (Shipping/Returns/Care/Payment) renders as a stacked list**, not the mockup's
  150px-label / text two-column grid — Horizon's generic block layout doesn't support an inline
  label:value grid without a bespoke section, and a stacked list keeps the same austere,
  boxless read.
- **About page copy is still the design bundle's placeholder prose** (`ikken makes one thing at a
  time...`), explicitly not client-approved — see `project/readme.md`'s own warning. Replace it in
  the theme editor before launch; nothing marks it as a placeholder on the live page (unlike the
  prototype, a shipped storefront shouldn't show a "waiting on your words" caption to customers).

## Before you launch — required setup (can't be done from theme code)

- **Create the `main-menu` navigation** in Online Store → Navigation with four links: Shop (→ a
  collection), About (→ your About page), Contact (→ your Contact page), T&C (→ your T&C page).
- **Create an About page** and a **T&C page** in Online Store → Pages, then assign
  `page.about.json` / `page.terms.json` as each page's template (Online Store → Pages → [page] →
  Theme template).
- **Upload hero/editorial photography** per `project/ui_kits/storefront/SHOTLIST.md`, via the
  theme editor's image pickers on the Home, About and Product templates.
- **Add products and a collection.** `templates/collection.json` and `templates/product.json` are
  ready; nothing will show in the shop grid until real products exist.
- **Add Portuguese as a shop language** (Settings → Languages) if you want the EN/PT switch from
  the brief; Horizon's own strings are already translated, and Shopify's Translate & Adapt will
  pick up your page/product copy once you write it.
- **Confirm the Newshound font license** covers webfont embedding (it's bundled here as OTF files
  under `assets/`, supplied by the brand in the original handoff — not verified for web-embedding
  rights in this session).
- **Sign off on the About/philosophy copy** (see Deviations above) before launch.
- The eight tee colourway photos and eleven stone/product photos from the design bundle are copied
  into `assets/` for convenience when you create products, but nothing in the theme code
  references them yet — no products exist to attach them to.

## Validation

`theme-check` (Shopify's official Liquid/JSON linter) was run against the full theme. Every error
it reports is pre-existing in unmodified Horizon files (its static analyzer doesn't yet understand
the newer `closest.*` theme-blocks context, and Horizon ships without legacy `customers/*.liquid`
templates by design). None of the files touched for IKKEN — `ikken-theme.css`, `theme.liquid`,
`settings_data.json`, `header-group.json`, `footer-group.json`, or any file under `templates/` —
produced a single new error, warning, or suggestion.
