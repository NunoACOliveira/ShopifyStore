import * as React from 'react';

/** INTENTIONAL ADDITION — one line item in the cart. Hairline beneath, price right-aligned. */
export interface CartLineProps {
  image?: string;
  name: string;
  /** e.g. "brick / m". */
  variant?: string;
  qty?: number;
  price?: string;
  onRemove?: () => void;
  style?: React.CSSProperties;
}
export declare function CartLine(props: CartLineProps): React.ReactElement;
