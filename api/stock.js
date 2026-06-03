// Public stock snapshot for the storefront. Returns { glow: { stock, status }, ... }
// where status is 'in_stock' | 'low' | 'sold_out'. Front end uses this to badge
// or disable cards.
const { publicStockSnapshot } = require('./_inventory');

module.exports = async (req, res) => {
  try {
    const snap = await publicStockSnapshot();
    res.setHeader('Cache-Control', 'public, max-age=30');
    res.status(200).json(snap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
