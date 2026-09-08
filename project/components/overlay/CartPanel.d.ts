import * as React from 'react';

export interface CartPanelItem {
  key?: string;
  image?: string;
  name: string;
  variant?: string;
  qty?: number;
  price?: string;
}

/**
 * INTENTIONAL ADDITION — the cart the frame's CART (n) label implies. A paper-coloured panel over a
 * darkened, slightly blurred screen; hairline rows, tracked TOTAL, one underlined CHECKOUT.
 */
export interface CartPanelProps {
  open?: boolean;
  items?: CartPanelItem[];
  /** Formatted total, e.g. "€ 130,00". */
  total?: string;
  onClose?: () => void;
  onCheckout?: () => void;
  onRemove?: (item: CartPanelItem, index: number) => void;
  /** Panel width in px. Default 460. */
  width?: number;
}
export declare function CartPanel(props: CartPanelProps): React.ReactElement | null;
