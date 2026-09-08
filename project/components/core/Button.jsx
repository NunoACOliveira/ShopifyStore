import React from 'react';

export function Button({
  children,
  onClick,
  disabled = false,
  block = false,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = size === 'sm' ? 'var(--sp-2) 0' : 'var(--sp-3) 0';
  const fs = size === 'sm' ? 'var(--fs-xs)' : 'var(--fs-sm)';
  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        appearance: 'none',
        background: 'none',
        border: 0,
        borderBottom: '1px solid ' + (disabled ? 'var(--ink-300)' : 'var(--ink-900)'),
        borderRadius: 'var(--radius-none)',
        padding: pad,
        width: block ? '100%' : 'auto',
        display: block ? 'block' : 'inline-block',
        fontFamily: 'var(--font-ui)',
        fontWeight: 'var(--fw-bold)',
        fontSize: fs,
        letterSpacing: 'var(--tr-label)',
        textTransform: 'var(--case-nav)',
        textAlign: 'center',
        color: disabled ? 'var(--ink-300)' : 'var(--text-primary)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: press ? 'var(--press-fade)' : hover && !disabled ? 'var(--hover-fade)' : 1,
        transform: press && !disabled ? 'translateY(var(--press-shift))' : 'none',
        transition: 'opacity var(--dur-fast) var(--ease-settle), transform var(--dur-fast) var(--ease-settle)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
