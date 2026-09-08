import React from 'react';
import { TextLink } from '../core/TextLink.jsx';
import { Hairline } from '../core/Hairline.jsx';

export function CartLine({ image, name, variant, qty = 1, price, onRemove, style }) {
  return (
    <div style={{ ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-5)', padding: 'var(--sp-4) 0' }}>
        {image && (
          <img
            src={image}
            alt=""
            style={{ width: 56, height: 56, objectFit: 'contain', display: 'block', flex: '0 0 auto' }}
          />
        )}
        <div style={{ flex: '1 1 auto', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-1)' }}>
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 'var(--fw-bold)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: 'var(--tr-label)',
              textTransform: 'var(--case-nav)',
            }}
          >
            {name}
          </span>
          {variant && (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
              {variant}
            </span>
          )}
          {onRemove && (
            <span style={{ marginTop: 'var(--sp-1)' }}>
              <TextLink as="button" muted size="var(--fs-2xs)" tracking="var(--tr-label)" onClick={onRemove}>
                REMOVE
              </TextLink>
            </span>
          )}
        </div>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', flex: '0 0 auto' }}>
          {'×' + qty}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-sm)',
            color: 'var(--text-secondary)',
            flex: '0 0 auto',
            minWidth: 72,
            textAlign: 'right',
          }}
        >
          {price}
        </span>
      </div>
      <Hairline />
    </div>
  );
}
