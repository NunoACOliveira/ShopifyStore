import * as React from 'react';

/**
 * The store's front door: one full-bleed photograph or looping clip with PRESS TO ENTER stamped in ink
 * at dead centre. No chrome, no nav, no logo. The whole surface is the click target.
 *
 * @startingPoint section="Storefront" subtitle="Full-bleed splash with PRESS TO ENTER" viewport="1280x720"
 */
export interface EnterSplashProps {
  /** Full-bleed still. Ignored when video is set. */
  image?: string;
  /** Looping muted clip — what the supplied layout uses (surf on black rock). */
  video?: string;
  /** Default "PRESS TO ENTER". */
  label?: string;
  onEnter?: () => void;
  style?: React.CSSProperties;
}
export declare function EnterSplash(props: EnterSplashProps): React.ReactElement;
