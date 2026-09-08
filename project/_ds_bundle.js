/* @ds-bundle: {"format":4,"namespace":"IKKENDesignSystem_c61fa2","components":[{"name":"MediaSlot","sourcePath":"components/catalog/MediaSlot.jsx"},{"name":"ObjectGrid","sourcePath":"components/catalog/ObjectGrid.jsx"},{"name":"ObjectTile","sourcePath":"components/catalog/ObjectTile.jsx"},{"name":"SwatchRow","sourcePath":"components/catalog/SwatchRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Hairline","sourcePath":"components/core/Hairline.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"CartLabel","sourcePath":"components/frame/CartLabel.jsx"},{"name":"LangToggle","sourcePath":"components/frame/LangToggle.jsx"},{"name":"LogoMark","sourcePath":"components/frame/LogoMark.jsx"},{"name":"PageFrame","sourcePath":"components/frame/PageFrame.jsx"},{"name":"SiteNav","sourcePath":"components/frame/SiteNav.jsx"},{"name":"Wordmark","sourcePath":"components/frame/Wordmark.jsx"},{"name":"CartLine","sourcePath":"components/overlay/CartLine.jsx"},{"name":"CartPanel","sourcePath":"components/overlay/CartPanel.jsx"},{"name":"EnterSplash","sourcePath":"components/overlay/EnterSplash.jsx"},{"name":"EdgeNav","sourcePath":"components/product/EdgeNav.jsx"},{"name":"PriceLabel","sourcePath":"components/product/PriceLabel.jsx"},{"name":"ProductCopy","sourcePath":"components/product/ProductCopy.jsx"},{"name":"ProductTitle","sourcePath":"components/product/ProductTitle.jsx"},{"name":"SquarePager","sourcePath":"components/product/SquarePager.jsx"},{"name":"StickyBuyBar","sourcePath":"components/product/StickyBuyBar.jsx"}],"sourceHashes":{"components/catalog/MediaSlot.jsx":"99718d549d75","components/catalog/ObjectGrid.jsx":"e3f7ac6dfd2c","components/catalog/ObjectTile.jsx":"f13a935554ab","components/catalog/SwatchRow.jsx":"d9f1157782e3","components/core/Button.jsx":"ff38fa659c7c","components/core/Field.jsx":"3e3098e12af5","components/core/Hairline.jsx":"caab13623be3","components/core/TextLink.jsx":"c6e0e3aae9dd","components/frame/CartLabel.jsx":"f75845f90be6","components/frame/LangToggle.jsx":"f17dc9ee92c4","components/frame/LogoMark.jsx":"2d845aa9f656","components/frame/PageFrame.jsx":"309065b695df","components/frame/SiteNav.jsx":"33058d88aa60","components/frame/Wordmark.jsx":"5d311051edc7","components/frame/assetBase.js":"87e1d59e6852","components/overlay/CartLine.jsx":"6701097905bb","components/overlay/CartPanel.jsx":"8527df21c5af","components/overlay/EnterSplash.jsx":"e7b5399c08af","components/product/EdgeNav.jsx":"c403ea29721f","components/product/PriceLabel.jsx":"85000d89cc3d","components/product/ProductCopy.jsx":"b8ec0142dda7","components/product/ProductTitle.jsx":"f97bd4f3e2bf","components/product/SquarePager.jsx":"7fe9679025d9","components/product/StickyBuyBar.jsx":"e8662f1af561","ui_kits/storefront/AboutScreen.jsx":"2103f910b062","ui_kits/storefront/ContactScreen.jsx":"2ac8666f9726","ui_kits/storefront/HomeScreen.jsx":"69645eac161c","ui_kits/storefront/ProductScreen.jsx":"e0787dfe89f2","ui_kits/storefront/ShopScreen.jsx":"12831434899d","ui_kits/storefront/SplashScreen.jsx":"9df50e5e11ed","ui_kits/storefront/TermsScreen.jsx":"e237aca85423","ui_kits/storefront/data.js":"59cb92e670fa"},"inlinedExternals":[],"unexposedExports":[{"name":"assetBase","sourcePath":"components/frame/assetBase.js"}]} */

(() => {

const __ds_ns = (window.IKKENDesignSystem_c61fa2 = window.IKKENDesignSystem_c61fa2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/catalog/MediaSlot.jsx
try { (() => {
function MediaSlot({
  label,
  note,
  ratio = '16 / 9',
  height,
  kind = 'photo',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: height ? undefined : ratio,
      height: height,
      border: '1px dashed var(--ink-300)',
      borderRadius: 'var(--radius-none)',
      background: 'var(--paper-100)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-2)',
      padding: 'var(--sp-5)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      color: 'var(--ink-400)'
    }
  }, (kind === 'film' ? 'FILM — ' : kind === 'clip' ? 'CLIP — ' : 'PHOTO — ') + label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--fs-xs)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink-300)',
      maxWidth: '46ch'
    }
  }, note));
}
Object.assign(__ds_scope, { MediaSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/MediaSlot.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ObjectTile.jsx
try { (() => {
function ObjectTile({
  image,
  name,
  price,
  soldOut = false,
  onSelect,
  height = 200,
  labels = 'hover',
  children,
  style
}) {
  const always = labels === 'always';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: soldOut ? undefined : onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": name,
    style: {
      appearance: 'none',
      background: 'none',
      border: 0,
      padding: 0,
      borderRadius: 'var(--radius-none)',
      cursor: soldOut ? 'default' : 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      ...style
    }
  }, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      transform: hover && !soldOut ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-settle)'
    }
  }, children) : /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      height,
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      display: 'block',
      filter: 'drop-shadow(' + (hover ? '0 26px 26px rgba(75,77,74,.30)' : '0 18px 20px rgba(75,77,74,.18)') + ')',
      transform: hover && !soldOut ? 'translateY(-2px)' : 'none',
      opacity: soldOut ? 0.55 : 1,
      transition: 'transform var(--dur-base) var(--ease-settle), filter var(--dur-base) var(--ease-settle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      color: soldOut ? 'var(--ink-300)' : 'var(--text-primary)',
      opacity: always || hover || soldOut ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-settle)',
      whiteSpace: 'nowrap'
    }
  }, soldOut ? 'SOLD' : name), price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      color: 'var(--text-price)',
      opacity: always || hover ? 1 : 0,
      marginTop: 'calc(var(--sp-2) * -1)',
      transition: 'opacity var(--dur-base) var(--ease-settle)'
    }
  }, price));
}
Object.assign(__ds_scope, { ObjectTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ObjectTile.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ObjectGrid.jsx
try { (() => {
function ObjectGrid({
  items = [],
  columns = 4,
  onSelect,
  tileHeight = 190,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0, 1fr))',
      columnGap: 'var(--gutter-product)',
      rowGap: 'var(--row-product)',
      alignItems: 'center',
      justifyItems: 'center',
      width: '100%',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.ObjectTile, {
    key: it.id || it.name || i,
    image: it.image,
    name: it.name,
    price: it.price,
    soldOut: it.soldOut,
    height: tileHeight,
    onSelect: onSelect ? () => onSelect(it, i) : undefined
  })));
}
Object.assign(__ds_scope, { ObjectGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ObjectGrid.jsx", error: String((e && e.message) || e) }); }

// components/catalog/SwatchRow.jsx
try { (() => {
const COLOURWAYS = [{
  id: 'brick',
  label: 'Brick',
  value: 'var(--cw-brick)'
}, {
  id: 'bone',
  label: 'Bone',
  value: 'var(--cw-bone)'
}, {
  id: 'black',
  label: 'Black',
  value: 'var(--cw-black)'
}, {
  id: 'teal',
  label: 'Teal',
  value: 'var(--cw-teal)'
}, {
  id: 'forest',
  label: 'Forest',
  value: 'var(--cw-forest)'
}, {
  id: 'dust-blue',
  label: 'Dusty Blue',
  value: 'var(--cw-dust-blue)'
}, {
  id: 'plum',
  label: 'Plum',
  value: 'var(--cw-plum)'
}, {
  id: 'ochre',
  label: 'Ochre',
  value: 'var(--cw-ochre)'
}];
function SwatchRow({
  options = COLOURWAYS,
  value,
  onChange,
  label,
  align = 'flex-end',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      alignItems: align,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)'
    }
  }, options.map(o => {
    const selected = value === o.id;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      type: "button",
      title: o.label,
      "aria-label": o.label,
      "aria-pressed": selected,
      onClick: onChange ? () => onChange(o.id, o) : undefined,
      style: {
        appearance: 'none',
        padding: 3,
        background: 'none',
        borderRadius: 'var(--radius-none)',
        border: '1px solid ' + (selected ? 'var(--ink-900)' : 'transparent'),
        cursor: 'pointer',
        transition: 'border-color var(--dur-fast) var(--ease-settle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        width: 16,
        height: 16,
        background: o.value
      }
    }));
  })));
}
Object.assign(__ds_scope, { SwatchRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/SwatchRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  onClick,
  disabled = false,
  block = false,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = size === 'sm' ? 'var(--sp-2) 0' : 'var(--sp-3) 0';
  const fs = size === 'sm' ? 'var(--fs-xs)' : 'var(--fs-sm)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      appearance: 'none',
      background: 'none',
      border: 0,
      borderBottom: '1px solid ' + (disabled ? 'var(--ink-300)' : 'var(--ink-900)'),
      borderRadius: 'var(--radius-none)',
      padding: pad,
      width: block ? '100%' : 'auto',
      display: block ? 'block' : 'inline-block',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: fs,
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      textAlign: 'center',
      color: disabled ? 'var(--ink-300)' : 'var(--text-primary)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: press ? 'var(--press-fade)' : hover && !disabled ? 'var(--hover-fade)' : 1,
      transform: press && !disabled ? 'translateY(var(--press-shift))' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-settle), transform var(--dur-fast) var(--ease-settle)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  multiline = false,
  rows = 3,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || 'f-' + String(label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const shared = {
    id: inputId,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'none',
      border: 0,
      borderBottom: '1px solid ' + (focus ? 'var(--ink-900)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-none)',
      padding: 'var(--sp-2) 0',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--tr-body)',
      color: 'var(--text-primary)',
      outline: 'none',
      resize: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-settle)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      color: 'var(--text-muted)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Hairline.jsx
try { (() => {
function Hairline({
  strong = false,
  vertical = false,
  length = '100%',
  style
}) {
  const color = strong ? 'var(--ink-900)' : 'var(--border-hairline)';
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: vertical ? {
      width: 1,
      height: length,
      background: color,
      ...style
    } : {
      height: 1,
      width: length,
      background: color,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Hairline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Hairline.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = '#',
  onClick,
  size = 'var(--fs-sm)',
  tracking = 'var(--tr-nav)',
  weight = 'var(--fw-bold)',
  dimmed = false,
  muted = false,
  as = 'a',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  const base = muted ? 'var(--text-muted)' : 'var(--link)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: weight,
      fontSize: size,
      letterSpacing: tracking,
      textTransform: 'var(--case-nav)',
      color: base,
      textDecoration: 'none',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'inline-block',
      opacity: press ? 'var(--press-fade)' : hover || dimmed ? 'var(--hover-fade)' : 1,
      transform: press ? 'translateY(var(--press-shift))' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-settle), transform var(--dur-fast) var(--ease-settle)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/frame/CartLabel.jsx
try { (() => {
function CartLabel({
  count = 0,
  href = '#cart',
  onClick
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href,
    onClick: onClick,
    size: "var(--fs-sm)"
  }, 'CART (' + count + ')');
}
Object.assign(__ds_scope, { CartLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/CartLabel.jsx", error: String((e && e.message) || e) }); }

// components/frame/LangToggle.jsx
try { (() => {
function LangToggle({
  value = 'EN',
  options = ['EN', 'PT'],
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-2)',
      ...style
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: o
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-2xs)',
      color: 'var(--ink-300)'
    }
  }, "/"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    as: "button",
    size: "var(--fs-2xs)",
    tracking: "var(--tr-label)",
    dimmed: o !== value,
    onClick: onChange ? () => onChange(o) : undefined
  }, o))));
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/frame/SiteNav.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  label: 'SHOP',
  href: '#shop'
}, {
  label: 'ABOUT',
  href: '#about'
}, {
  label: 'CONTACT',
  href: '#contact'
}, {
  label: 'T&C',
  href: '#terms'
}];
function SiteNav({
  items = DEFAULT_ITEMS,
  active,
  onNavigate,
  gap = 'var(--sp-8)'
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      gap
    },
    "aria-label": "Primary"
  }, items.map(it => /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    key: it.label,
    href: it.href,
    size: "var(--fs-md)",
    dimmed: active != null && active !== it.label,
    onClick: onNavigate ? e => {
      e.preventDefault();
      onNavigate(it.label, it);
    } : undefined
  }, it.label)));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/SiteNav.jsx", error: String((e && e.message) || e) }); }

// components/frame/assetBase.js
try { (() => {
/**
 * Asset base resolver. Card HTML and UI-kit screens live two levels below the project root, so the
 * default is document-relative '../../assets'. Override before mounting when the depth differs:
 *   window.IKKEN_ASSETS = 'assets';
 */
function assetBase() {
  return typeof window !== 'undefined' && window.IKKEN_ASSETS || '../../assets';
}
Object.assign(__ds_scope, { assetBase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/assetBase.js", error: String((e && e.message) || e) }); }

// components/frame/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoMark({
  size = 110,
  small = false,
  alt = 'IKKEN',
  href,
  onClick,
  style,
  ...rest
}) {
  const src = __ds_scope.assetBase() + (small ? '/logo-mark-small.png' : '/logo-mark.png');
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    width: size,
    style: {
      width: size,
      height: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
  if (!href) return img;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: 'inline-block',
      transition: 'opacity var(--dur-fast) var(--ease-settle)'
    }
  }, img);
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/frame/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 150,
  alt = 'IKKEN',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: __ds_scope.assetBase() + '/logo-wordmark.png',
    alt: alt,
    width: size,
    style: {
      width: size,
      height: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/frame/PageFrame.jsx
try { (() => {
function PageFrame({
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
  style
}) {
  const bg = background === 'plate' ? {
    backgroundColor: 'var(--paper-200)',
    backgroundImage: 'var(--texture-page)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : background === 'flat' ? {
    backgroundColor: 'var(--paper-200)'
  } : {};
  const band = showChrome ? 'calc(var(--frame-inset-y) + 46px)' : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      ...bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--scanline)',
      pointerEvents: 'none',
      zIndex: 2
    }
  }), showChrome && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--frame-inset-y)',
      left: 'var(--frame-inset-x)',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LogoMark, {
    size: 92,
    href: "#home",
    onClick: onHome ? e => {
      e.preventDefault();
      onHome();
    } : undefined
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--frame-inset-y)',
      right: 'var(--frame-inset-x)',
      zIndex: 4,
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-5)'
    }
  }, lang && /*#__PURE__*/React.createElement(__ds_scope.LangToggle, {
    value: lang,
    onChange: onLang
  }), /*#__PURE__*/React.createElement(__ds_scope.CartLabel, {
    count: cartCount,
    onClick: onCart ? e => {
      e.preventDefault();
      onCart();
    } : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: band,
      bottom: band,
      zIndex: 1,
      overflowY: scroll ? 'auto' : 'hidden',
      overflowX: 'hidden'
    }
  }, children), showChrome && showNav && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--frame-inset-y)',
      left: 0,
      right: 0,
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteNav, {
    items: navItems,
    active: active,
    onNavigate: onNavigate
  })), showChrome && showWordmark && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--frame-inset-y)',
      right: 'var(--frame-inset-x)',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 128
  })));
}
Object.assign(__ds_scope, { PageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/PageFrame.jsx", error: String((e && e.message) || e) }); }

// components/overlay/CartLine.jsx
try { (() => {
function CartLine({
  image,
  name,
  variant,
  qty = 1,
  price,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)',
      padding: 'var(--sp-4) 0'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 56,
      height: 56,
      objectFit: 'contain',
      display: 'block',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)'
    }
  }, name), variant && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, variant), onRemove && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'var(--sp-1)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    as: "button",
    muted: true,
    size: "var(--fs-2xs)",
    tracking: "var(--tr-label)",
    onClick: onRemove
  }, "REMOVE"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, '×' + qty), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-secondary)',
      flex: '0 0 auto',
      minWidth: 72,
      textAlign: 'right'
    }
  }, price)), /*#__PURE__*/React.createElement(__ds_scope.Hairline, null));
}
Object.assign(__ds_scope, { CartLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/CartLine.jsx", error: String((e && e.message) || e) }); }

// components/overlay/CartPanel.jsx
try { (() => {
function CartPanel({
  open = false,
  items = [],
  total,
  onClose,
  onCheckout,
  onRemove,
  width = 460
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 20,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--veil-image-strong)',
      backdropFilter: 'var(--blur-veil)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'relative',
      width: width,
      maxWidth: '92%',
      height: '100%',
      background: 'var(--paper-100)',
      padding: 'var(--frame-inset-y) var(--sp-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--tr-nav)',
      textTransform: 'var(--case-nav)'
    }
  }, 'CART (' + items.length + ')'), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    as: "button",
    size: "var(--fs-xs)",
    tracking: "var(--tr-label)",
    onClick: onClose
  }, "CLOSE")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "nothing here yet.") : items.map((it, i) => /*#__PURE__*/React.createElement(__ds_scope.CartLine, {
    key: it.key || i,
    image: it.image,
    name: it.name,
    variant: it.variant,
    qty: it.qty,
    price: it.price,
    onRemove: onRemove ? () => onRemove(it, i) : undefined
  }))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      color: 'var(--text-muted)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)'
    }
  }, total)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    block: true,
    onClick: onCheckout
  }, "CHECKOUT"))));
}
Object.assign(__ds_scope, { CartPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/CartPanel.jsx", error: String((e && e.message) || e) }); }

// components/overlay/EnterSplash.jsx
try { (() => {
function EnterSplash({
  image,
  video,
  label = 'PRESS TO ENTER',
  onEnter,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onEnter,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      appearance: 'none',
      border: 0,
      padding: 0,
      margin: 0,
      width: '100%',
      height: '100%',
      display: 'block',
      cursor: 'pointer',
      overflow: 'hidden',
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, video ? /*#__PURE__*/React.createElement("video", {
    src: video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--veil-image)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-md)',
      letterSpacing: 'var(--tr-nav)',
      textTransform: 'var(--case-nav)',
      color: 'var(--ink-900)',
      opacity: hover ? 'var(--hover-fade)' : 1,
      transition: 'opacity var(--dur-base) var(--ease-settle)',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { EnterSplash });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/EnterSplash.jsx", error: String((e && e.message) || e) }); }

// components/product/EdgeNav.jsx
try { (() => {
function EdgeNav({
  onBack,
  onNext,
  backLabel = 'BACK',
  nextLabel = 'NEXT',
  hideBack = false,
  hideNext = false
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, !hideBack && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--frame-inset-x)',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    as: "button",
    onClick: onBack,
    tracking: "var(--tr-label)"
  }, backLabel)), !hideNext && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--frame-inset-x)',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    as: "button",
    onClick: onNext,
    tracking: "var(--tr-label)"
  }, nextLabel)));
}
Object.assign(__ds_scope, { EdgeNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/EdgeNav.jsx", error: String((e && e.message) || e) }); }

// components/product/PriceLabel.jsx
try { (() => {
function PriceLabel({
  value,
  label = 'PRICE',
  align = 'right',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      color: 'var(--text-price)'
    }
  }, label), value != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)',
      letterSpacing: 'var(--tr-body)',
      color: 'var(--text-secondary)'
    }
  }, value));
}
Object.assign(__ds_scope, { PriceLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PriceLabel.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCopy.jsx
try { (() => {
function ProductCopy({
  children,
  align = 'right',
  measure = 'var(--measure-body)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      letterSpacing: 'var(--tr-body)',
      color: 'var(--text-secondary)',
      textAlign: align,
      maxWidth: measure,
      marginLeft: align === 'right' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined,
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ProductCopy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCopy.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductTitle.jsx
try { (() => {
function ProductTitle({
  children,
  align = 'left',
  size = 'var(--fs-xl)',
  style
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size,
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--tr-title)',
      textTransform: 'var(--case-nav)',
      color: 'var(--text-primary)',
      textAlign: align,
      textWrap: 'balance',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ProductTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductTitle.jsx", error: String((e && e.message) || e) }); }

// components/product/SquarePager.jsx
try { (() => {
function SquarePager({
  count = 4,
  index = 0,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      ...style
    },
    role: "tablist"
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "tab",
    "aria-selected": i === index,
    "aria-label": 'View ' + (i + 1),
    onClick: onChange ? () => onChange(i) : undefined,
    style: {
      appearance: 'none',
      border: 0,
      padding: 0,
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-none)',
      background: i === index ? 'var(--ink-900)' : 'var(--ink-300)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-settle)'
    }
  })));
}
Object.assign(__ds_scope, { SquarePager });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SquarePager.jsx", error: String((e && e.message) || e) }); }

// components/product/StickyBuyBar.jsx
try { (() => {
function StickyBuyBar({
  name,
  variant,
  price,
  disabled = false,
  added = false,
  onAdd,
  visible = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      zIndex: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      padding: 'var(--sp-4) var(--sp-6)',
      background: 'var(--paper-100)',
      borderTop: '1px solid var(--border-hairline)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(8px)',
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-settle), transform var(--dur-base) var(--ease-settle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-4)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'var(--case-nav)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), variant && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, variant)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-secondary)'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    disabled: disabled,
    onClick: onAdd
  }, disabled ? 'SOLD OUT' : added ? 'ADDED' : 'ADD TO CART')));
}
Object.assign(__ds_scope, { StickyBuyBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/StickyBuyBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/AboutScreen.jsx
try { (() => {
const {
  ProductCopy,
  MediaSlot
} = window.IKKENDesignSystem_c61fa2;
function AboutScreen({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--frame-inset-x) var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--sp-9) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 'var(--fs-lg)',
      letterSpacing: 'var(--tr-body)'
    }
  }, t.aboutTitle), /*#__PURE__*/React.createElement(ProductCopy, {
    align: "center",
    measure: "var(--measure-about)",
    style: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'var(--sp-7)'
    }
  }, t.philosophyBody), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, t.philosophy.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: i === 0 ? 0 : 'var(--sp-4) 0 0',
      fontFamily: 'var(--font-subhead)',
      fontSize: 'var(--fs-md)'
    }
  }, line))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      fontFamily: 'ui-monospace,monospace',
      fontSize: 10,
      color: 'var(--ink-300)',
      letterSpacing: 0
    }
  }, "placeholder prose in the brand's register \u2014 waiting on your words"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    label: "ATELIER 01",
    ratio: "4 / 5",
    note: "hands, dye bath or hand-cut block. no faces. daylight only."
  }), /*#__PURE__*/React.createElement(MediaSlot, {
    label: "EDITORIAL / OUTDOORS 02",
    ratio: "4 / 5",
    note: "landscape without a figure \u2014 the rock, the water, the salt. this is the brand's ground."
  })));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ContactScreen.jsx
try { (() => {
const {
  Field,
  Button,
  ProductCopy
} = window.IKKENDesignSystem_c61fa2;
function ContactScreen({
  lang
}) {
  const [sent, setSent] = React.useState(false);
  const [v, setV] = React.useState({
    email: '',
    message: ''
  });
  const L = lang === 'PT' ? {
    title: 'contacto',
    email: 'E-mail',
    msg: 'Mensagem',
    send: 'ENVIAR',
    done: 'recebido. respondemos devagar.'
  } : {
    title: 'contact',
    email: 'Email',
    msg: 'Message',
    send: 'SEND',
    done: 'received. we answer slowly.'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: '100%',
      padding: 'var(--sp-8) var(--frame-inset-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontSize: 'var(--fs-lg)',
      textAlign: 'center'
    }
  }, L.title), sent ? /*#__PURE__*/React.createElement(ProductCopy, {
    align: "center",
    style: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, L.done) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: L.email,
    value: v.email,
    onChange: e => setV({
      ...v,
      email: e.target.value
    }),
    placeholder: "you@somewhere"
  }), /*#__PURE__*/React.createElement(Field, {
    label: L.msg,
    multiline: true,
    rows: 4,
    value: v.message,
    onChange: e => setV({
      ...v,
      message: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => setSent(true)
  }, L.send))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomeScreen.jsx
try { (() => {
const {
  MediaSlot,
  ProductCopy,
  TextLink
} = window.IKKENDesignSystem_c61fa2;
function HomeScreen({
  t,
  onShop
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--frame-inset-x) var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    kind: "film",
    label: "HOME HERO",
    ratio: "21 / 9",
    note: "surf breaking over black rock \u2014 or ash falling. 12\u201318s silent loop, handheld, overexposed, no colour grade. the centre of the frame must stay light enough to carry ink type."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--sp-10) 0 var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: '54ch'
    }
  }, t.philosophy.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: i === 0 ? 0 : 'var(--sp-5) 0 0',
      fontFamily: 'var(--font-subhead)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--tr-body)'
    }
  }, line)), /*#__PURE__*/React.createElement(ProductCopy, {
    align: "center",
    measure: "var(--measure-about)",
    style: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'var(--sp-7)'
    }
  }, t.philosophyBody), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    as: "button",
    onClick: onShop
  }, t.enterShop)))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 'var(--sp-6)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    label: "EDITORIAL / OUTDOORS 01",
    ratio: "4 / 5",
    note: "one piece worn, full body, in landscape \u2014 rock, salt, low sun. figure small in frame, cropped at the ankles is fine."
  }), /*#__PURE__*/React.createElement(MediaSlot, {
    label: "EDITORIAL / STUDIO 01",
    ratio: "4 / 5",
    note: "same piece, studio, near-white ground. shoulders to hip, hands out of frame, no expression."
  })));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductScreen.jsx
try { (() => {
const {
  ProductTitle,
  PriceLabel,
  ProductCopy,
  SquarePager,
  SwatchRow,
  Button,
  StickyBuyBar,
  MediaSlot,
  Hairline
} = window.IKKENDesignSystem_c61fa2;
const PROD_A = '../../assets/products/';
function ProductScreen({
  product,
  t,
  colour,
  onColour,
  view,
  onView,
  onBack,
  onNext,
  onAdd,
  added
}) {
  const images = product.front ? [product.front, product.back, product.front, product.back] : [];
  const [barVisible, setBarVisible] = React.useState(false);
  const buyRef = React.useRef(null);
  React.useEffect(() => {
    const el = buyRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(es => setBarVisible(!es[0].isIntersecting), {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [product.id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--frame-inset-x) var(--sp-9)',
      flex: '1 1 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'var(--sp-4) 0 var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)'
    }
  }, "BACK"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onNext,
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)'
    }
  }, "NEXT")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--sp-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--sp-5)'
    }
  }, images.length ? /*#__PURE__*/React.createElement("img", {
    src: PROD_A + images[view],
    alt: product.name + ' ' + product.sub,
    style: {
      maxHeight: 420,
      maxWidth: '100%',
      width: 'auto',
      display: 'block',
      filter: 'drop-shadow(0 30px 34px rgba(75,77,74,.22))'
    }
  }) : /*#__PURE__*/React.createElement(MediaSlot, {
    label: product.shot,
    note: product.shotNote,
    ratio: "4 / 5",
    style: {
      maxWidth: 380
    }
  }), images.length ? /*#__PURE__*/React.createElement(SquarePager, {
    count: 4,
    index: view,
    onChange: onView
  }) : null), /*#__PURE__*/React.createElement("div", {
    ref: buyRef,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(ProductTitle, {
    align: "right"
  }, product.name, /*#__PURE__*/React.createElement("br", null), product.sub), /*#__PURE__*/React.createElement(PriceLabel, {
    value: product.price
  }), /*#__PURE__*/React.createElement(ProductCopy, null, t.product.map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: i === 0 ? 0 : 'var(--sp-4) 0 0'
    }
  }, line))), product.colour && /*#__PURE__*/React.createElement(SwatchRow, {
    label: "Colour",
    value: colour,
    onChange: onColour
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    disabled: product.soldOut,
    onClick: onAdd
  }, product.soldOut ? 'SOLD OUT' : added ? 'ADDED' : 'ADD TO CART')))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: 'var(--sp-10) auto 0'
    }
  }, /*#__PURE__*/React.createElement(Hairline, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 'var(--sp-5)',
      paddingTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      color: 'var(--text-muted)'
    }
  }, "CARE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, t.care))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(MediaSlot, {
    label: "EDITORIAL / STUDIO \u2014 THIS PIECE",
    ratio: "21 / 9",
    note: "the same piece worn, cropped wide. one frame per colourway, shot identically so the shop grid stays even."
  }))), /*#__PURE__*/React.createElement(StickyBuyBar, {
    name: product.name + ' / ' + product.sub,
    variant: product.colour ? product.colour + ' / m' : undefined,
    price: product.price,
    disabled: product.soldOut,
    added: added,
    onAdd: onAdd,
    visible: barVisible
  }));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ShopScreen.jsx
try { (() => {
const {
  ObjectTile,
  MediaSlot
} = window.IKKENDesignSystem_c61fa2;
const SHOP_A = '../../assets/products/';
function ShopScreen({
  items,
  t,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--frame-inset-x) var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--tr-body)',
      color: 'var(--text-muted)',
      padding: 'var(--sp-4) 0 var(--sp-8)'
    }
  }, t.shopIntro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      columnGap: 'var(--sp-7)',
      rowGap: 'var(--sp-9)'
    }
  }, items.map((p, i) => /*#__PURE__*/React.createElement(ObjectTile, {
    key: p.id,
    labels: "always",
    height: 230,
    image: p.front ? SHOP_A + p.front : undefined,
    name: p.name + ' / ' + p.sub,
    price: p.price,
    soldOut: p.soldOut,
    onSelect: () => onSelect(p, i),
    style: {
      width: '100%'
    }
  }, !p.front ? /*#__PURE__*/React.createElement(MediaSlot, {
    label: p.shot,
    note: p.shotNote,
    height: "230px"
  }) : null))));
}
Object.assign(window, {
  ShopScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ShopScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SplashScreen.jsx
try { (() => {
const {
  EnterSplash
} = window.IKKENDesignSystem_c61fa2;
function SplashScreen({
  onEnter
}) {
  return /*#__PURE__*/React.createElement(EnterSplash, {
    image: "../../refs/layout-home.jpg",
    onEnter: onEnter
  });
}
Object.assign(window, {
  SplashScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SplashScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/TermsScreen.jsx
try { (() => {
function TermsScreen({
  t,
  lang
}) {
  const blocks = lang === 'PT' ? [['ENVIO', 'as pe\u00e7as seguem em cinco dias \u00fateis. com rastreio, para todo o mundo.'], ['DEVOLU\u00c7\u00d5ES', 'catorze dias, sem uso, com etiquetas. marcas de lavagem e desvanecimento n\u00e3o s\u00e3o defeitos.'], ['CUIDADOS', t.care], ['PAGAMENTO', 'processado pela shopify. nunca vemos o seu cart\u00e3o.']] : [['SHIPPING', 'pieces ship within five working days. tracked, worldwide.'], ['RETURNS', 'fourteen days, unworn, tags on. wash marks and fades from wear are not faults.'], ['CARE', t.care], ['PAYMENT', 'handled by shopify. we never see your card.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: '100%',
      padding: 'var(--sp-8) var(--frame-inset-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      columnGap: 'var(--sp-6)',
      rowGap: 'var(--sp-5)'
    }
  }, blocks.map(([k, txt]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tr-label)',
      color: 'var(--text-muted)',
      paddingTop: 3
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, txt)))));
}
Object.assign(window, {
  TermsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/TermsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
// Catalogue for the redesigned storefront.
// The four tee colourways are the "smaller edit" the brand chose; the ashtray is on sale at launch but
// has no photography yet, so it renders as a MediaSlot. Price point: EUR 85.
// Copy is written in the brand's register but is NOT client-approved.
window.IKKEN_CATALOGUE = [{
  id: 'tee-bone',
  n: '01',
  name: 'STONE TEE',
  sub: 'BONE WASH',
  colour: 'bone',
  price: '\u20ac 85,00',
  front: 'tee-02-front.png',
  back: 'tee-02-back.png'
}, {
  id: 'tee-brick',
  n: '02',
  name: 'STONE TEE',
  sub: 'BRICK WASH',
  colour: 'brick',
  price: '\u20ac 85,00',
  front: 'tee-01-front.png',
  back: 'tee-01-back.png'
}, {
  id: 'tee-teal',
  n: '03',
  name: 'STONE TEE',
  sub: 'SALT TEAL',
  colour: 'teal',
  price: '\u20ac 85,00',
  front: 'tee-04-front.png',
  back: 'tee-04-back.png'
}, {
  id: 'tee-ochre',
  n: '04',
  name: 'STONE TEE',
  sub: 'OCHRE WASH',
  colour: 'ochre',
  price: '\u20ac 85,00',
  front: 'tee-08-front.png',
  back: 'tee-08-back.png'
}, {
  id: 'ashtray',
  n: '05',
  name: 'ASHTRAY',
  sub: 'RAW STONE',
  colour: null,
  price: '\u20ac 45,00',
  shot: 'ASHTRAY 01',
  shotNote: 'cut-out, three-quarter view, single hard light from the left. same near-white ground as the garments.'
}];
window.IKKEN_COPY = {
  EN: {
    nav: ['SHOP', 'ABOUT', 'CONTACT', 'T&C'],
    philosophy: ['nothing is finished.', 'everything wears.', 'one stone, one mark.'],
    philosophyBody: 'ikken makes one thing at a time. clothes first \u2014 then tea, pots, ashtrays, objects for the house. each piece is dyed and stamped by hand, so no two land the same.',
    enterShop: 'ENTER THE SHOP',
    shopIntro: 'first edition \u2014 four washes, one stamp.',
    aboutTitle: 'about',
    product: ['heavy cotton, washed until it gives up.', 'hand-cut stamp front and back. the print is pressed by hand, so no two land the same.', 'every piece fades on its own schedule.'],
    care: 'wash cold. dry flat in shade. the print will soften. that is the point.'
  },
  PT: {
    nav: ['LOJA', 'SOBRE', 'CONTACTO', 'T&C'],
    philosophy: ['nada est\u00e1 acabado.', 'tudo se desgasta.', 'uma pedra, uma marca.'],
    philosophyBody: 'a ikken faz uma coisa de cada vez. primeiro roupa \u2014 depois ch\u00e1, bules, cinzeiros, objectos para a casa. cada pe\u00e7a \u00e9 tingida e estampada \u00e0 m\u00e3o, por isso nenhuma sai igual.',
    enterShop: 'ENTRAR NA LOJA',
    shopIntro: 'primeira edi\u00e7\u00e3o \u2014 quatro lavagens, uma estampa.',
    aboutTitle: 'sobre',
    product: ['algod\u00e3o pesado, lavado at\u00e9 ceder.', 'estampa cortada \u00e0 m\u00e3o, frente e costas. cada impress\u00e3o assenta de forma diferente.', 'cada pe\u00e7a desvanece ao seu ritmo.'],
    care: 'lavar a frio. secar na horizontal, \u00e0 sombra. a estampa vai amaciar. \u00e9 esse o ponto.'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.MediaSlot = __ds_scope.MediaSlot;

__ds_ns.ObjectGrid = __ds_scope.ObjectGrid;

__ds_ns.ObjectTile = __ds_scope.ObjectTile;

__ds_ns.SwatchRow = __ds_scope.SwatchRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Hairline = __ds_scope.Hairline;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.CartLabel = __ds_scope.CartLabel;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.PageFrame = __ds_scope.PageFrame;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.CartLine = __ds_scope.CartLine;

__ds_ns.CartPanel = __ds_scope.CartPanel;

__ds_ns.EnterSplash = __ds_scope.EnterSplash;

__ds_ns.EdgeNav = __ds_scope.EdgeNav;

__ds_ns.PriceLabel = __ds_scope.PriceLabel;

__ds_ns.ProductCopy = __ds_scope.ProductCopy;

__ds_ns.ProductTitle = __ds_scope.ProductTitle;

__ds_ns.SquarePager = __ds_scope.SquarePager;

__ds_ns.StickyBuyBar = __ds_scope.StickyBuyBar;

})();
