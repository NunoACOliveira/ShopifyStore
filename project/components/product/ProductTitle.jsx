import React from 'react';

export function ProductTitle({ children, align = 'left', size = 'var(--fs-xl)', style }) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: size,
        lineHeight: 'var(--lh-snug)',
        letterSpacing: 'var(--tr-title)',
        textTransform: 'var(--case-nav)',
        color: 'var(--text-primary)',
        textAlign: align,
        textWrap: 'balance',
        ...style,
      }}
    >
      {children}
    </h1>
  );
}
