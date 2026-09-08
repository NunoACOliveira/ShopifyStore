The cart drawer. Renders nothing when `open` is false. Needs a positioned ancestor.

```jsx
<CartPanel open={cartOpen} items={lines} total="€ 130,00" onClose={close} onRemove={rm} />
```

This is the only place in the system where a backdrop blur is allowed, and the only filled surface
(`--paper-100`).
