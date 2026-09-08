import * as React from 'react';

/** The cart affordance — the word CART with a bracketed count. IKKEN never uses a bag icon. */
export interface CartLabelProps {
  /** Items in the cart. Rendered as CART (n); shown even at 0. */
  count?: number;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function CartLabel(props: CartLabelProps): React.ReactElement;
