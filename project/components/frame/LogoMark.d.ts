import * as React from 'react';

/**
 * The abstract IKKEN stone mark, ink on transparent. Top-left anchor of every screen.
 * Never redrawn or re-set in type — always the supplied PNG.
 */
export interface LogoMarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Rendered width in px. Default 110 (frame anchor size). */
  size?: number;
  /** Use the small-size master (favicon, labels, tiny placements). */
  small?: boolean;
  alt?: string;
  /** Wrap in a link. */
  href?: string;
  /** Click handler on the link wrapper (requires href). */
  onClick?: (e: React.MouseEvent) => void;
}
export declare function LogoMark(props: LogoMarkProps): React.ReactElement;
