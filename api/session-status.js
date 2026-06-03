// Looks up a completed checkout session so the return page can show a result.
const Stripe = require('stripe');

module.exports = async (req, res) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Stripe is not configured.' });
  }
  const sessionId = (req.query && req.query.session_id) ||
    new URL(req.url, 'http://x').searchParams.get('session_id');
  if (!sessionId) return res.status(400).json({ error: 'Missing session_id.' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return res.status(200).json({
      status: session.status,
      payment_status: session.payment_status,
      email: session.customer_details && session.customer_details.email,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
