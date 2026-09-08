# UI kit — IKKEN Shopify storefront

A high-fidelity recreation of the four screens the brand supplied
(`refs/layout-home.jpg`, `layout-shop.jpg`, `layout-product.jpg`, `layout-about.jpg`), plus the two
screens the frame's own navigation implies (`CONTACT`, `T&C`) and the cart drawer implied by
`CART (n)`. No new design language was invented; every screen is the supplied composition rebuilt from
the system's components.

## Run it

Open `index.html`. It is a click-through:

1. **Splash** — full-bleed frame with `PRESS TO ENTER` at dead centre, no chrome. Click anywhere.
2. **Shop** — 4×2 grid of cut-out garments on the mineral plate. Hover a piece to reveal its name and
   price; click to open it. The plum colourway is marked `SOLD`.
3. **Product** — object left, right-aligned title / price / copy / colourway swatches / `ADD TO CART`.
   Four squares under the object switch views; `BACK` and `NEXT` at the screen edges walk the catalogue.
4. **Cart** — `CART (n)` top-right opens the drawer: hairline rows, `REMOVE`, `TOTAL`, `CHECKOUT`.
5. **About / Contact / T&C** — reached from the bottom nav.

## Files

| File | What |
| --- | --- |
| `index.html` | the interactive shell — routing, cart state, catalogue wiring |
| `data.js` | catalogue stand-in (`window.IKKEN_CATALOGUE`) and copy (`window.IKKEN_COPY`) |
| `SplashScreen.jsx` | the pre-entry screen |
| `ShopScreen.jsx` | the catalogue grid |
| `ProductScreen.jsx` | product detail |
| `AboutScreen.jsx` | centred prose |
| `ContactScreen.jsx` | two fields and a SEND |
| `TermsScreen.jsx` | shipping / returns / care / payment |

Every screen is wrapped by `PageFrame`, which supplies the background plate and the four fixed anchors.
Nothing here re-implements a primitive — `ObjectGrid`, `ProductTitle`, `SwatchRow`, `Button`, `Field`,
`CartPanel`, `EdgeNav` and `SquarePager` all come from `components/`.

## Deviations from the mockups, and why

- **Product imagery.** The supplied shop and product mockups use cut-out **stones** as placeholder
  objects. This kit shows the real garments instead, cut out programmatically from the supplied
  photography (`assets/products/tee-0N-{front,back}.png`) so the grid reads as a shoppable catalogue.
  The stone PNGs are still in `assets/products/product-09…11.jpg` and drop straight in.
- **Splash media.** The mockup is a frame of a video (surf over black rock). No video file was supplied,
  so the mockup frame itself is used as a still. Swap in `<EnterSplash video="…" />` when the clip
  arrives.
- **ADD TO CART, swatches, cart, contact, T&C** are additions — see "Intentional additions" in the root
  `readme.md`. They use only devices already present in the mockups.
- **Copy** is written in the brand's register but is **not client-approved**. The About screen carries a
  visible note to that effect; the mockup's own About text describes a different label and was not
  reused.
- **Scale.** The mockups are 2560×1440. This kit is built fluid inside a 1280×720 frame, with the frame
  insets, gutters and tracking as tokens, so it holds at either size.
