const { ProductTitle, PriceLabel, ProductCopy, SquarePager, SwatchRow, Button, StickyBuyBar, MediaSlot, Hairline } = window.IKKENDesignSystem_c61fa2;
const PROD_A = '../../assets/products/';

function ProductScreen({ product, t, colour, onColour, view, onView, onBack, onNext, onAdd, added }) {
  const images = product.front ? [product.front, product.back, product.front, product.back] : [];
  const [barVisible, setBarVisible] = React.useState(false);
  const buyRef = React.useRef(null);

  React.useEffect(() => {
    const el = buyRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((es) => setBarVisible(!es[0].isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [product.id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ padding: '0 var(--frame-inset-x) var(--sp-9)', flex: '1 1 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--sp-4) 0 var(--sp-6)' }}>
          <button type="button" onClick={onBack} style={{ all: 'unset', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tr-label)' }}>BACK</button>
          <button type="button" onClick={onNext} style={{ all: 'unset', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tr-label)' }}>NEXT</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--sp-9)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-5)' }}>
            {images.length ? (
              <img
                src={PROD_A + images[view]}
                alt={product.name + ' ' + product.sub}
                style={{ maxHeight: 420, maxWidth: '100%', width: 'auto', display: 'block', filter: 'drop-shadow(0 30px 34px rgba(75,77,74,.22))' }}
              />
            ) : (
              <MediaSlot label={product.shot} note={product.shotNote} ratio="4 / 5" style={{ maxWidth: 380 }} />
            )}
            {images.length ? <SquarePager count={4} index={view} onChange={onView} /> : null}
          </div>

          <div ref={buyRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--sp-5)' }}>
            <ProductTitle align="right">{product.name}<br />{product.sub}</ProductTitle>
            <PriceLabel value={product.price} />
            <ProductCopy>
              {t.product.map((line, i) => (
                <p key={i} style={{ margin: i === 0 ? 0 : 'var(--sp-4) 0 0' }}>{line}</p>
              ))}
            </ProductCopy>
            {product.colour && <SwatchRow label="Colour" value={colour} onChange={onColour} />}
            <div style={{ width: 200 }}>
              <Button block disabled={product.soldOut} onClick={onAdd}>
                {product.soldOut ? 'SOLD OUT' : added ? 'ADDED' : 'ADD TO CART'}
              </Button>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 620, margin: 'var(--sp-10) auto 0' }}>
          <Hairline />
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 'var(--sp-5)', paddingTop: 'var(--sp-5)' }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tr-label)', color: 'var(--text-muted)' }}>CARE</div>
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>{t.care}</div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--sp-9)' }}>
          <MediaSlot
            label="EDITORIAL / STUDIO — THIS PIECE"
            ratio="21 / 9"
            note="the same piece worn, cropped wide. one frame per colourway, shot identically so the shop grid stays even."
          />
        </div>
      </div>

      <StickyBuyBar
        name={product.name + ' / ' + product.sub}
        variant={product.colour ? product.colour + ' / m' : undefined}
        price={product.price}
        disabled={product.soldOut}
        added={added}
        onAdd={onAdd}
        visible={barVisible}
      />
    </div>
  );
}

Object.assign(window, { ProductScreen });
