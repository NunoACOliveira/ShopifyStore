import * as React from 'react';

/**
 * Running copy at IKKEN's measure. Right-aligned beside a product object (as drawn), centred for
 * About-style prose. Never justified, never wider than --measure-body.
 */
export interface ProductCopyProps {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  /** Default var(--measure-body) — 34ch. Use var(--measure-about) for centred prose. */
  measure?: string;
  style?: React.CSSProperties;
}
export declare function ProductCopy(props: ProductCopyProps): React.ReactElement;
