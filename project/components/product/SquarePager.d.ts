import * as React from 'react';

/** Image-carousel indicator: small ink SQUARES, never dots and never arrows. Four in the mockup. */
export interface SquarePagerProps {
  count?: number;
  index?: number;
  onChange?: (index: number) => void;
  style?: React.CSSProperties;
}
export declare function SquarePager(props: SquarePagerProps): React.ReactElement;
