The single interactive text primitive — nav items, BACK/NEXT, cart, REMOVE, everything.

```jsx
<TextLink href="#about">ABOUT</TextLink>
<TextLink as="button" muted size="var(--fs-xs)" onClick={remove}>REMOVE</TextLink>
```

Variants: `dimmed` (held at hover opacity, for inactive nav), `muted` (grey ink), `tracking` and `size`
for denser contexts. Never add an underline or a hover colour.
