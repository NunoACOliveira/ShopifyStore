const { ObjectTile, MediaSlot } = window.IKKENDesignSystem_c61fa2;
const SHOP_A = '../../assets/products/';

function ShopScreen({ items, t, onSelect }) {
  return (
    <div style={{ padding: '0 var(--frame-inset-x) var(--sp-9)' }}>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-sm)',
          letterSpacing: 'var(--tr-body)',
          color: 'var(--text-muted)',
          padding: 'var(--sp-4) 0 var(--sp-8)',
        }}
      >
        {t.shopIntro}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          columnGap: 'var(--sp-7)',
          rowGap: 'var(--sp-9)',
        }}
      >
        {items.map((p, i) => (
          <ObjectTile
            key={p.id}
            labels="always"
            height={230}
            image={p.front ? SHOP_A + p.front : undefined}
            name={p.name + ' / ' + p.sub}
            price={p.price}
            soldOut={p.soldOut}
            onSelect={() => onSelect(p, i)}
            style={{ width: '100%' }}
          >
            {!p.front ? <MediaSlot label={p.shot} note={p.shotNote} height="230px" /> : null}
          </ObjectTile>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ShopScreen });
