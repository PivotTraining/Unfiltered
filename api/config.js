// Hands the browser the publishable key (safe to expose) so the front end
// doesn't have to hardcode it. Reads from the Vercel env var.
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
  });
};
