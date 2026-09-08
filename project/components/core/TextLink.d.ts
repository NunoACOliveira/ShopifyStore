import * as React from 'react';

/**
 * Every clickable word in the store. Tracked uppercase ink; hover fades to --hover-fade, press fades
 * further and nudges 1px down like a stamp. No underline, no colour change, ever.
 */
export interface TextLinkProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  href?: string;
  /** CSS length or token. Default var(--fs-sm). */
  size?: string;
  /** Default var(--tr-nav) — 0.34em. Use var(--tr-label) for denser placements. */
  tracking?: string;
  weight?: string;
  /** Hold at reduced opacity — used for the non-active nav items. */
  dimmed?: boolean;
  /** Render in --text-muted instead of ink. */
  muted?: boolean;
  /** 'a' (default) or 'button'. */
  as?: 'a' | 'button';
}
export declare function TextLink(props: TextLinkProps): React.ReactElement;
