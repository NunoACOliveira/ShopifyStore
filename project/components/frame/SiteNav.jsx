import React from 'react';
import { TextLink } from '../core/TextLink.jsx';

const DEFAULT_ITEMS = [
  { label: 'SHOP', href: '#shop' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
  { label: 'T&C', href: '#terms' },
];

export function SiteNav({ items = DEFAULT_ITEMS, active, onNavigate, gap = 'var(--sp-8)' }) {
  return (
    <nav
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap }}
      aria-label="Primary"
    >
      {items.map((it) => (
        <TextLink
          key={it.label}
          href={it.href}
          size="var(--fs-md)"
          dimmed={active != null && active !== it.label}
          onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(it.label, it); } : undefined}
        >
          {it.label}
        </TextLink>
      ))}
    </nav>
  );
}
