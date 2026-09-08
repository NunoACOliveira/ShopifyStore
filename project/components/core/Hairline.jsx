import React from 'react';

export function Hairline({ strong = false, vertical = false, length = '100%', style }) {
  const color = strong ? 'var(--ink-900)' : 'var(--border-hairline)';
  return (
    <div
      role="separator"
      style={
        vertical
          ? { width: 1, height: length, background: color, ...style }
          : { height: 1, width: length, background: color, ...style }
      }
    />
  );
}
