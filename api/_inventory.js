// Read-side helpers for inventory.
//
// The actual stock numbers live in api/_catalog.js so they can be edited in one
// place. When orders come in, the Stripe webhook (api/webhook.js) decrements
// stock — in this PoC that's persisted to Supabase if STORAGE is configured,
// otherwise it falls back to the in-memory catalog (which resets on every
// cold start — fine for testing, not for production).
//
// In production you almost certainly want Supabase or another KV/DB so the
// decrement survives function restarts. See LAUNCH.md.

const { PRODUCTS, LOW_STOCK_THRESHOLD } = require('./_catalog');
const { storage } = require('./_supabase');

async function getStockMap() {
  const fromStore = await storage.readStock();
  if (fromStore) return fromStore;
  const out = {};
  for (const [sku, p] of Object.entries(PRODUCTS)) out[sku] = p.stock;
  return out;
}

async function getStock(sku) {
  const map = await getStockMap();
  return map[sku] != null ? map[sku] : 0;
}

// Returns a public-safe shape for the storefront:
//   { glow: { stock: 240, status: 'in_stock' }, ... }
async function publicStockSnapshot() {
  const map = await getStockMap();
  const out = {};
  for (const sku of Object.keys(PRODUCTS)) {
    const stock = map[sku] != null ? map[sku] : 0;
    out[sku] = {
      stock,
      status: stock <= 0 ? 'sold_out' : (stock <= LOW_STOCK_THRESHOLD ? 'low' : 'in_stock'),
    };
  }
  return out;
}

async function decrement(sku, bottles) {
  return storage.decrementStock(sku, bottles);
}

module.exports = { getStock, getStockMap, publicStockSnapshot, decrement };
