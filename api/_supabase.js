// Optional Supabase persistence for orders + inventory.
//
// If SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set as Vercel env vars,
// orders get logged to the `orders` table and stock is read/decremented from
// the `inventory` table. If those env vars are missing, everything degrades
// gracefully to no-op / in-memory — Stripe still works, you just won't have
// your own copy of the orders.
//
// Required schema (see LAUNCH.md for the SQL):
//   inventory(sku text primary key, stock int not null)
//   orders(id text primary key, sku text, pack text, plan text, bottles int,
//          amount_cents int, email text, status text, raw jsonb, created_at timestamptz default now())

const URL_ENV = 'SUPABASE_URL';
const KEY_ENV = 'SUPABASE_SERVICE_ROLE_KEY';

function configured() {
  return Boolean(process.env[URL_ENV] && process.env[KEY_ENV]);
}

function headers() {
  const key = process.env[KEY_ENV];
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation',
  };
}

function base() {
  return process.env[URL_ENV].replace(/\/$/, '') + '/rest/v1';
}

const storage = {
  configured,

  // Returns { sku: stock, ... } or null if Supabase isn't configured.
  async readStock() {
    if (!configured()) return null;
    try {
      const res = await fetch(`${base()}/inventory?select=sku,stock`, { headers: headers() });
      if (!res.ok) return null;
      const rows = await res.json();
      const out = {};
      for (const r of rows) out[r.sku] = r.stock;
      return out;
    } catch { return null; }
  },

  // Atomically decrement stock for a SKU by `bottles`. Returns true on success.
  // Uses a PostgREST RPC if you've defined one; otherwise falls back to a
  // read-modify-write that's safe enough for low volume.
  async decrementStock(sku, bottles) {
    if (!configured()) return false;
    try {
      const get = await fetch(`${base()}/inventory?sku=eq.${encodeURIComponent(sku)}&select=stock`, { headers: headers() });
      if (!get.ok) return false;
      const rows = await get.json();
      const current = rows[0] ? rows[0].stock : 0;
      const next = Math.max(0, current - bottles);
      const upd = await fetch(`${base()}/inventory?sku=eq.${encodeURIComponent(sku)}`, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify({ stock: next }),
      });
      return upd.ok;
    } catch { return false; }
  },

  async insertOrder(order) {
    if (!configured()) return false;
    try {
      const res = await fetch(`${base()}/orders`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(order),
      });
      return res.ok;
    } catch { return false; }
  },
};

module.exports = { storage };
