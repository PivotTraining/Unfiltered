// Tiny Resend-based notifier. If RESEND_API_KEY and ORDER_NOTIFY_EMAIL are
// set, we email you on every order. Falls back to a no-op + console log if
// not configured, so missing env vars never block checkout.

async function sendOrderEmail({ to, from, subject, html }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) { console.log('[email] skip (no RESEND_API_KEY):', subject); return false; }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, from, subject, html }),
    });
    if (!res.ok) console.error('[email] resend failed:', await res.text());
    return res.ok;
  } catch (e) {
    console.error('[email] resend error:', e.message);
    return false;
  }
}

function renderOrderHtml(order) {
  const dollars = (order.amount_cents / 100).toFixed(2);
  return `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;color:#181109;">
      <h2 style="margin:0 0 8px;">New Unfiltered order</h2>
      <p style="margin:0 0 16px;color:#5c4e3b;">${order.email || '(no email)'} just placed an order.</p>
      <table style="border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:4px 14px 4px 0;color:#5c4e3b;">Product</td><td><strong>${order.product_name || order.sku}</strong></td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#5c4e3b;">Pack</td><td>${order.pack}-pack (${order.bottles} bottles)</td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#5c4e3b;">Plan</td><td>${order.plan}</td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#5c4e3b;">Total</td><td><strong>$${dollars}</strong></td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#5c4e3b;">Stripe</td><td><a href="https://dashboard.stripe.com/payments/${order.id}">${order.id}</a></td></tr>
      </table>
    </div>
  `;
}

async function notifyNewOrder(order) {
  const to = process.env.ORDER_NOTIFY_EMAIL;
  const from = process.env.ORDER_NOTIFY_FROM || 'orders@unfiltered.shop';
  if (!to) { console.log('[email] skip (no ORDER_NOTIFY_EMAIL)'); return false; }
  return sendOrderEmail({
    to,
    from,
    subject: `New order — ${order.product_name || order.sku} ${order.pack}-pack — $${(order.amount_cents/100).toFixed(2)}`,
    html: renderOrderHtml(order),
  });
}

module.exports = { notifyNewOrder };
