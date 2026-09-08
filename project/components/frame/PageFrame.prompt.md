Wraps any IKKEN screen in the store's fixed chrome and background plate.

```jsx
<PageFrame scroll active="SHOP" cartCount={1} lang="EN" onLang={setLang} onNavigate={go} onCart={openCart}>
  <ShopScreen />
</PageFrame>
```

Variants: `scroll` for pages longer than one screen (the four anchors stay fixed, the band between them
scrolls); `background="none"` when full-bleed imagery supplies its own ground; `showChrome={false}` for
the pre-entry splash. Absolutely positioned — give the host a real height.
