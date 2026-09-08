import * as React from 'react';

/**
 * BACK and NEXT, pinned at the vertical centre of the far left and right screen edges — the product
 * page's between-products navigation. Requires a positioned ancestor (PageFrame provides one).
 */
export interface EdgeNavProps {
  onBack?: () => void;
  onNext?: () => void;
  backLabel?: string;
  nextLabel?: string;
  hideBack?: boolean;
  hideNext?: boolean;
}
export declare function EdgeNav(props: EdgeNavProps): React.ReactElement;
