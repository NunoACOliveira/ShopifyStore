import React from 'react';
import { TextLink } from '../core/TextLink.jsx';

export function EdgeNav({ onBack, onNext, backLabel = 'BACK', nextLabel = 'NEXT', hideBack = false, hideNext = false }) {
  return (
    <>
      {!hideBack && (
        <div style={{ position: 'absolute', left: 'var(--frame-inset-x)', top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}>
          <TextLink as="button" onClick={onBack} tracking="var(--tr-label)">{backLabel}</TextLink>
        </div>
      )}
      {!hideNext && (
        <div style={{ position: 'absolute', right: 'var(--frame-inset-x)', top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}>
          <TextLink as="button" onClick={onNext} tracking="var(--tr-label)">{nextLabel}</TextLink>
        </div>
      )}
    </>
  );
}
