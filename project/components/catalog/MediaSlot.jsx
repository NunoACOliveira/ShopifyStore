import React from 'react';

export function MediaSlot({ label, note, ratio = '16 / 9', height, kind = 'photo', style }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: height ? undefined : ratio,
        height: height,
        border: '1px dashed var(--ink-300)',
        borderRadius: 'var(--radius-none)',
        background: 'var(--paper-100)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--sp-2)',
        padding: 'var(--sp-5)',
        textAlign: 'center',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-ui)',
          fontWeight: 'var(--fw-bold)',
          fontSize: 'var(--fs-2xs)',
          letterSpacing: 'var(--tr-label)',
          textTransform: 'var(--case-nav)',
          color: 'var(--ink-400)',
        }}
      >
        {(kind === 'film' ? 'FILM — ' : kind === 'clip' ? 'CLIP — ' : 'PHOTO — ') + label}
      </span>
      {note && (
        <span
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: 'var(--fs-xs)',
            lineHeight: 'var(--lh-body)',
            color: 'var(--ink-300)',
            maxWidth: '46ch',
          }}
        >
          {note}
        </span>
      )}
    </div>
  );
}
