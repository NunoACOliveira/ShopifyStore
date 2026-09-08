import React from 'react';

const COLOURWAYS = [
  { id: 'brick', label: 'Brick', value: 'var(--cw-brick)' },
  { id: 'bone', label: 'Bone', value: 'var(--cw-bone)' },
  { id: 'black', label: 'Black', value: 'var(--cw-black)' },
  { id: 'teal', label: 'Teal', value: 'var(--cw-teal)' },
  { id: 'forest', label: 'Forest', value: 'var(--cw-forest)' },
  { id: 'dust-blue', label: 'Dusty Blue', value: 'var(--cw-dust-blue)' },
  { id: 'plum', label: 'Plum', value: 'var(--cw-plum)' },
  { id: 'ochre', label: 'Ochre', value: 'var(--cw-ochre)' },
];

export function SwatchRow({ options = COLOURWAYS, value, onChange, label, align = 'flex-end', style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', alignItems: align, ...style }}>
      {label && (
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
          {label}
        </span>
      )}
      <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
        {options.map((o) => {
          const selected = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              title={o.label}
              aria-label={o.label}
              aria-pressed={selected}
              onClick={onChange ? () => onChange(o.id, o) : undefined}
              style={{
                appearance: 'none',
                padding: 3,
                background: 'none',
                borderRadius: 'var(--radius-none)',
                border: '1px solid ' + (selected ? 'var(--ink-900)' : 'transparent'),
                cursor: 'pointer',
                transition: 'border-color var(--dur-fast) var(--ease-settle)',
              }}
            >
              <span style={{ display: 'block', width: 16, height: 16, background: o.value }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
