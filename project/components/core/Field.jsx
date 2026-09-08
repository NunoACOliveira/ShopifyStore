import React from 'react';

export function Field({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  multiline = false,
  rows = 3,
  id,
  style,
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || 'f-' + String(label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const shared = {
    id: inputId,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'none',
      border: 0,
      borderBottom: '1px solid ' + (focus ? 'var(--ink-900)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-none)',
      padding: 'var(--sp-2) 0',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--tr-body)',
      color: 'var(--text-primary)',
      outline: 'none',
      resize: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-settle)',
    },
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', ...style }}>
      {label && (
        <label
          htmlFor={inputId}
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
        </label>
      )}
      {multiline ? <textarea rows={rows} {...shared} /> : <input type={type} {...shared} />}
    </div>
  );
}
