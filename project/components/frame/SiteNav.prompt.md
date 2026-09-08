Bottom-centre navigation, present on every screen except the splash.

```jsx
<SiteNav active="SHOP" onNavigate={(label) => go(label)} />
```

Pass `items` to extend it (e.g. add `JOURNAL`), but keep it to five words or fewer and keep them single
words — the 0.34em tracking makes phrases unreadable.
