const { Field, Button, ProductCopy } = window.IKKENDesignSystem_c61fa2;

function ContactScreen({ lang }) {
  const [sent, setSent] = React.useState(false);
  const [v, setV] = React.useState({ email: '', message: '' });
  const L = lang === 'PT'
    ? { title: 'contacto', email: 'E-mail', msg: 'Mensagem', send: 'ENVIAR', done: 'recebido. respondemos devagar.' }
    : { title: 'contact', email: 'Email', msg: 'Message', send: 'SEND', done: 'received. we answer slowly.' };
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100%', padding: 'var(--sp-8) var(--frame-inset-x)' }}>
      <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
        <div style={{ fontFamily: 'var(--font-subhead)', fontSize: 'var(--fs-lg)', textAlign: 'center' }}>{L.title}</div>
        {sent ? (
          <ProductCopy align="center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>{L.done}</ProductCopy>
        ) : (
          <>
            <Field label={L.email} value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} placeholder="you@somewhere" />
            <Field label={L.msg} multiline rows={4} value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} />
            <Button block onClick={() => setSent(true)}>{L.send}</Button>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ContactScreen });
