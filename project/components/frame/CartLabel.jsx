import React from 'react';
import { TextLink } from '../core/TextLink.jsx';

export function CartLabel({ count = 0, href = '#cart', onClick }) {
  return (
    <TextLink href={href} onClick={onClick} size="var(--fs-sm)">
      {'CART (' + count + ')'}
    </TextLink>
  );
}
