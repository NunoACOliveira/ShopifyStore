import * as React from 'react';

/** Product name: uppercase Newshound 700, broken over two short lines, ragged. */
export interface ProductTitleProps {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  /** Default var(--fs-xl) — 28px. Use --fs-2xl on wide viewports. */
  size?: string;
  style?: React.CSSProperties;
}
export declare function ProductTitle(props: ProductTitleProps): React.ReactElement;
