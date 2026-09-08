import * as React from 'react';

export interface ObjectGridItem {
  id?: string;
  image: string;
  name: string;
  price?: string;
  soldOut?: boolean;
}

/**
 * The shop screen's catalogue: a wide-gutter grid of cut-out objects, 4 across in the supplied layout.
 * Gaps are deliberately enormous (--gutter-product / --row-product) — the emptiness is the design.
 *
 * @startingPoint section="Storefront" subtitle="Wide-gutter grid of cut-out product objects" viewport="1280x560"
 */
export interface ObjectGridProps {
  items?: ObjectGridItem[];
  /** Default 4, as drawn. */
  columns?: number;
  onSelect?: (item: ObjectGridItem, index: number) => void;
  tileHeight?: number;
  style?: React.CSSProperties;
}
export declare function ObjectGrid(props: ObjectGridProps): React.ReactElement;
