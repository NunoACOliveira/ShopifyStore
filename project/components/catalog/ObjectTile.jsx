import React from 'react';

export function ObjectTile({ image, name, price, soldOut = false, onSelect, height = 200, labels = 'hover', children, style }) {
  const always = labels === 'always';
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={soldOut ? undefined : onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={name}
      style={{
        appearance: 'none',
        background: 'none',
        border: 0,
        padding: 0,
        borderRadius: 'var(--radius-none)',
        cursor: soldOut ? 'default' : 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--sp-3)',
        ...style,
      }}
    >
      {children ? (
        <div style={{ width: '100%', transform: hover && !soldOut ? 'translateY(-2px)' : 'none', transition: 'transform var(--dur-base) var(--ease-settle)' }}>
          {children}
        </div>
      ) : (
      <img
        src={image}
        alt={name}
        style={{
          height,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          filter: 'drop-shadow(' + (hover ? '0 26px 26px rgba(75,77,74,.30)' : '0 18px 20px rgba(75,77,74,.18)') + ')',
          transform: hover && !soldOut ? 'translateY(-2px)' : 'none',
          opacity: soldOut ? 0.55 : 1,
          transition: 'transform var(--dur-base) var(--ease-settle), filter var(--dur-base) var(--ease-settle)',
        }}
      />
      )}
      <span
        style={{
          fontFamily: 'var(--font-ui)',
          fontWeight: 'var(--fw-bold)',
          fontSize: 'var(--fs-2xs)',
          letterSpacing: 'var(--tr-label)',
          textTransform: 'var(--case-nav)',
          color: soldOut ? 'var(--ink-300)' : 'var(--text-primary)',
          opacity: always || hover || soldOut ? 1 : 0,
          transition: 'opacity var(--dur-base) var(--ease-settle)',
          whiteSpace: 'nowrap',
        }}
      >
        {soldOut ? 'SOLD' : name}
      </span>
      {price != null && (
        <span
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'var(--fs-2xs)',
            letterSpacing: 'var(--tr-label)',
            color: 'var(--text-price)',
            opacity: always || hover ? 1 : 0,
            marginTop: 'calc(var(--sp-2) * -1)',
            transition: 'opacity var(--dur-base) var(--ease-settle)',
          }}
        >
          {price}
        </span>
      )}
    </button>
  );
}
