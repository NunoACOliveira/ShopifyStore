import React from 'react';

export function EnterSplash({ image, video, label = 'PRESS TO ENTER', onEnter, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onEnter}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        appearance: 'none',
        border: 0,
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        cursor: 'pointer',
        overflow: 'hidden',
        background: 'var(--ink-800)',
        borderRadius: 'var(--radius-none)',
        ...style,
      }}
    >
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <img
          src={image}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <span style={{ position: 'absolute', inset: 0, background: 'var(--veil-image)' }} />
      <span
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-ui)',
          fontWeight: 'var(--fw-bold)',
          fontSize: 'var(--fs-md)',
          letterSpacing: 'var(--tr-nav)',
          textTransform: 'var(--case-nav)',
          color: 'var(--ink-900)',
          opacity: hover ? 'var(--hover-fade)' : 1,
          transition: 'opacity var(--dur-base) var(--ease-settle)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </button>
  );
}
