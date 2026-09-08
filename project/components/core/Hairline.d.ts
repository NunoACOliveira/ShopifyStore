import * as React from 'react';

/** A 1px rule. The only divider in the system, used sparingly — prefer whitespace. */
export interface HairlineProps {
  /** Ink instead of --border-hairline. */
  strong?: boolean;
  vertical?: boolean;
  /** CSS length. Default 100%. */
  length?: string;
  style?: React.CSSProperties;
}
export declare function Hairline(props: HairlineProps): React.ReactElement;
