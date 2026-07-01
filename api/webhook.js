// Stripe webhook receiver. Stripe POSTs us events when checkout completes; we
// persist the order, decrement stock, and email a notification. Must verify
// the signature with STRIPE_WEBHOOK_SECRET so attackers can't forge orders.
//
// Vercel config (see vercel.json): rawBody is enabled so Stripe's signature
// verification works.

const Stripe = require('stripe');
const { storage } = require('./_supabase');
const { decrement } = require('./_inventory');
const { notifyNewOrder } = require('./_email');

async function readRaw(req) {
  return await new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).send('Webhook not configured.');
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers['stripe-signature'];
  const raw = await readRaw(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('[webhook] signature failed:', err.message);
    return res.status(400).send(`Webhook signature failed: ${err.message}`);
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      const md = s.metadata || {};
      const order = {
        id: s.id,
        sku: md.sku || null,
        pack: md.pack || null,
        plan: md.plan || null,
        bottles: md.bottles ? Number(md.bottles) : 0,
        amount_cents: s.amount_total || 0,
        email: s.customer_details && s.customer_details.email,
        status: s.payment_status,
        product_name: null,
        raw: s,
      };

      await Promise.all([
        storage.insertOrder(order),
        order.sku && order.bottles ? decrement(order.sku, order.bottles) : Promise.resolve(),
        notifyNewOrder(order),
      ]);
    }
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[webhook] handler error:', err);
    return res.status(500).json({ error: err.message });
  }
};
