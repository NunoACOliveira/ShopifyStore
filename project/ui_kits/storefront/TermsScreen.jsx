function TermsScreen({ t, lang }) {
  const blocks = lang === 'PT'
    ? [
        ['ENVIO', 'as pe\u00e7as seguem em cinco dias \u00fateis. com rastreio, para todo o mundo.'],
        ['DEVOLU\u00c7\u00d5ES', 'catorze dias, sem uso, com etiquetas. marcas de lavagem e desvanecimento n\u00e3o s\u00e3o defeitos.'],
        ['CUIDADOS', t.care],
        ['PAGAMENTO', 'processado pela shopify. nunca vemos o seu cart\u00e3o.'],
      ]
    : [
        ['SHIPPING', 'pieces ship within five working days. tracked, worldwide.'],
        ['RETURNS', 'fourteen days, unworn, tags on. wash marks and fades from wear are not faults.'],
        ['CARE', t.care],
        ['PAYMENT', 'handled by shopify. we never see your card.'],
      ];
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100%', padding: 'var(--sp-8) var(--frame-inset-x)' }}>
      <div style={{ maxWidth: 620, display: 'grid', gridTemplateColumns: '150px 1fr', columnGap: 'var(--sp-6)', rowGap: 'var(--sp-5)' }}>
        {blocks.map(([k, txt]) => (
          <React.Fragment key={k}>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-2xs)', letterSpacing: 'var(--tr-label)', color: 'var(--text-muted)', paddingTop: 3 }}>{k}</div>
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>{txt}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { TermsScreen });
