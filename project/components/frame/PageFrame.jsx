import React from 'react';
import { LogoMark } from './LogoMark.jsx';
import { Wordmark } from './Wordmark.jsx';
import { CartLabel } from './CartLabel.jsx';
import { SiteNav } from './SiteNav.jsx';
import { LangToggle } from './LangToggle.jsx';

export function PageFrame({
  children,
  cartCount = 0,
  active,
  onNavigate,
  onCart,
  onHome,
  navItems,
  showNav = true,
  showWordmark = true,
  showChrome = true,
  background = 'plate',
  scroll = false,
  lang,
  onLang,
  style,
}) {
  const bg =
    background === 'plate'
      ? { backgroundColor: 'var(--paper-200)', backgroundImage: 'var(--texture-page)', backgroundSize: 'cover', backgroundPosition: 'center' }
      : background === 'flat'
      ? { backgroundColor: 'var(--paper-200)' }
      : {};

  const band = showChrome ? 'calc(var(--frame-inset-y) + 46px)' : 0;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        ...bg,
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--scanline)', pointerEvents: 'none', zIndex: 2 }} />
      {showChrome && (
        <>
          <div style={{ position: 'absolute', top: 'var(--frame-inset-y)', left: 'var(--frame-inset-x)', zIndex: 4 }}>
            <LogoMark size={92} href="#home" onClick={onHome ? (e) => { e.preventDefault(); onHome(); } : undefined} />
          </div>
          <div style={{ position: 'absolute', top: 'var(--frame-inset-y)', right: 'var(--frame-inset-x)', zIndex: 4, display: 'flex', alignItems: 'baseline', gap: 'var(--sp-5)' }}>
            {lang && <LangToggle value={lang} onChange={onLang} />}
            <CartLabel count={cartCount} onClick={onCart ? (e) => { e.preventDefault(); onCart(); } : undefined} />
          </div>
        </>
      )}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: band,
          bottom: band,
          zIndex: 1,
          overflowY: scroll ? 'auto' : 'hidden',
          overflowX: 'hidden',
        }}
      >
        {children}
      </div>
      {showChrome && showNav && (
        <div style={{ position: 'absolute', bottom: 'var(--frame-inset-y)', left: 0, right: 0, zIndex: 4 }}>
          <SiteNav items={navItems} active={active} onNavigate={onNavigate} />
        </div>
      )}
      {showChrome && showWordmark && (
        <div style={{ position: 'absolute', bottom: 'var(--frame-inset-y)', right: 'var(--frame-inset-x)', zIndex: 4 }}>
          <Wordmark size={128} />
        </div>
      )}
    </div>
  );
}
