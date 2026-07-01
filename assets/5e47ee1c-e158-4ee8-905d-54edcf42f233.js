/* @ds-bundle: {"format":3,"namespace":"ReviveWellnessDesignSystem_67c5dd","components":[{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"Seal","sourcePath":"components/brand/Seal.jsx"},{"name":"CleanseCard","sourcePath":"components/commerce/CleanseCard.jsx"},{"name":"PlanCard","sourcePath":"components/commerce/PlanCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"ServiceCard","sourcePath":"components/commerce/ServiceCard.jsx"},{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/Marquee.jsx":"309d78e0dcd3","components/brand/Seal.jsx":"dfc6e9fc9ee3","components/commerce/CleanseCard.jsx":"98ff82d06cc6","components/commerce/PlanCard.jsx":"a6c940656164","components/commerce/ProductCard.jsx":"afde2cb7c3bc","components/commerce/ServiceCard.jsx":"266a16bc53ec","components/content/ArticleCard.jsx":"88f442af1135","components/core/Avatar.jsx":"16f8d157784b","components/core/Badge.jsx":"944e894605ca","components/core/Button.jsx":"d8fb725e488a","components/core/Eyebrow.jsx":"5dcdf8bf36ed","components/core/SectionHeading.jsx":"30baf943eb73","components/core/Select.jsx":"83956e26d02a","components/core/Tag.jsx":"9fc679f601fd","ui_kits/website/App.jsx":"78146978371c","ui_kits/website/Community.jsx":"3b7d7a1b6e64","ui_kits/website/Journal.jsx":"867eb26d1d3e","ui_kits/website/Subscribe.jsx":"f92b8b21c57c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReviveWellnessDesignSystem_67c5dd = window.ReviveWellnessDesignSystem_67c5dd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Marquee
 * The dark green strip of wide-tracked uppercase brand phrases.
 * Pass `items` as an array; the first can be highlighted in gold via `highlightFirst`.
 */
function Marquee({
  items = ['Cold Pressed With Purpose', 'Release, Refresh & Revive', 'Fresh Pressed Daily'],
  highlightFirst = true,
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['rw-marquee', className].filter(Boolean).join(' ')
  }, props), items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), i === 0 && highlightFirst ? /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, item) : item)));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Seal
 * The circular brand mark: leaf, REVIVE wordmark, WELLNESS tagline,
 * and "COLD PRESSED · WITH PURPOSE / RELEASE · REFRESH · REVIVE" ring text.
 * Drawn inline so it renders correctly on any background.
 */
function Seal({
  variant = 'dark',
  size = 104,
  title = 'Revive Wellness',
  className = '',
  ...props
}) {
  const c = variant === 'white' ? {
    ring: '#f6f3ea',
    micro: '#f6f3ea',
    leaf: '#f6f3ea',
    vein: '#7cb342',
    name: '#f6f3ea',
    tag: '#f6f3ea',
    dot: '#f6f3ea',
    rule: '#f6f3ea'
  } : {
    ring: '#4e7d2c',
    micro: '#4e7d2c',
    leaf: '#7cb342',
    vein: '#ffffff',
    name: '#2f4d1c',
    tag: '#e8732a',
    dot: '#e8732a',
    rule: '#e8732a'
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 600 600",
    role: "img",
    "aria-label": title,
    className: className,
    style: {
      display: 'block'
    }
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "280",
    fill: "none",
    stroke: c.ring,
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "262",
    fill: "none",
    stroke: c.ring,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    id: "rw-seal-top",
    d: "M 80 300 A 220 220 0 0 1 520 300",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    id: "rw-seal-bot",
    d: "M 96 300 A 204 204 0 0 0 504 300",
    fill: "none"
  }), /*#__PURE__*/React.createElement("text", {
    fontFamily: "'Fraunces','Cormorant Garamond',serif",
    fontWeight: "500",
    fill: c.micro,
    fontSize: "26",
    letterSpacing: "11"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#rw-seal-top",
    startOffset: "50%",
    textAnchor: "middle"
  }, "COLD\xA0PRESSED\xA0\xB7\xA0WITH\xA0PURPOSE")), /*#__PURE__*/React.createElement("text", {
    fontFamily: "'Fraunces','Cormorant Garamond',serif",
    fontWeight: "500",
    fill: c.micro,
    fontSize: "20",
    letterSpacing: "9"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#rw-seal-bot",
    startOffset: "50%",
    textAnchor: "middle"
  }, "RELEASE\xA0\xB7\xA0REFRESH\xA0\xB7\xA0REVIVE")), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "58",
    r: "4",
    fill: c.dot
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "542",
    r: "4",
    fill: c.dot
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(300 205)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 -55 C-34 -22 -34 38 0 70 C34 38 34 -22 0 -55 Z",
    fill: c.leaf
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 -42 L0 60",
    fill: "none",
    stroke: c.vein,
    strokeWidth: "3.4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 -18 L-22 -30 M0 0 L24 -12 M0 18 L-22 6 M0 36 L24 24",
    fill: "none",
    stroke: c.vein,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "395",
    textAnchor: "middle",
    fontFamily: "'Fraunces','Cormorant Garamond',serif",
    fontWeight: "600",
    fill: c.name,
    fontSize: "74",
    letterSpacing: "2"
  }, "REVIVE"), /*#__PURE__*/React.createElement("line", {
    x1: "170",
    y1: "430",
    x2: "230",
    y2: "430",
    stroke: c.rule,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "370",
    y1: "430",
    x2: "430",
    y2: "430",
    stroke: c.rule,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "437",
    textAnchor: "middle",
    fontFamily: "'Inter',sans-serif",
    fontWeight: "600",
    fill: c.tag,
    fontSize: "24",
    letterSpacing: "13"
  }, "WELLNESS"));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Seal.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Avatar
 * Circular avatar: a photo, or initials on a tinted circle.
 */
function Avatar({
  name = '',
  src,
  size = 44,
  tint,
  founder = false,
  className = '',
  ...props
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const style = {
    width: size,
    height: size,
    fontSize: Math.round(size * 0.4),
    ...(tint ? {
      background: tint
    } : {})
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['rw-avatar', founder ? 'rw-avatar--founder' : '', className].filter(Boolean).join(' '),
    style: style,
    title: name
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Badge
 * Small pill used for stock status and labels.
 */
function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const variantClass = {
    default: '',
    low: 'rw-badge--low',
    soldOut: 'rw-badge--sold-out',
    new: 'rw-badge--new',
    gold: 'rw-badge--gold'
  }[variant] || '';
  const classes = ['rw-badge', variantClass, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Button
 * Pill button in the brand's uppercase, letter-spaced label style.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  as = 'button',
  className = '',
  ...props
}) {
  const variantClass = {
    primary: '',
    orange: 'rw-btn--orange',
    light: 'rw-btn--light',
    ghost: 'rw-btn--ghost',
    outline: 'rw-btn--outline',
    book: 'rw-btn--book'
  }[variant] || '';
  const sizeClass = {
    sm: 'rw-btn--sm',
    md: '',
    lg: 'rw-btn--lg'
  }[size] || '';
  const classes = ['rw-btn', variantClass, sizeClass, block ? 'rw-btn--block' : '', className].filter(Boolean).join(' ');
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CleanseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — CleanseCard
 * A cleanse-program tile: duration, description, price, and a Start CTA.
 */
function CleanseCard({
  days,
  description,
  price,
  cta = 'Start',
  onStart,
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['rw-cleanse', className].filter(Boolean).join(' ')
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "rw-cleanse__days"
  }, days), /*#__PURE__*/React.createElement("div", {
    className: "rw-cleanse__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "rw-cleanse__price"
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "orange",
    block: true,
    onClick: onStart
  }, cta));
}
Object.assign(__ds_scope, { CleanseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CleanseCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — PlanCard
 * A subscription plan: name, savings price, feature list with checks, CTA.
 * `popular` inverts it to the dark ink treatment with a ribbon.
 */
function PlanCard({
  name,
  price,
  features = [],
  cta,
  onSelect,
  href,
  popular = false,
  ribbon = 'Most loved',
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['rw-plan', popular ? 'rw-plan--popular' : '', className].filter(Boolean).join(' ')
  }, props), popular && ribbon && /*#__PURE__*/React.createElement("span", {
    className: "rw-plan__ribbon"
  }, ribbon), /*#__PURE__*/React.createElement("h3", {
    className: "rw-plan__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "rw-plan__price"
  }, price), /*#__PURE__*/React.createElement("ul", {
    className: "rw-plan__list"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: popular ? 'light' : 'outline',
    block: true,
    as: href ? 'a' : 'button',
    href: href,
    onClick: onSelect
  }, cta));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — ServiceCard
 * A wellness-service tile: title, description, and a booking CTA.
 */
function ServiceCard({
  title,
  description,
  cta = 'Book now',
  onBook,
  href,
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['rw-service', className].filter(Boolean).join(' ')
  }, props), /*#__PURE__*/React.createElement("h3", {
    className: "rw-service__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "rw-service__body"
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "orange",
    as: href ? 'a' : 'button',
    href: href,
    onClick: onBook
  }, cta));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Eyebrow
 * Small uppercase label that sits above headings.
 */
function Eyebrow({
  children,
  tone = 'orange',
  pill = false,
  className = '',
  ...props
}) {
  const toneClass = {
    orange: '',
    onBrand: 'rw-eyebrow-c--on-brand',
    gold: 'rw-eyebrow-c--gold'
  }[tone] || '';
  const classes = ['rw-eyebrow-c', pill ? 'rw-eyebrow-c--pill' : '', toneClass, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, props), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — SectionHeading
 * Eyebrow + display title (with orange italic <em> emphasis) + optional sub.
 * Pass the title as a string with *asterisks* around the emphasized word,
 * or as raw children for full control.
 */
function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
  tone = 'default',
  className = '',
  ...props
}) {
  const toneClass = {
    default: '',
    onBrand: 'rw-heading--on-brand',
    onInk: 'rw-heading--on-ink'
  }[tone] || '';
  const eyebrowTone = tone === 'default' ? 'orange' : 'onBrand';
  const classes = ['rw-heading', align === 'center' ? 'rw-heading--center' : '', toneClass, className].filter(Boolean).join(' ');

  // Turn *word* into an orange italic <em>.
  const renderTitle = t => {
    if (typeof t !== 'string') return t;
    const parts = t.split(/(\*[^*]+\*)/g);
    return parts.map((p, i) => p.startsWith('*') && p.endsWith('*') ? /*#__PURE__*/React.createElement("em", {
      key: i
    }, p.slice(1, -1)) : p);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone === 'default' ? 'orange' : 'onBrand'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "rw-heading__title"
  }, renderTitle(title)), sub && /*#__PURE__*/React.createElement("p", {
    className: "rw-heading__sub"
  }, sub));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
/**
 * Revive Wellness — Select
 * Custom-styled dropdown with the brand caret. Wrap options as children.
 */
function Select({
  options,
  children,
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['rw-field', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("select", props, options ? options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }) : children));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/**
 * Revive Wellness — ProductCard
 * The juice card: art tile, name, ingredient line, size + plan selects,
 * live price, and add-to-cart. Presentational — wire up state via callbacks.
 */
function ProductCard({
  name,
  ingredients,
  image,
  tint = 'var(--tint-orange)',
  price = '$48.00',
  priceNote = '6-pack · One-time',
  badge,
  soldOut = false,
  packOptions = [{
    value: 'single',
    label: 'Single bottle'
  }, {
    value: '4',
    label: '4-pack'
  }, {
    value: '6',
    label: '6-pack'
  }, {
    value: '12',
    label: '12-pack'
  }],
  planOptions = [{
    value: 'once',
    label: 'One-time'
  }, {
    value: 'weekly',
    label: 'Subscribe weekly (save 15%)'
  }, {
    value: 'biweekly',
    label: 'Subscribe bi-weekly (save 10%)'
  }],
  onPackChange,
  onPlanChange,
  onAdd,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: ['rw-product', soldOut ? 'is-sold-out' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-product__art",
    style: {
      background: tint
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    className: "rw-product__badge",
    variant: badge.variant
  }, badge.label), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    onError: e => {
      e.currentTarget.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rw-product__info"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rw-product__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "rw-product__ing"
  }, ingredients), /*#__PURE__*/React.createElement("div", {
    className: "rw-product__opts"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    "aria-label": "Size",
    defaultValue: "6",
    options: packOptions,
    onChange: onPackChange
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    "aria-label": "Plan",
    options: planOptions,
    onChange: onPlanChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "rw-product__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, price), /*#__PURE__*/React.createElement("span", {
    className: "note"
  }, priceNote)), /*#__PURE__*/React.createElement("button", {
    className: "rw-add-btn",
    onClick: onAdd,
    disabled: soldOut
  }, soldOut ? 'Sold Out' : 'Add to Cart')));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — Tag
 * Soft category pill for content (journal categories, community channels).
 */
function Tag({
  children,
  tone = 'green',
  className = '',
  ...props
}) {
  const toneClass = {
    green: '',
    orange: 'rw-tag--orange',
    gold: 'rw-tag--gold',
    ink: 'rw-tag--ink'
  }[tone] || '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['rw-tag', toneClass, className].filter(Boolean).join(' ')
  }, props), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Revive Wellness — ArticleCard
 * A journal/blog story card: cover image (or big-letter fallback),
 * category tag, serif title, blurb, and meta line.
 */
function ArticleCard({
  category,
  categoryTone = 'orange',
  title,
  blurb,
  image,
  bigLetter,
  meta,
  onClick,
  className = '',
  ...props
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ['rw-article', className].filter(Boolean).join(' '),
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "rw-article__cover"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    onError: e => {
      e.currentTarget.style.display = 'none';
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "rw-article__letter"
  }, bigLetter || (title ? title[0] : 'R'))), /*#__PURE__*/React.createElement("div", {
    className: "rw-article__body"
  }, category && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: categoryTone
  }, category)), /*#__PURE__*/React.createElement("h3", {
    className: "rw-article__title"
  }, title), blurb && /*#__PURE__*/React.createElement("p", {
    className: "rw-article__blurb"
  }, blurb), meta && /*#__PURE__*/React.createElement("div", {
    className: "rw-article__meta"
  }, meta)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Revive Wellness — Website UI Kit
   Interactive homepage recreation composing the design-system components.
   Exposes window.ReviveSite. */
const {
  useState
} = React;
const DS = window.ReviveWellnessDesignSystem_67c5dd;
const {
  Button,
  Badge,
  Eyebrow,
  SectionHeading,
  Select,
  Seal,
  Marquee,
  ProductCard,
  CleanseCard,
  ServiceCard
} = DS;
const PACKS = {
  single: 900,
  '4': 3400,
  '6': 4800,
  '12': 9000
};
const PACK_LABEL = {
  single: 'Single',
  '4': '4-pack',
  '6': '6-pack',
  '12': '12-pack'
};
const PLANS = {
  once: {
    d: 0,
    n: 'One-time'
  },
  weekly: {
    d: 0.15,
    n: 'Weekly'
  },
  biweekly: {
    d: 0.1,
    n: 'Bi-weekly'
  }
};
const money = c => '$' + (c / 100).toFixed(2);
const U = id => `https://images.unsplash.com/photo-${id}?w=900&q=75&auto=format&fit=crop`;
const IMG = {
  hero: U('1622597467836-f3285f2131b8'),
  // colorful cold-pressed juice row
  about: U('1540555700478-4be289fbecef') // spa towel + flowers
};
const JUICES = [{
  name: 'Orange',
  ing: 'Orange · Carrot · Turmeric · Ginger',
  tint: 'var(--tint-orange)',
  img: U('1600271886742-f049cd451bba'),
  badge: {
    label: 'Bestseller',
    variant: 'gold'
  }
}, {
  name: 'Red',
  ing: 'Beet · Apple · Pomegranate · Ginger',
  tint: 'var(--tint-red)',
  img: U('1600718374662-0483d2b9da44')
}, {
  name: 'Green',
  ing: 'Green Apple · Celery · Cucumber · Kale',
  tint: 'var(--tint-green)',
  img: U('1610970881699-44a5587cabec'),
  badge: {
    label: 'Only 4 left',
    variant: 'low'
  }
}, {
  name: 'Lemonade',
  ing: 'Lemon · Cayenne · Raw Honey',
  tint: 'var(--tint-yellow)',
  img: U('1621263764928-df1444c5e859')
}];
const CLEANSES = [{
  days: '1-Day',
  desc: 'A gentle single-day reset. 6 juices to flush, hydrate, and rebalance.',
  price: '$35'
}, {
  days: '3-Day',
  desc: 'Our most popular cleanse. 18 juices to deeply restore energy and digestion.',
  price: '$99'
}, {
  days: '7-Day',
  desc: 'A full week of nourishment. 42 juices for a serious system reset.',
  price: '$210'
}, {
  days: '30-Day',
  desc: 'A month-long lifestyle shift. 180 juices delivered on your schedule.',
  price: '$780'
}];
const SERVICES = [{
  title: 'Facials',
  body: "Nutrient-rich facials that honor your skin's natural wisdom. Customized to your skin goals."
}, {
  title: 'Relaxation Massages',
  body: 'Melt tension and restore flow. Therapeutic and relaxation massage tailored to you.'
}, {
  title: 'Detox Sessions',
  body: 'Guided detox experiences pairing our cold-pressed juices with restorative bodywork.'
}];
function Masthead({
  bag,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "rk-masthead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('shop')
  }, "Shop"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('cleanses')
  }, "Cleanses"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('services')
  }, "Services")), /*#__PURE__*/React.createElement("a", {
    className: "rk-brand",
    onClick: () => onNav('top'),
    "aria-label": "Revive Wellness home"
  }, /*#__PURE__*/React.createElement(Seal, {
    variant: "white",
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side rk-right"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('about')
  }, "About"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('collab')
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    className: "rk-bag"
  }, "Bag (", bag, ")"), /*#__PURE__*/React.createElement(Button, {
    variant: "book",
    onClick: () => onNav('services')
  }, "Book now"))), /*#__PURE__*/React.createElement("nav", {
    className: "rk-subnav"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('shop'),
    className: "active"
  }, "Shop the Juices"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('cleanses')
  }, "Cleanse Programs"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('services')
  }, "Wellness Services"), /*#__PURE__*/React.createElement("a", {
    href: "journal.html"
  }, "Journal"), /*#__PURE__*/React.createElement("a", {
    href: "community.html"
  }, "Community"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('about')
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('collab')
  }, "Let's Collab")));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "rk-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-hero-copy"
  }, /*#__PURE__*/React.createElement(Seal, {
    variant: "dark",
    size: 256,
    className: "rk-hero-logo"
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "100% Fresh Juice"), /*#__PURE__*/React.createElement("h1", null, "Release.", /*#__PURE__*/React.createElement("br", null), "Refresh.", /*#__PURE__*/React.createElement("br", null), "Revive."), /*#__PURE__*/React.createElement("p", null, "Cold-pressed with purpose. Nutrient-dense juices, cleanse programs, and wellness rituals crafted to help you feel your absolute best \u2014 inside and out."), /*#__PURE__*/React.createElement("div", {
    className: "rk-hero-ctas"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    onClick: () => onNav('shop')
  }, "Shop the Juices"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav('cleanses')
  }, "Start a Cleanse"))), /*#__PURE__*/React.createElement("div", {
    className: "rk-hero-figure"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero,
    alt: "Revive Wellness cold-pressed juices",
    onError: e => {
      e.currentTarget.style.display = 'none';
    }
  }))));
}
function ShopCard({
  juice,
  onAdd
}) {
  const [pack, setPack] = useState('6');
  const [plan, setPlan] = useState('once');
  const unit = Math.round(PACKS[pack] * (1 - PLANS[plan].d));
  return /*#__PURE__*/React.createElement(ProductCard, {
    name: juice.name,
    ingredients: juice.ing,
    tint: juice.tint,
    image: juice.img,
    badge: juice.badge,
    price: money(unit),
    priceNote: `${PACK_LABEL[pack]} · ${PLANS[plan].n}`,
    onPackChange: e => setPack(e.target.value),
    onPlanChange: e => setPlan(e.target.value),
    onAdd: () => onAdd(`Revive ${juice.name}`)
  });
}
function App() {
  const [bag, setBag] = useState(0);
  const [toast, setToast] = useState(null);
  const add = label => {
    setBag(b => b + 1);
    setToast(`Added ${label} to your bag`);
    clearTimeout(window.__rkToast);
    window.__rkToast = setTimeout(() => setToast(null), 2200);
  };
  const nav = id => {
    const el = document.getElementById('sec-' + id) || document.getElementById(id);
    if (el) window.scrollTo({
      top: id === 'top' ? 0 : el.offsetTop - 120,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-root"
  }, /*#__PURE__*/React.createElement(Masthead, {
    bag: bag,
    onNav: nav
  }), /*#__PURE__*/React.createElement(Hero, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Marquee, null), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-shop",
    id: "sec-shop"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "onBrand",
    eyebrow: "Shop",
    title: "The *Juices*",
    sub: "Four cold-pressed blends. Pick a size, pick a cadence, and we press the morning it ships."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-grid4"
  }, JUICES.map(j => /*#__PURE__*/React.createElement(ShopCard, {
    key: j.name,
    juice: j,
    onAdd: add
  })))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section",
    id: "sec-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-about-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Who are we?"), /*#__PURE__*/React.createElement("h2", null, "Where wellness meets vitality."), /*#__PURE__*/React.createElement("p", null, "At Revive Wellness, we believe true vitality comes from nurturing your body inside and out. We're more than a juice brand \u2014 we're your partners in cultivating a lifestyle that radiates health, balance, and natural beauty."), /*#__PURE__*/React.createElement("p", null, "We carefully craft fresh, nutrient-rich juices that energize you from within, and curate wellness rituals that support your daily self-care."), /*#__PURE__*/React.createElement("p", {
    className: "rk-sign"
  }, "Welcome to Revive Wellness.")), /*#__PURE__*/React.createElement("div", {
    className: "rk-about-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.about,
    alt: "Wellness ritual",
    onError: e => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement.style.background = 'var(--green)';
    }
  })))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-cleanse",
    id: "sec-cleanses"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Reset & Restore",
    title: "Cleanse *Programs*",
    sub: "Guided cold-pressed cleanses to reset your system. Pick a length \u2014 we handle the rest."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-grid4"
  }, CLEANSES.map(c => /*#__PURE__*/React.createElement(CleanseCard, {
    key: c.days,
    days: c.days,
    description: c.desc,
    price: c.price,
    onStart: () => add(`${c.days} Cleanse`)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section",
    id: "sec-services"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Book an experience",
    title: "Wellness *Services*",
    sub: "Beyond the bottle \u2014 in-person rituals to restore body and skin."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-grid3"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    title: s.title,
    description: s.body,
    cta: `Book a ${s.title.split(' ')[0].toLowerCase()}`,
    onBook: () => add(s.title)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-collab",
    id: "sec-collab"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "Let's Collab!"), /*#__PURE__*/React.createElement("h2", {
    className: "rk-collab-title"
  }, "Partner with ", /*#__PURE__*/React.createElement("em", null, "Revive")), /*#__PURE__*/React.createElement("p", null, "Revive Wellness partners with brands, venues, organizations, and community spaces to bring people together through mindful wellness experiences. Hosting an event or adding fresh-pressed wellness to your space? We'd love to hear from you."), /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "Get in touch")), /*#__PURE__*/React.createElement("footer", {
    className: "rk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Seal, {
    variant: "white",
    size: 70
  }), /*#__PURE__*/React.createElement("p", {
    className: "rk-footer-tag"
  }, "Cold pressed with purpose.", /*#__PURE__*/React.createElement("br", null), "Release, refresh, revive.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Shop"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Juices")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Cleanse Programs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Services")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Our Story")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "journal.html"
  }, "Journal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "community.html"
  }, "Revive Circle")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Contact")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Legal"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Privacy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Terms"))))), /*#__PURE__*/React.createElement("div", {
    className: "rk-footer-legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Revive Wellness"), /*#__PURE__*/React.createElement("span", null, "Where wellness meets vitality."))), /*#__PURE__*/React.createElement("div", {
    className: 'rk-toast' + (toast ? ' show' : '')
  }, toast));
}
window.ReviveSite = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Community.jsx
try { (() => {
/* Revive Wellness — Community "Revive Circle" screen. Exposes window.ReviveCommunity. */
const {
  useState
} = React;
const DS = window.ReviveWellnessDesignSystem_67c5dd;
const {
  Button,
  Badge,
  Eyebrow,
  Seal,
  Tag,
  Avatar,
  Select
} = DS;
const CHANNELS = [{
  key: 'Announcements',
  tone: 'ink',
  n: 12
}, {
  key: 'Recipes',
  tone: 'green',
  n: 48
}, {
  key: 'Rituals',
  tone: 'orange',
  n: 31
}, {
  key: 'Wins',
  tone: 'gold',
  n: 66
}, {
  key: 'Q&A',
  tone: 'green',
  n: 90
}];
const SEED = [{
  id: 3,
  author: 'Ryan Hampton',
  founder: true,
  tint: 'var(--green-deep)',
  time: '2h ago',
  channel: 'Announcements',
  tone: 'ink',
  pinned: true,
  title: "New seasonal flavor drops Friday — Circle gets it first",
  body: "Hey everyone. We've been testing a watermelon–mint–lime shot all month and it's finally ready. Circle members get first access this Friday, a full week before the public. Reply with what you'd want to see next and I read every one.",
  likes: 42,
  replies: 18
}, {
  id: 2,
  author: 'Maya L.',
  tint: 'var(--tint-red)',
  time: '5h ago',
  channel: 'Wins',
  tone: 'gold',
  title: 'Day 3 of the reset and I actually slept',
  body: "Not here to overclaim but this is the first week in ages I've woken up before my alarm. The 3-day cleanse pacing tips in the journal helped a ton.",
  likes: 27,
  replies: 9
}, {
  id: 1,
  author: 'Devon K.',
  tint: 'var(--tint-green)',
  time: '1d ago',
  channel: 'Q&A',
  tone: 'green',
  title: 'Can I swap Green for Orange mid-subscription?',
  body: 'Signed up for the bi-weekly Green but want to alternate with Orange. Is that a per-shipment thing or do I have to cancel and restart?',
  likes: 6,
  replies: 4
}];
function CommunityHeader() {
  return /*#__PURE__*/React.createElement("header", {
    className: "rk-masthead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Shop"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Cleanses"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Services")), /*#__PURE__*/React.createElement("a", {
    className: "rk-brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement(Seal, {
    variant: "white",
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side rk-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "journal.html"
  }, "Journal"), /*#__PURE__*/React.createElement("a", {
    href: "community.html",
    className: "active"
  }, "Community"), /*#__PURE__*/React.createElement(Button, {
    variant: "book"
  }, "Book now"))));
}
function Post({
  p,
  onLike
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: 'rk-post' + (p.pinned ? ' rk-post--pinned' : '')
  }, p.pinned && /*#__PURE__*/React.createElement("div", {
    className: "rk-post-pin"
  }, "Pinned by the founder"), /*#__PURE__*/React.createElement("div", {
    className: "rk-post-head"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.author,
    founder: p.founder,
    tint: p.tint,
    size: 46
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-post-who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-post-author"
  }, p.author, p.founder && /*#__PURE__*/React.createElement(Badge, {
    variant: "new",
    className: "rk-founder-badge"
  }, "Founder")), /*#__PURE__*/React.createElement("span", {
    className: "rk-post-time"
  }, p.time, " \xB7 in ", p.channel)), /*#__PURE__*/React.createElement(Tag, {
    tone: p.tone
  }, p.channel)), /*#__PURE__*/React.createElement("h3", {
    className: "rk-post-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "rk-post-body"
  }, p.body), /*#__PURE__*/React.createElement("div", {
    className: "rk-post-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'rk-act' + (p.liked ? ' is-on' : ''),
    onClick: () => onLike(p.id)
  }, p.liked ? 'Liked' : 'Like', " \xB7 ", p.likes), /*#__PURE__*/React.createElement("button", {
    className: "rk-act"
  }, p.replies, " replies"), /*#__PURE__*/React.createElement("button", {
    className: "rk-act"
  }, "Share")));
}
function Community() {
  const [posts, setPosts] = useState(SEED);
  const [draft, setDraft] = useState('');
  const [channel, setChannel] = useState('Announcements');
  const like = id => setPosts(ps => ps.map(p => p.id === id ? {
    ...p,
    liked: !p.liked,
    likes: p.likes + (p.liked ? -1 : 1)
  } : p));
  const post = () => {
    const text = draft.trim();
    if (!text) return;
    const tone = (CHANNELS.find(c => c.key === channel) || {}).tone || 'green';
    const first = text.split('\n')[0].slice(0, 80);
    setPosts(ps => [{
      id: Date.now(),
      author: 'Ryan Hampton',
      founder: true,
      tint: 'var(--green-deep)',
      time: 'just now',
      channel,
      tone,
      pinned: channel === 'Announcements',
      title: first,
      body: text,
      likes: 0,
      replies: 0
    }, ...ps]);
    setDraft('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-root"
  }, /*#__PURE__*/React.createElement(CommunityHeader, null), /*#__PURE__*/React.createElement("section", {
    className: "rk-circle-hero"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Revive Circle"), /*#__PURE__*/React.createElement("h1", {
    className: "rk-journal-title"
  }, "Where the ", /*#__PURE__*/React.createElement("em", null, "Circle"), " talks."), /*#__PURE__*/React.createElement("p", null, "A members' space for recipes, rituals, and wins \u2014 and a direct line to the founder. Ryan posts here every week; reply to any thread and he reads them all.")), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-circle-wrap"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "rk-circle-side"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "rk-side-h"
  }, "Channels"), /*#__PURE__*/React.createElement("ul", {
    className: "rk-channels"
  }, CHANNELS.map(c => /*#__PURE__*/React.createElement("li", {
    key: c.key
  }, /*#__PURE__*/React.createElement("span", {
    className: "rk-ch-dot",
    "data-tone": c.tone
  }), c.key, /*#__PURE__*/React.createElement("span", {
    className: "rk-ch-n"
  }, c.n)))), /*#__PURE__*/React.createElement("div", {
    className: "rk-side-card"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ryan Hampton",
    founder: true,
    tint: "var(--green-deep)",
    size: 54
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rk-side-name"
  }, "Ryan Hampton"), /*#__PURE__*/React.createElement("div", {
    className: "rk-side-role"
  }, "Founder \xB7 hosts the Circle"))), /*#__PURE__*/React.createElement("p", {
    className: "rk-side-note"
  }, "2,481 members \xB7 Be kind, stay honest, no medical claims.")), /*#__PURE__*/React.createElement("div", {
    className: "rk-circle-feed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-composer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-composer-top"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ryan Hampton",
    founder: true,
    tint: "var(--green-deep)",
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    className: "rk-composer-as"
  }, "Posting as ", /*#__PURE__*/React.createElement("strong", null, "Ryan Hampton"), " \xB7 Founder")), /*#__PURE__*/React.createElement("textarea", {
    className: "rk-composer-input",
    placeholder: "Share an update with the Circle \u2014 a new flavor, a ritual, an answer\u2026",
    value: draft,
    onChange: e => setDraft(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-composer-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-composer-chan"
  }, /*#__PURE__*/React.createElement(Select, {
    "aria-label": "Channel",
    value: channel,
    onChange: e => setChannel(e.target.value),
    options: CHANNELS.map(c => ({
      value: c.key,
      label: c.key
    }))
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    onClick: post
  }, "Post to Circle"))), posts.map(p => /*#__PURE__*/React.createElement(Post, {
    key: p.id,
    p: p,
    onLike: like
  })))));
}
window.ReviveCommunity = Community;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Community.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Journal.jsx
try { (() => {
/* Revive Wellness — Journal (blog) screen. Exposes window.ReviveJournal. */
const {
  useState
} = React;
const DS = window.ReviveWellnessDesignSystem_67c5dd;
const {
  Button,
  Eyebrow,
  SectionHeading,
  Seal,
  Tag,
  ArticleCard
} = DS;
const U = id => `https://images.unsplash.com/photo-${id}?w=900&q=75&auto=format&fit=crop`;
const FEATURED = {
  category: 'Ritual',
  title: 'The five-minute morning glow ritual',
  blurb: "You don't need an hour and a ten-step routine. You need a green juice, a window, and five honest minutes. Here's the exact sequence we start every day with at the kitchen.",
  image: U('1540555700478-4be289fbecef'),
  meta: 'Ryan Hampton · 5 min read'
};
const CATEGORIES = ['All', 'Ritual', 'Recipes', 'Sourcing', 'Glow', 'Immunity'];
const STORIES = [{
  category: 'Recipes',
  tone: 'green',
  title: 'What actually goes in a Red',
  blurb: 'Beet, apple, pomegranate, ginger — the why behind the blend, and how to make it at home.',
  image: U('1600718374662-0483d2b9da44'),
  meta: '4 min read'
}, {
  category: 'Sourcing',
  tone: 'gold',
  title: 'Where our ginger comes from',
  blurb: 'Whole-root, never powder. A note on the farms we buy from and why it matters in the bottle.',
  image: U('1622597467836-f3285f2131b8'),
  meta: '6 min read'
}, {
  category: 'Glow',
  tone: 'orange',
  title: 'Skin from the inside out',
  blurb: 'The link between what you drink and how your skin behaves — minus the miracle claims.',
  image: U('1571019613454-1cb2f99b2d8b'),
  meta: '7 min read'
}, {
  category: 'Immunity',
  tone: 'green',
  title: 'Cayenne, honey, and the Lemonade',
  blurb: 'Our simplest shot has three ingredients and one job. Here is what each one does.',
  image: U('1621263764928-df1444c5e859'),
  meta: '3 min read'
}, {
  category: 'Ritual',
  tone: 'orange',
  title: 'How to do a 3-day cleanse like a human',
  blurb: 'No misery, no white-knuckling. A gentle, realistic way through your first reset.',
  image: U('1610970881699-44a5587cabec'),
  meta: '8 min read'
}, {
  category: 'Recipes',
  tone: 'green',
  title: 'The Orange, deconstructed',
  blurb: 'Orange, carrot, turmeric, ginger. Warm, bright, and quietly anti-inflammatory.',
  image: U('1600271886742-f049cd451bba'),
  meta: '4 min read'
}];
function JournalHeader() {
  return /*#__PURE__*/React.createElement("header", {
    className: "rk-masthead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Shop"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Cleanses"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Services")), /*#__PURE__*/React.createElement("a", {
    className: "rk-brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement(Seal, {
    variant: "white",
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side rk-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "journal.html",
    className: "active"
  }, "Journal"), /*#__PURE__*/React.createElement("a", {
    href: "community.html"
  }, "Community"), /*#__PURE__*/React.createElement(Button, {
    variant: "book"
  }, "Book now"))));
}
function Journal() {
  const [cat, setCat] = useState('All');
  const shown = cat === 'All' ? STORIES : STORIES.filter(s => s.category === cat);
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-root"
  }, /*#__PURE__*/React.createElement(JournalHeader, null), /*#__PURE__*/React.createElement("section", {
    className: "rk-journal-hero"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Journal"), /*#__PURE__*/React.createElement("h1", {
    className: "rk-journal-title"
  }, "Field notes from the ", /*#__PURE__*/React.createElement("em", null, "kitchen"), "."), /*#__PURE__*/React.createElement("p", null, "Recipes, rituals, and honest sourcing notes \u2014 short essays from the people who press your juice.")), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-journal-featured-wrap"
  }, /*#__PURE__*/React.createElement("article", {
    className: "rk-featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-featured-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: FEATURED.image,
    alt: FEATURED.title,
    onError: e => {
      e.currentTarget.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-featured-body"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "orange"
  }, FEATURED.category), /*#__PURE__*/React.createElement("h2", {
    className: "rk-featured-title"
  }, FEATURED.title), /*#__PURE__*/React.createElement("p", {
    className: "rk-featured-blurb"
  }, FEATURED.blurb), /*#__PURE__*/React.createElement("div", {
    className: "rk-featured-meta"
  }, FEATURED.meta), /*#__PURE__*/React.createElement(Button, {
    variant: "orange"
  }, "Read the story")))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-journal-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-cat-filter"
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: 'rk-cat' + (cat === c ? ' is-active' : ''),
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "rk-article-grid"
  }, shown.map(s => /*#__PURE__*/React.createElement(ArticleCard, {
    key: s.title,
    category: s.category,
    categoryTone: s.tone,
    title: s.title,
    blurb: s.blurb,
    image: s.image,
    meta: s.meta
  })))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-collab"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold"
  }, "Member letters"), /*#__PURE__*/React.createElement("h2", {
    className: "rk-collab-title"
  }, "Get the ", /*#__PURE__*/React.createElement("em", null, "next one"), " in your inbox."), /*#__PURE__*/React.createElement("p", null, "Short journal essays from the kitchen \u2014 sourcing notes, new flavors, and what we're testing next. No spam, unsubscribe in one click."), /*#__PURE__*/React.createElement("form", {
    className: "rk-subscribe-form",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "you@email.com",
    "aria-label": "Email address"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    as: "button"
  }, "Subscribe"))));
}
window.ReviveJournal = Journal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Journal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Subscribe.jsx
try { (() => {
/* Revive Wellness — Subscribe & Save screen. Exposes window.ReviveSubscribe. */
const DS = window.ReviveWellnessDesignSystem_67c5dd;
const {
  Button,
  Eyebrow,
  SectionHeading,
  Seal,
  PlanCard,
  Marquee
} = DS;
const STEPS = [{
  n: '1',
  h: 'Pick your juice',
  p: 'Orange, Red, Green, or Lemonade — or mix a 12-pack.'
}, {
  n: '2',
  h: 'Pick a cadence',
  p: 'Every 2 weeks or every month. Change it later if your habit shifts.'
}, {
  n: '3',
  h: 'We press the morning of',
  p: 'Whole-food ingredients, juiced fresh and cold-packed for overnight.'
}, {
  n: '4',
  h: 'Drink. Repeat.',
  p: 'Pause, swap, or cancel from your account in 30 seconds.'
}];
const PERKS = [{
  h: 'Free shipping',
  p: 'Cold-pack, overnight where possible. Always included for subscribers.'
}, {
  h: 'Early access',
  p: 'New seasonal flavors land in your subscription a full week before public release.'
}, {
  h: 'Swap any time',
  p: 'Bored of Green this month? Switch to Red for one shipment, back the next.'
}, {
  h: 'Member letters',
  p: "Short journal essays from the kitchen — sourcing notes, what we're testing next."
}, {
  h: 'Refer a friend',
  p: 'Give them a free 6-pack, get a credit on your next shipment.'
}, {
  h: 'Honest cancellation',
  p: 'Self-serve in one click from your account. No retention emails.'
}];
function SubHeader() {
  return /*#__PURE__*/React.createElement("header", {
    className: "rk-masthead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side"
  }, /*#__PURE__*/React.createElement("a", null, "Shop"), /*#__PURE__*/React.createElement("a", null, "Cleanses"), /*#__PURE__*/React.createElement("a", null, "Services")), /*#__PURE__*/React.createElement("a", {
    className: "rk-brand"
  }, /*#__PURE__*/React.createElement(Seal, {
    variant: "white",
    size: 72
  })), /*#__PURE__*/React.createElement("div", {
    className: "rk-topbar-side rk-right"
  }, /*#__PURE__*/React.createElement("a", null, "About"), /*#__PURE__*/React.createElement("a", null, "Contact"), /*#__PURE__*/React.createElement(Button, {
    variant: "book"
  }, "Book now"))));
}
function Subscribe() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rk-root"
  }, /*#__PURE__*/React.createElement(SubHeader, null), /*#__PURE__*/React.createElement("section", {
    className: "rk-sub-hero"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Subscribe & Save"), /*#__PURE__*/React.createElement("h1", {
    className: "rk-sub-title"
  }, "A ritual,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "not a purchase.")), /*#__PURE__*/React.createElement("p", null, "Save up to 15%, get free cold-pack shipping on every box, and never run out. Skip, pause, or cancel anytime from your account \u2014 no phone tree.")), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Save Up To 15%', 'Free Cold-Pack Shipping', 'Skip, Pause Or Cancel Anytime']
  }), /*#__PURE__*/React.createElement("section", {
    className: "rk-section"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pick a cadence",
    title: "Every *two weeks* or every *month*."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-plan-grid"
  }, /*#__PURE__*/React.createElement(PlanCard, {
    popular: true,
    name: "Every 2 weeks",
    price: "Save 15%",
    cta: "Start bi-weekly",
    features: ['Free cold-pack shipping', 'Pause, skip, swap anytime', 'First dibs on new flavors', 'Member-only journal letters']
  }), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Every month",
    price: "Save 10%",
    cta: "Start monthly",
    features: ['Free cold-pack shipping', 'Pause, skip, swap anytime', 'Best fit for slower drinkers', 'Member-only journal letters']
  }))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-cleanse"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "Four *simple* steps."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-steps"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "rk-step",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "rk-step-n"
  }, s.n), /*#__PURE__*/React.createElement("h4", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Member perks",
    title: "What you get *extra*."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rk-perks"
  }, PERKS.map(p => /*#__PURE__*/React.createElement("div", {
    className: "rk-perk",
    key: p.h
  }, /*#__PURE__*/React.createElement("h4", null, p.h), /*#__PURE__*/React.createElement("p", null, p.p))))), /*#__PURE__*/React.createElement("section", {
    className: "rk-section rk-collab"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "rk-collab-title"
  }, "Press ", /*#__PURE__*/React.createElement("em", null, "play"), "."), /*#__PURE__*/React.createElement("p", null, "Pick your juice, pick your cadence, get pressed-yesterday wellness in your fridge."), /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "Start subscription")));
}
window.ReviveSubscribe = Subscribe;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Subscribe.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.CleanseCard = __ds_scope.CleanseCard;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tag = __ds_scope.Tag;

})();
