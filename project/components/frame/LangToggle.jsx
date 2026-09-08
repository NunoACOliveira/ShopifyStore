import React from 'react';
import { TextLink } from '../core/TextLink.jsx';

export function LangToggle({ value = 'EN', options = ['EN', 'PT'], onChange, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-2)', ...style }}>
      {options.map((o, i) => (
        <React.Fragment key={o}>
          {i > 0 && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-2xs)', color: 'var(--ink-300)' }}>/</span>}
          <TextLink
            as="button"
            size="var(--fs-2xs)"
            tracking="var(--tr-label)"
            dimmed={o !== value}
            onClick={onChange ? () => onChange(o) : undefined}
          >
            {o}
          </TextLink>
        </React.Fragment>
      ))}
    </div>
  );
}
