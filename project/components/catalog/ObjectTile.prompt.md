A single shop-grid object. Cut-out image, no card, no frame, label on hover only.

```jsx
<ObjectTile image="../../assets/products/product-09.jpg" name="STONE TEE / BRICK" price="€ 65" onSelect={open} />
```

Variants: `soldOut`, `height`. Requires a cut-out image — never feed it a photo with a visible
background, the halo will look wrong.
