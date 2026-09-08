Sticky purchase strip for a scrolling product page.

```jsx
<StickyBuyBar name="STONE TEE / BRICK WASH" variant="brick / m" price="€ 85,00" onAdd={add} />
```

Must be the last child of the scrolling container (it uses `position: sticky`). Drive `visible` from a
scroll observer so it only appears after the in-page ADD TO CART leaves the viewport.
