import * as React from 'react';

/**
 * INTENTIONAL ADDITION — the mockups show no add-to-cart affordance. Built from the brand's existing
 * vocabulary: tracked uppercase ink over a 1px ink hairline. Never filled, never rounded.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  /** Stretch to the column width (used under a product's copy column). */
  block?: boolean;
  size?: 'sm' | 'md';
}
export declare function Button(props: ButtonProps): React.ReactElement;
