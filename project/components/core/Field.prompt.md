Text input for the contact screen and checkout.

```jsx
<Field label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<Field label="Message" multiline rows={4} />
```

Variants: `multiline`, `type`. Keep labels to one or two words — the 0.22em tracking is unforgiving.
