import React from 'react';

export function SquarePager({ count = 4, index = 0, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--sp-3)', ...style }} role="tablist">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={'View ' + (i + 1)}
          onClick={onChange ? () => onChange(i) : undefined}
          style={{
            appearance: 'none',
            border: 0,
            padding: 0,
            width: 7,
            height: 7,
            borderRadius: 'var(--radius-none)',
            background: i === index ? 'var(--ink-900)' : 'var(--ink-300)',
            cursor: 'pointer',
            transition: 'background var(--dur-fast) var(--ease-settle)',
          }}
        />
      ))}
    </div>
  );
}
