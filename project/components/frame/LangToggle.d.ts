import * as React from 'react';

/**
 * INTENTIONAL ADDITION — EN / PT switch for the bilingual store. Two tracked words separated by a
 * slash; the inactive one is dimmed. No flags, no dropdown, no globe icon.
 */
export interface LangToggleProps {
  value?: string;
  /** Default ['EN', 'PT']. */
  options?: string[];
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function LangToggle(props: LangToggleProps): React.ReactElement;
