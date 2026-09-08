import * as React from 'react';

/**
 * Price, deliberately demoted: a tracked uppercase grey PRICE label with the figure beneath it.
 * Never coloured, never struck through, never larger than the product name.
 */
export interface PriceLabelProps {
  /** Formatted figure, e.g. "€ 65,00". Omit to render the label alone (as the mockup does). */
  value?: string;
  /** Default "PRICE". */
  label?: string;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}
export declare function PriceLabel(props: PriceLabelProps): React.ReactElement;
