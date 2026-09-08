import React from 'react';

export function TextLink({
  children,
  href = '#',
  onClick,
  size = 'var(--fs-sm)',
  tracking = 'var(--tr-nav)',
  weight = 'var(--fw-bold)',
  dimmed = false,
  muted = false,
  as = 'a',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const base = muted ? 'var(--text-muted)' : 'var(--link)';
  return (
    <Tag
      href={Tag === 'a' ? href : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        fontFamily: 'var(--font-ui)',
        fontWeight: weight,
        fontSize: size,
        letterSpacing: tracking,
        textTransform: 'var(--case-nav)',
        color: base,
        textDecoration: 'none',
        background: 'none',
        border: 0,
        padding: 0,
        cursor: 'pointer',
        display: 'inline-block',
        opacity: press ? 'var(--press-fade)' : hover || dimmed ? 'var(--hover-fade)' : 1,
        transform: press ? 'translateY(var(--press-shift))' : 'none',
        transition: 'opacity var(--dur-fast) var(--ease-settle), transform var(--dur-fast) var(--ease-settle)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
