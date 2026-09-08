import * as React from 'react';

/**
 * One product in the shop grid: a cut-out object floating on the paper with a soft ground halo.
 * The name and price are hidden until hover — the grid is a field of objects, not a list of listings.
 */
export interface ObjectTileProps {
  /** Cut-out image with transparency (stone PNG, garment cut-out). */
  image: string;
  name: string;
  /** Formatted price string, e.g. "€ 65". Omit to show nothing. */
  price?: string;
  /** Dims the object and replaces the name with SOLD. */
  soldOut?: boolean;
  onSelect?: () => void;
  /** Object height in px. Default 200. */
  height?: number;
  /** 'hover' (gallery behaviour, default) or 'always' — name and price always visible, for the shop page. */
  labels?: 'hover' | 'always';
  /** Render something other than an image inside the tile (e.g. a MediaSlot for an unshot product). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ObjectTile(props: ObjectTileProps): React.ReactElement;
