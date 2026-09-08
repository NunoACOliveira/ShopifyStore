import * as React from 'react';
import { SiteNavItem } from './SiteNav';

/**
 * The whole store chrome in one component: mineral background plate, scanline overlay, and the four
 * fixed anchors (mark top-left, cart + language top-right, nav bottom-centre, wordmark bottom-right).
 * The frame never moves; with `scroll` the content band between the anchors scrolls inside it.
 */
export interface PageFrameProps {
  children?: React.ReactNode;
  cartCount?: number;
  /** Nav label of the current screen. */
  active?: string;
  onNavigate?: (label: string, item: SiteNavItem) => void;
  onCart?: () => void;
  /** Click on the logo mark — route home. */
  onHome?: () => void;
  navItems?: SiteNavItem[];
  /** Hide the bottom nav (splash screen). Default true. */
  showNav?: boolean;
  showWordmark?: boolean;
  /** Hide all four anchors — used behind the enter splash. Default true. */
  showChrome?: boolean;
  /** 'plate' = mineral ground + interference photograph, 'flat' = paper only, 'none' = transparent. */
  background?: 'plate' | 'flat' | 'none';
  /** Let the content band scroll while the frame stays put. Default false (one-screen gallery pages). */
  scroll?: boolean;
  /** Current language, e.g. 'EN'. Omit to hide the toggle. */
  lang?: string;
  onLang?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function PageFrame(props: PageFrameProps): React.ReactElement;
