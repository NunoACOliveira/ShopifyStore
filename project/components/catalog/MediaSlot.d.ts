import * as React from 'react';

/**
 * INTENTIONAL ADDITION — an honest placeholder for photography or film that does not exist yet.
 * A hairline-dashed frame carrying the shot brief, so a layout can be judged before the shoot.
 * Replace with a real <img>/<video> the moment the asset lands; never ship a MediaSlot.
 */
export interface MediaSlotProps {
  /** Short shot name, e.g. "SPLASH FILM". Rendered uppercase after the kind prefix. */
  label: string;
  /** One-line brief: subject, framing, light. */
  note?: string;
  /** CSS aspect-ratio. Default '16 / 9'. Ignored when height is set. */
  ratio?: string;
  /** Fixed height instead of a ratio. */
  height?: string;
  kind?: 'photo' | 'film' | 'clip';
  style?: React.CSSProperties;
}
export declare function MediaSlot(props: MediaSlotProps): React.ReactElement;
