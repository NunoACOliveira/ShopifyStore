const { ProductCopy, MediaSlot } = window.IKKENDesignSystem_c61fa2;

function AboutScreen({ t }) {
  return (
    <div style={{ padding: '0 var(--frame-inset-x) var(--sp-9)' }}>
      <section style={{ display: 'grid', placeItems: 'center', padding: 'var(--sp-9) 0' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-subhead)', fontSize: 'var(--fs-lg)', letterSpacing: 'var(--tr-body)' }}>
            {t.aboutTitle}
          </div>
          <ProductCopy align="center" measure="var(--measure-about)" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'var(--sp-7)' }}>
            {t.philosophyBody}
          </ProductCopy>
          <div style={{ marginTop: 'var(--sp-7)' }}>
            {t.philosophy.map((line, i) => (
              <p key={i} style={{ margin: i === 0 ? 0 : 'var(--sp-4) 0 0', fontFamily: 'var(--font-subhead)', fontSize: 'var(--fs-md)' }}>{line}</p>
            ))}
          </div>
          <div style={{ marginTop: 'var(--sp-6)', fontFamily: 'ui-monospace,monospace', fontSize: 10, color: 'var(--ink-300)', letterSpacing: 0 }}>
            placeholder prose in the brand's register — waiting on your words
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-6)' }}>
        <MediaSlot
          label="ATELIER 01"
          ratio="4 / 5"
          note="hands, dye bath or hand-cut block. no faces. daylight only."
        />
        <MediaSlot
          label="EDITORIAL / OUTDOORS 02"
          ratio="4 / 5"
          note="landscape without a figure — the rock, the water, the salt. this is the brand's ground."
        />
      </section>
    </div>
  );
}

Object.assign(window, { AboutScreen });
