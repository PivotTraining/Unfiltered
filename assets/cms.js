// Runtime hydration from Sanity. Loads after the page paints, fetches all
// editable content in a single GROQ query, then swaps in any field that's been
// set in the Studio. Elements without overrides keep their static defaults so
// the site never blanks out when Sanity is unreachable or unconfigured.
//
// Hooks: any element with `data-cms="<path>"` gets its text content replaced,
// and any element with `data-cms-html="<path>"` gets innerHTML replaced (for
// rich text like product names that contain <em>).
//
// `<path>` is dot-separated. Examples:
//   settings.heroLine1
//   settings.marqueeHighlight
//   product.glow.name
//   product.glow.image (becomes a Sanity CDN URL; auto-sets src on <img>)

(function () {
  const QUERY = encodeURIComponent(`{
    "settings": *[_type == "settings"][0],
    "products": *[_type == "product"] | order(order asc) { sku, name, nameItalic, tagLine, ingredients, badge, "imageUrl": image.asset->url },
    "faqs": *[_type == "faq"] | order(order asc) { question, answer },
    "stories": *[_type == "story"] | order(order asc) { title, category, blurb, letter, background, "imageUrl": image.asset->url }
  }`);

  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
  }

  function hydrate(data) {
    // Build a flat lookup keyed by data-cms path.
    const flat = {
      'settings': data.settings || {},
      'product': {},
    };
    if (data.settings) {
      for (const [k, v] of Object.entries(data.settings)) flat['settings.' + k] = v;
    }
    (data.products || []).forEach((p) => {
      flat['product.' + p.sku] = p;
      for (const [k, v] of Object.entries(p)) flat['product.' + p.sku + '.' + k] = v;
    });

    document.querySelectorAll('[data-cms]').forEach((el) => {
      const val = flat[el.getAttribute('data-cms')];
      if (val == null || val === '') return;
      if (el.tagName === 'IMG') el.src = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-cms-html]').forEach((el) => {
      const val = flat[el.getAttribute('data-cms-html')];
      if (val == null || val === '') return;
      el.innerHTML = val;
    });

    // FAQ list (re-renders if Sanity has any FAQs).
    const faqHost = document.querySelector('[data-cms-list="faqs"]');
    if (faqHost && data.faqs && data.faqs.length) {
      faqHost.innerHTML = data.faqs.map(f =>
        `<details><summary>${escape(f.question)}</summary><p>${escape(f.answer).replace(/\n/g, '<br>')}</p></details>`
      ).join('');
    }
  }

  function escape(s) {
    return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  fetch('/api/cms-config').then(r => r.json()).then(cfg => {
    if (!cfg.projectId) return; // Sanity not wired up yet; static defaults stay.
    const url = `https://${cfg.projectId}.apicdn.sanity.io/v2024-01-01/data/query/${cfg.dataset}?query=${QUERY}`;
    return fetch(url).then(r => r.json()).then(j => hydrate(j.result || {}));
  }).catch(() => { /* swallow; static fallback stays */ });
})();
