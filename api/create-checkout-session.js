// Creates a Stripe Embedded Checkout session and returns its client_secret.
// The browser mounts the embedded checkout with that secret — payment happens
// on-page, no redirect to stripe.com.
const Stripe = require('stripe');
const { resolveSelection } = require('./_catalog');

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

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: resolved.mode,
      line_items: [resolved.line_item],
      automatic_tax: { enabled: false },
      shipping_address_collection: { allowed_countries: ['US'] },
      return_url: `${getBaseUrl(req)}/return.html?session_id={CHECKOUT_SESSION_ID}`,
    });
    return res.status(200).json({ clientSecret: session.client_secret });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
