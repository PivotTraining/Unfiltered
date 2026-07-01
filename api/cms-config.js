// Returns the Sanity project ID + dataset so the browser can fetch content
// directly from Sanity's CDN. Project IDs are public-safe to expose.
// If env vars aren't set, returns nulls and the front-end falls back to the
// static HTML defaults so the site never breaks.
module.exports = (_req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).json({
    projectId: process.env.SANITY_PROJECT_ID || null,
    dataset: process.env.SANITY_DATASET || 'production',
  });
};
