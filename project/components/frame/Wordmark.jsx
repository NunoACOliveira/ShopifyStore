import React from 'react';
import { assetBase } from './assetBase.js';

export function Wordmark({ size = 150, alt = 'IKKEN', style, ...rest }) {
  return (
    <img
      src={assetBase() + '/logo-wordmark.png'}
      alt={alt}
      width={size}
      style={{ width: size, height: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
