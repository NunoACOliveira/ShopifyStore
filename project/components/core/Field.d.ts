import * as React from 'react';

/**
 * INTENTIONAL ADDITION — contact and checkout input. A tracked uppercase micro-label over a bottom
 * hairline that darkens to ink on focus. No box, no fill, no radius.
 */
export interface FieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): React.ReactElement;
