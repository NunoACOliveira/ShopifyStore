import React from 'react';
import { assetBase } from './assetBase.js';

export function LogoMark({ size = 110, small = false, alt = 'IKKEN', href, onClick, style, ...rest }) {
  const src = assetBase() + (small ? '/logo-mark-small.png' : '/logo-mark.png');
  const img = (
    <img
      src={src}
      alt={alt}
      width={size}
      style={{ width: size, height: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
  if (!href) return img;
  return (
    <a href={href} onClick={onClick} style={{ display: 'inline-block', transition: 'opacity var(--dur-fast) var(--ease-settle)' }}>
      {img}
    </a>
  );
}
