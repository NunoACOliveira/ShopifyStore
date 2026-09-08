import * as React from 'react';

export interface SwatchOption { id: string; label: string; value: string }

/**
 * INTENTIONAL ADDITION — colourway (or size) selection for the eight garment colours. Selection is a
 * 1px ink hairline around the square; swatches are never filled, ringed or ticked.
 */
export interface SwatchRowProps {
  /** Defaults to the eight tokenised garment colourways. Pass size labels for a size row. */
  options?: SwatchOption[];
  value?: string;
  onChange?: (id: string, option: SwatchOption) => void;
  /** Tracked uppercase micro-label above the row, e.g. "Colour". */
  label?: string;
  /** Cross-axis alignment. Default flex-end (right column of the product page). */
  align?: 'flex-start' | 'center' | 'flex-end';
  style?: React.CSSProperties;
}
export declare function SwatchRow(props: SwatchRowProps): React.ReactElement;
