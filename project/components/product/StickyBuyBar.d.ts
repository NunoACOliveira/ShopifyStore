import * as React from 'react';

/**
 * INTENTIONAL ADDITION — the one conversion device the brand asked for: a sticky strip that holds the
 * piece, its variant, the price and ADD TO CART at the bottom of a scrolling product page.
 * Paper-coloured with a single hairline on top. No shadow, no blur, no colour.
 */
export interface StickyBuyBarProps {
  name: string;
  /** e.g. "brick / m". */
  variant?: string;
  price?: string;
  disabled?: boolean;
  added?: boolean;
  onAdd?: () => void;
  /** Fade it in once the main add-to-cart has scrolled away. Default true. */
  visible?: boolean;
}
export declare function StickyBuyBar(props: StickyBuyBarProps): React.ReactElement;
