// Checkout bridge for the Revive Wellness UI kit.
// The React homepage calls window.ReviveCheckout(body, label) where body is
// either { sku, pack, plan } or { cleanse }. This opens Stripe Embedded
// Checkout in an on-page modal (no redirect), using the same /api endpoints as
// the rest of the store. Degrades to a friendly message if Stripe isn't
// configured yet, so the design still renders/works as a preview.
(function () {
  // Inject modal + minimal styles once.
  var style = document.createElement('style');
  style.textContent = [
    '.rk-co-overlay{position:fixed;inset:0;z-index:2000;background:rgba(31,36,21,.55);backdrop-filter:blur(4px);display:none;align-items:flex-start;justify-content:center;padding:40px 20px;overflow-y:auto}',
    '.rk-co-overlay.open{display:flex}',
    '.rk-co-modal{background:#fff;width:100%;max-width:540px;border-radius:16px;box-shadow:0 40px 80px -20px rgba(0,0,0,.5);min-height:200px;font-family:-apple-system,BlinkMacSystemFont,sans-serif}',
    '.rk-co-head{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid rgba(31,36,21,.12)}',
    '.rk-co-head h3{font-family:Georgia,serif;font-size:22px;color:#2f4d1c;margin:0}',
    '.rk-co-close{width:34px;height:34px;border-radius:50%;border:1.4px solid rgba(31,36,21,.2);font-size:18px;line-height:1;cursor:pointer;background:none}',
    '.rk-co-close:hover{border-color:#1f2415}',
    '#rk-co-el{padding:10px 14px 18px}',
    '.rk-co-msg{padding:52px 26px;text-align:center;color:#6b7155;font-size:14px}',
    '.rk-co-msg.err{color:#c85a1a}'
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.className = 'rk-co-overlay';
  overlay.innerHTML = '<div class="rk-co-modal"><div class="rk-co-head"><h3 id="rk-co-title">Your order</h3><button class="rk-co-close" aria-label="Close">&times;</button></div><div id="rk-co-el"><div class="rk-co-msg">Preparing secure checkout…</div></div></div>';
  document.body.appendChild(overlay);

  var titleEl = overlay.querySelector('#rk-co-title');
  var el = overlay.querySelector('#rk-co-el');
  var closeBtn = overlay.querySelector('.rk-co-close');
  var stripePromise = null, current = null;

  function getStripe() {
    if (stripePromise) return stripePromise;
    stripePromise = fetch('/api/config').then(function (r) { return r.json(); }).then(function (c) {
      if (!c.publishableKey) throw new Error('Payments are not switched on yet.');
      if (!window.Stripe) throw new Error('Stripe.js failed to load.');
      return Stripe(c.publishableKey);
    });
    return stripePromise;
  }
  function reset() { if (current) { try { current.destroy(); } catch (e) {} current = null; } el.innerHTML = '<div class="rk-co-msg">Preparing secure checkout…</div>'; }
  function close() { overlay.classList.remove('open'); document.body.style.overflow = ''; reset(); }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });

  window.ReviveCheckout = function (body, label) {
    titleEl.textContent = label || 'Your order';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    reset();
    getStripe().then(function (stripe) {
      return fetch('/api/create-checkout-session', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
      }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (!res.ok || !res.d.clientSecret) throw new Error(res.d.error || 'Could not start checkout.');
          el.innerHTML = '';
          return stripe.initEmbeddedCheckout({ clientSecret: res.d.clientSecret });
        });
    }).then(function (ch) { current = ch; ch.mount('#rk-co-el'); })
      .catch(function (err) {
        el.innerHTML = '<div class="rk-co-msg err">' + (err.message || 'Checkout unavailable') +
          '<br><br>Add STRIPE_SECRET_KEY &amp; STRIPE_PUBLISHABLE_KEY in Vercel to accept payments.</div>';
      });
  };
})();
