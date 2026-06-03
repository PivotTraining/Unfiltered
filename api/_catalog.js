// Single source of truth for what Unfiltered sells. Prices are in cents (USD).
// The dropdowns on the site post a { sku, pack, plan } selection; the server
// looks it up here and builds the Stripe line item. Keeping prices server-side
// means the browser can never tamper with what gets charged.

const PRODUCTS = {
  glow:     { name: 'Unfiltered Glow',           blurb: 'Apple · Mint · Turmeric · Lime' },
  immunity: { name: 'Unfiltered Immunity Boost',  blurb: 'Ginger · Citrus · Cayenne' },
  citrus:   { name: 'Unfiltered Citrus Fire',     blurb: 'Lemon · Honey · Ginger' },
  reset:    { name: 'Unfiltered Reset',           blurb: 'Beet · Tart Cherry · Lemon' },
};

// Pack sizes -> one-time price in cents.
const PACKS = {
  '6':  { label: '6-pack',  amount: 3600 },
  '12': { label: '12-pack', amount: 6600 },
  '24': { label: '24-pack', amount: 12000 },
};

// Subscription plans -> { discount applied to pack price, Stripe billing interval }.
// 'once' is a one-time purchase. The others recur and apply a standing discount.
const PLANS = {
  once:     { label: 'One-time',          discount: 0,    interval: null },
  biweekly: { label: 'Every 2 weeks',     discount: 0.15, interval: 'week',  intervalCount: 2 },
  monthly:  { label: 'Every month',       discount: 0.10, interval: 'month', intervalCount: 1 },
};

// Resolve a selection into a Stripe line item + the checkout mode.
// Returns null if the selection is invalid.
function resolveSelection({ sku, pack, plan }) {
  const product = PRODUCTS[sku];
  const packDef = PACKS[pack];
  const planDef = PLANS[plan];
  if (!product || !packDef || !planDef) return null;

  const unit = Math.round(packDef.amount * (1 - planDef.discount));
  const recurring = planDef.interval
    ? { interval: planDef.interval, interval_count: planDef.intervalCount }
    : undefined;

  const line_item = {
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: unit,
      ...(recurring ? { recurring } : {}),
      product_data: {
        name: `${product.name} — ${packDef.label}`,
        description: `${product.blurb}${planDef.interval ? ` · ${planDef.label}` : ''}`,
      },
    },
  };

  return { line_item, mode: planDef.interval ? 'subscription' : 'payment' };
}

module.exports = { PRODUCTS, PACKS, PLANS, resolveSelection };
