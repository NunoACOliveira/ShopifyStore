import React from 'react';

export function ProductCopy({ children, align = 'right', measure = 'var(--measure-body)', style }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-sm)',
        lineHeight: 'var(--lh-body)',
        letterSpacing: 'var(--tr-body)',
        color: 'var(--text-secondary)',
        textAlign: align,
        maxWidth: measure,
        marginLeft: align === 'right' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
        textWrap: 'pretty',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
