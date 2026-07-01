// Creates a Stripe Embedded Checkout session and returns its client_secret.
// The browser mounts the embedded checkout with that secret — payment happens
// on-page, no redirect to stripe.com.
const Stripe = require('stripe');
const { resolveSelection } = require('./_catalog');
const { getStock } = require('./_inventory');

function getBaseUrl(req) {
  if (process.env.PUBLIC_BASE_URL) return process.env.PUBLIC_BASE_URL.replace(/\/$/, '');
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${proto}://${host}`;
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  return await new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try { resolve(JSON.parse(data || '{}')); } catch { resolve({}); }
    });
  });
}

// Optional: only enable Stripe Tax / shipping rates if you've configured them
// in the Stripe dashboard. Toggle via env vars so this works for everyone.
const TAX_ENABLED = process.env.STRIPE_TAX_ENABLED === 'true';
const SHIPPING_RATES = (process.env.STRIPE_SHIPPING_RATES || '')
  .split(',').map(s => s.trim()).filter(Boolean); // e.g. "shr_123,shr_456"

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Stripe is not configured (missing STRIPE_SECRET_KEY).' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { sku, pack, plan } = await readJson(req);

  const resolved = resolveSelection({ sku, pack, plan });
  if (!resolved) return res.status(400).json({ error: 'Invalid product selection.' });

  // Inventory gate. Skipped silently if Supabase isn't configured (stock comes
  // back from the catalog default and is high enough), so checkout still works.
  const available = await getStock(sku);
  if (available < resolved.bottles) {
    return res.status(409).json({ error: `Only ${available} bottles of ${resolved.productName} left — pick a smaller pack.` });
  }

  try {
    const params = {
      ui_mode: 'embedded',
      mode: resolved.mode,
      line_items: [resolved.line_item],
      shipping_address_collection: { allowed_countries: ['US'] },
      return_url: `${getBaseUrl(req)}/return.html?session_id={CHECKOUT_SESSION_ID}`,
      metadata: { sku, pack, plan, bottles: String(resolved.bottles) },
    };

    if (TAX_ENABLED) params.automatic_tax = { enabled: true };
    if (SHIPPING_RATES.length && resolved.mode === 'payment') {
      // Stripe shipping_options only apply to one-time mode. Subscriptions
      // bake shipping into the recurring price instead.
      params.shipping_options = SHIPPING_RATES.map((id) => ({ shipping_rate: id }));
    }

    const session = await stripe.checkout.sessions.create(params);
    return res.status(200).json({ clientSecret: session.client_secret });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
