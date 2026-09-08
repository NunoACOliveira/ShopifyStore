import React from 'react';
import { TextLink } from '../core/TextLink.jsx';
import { Button } from '../core/Button.jsx';
import { CartLine } from './CartLine.jsx';

export function CartPanel({ open = false, items = [], total, onClose, onCheckout, onRemove, width = 460 }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 20, display: 'flex', justifyContent: 'flex-end' }}>
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'var(--veil-image-strong)', backdropFilter: 'var(--blur-veil)' }}
      />
      <aside
        style={{
          position: 'relative',
          width: width,
          maxWidth: '92%',
          height: '100%',
          background: 'var(--paper-100)',
          padding: 'var(--frame-inset-y) var(--sp-7)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--sp-5)',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 'var(--fw-bold)',
              fontSize: 'var(--fs-sm)',
              letterSpacing: 'var(--tr-nav)',
              textTransform: 'var(--case-nav)',
            }}
          >
            {'CART (' + items.length + ')'}
          </span>
          <TextLink as="button" size="var(--fs-xs)" tracking="var(--tr-label)" onClick={onClose}>CLOSE</TextLink>
        </div>

        <div style={{ flex: '1 1 auto' }}>
          {items.length === 0 ? (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', margin: 0 }}>
              nothing here yet.
            </p>
          ) : (
            items.map((it, i) => (
              <CartLine
                key={it.key || i}
                image={it.image}
                name={it.name}
                variant={it.variant}
                qty={it.qty}
                price={it.price}
                onRemove={onRemove ? () => onRemove(it, i) : undefined}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 'var(--fw-bold)',
                  fontSize: 'var(--fs-2xs)',
                  letterSpacing: 'var(--tr-label)',
                  textTransform: 'var(--case-nav)',
                  color: 'var(--text-muted)',
                }}
              >
                TOTAL
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)' }}>{total}</span>
            </div>
            <Button block onClick={onCheckout}>CHECKOUT</Button>
          </div>
        )}
      </aside>
    </div>
  );
}
