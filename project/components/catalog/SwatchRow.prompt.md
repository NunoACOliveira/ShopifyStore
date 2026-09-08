Colourway picker on the product page, built from the sampled garment colour tokens.

```jsx
<SwatchRow label="Colour" value={colour} onChange={setColour} />
```

Pass your own `options` for sizes (use `value: 'transparent'` and rely on the label) — but for sizes,
tracked `TextLink`s are usually more in keeping.
