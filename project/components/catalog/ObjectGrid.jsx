import React from 'react';
import { ObjectTile } from './ObjectTile.jsx';

export function ObjectGrid({ items = [], columns = 4, onSelect, tileHeight = 190, style }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(' + columns + ', minmax(0, 1fr))',
        columnGap: 'var(--gutter-product)',
        rowGap: 'var(--row-product)',
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
        ...style,
      }}
    >
      {items.map((it, i) => (
        <ObjectTile
          key={it.id || it.name || i}
          image={it.image}
          name={it.name}
          price={it.price}
          soldOut={it.soldOut}
          height={tileHeight}
          onSelect={onSelect ? () => onSelect(it, i) : undefined}
        />
      ))}
    </div>
  );
}
