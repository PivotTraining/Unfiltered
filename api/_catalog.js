// Single source of truth for what Revive Wellness sells. Prices in cents (USD).
// The storefront posts a { sku, pack, plan } selection; the server looks it up
// here and builds the Stripe line item. Keeping prices server-side means the
// browser can never tamper with what gets charged.
//
// BACKEND CONTROL: these are the defaults / fallbacks. Once the Sanity CMS +
// Supabase are wired (see LAUNCH.md), the owner edits products, prices, and
// stock from a dashboard and those become the live source of truth. This file
// guarantees the store still works before/without that setup.

const PRODUCTS = {
  orange:   { name: 'Orange',   blurb: 'Orange · Carrot · Turmeric · Ginger',   color: '#e8732a', stock: 60 },
  red:      { name: 'Red',      blurb: 'Beet · Apple · Pomegranate · Ginger',   color: '#7e2f44', stock: 60 },
  green:    { name: 'Green',    blurb: 'Green Apple · Celery · Cucumber · Kale', color: '#4e7d2c', stock: 60 },
  lemonade: { name: 'Lemonade', blurb: 'Lemon · Cayenne · Raw Honey',           color: '#d8ac4e', stock: 60 },
};

// Purchase sizes -> { label, one-time price in cents, bottles }.
const PACKS = {
  single: { label: 'Single bottle', amount: 900,  bottles: 1  },
  '4':    { label: '4-pack',        amount: 3400, bottles: 4  },
  '6':    { label: '6-pack',        amount: 4800, bottles: 6  },
  '12':   { label: '12-pack',       amount: 9000, bottles: 12 },
};

// Cleanse programs — one-time bundles.
const CLEANSES = {
  'cleanse-1':  { label: '1-Day Cleanse',  amount: 3500,  bottles: 6   },
  'cleanse-3':  { label: '3-Day Cleanse',  amount: 9900,  bottles: 18  },
  'cleanse-7':  { label: '7-Day Cleanse',  amount: 21000, bottles: 42  },
  'cleanse-30': { label: '30-Day Cleanse', amount: 78000, bottles: 180 },
};

// Subscription plans -> discount + Stripe billing interval.
const PLANS = {
  once:     { label: 'One-time',      discount: 0,    interval: null },
  weekly:   { label: 'Every week',    discount: 0.15, interval: 'week', intervalCount: 1 },
  biweekly: { label: 'Every 2 weeks', discount: 0.10, interval: 'week', intervalCount: 2 },
};

const LOW_STOCK_THRESHOLD = 12;

// Resolve a juice selection into a Stripe line item + checkout mode + bottle count.
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
        name: `Revive ${product.name} — ${packDef.label}`,
        description: `${product.blurb}${planDef.interval ? ` · ${planDef.label}` : ''}`,
        metadata: { sku, pack, plan, bottles: String(packDef.bottles) },
      },
    },
  };

  return {
    line_item,
    mode: planDef.interval ? 'subscription' : 'payment',
    bottles: packDef.bottles,
    productName: `Revive ${product.name}`,
  };
}

// Resolve a cleanse program (one-time only).
function resolveCleanse({ cleanse }) {
  const c = CLEANSES[cleanse];
  if (!c) return null;
  return {
    line_item: {
      quantity: 1,
      price_data: {
        currency: 'usd',
        unit_amount: c.amount,
        product_data: {
          name: `Revive Wellness — ${c.label}`,
          description: `Cold-pressed cleanse program · ${c.bottles} bottles`,
          metadata: { cleanse, bottles: String(c.bottles) },
        },
      },
    },
    mode: 'payment',
    bottles: c.bottles,
    productName: c.label,
  };
}

module.exports = { PRODUCTS, PACKS, CLEANSES, PLANS, LOW_STOCK_THRESHOLD, resolveSelection, resolveCleanse };
