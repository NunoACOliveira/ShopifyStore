const { MediaSlot, ProductCopy, TextLink } = window.IKKENDesignSystem_c61fa2;

function HomeScreen({ t, onShop }) {
  return (
    <div style={{ padding: '0 var(--frame-inset-x) var(--sp-9)' }}>
      <section style={{ paddingTop: 'var(--sp-4)' }}>
        <MediaSlot
          kind="film"
          label="HOME HERO"
          ratio="21 / 9"
          note="surf breaking over black rock — or ash falling. 12–18s silent loop, handheld, overexposed, no colour grade. the centre of the frame must stay light enough to carry ink type."
        />
      </section>

      <section style={{ display: 'grid', placeItems: 'center', padding: 'var(--sp-10) 0 var(--sp-9)' }}>
        <div style={{ textAlign: 'center', maxWidth: '54ch' }}>
          {t.philosophy.map((line, i) => (
            <p
              key={i}
              style={{
                margin: i === 0 ? 0 : 'var(--sp-5) 0 0',
                fontFamily: 'var(--font-subhead)',
                fontSize: 'var(--fs-lg)',
                lineHeight: 'var(--lh-snug)',
                letterSpacing: 'var(--tr-body)',
              }}
            >
              {line}
            </p>
          ))}
          <ProductCopy align="center" measure="var(--measure-about)" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'var(--sp-7)' }}>
            {t.philosophyBody}
          </ProductCopy>
          <div style={{ marginTop: 'var(--sp-8)' }}>
            <TextLink as="button" onClick={onShop}>{t.enterShop}</TextLink>
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 'var(--sp-6)', alignItems: 'stretch' }}>
        <MediaSlot
          label="EDITORIAL / OUTDOORS 01"
          ratio="4 / 5"
          note="one piece worn, full body, in landscape — rock, salt, low sun. figure small in frame, cropped at the ankles is fine."
        />
        <MediaSlot
          label="EDITORIAL / STUDIO 01"
          ratio="4 / 5"
          note="same piece, studio, near-white ground. shoulders to hip, hands out of frame, no expression."
        />
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
