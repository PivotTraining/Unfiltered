# Unfiltered — Launch Runbook

Everything you need to take the site from test mode to taking real orders. Each section is independent — do them in any order, skip what you don't need yet.

## 1. Custom domain

Goal: serve the site at `unfiltered.shop` (or whatever you own) instead of `unfiltered-*.vercel.app`.

1. **Buy/own the domain** at a registrar (Namecheap, Cloudflare, Google Domains, etc.). If it's `unfiltered.shop`, you'd buy that there.
2. **Vercel side**: Project → **Settings → Domains** → **Add** → type `unfiltered.shop` → submit. Vercel will show you DNS records to set.
3. **Registrar side**: log into your registrar's DNS panel and add the records Vercel told you to add. Typically:
   - `A` record for `@` (root) → Vercel's IP
   - `CNAME` for `www` → `cname.vercel-dns.com`
4. DNS takes 5 min – 24 hr to propagate. Vercel will show "Valid Configuration" once it sees the records and issues an SSL cert automatically.
5. Once active, also set `PUBLIC_BASE_URL=https://unfiltered.shop` in Vercel env vars (Production) so checkout return URLs use the real domain.

## 2. Order notifications (Resend → email)

You'll get an email every time an order completes.

1. Sign up at [resend.com](https://resend.com) (free tier covers ~3k emails/month).
2. **Add your domain** (e.g. `unfiltered.shop`) in Resend and follow the DNS records to verify. Required to send from `orders@unfiltered.shop`.
3. Create an API key. Add to Vercel env vars (Production + Preview):
   - `RESEND_API_KEY=re_...`
   - `ORDER_NOTIFY_EMAIL=hello@unfiltered.shop` (or wherever you want alerts)
   - `ORDER_NOTIFY_FROM=orders@unfiltered.shop` (must match a verified domain)
4. Then set up the webhook (next step) — emails fire from the webhook handler.

## 3. Stripe webhook (required for emails + inventory + order storage)

1. Stripe Dashboard → **Developers → Webhooks → Add endpoint**.
2. Endpoint URL: `https://unfiltered.shop/api/webhook` (or your Vercel URL while testing).
3. **Events to send**: select `checkout.session.completed`. (Add more later if you want — subscription renewals, refunds, etc.)
4. Stripe shows a **Signing secret** (`whsec_...`). Copy it.
5. Vercel env vars → add `STRIPE_WEBHOOK_SECRET=whsec_...` (Production + Preview). Redeploy.
6. **Test it**: Stripe Dashboard → Webhooks → your endpoint → **Send test event** → pick `checkout.session.completed`. Check Vercel logs to confirm 200 response.

## 4. Stripe Tax + real shipping rates

### Tax
1. Stripe Dashboard → **Tax → Settings → Activate**. Walk through state registrations.
2. Add product tax codes (Stripe suggests defaults).
3. Vercel env var: `STRIPE_TAX_ENABLED=true`. Redeploy.

### Shipping rates
1. Stripe Dashboard → **Products → Shipping rates → Create**. Add as many as you want (e.g. "Standard $0", "Cold-pack overnight $15").
2. Copy each `shr_...` ID.
3. Vercel env var: `STRIPE_SHIPPING_RATES=shr_aaa,shr_bbb` (comma-separated). Redeploy.
4. Customer picks at checkout. (Note: only applies to one-time orders. Subscription pricing already includes shipping.)

## 5. Order storage in Supabase

So you keep your own copy of every order and stock survives serverless restarts.

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. **SQL editor** → run:
   ```sql
   create table if not exists inventory (
     sku   text primary key,
     stock int not null
   );

   insert into inventory (sku, stock) values
     ('glow',     240),
     ('immunity', 180),
     ('citrus',   120),
     ('reset',     60)
   on conflict (sku) do nothing;

   create table if not exists orders (
     id            text primary key,
     sku           text,
     pack          text,
     plan          text,
     bottles       int,
     amount_cents  int,
     email         text,
     status        text,
     product_name  text,
     raw           jsonb,
     created_at    timestamptz default now()
   );
   ```
3. **Project Settings → API**: copy the **Project URL** and the **service_role** key (NOT the anon key — it has to be the service role to write).
4. Vercel env vars (Production + Preview):
   - `SUPABASE_URL=https://xxx.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY=eyJ...`
5. Redeploy. Place a test order → you should see a row appear in `orders` and `inventory.stock` decrement.

## 6. Inventory / sold-out states

This already works in code:
- `api/_catalog.js` holds the **default** stock per SKU.
- If Supabase is configured (step 5), it becomes the live source of truth.
- `/api/stock` returns the snapshot; the front-end badges low/sold-out automatically.
- Checkout blocks orders when stock is insufficient.

To **change starting stock**: edit numbers in `api/_catalog.js` (no Supabase) or update the `inventory` table (with Supabase).

## 7. Real product photos

The current `assets/*.jpg` files are placeholders from the original design handoff.

1. Shoot or commission bottle photos at ~1500×1500 px, square, on cream/neutral background to match the brand.
2. File names to replace, all in `assets/`:
   - `hero.jpg` — hero shot (bottle group, larger)
   - `glow.jpg`, `immunity.jpg`, `citrus.jpg`, `reset.jpg` — each individual product
   - `batch.jpg` — "small batch" lifestyle shot
3. Same filenames means no code changes needed. Commit + push, Vercel auto-deploys.

---

## Going from test → live mode

1. Stripe Dashboard → toggle **Test mode → Live mode** (top right).
2. **Activate your account** — Stripe walks you through business details, bank account, etc.
3. Go to **Developers → API keys** (in live mode) and copy `pk_live_...` / `sk_live_...`.
4. **Redo the webhook** in live mode (Stripe webhooks are separate per mode). Copy its new `whsec_...`.
5. Vercel → **Production** env vars: replace test keys with live ones.
   - `STRIPE_SECRET_KEY=sk_live_...`
   - `STRIPE_PUBLISHABLE_KEY=pk_live_...`
   - `STRIPE_WEBHOOK_SECRET=whsec_...` (the live one)
6. Leave Preview/Development on test keys so dev work doesn't charge cards.
7. Redeploy production. You're live.
