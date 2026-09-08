import React from 'react';

export function PriceLabel({ value, label = 'PRICE', align = 'right', style }) {
  return (
    <div style={{ textAlign: align, ...style }}>
      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontWeight: 'var(--fw-bold)',
          fontSize: 'var(--fs-xs)',
          letterSpacing: 'var(--tr-label)',
          textTransform: 'var(--case-nav)',
          color: 'var(--text-price)',
        }}
      >
        {label}
      </div>
      {value != null && (
        <div
          style={{
            marginTop: 'var(--sp-2)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-md)',
            letterSpacing: 'var(--tr-body)',
            color: 'var(--text-secondary)',
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
}
