import * as React from 'react';

export interface SiteNavItem { label: string; href?: string }

/**
 * The store's only navigation: four tracked uppercase words, centred at the bottom of the screen.
 * It doubles as the footer — IKKEN has no footer bar.
 */
export interface SiteNavProps {
  /** Defaults to SHOP / ABOUT / CONTACT / T&C. */
  items?: SiteNavItem[];
  /** Label of the current screen; every other item dims to --hover-fade. */
  active?: string;
  onNavigate?: (label: string, item: SiteNavItem) => void;
  /** Space between items. Default --sp-8 (64px). */
  gap?: string;
}
export declare function SiteNav(props: SiteNavProps): React.ReactElement;
