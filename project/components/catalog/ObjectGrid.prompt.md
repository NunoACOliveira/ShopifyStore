The shop page catalogue grid.

```jsx
<ObjectGrid items={products} columns={4} onSelect={(p) => openProduct(p)} />
```

Variants: `columns` (3 for narrower viewports), `tileHeight`. Do not tighten the gutters to fit more
products in — paginate instead.
