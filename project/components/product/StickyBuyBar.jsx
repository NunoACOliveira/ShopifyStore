import React from 'react';
import { Button } from '../core/Button.jsx';

export function StickyBuyBar({ name, variant, price, disabled = false, added = false, onAdd, visible = true }) {
  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        zIndex: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--sp-6)',
        padding: 'var(--sp-4) var(--sp-6)',
        background: 'var(--paper-100)',
        borderTop: '1px solid var(--border-hairline)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(8px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity var(--dur-base) var(--ease-settle), transform var(--dur-base) var(--ease-settle)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-4)', minWidth: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontWeight: 'var(--fw-bold)',
            fontSize: 'var(--fs-2xs)',
            letterSpacing: 'var(--tr-label)',
            textTransform: 'var(--case-nav)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </span>
        {variant && (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            {variant}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-6)', flex: '0 0 auto' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-secondary)' }}>{price}</span>
        <Button size="sm" disabled={disabled} onClick={onAdd}>
          {disabled ? 'SOLD OUT' : added ? 'ADDED' : 'ADD TO CART'}
        </Button>
      </div>
    </div>
  );
}
