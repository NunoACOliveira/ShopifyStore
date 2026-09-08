import * as React from 'react';

/** The brush-script IKKEN signature. Bottom-right anchor. A drawn asset, never type. */
export interface WordmarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Rendered width in px. Default 150. */
  size?: number;
  alt?: string;
}
export declare function Wordmark(props: WordmarkProps): React.ReactElement;
