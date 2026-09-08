The only button in the system: underlined tracked type. Use for ADD TO CART, CHECKOUT, SEND.

```jsx
<Button block onClick={addToCart}>ADD TO CART</Button>
<Button disabled>SOLD OUT</Button>
```

Variants: `size="sm"`, `block`, `disabled` (hairline and type drop to --ink-300). There is no primary /
secondary distinction — importance is carried by position and whitespace.
