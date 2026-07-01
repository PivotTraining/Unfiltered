/* Revive Wellness — Website UI Kit
   Interactive homepage recreation composing the design-system components.
   Exposes window.ReviveSite. */
const { useState } = React;
const DS = window.ReviveWellnessDesignSystem_67c5dd;
const { Button, Badge, Eyebrow, SectionHeading, Select, Seal, Marquee, ProductCard, CleanseCard, ServiceCard } = DS;

const PACKS = { single: 900, '4': 3400, '6': 4800, '12': 9000 };
const PACK_LABEL = { single: 'Single', '4': '4-pack', '6': '6-pack', '12': '12-pack' };
const PLANS = { once: { d: 0, n: 'One-time' }, weekly: { d: 0.15, n: 'Weekly' }, biweekly: { d: 0.1, n: 'Bi-weekly' } };
const money = (c) => '$' + (c / 100).toFixed(2);

const U = (id) => `https://images.unsplash.com/photo-${id}?w=900&q=75&auto=format&fit=crop`;
const R = (typeof window !== 'undefined' && window.__resources) || {};
const IMG = {
  hero: R.heroImg || U('1622597467836-f3285f2131b8'),   // colorful cold-pressed juice row
  about: R.aboutImg || U('1540555700478-4be289fbecef'),  // spa towel + flowers
};

const JUICES = [
  { name: 'Orange', ing: 'Orange · Carrot · Turmeric · Ginger', tint: 'var(--tint-orange)', img: R.juiceOrange || U('1600271886742-f049cd451bba'), badge: { label: 'Bestseller', variant: 'gold' } },
  { name: 'Red', ing: 'Beet · Apple · Pomegranate · Ginger', tint: 'var(--tint-red)', img: R.juiceRed || U('1600718374662-0483d2b9da44') },
  { name: 'Green', ing: 'Green Apple · Celery · Cucumber · Kale', tint: 'var(--tint-green)', img: R.juiceGreen || U('1610970881699-44a5587cabec'), badge: { label: 'Only 4 left', variant: 'low' } },
  { name: 'Lemonade', ing: 'Lemon · Cayenne · Raw Honey', tint: 'var(--tint-yellow)', img: R.juiceLemonade || U('1621263764928-df1444c5e859') },
];

const CLEANSES = [
  { days: '1-Day', desc: 'A gentle single-day reset. 6 juices to flush, hydrate, and rebalance.', price: '$35' },
  { days: '3-Day', desc: 'Our most popular cleanse. 18 juices to deeply restore energy and digestion.', price: '$99' },
  { days: '7-Day', desc: 'A full week of nourishment. 42 juices for a serious system reset.', price: '$210' },
  { days: '30-Day', desc: 'A month-long lifestyle shift. 180 juices delivered on your schedule.', price: '$780' },
];

const SERVICES = [
  { title: 'Facials', body: "Nutrient-rich facials that honor your skin's natural wisdom. Customized to your skin goals." },
  { title: 'Relaxation Massages', body: 'Melt tension and restore flow. Therapeutic and relaxation massage tailored to you.' },
  { title: 'Detox Sessions', body: 'Guided detox experiences pairing our cold-pressed juices with restorative bodywork.' },
];

function Masthead({ bag, onNav }) {
  return (
    <header className="rk-masthead">
      <div className="rk-topbar">
        <div className="rk-topbar-side">
          <a onClick={() => onNav('shop')}>Shop</a>
          <a onClick={() => onNav('cleanses')}>Cleanses</a>
          <a onClick={() => onNav('services')}>Services</a>
        </div>
        <a className="rk-brand" onClick={() => onNav('top')} aria-label="Revive Wellness home">
          <Seal variant="white" size={84} />
        </a>
        <div className="rk-topbar-side rk-right">
          <a onClick={() => onNav('about')}>About</a>
          <a onClick={() => onNav('collab')}>Contact</a>
          <span className="rk-bag">Bag ({bag})</span>
          <Button variant="book" onClick={() => onNav('services')}>Book now</Button>
        </div>
      </div>
      <nav className="rk-subnav">
        <a onClick={() => onNav('shop')} className="active">Shop the Juices</a>
        <a onClick={() => onNav('cleanses')}>Cleanse Programs</a>
        <a onClick={() => onNav('services')}>Wellness Services</a>
        <a href="journal.html">Journal</a>
        <a href="community.html">Community</a>
        <a onClick={() => onNav('about')}>Our Story</a>
        <a onClick={() => onNav('collab')}>Let's Collab</a>
      </nav>
    </header>
  );
}

function Hero({ onNav }) {
  return (
    <section className="rk-hero" id="top">
      <div className="rk-hero-grid">
        <div className="rk-hero-copy">
          <Seal variant="dark" size={256} className="rk-hero-logo" />
          <Eyebrow>100% Fresh Juice</Eyebrow>
          <h1>Release.<br />Refresh.<br />Revive.</h1>
          <p>Cold-pressed with purpose. Nutrient-dense juices, cleanse programs, and wellness rituals crafted to help you feel your absolute best — inside and out.</p>
          <div className="rk-hero-ctas">
            <Button variant="orange" onClick={() => onNav('shop')}>Shop the Juices</Button>
            <Button variant="outline" onClick={() => onNav('cleanses')}>Start a Cleanse</Button>
          </div>
        </div>
        <div className="rk-hero-figure">
          <img src={IMG.hero} alt="Revive Wellness cold-pressed juices" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
      </div>
    </section>
  );
}

function ShopCard({ juice, onAdd }) {
  const [pack, setPack] = useState('6');
  const [plan, setPlan] = useState('once');
  const unit = Math.round(PACKS[pack] * (1 - PLANS[plan].d));
  return (
    <ProductCard
      name={juice.name}
      ingredients={juice.ing}
      tint={juice.tint}
      image={juice.img}
      badge={juice.badge}
      price={money(unit)}
      priceNote={`${PACK_LABEL[pack]} · ${PLANS[plan].n}`}
      onPackChange={(e) => setPack(e.target.value)}
      onPlanChange={(e) => setPlan(e.target.value)}
      onAdd={() => onAdd({ label: `Revive ${juice.name}`, sku: juice.name.toLowerCase(), pack, plan })}
    />
  );
}

function App() {
  const [bag, setBag] = useState(0);
  const [toast, setToast] = useState(null);

  // `payload` is either a juice selection {label, sku, pack, plan} or a cleanse
  // {label, cleanse}. Opens the real Stripe checkout (window.ReviveCheckout,
  // defined in the checkout integration script). Falls back to a toast if the
  // checkout bridge isn't present (e.g. static preview).
  const add = (payload) => {
    const label = typeof payload === 'string' ? payload : payload.label;
    if (window.ReviveCheckout) {
      const body = payload.cleanse
        ? { cleanse: payload.cleanse }
        : { sku: payload.sku, pack: payload.pack, plan: payload.plan };
      window.ReviveCheckout(body, label);
      return;
    }
    setBag((b) => b + 1);
    setToast(`Added ${label} to your bag`);
    clearTimeout(window.__rkToast);
    window.__rkToast = setTimeout(() => setToast(null), 2200);
  };

  const nav = (id) => {
    const el = document.getElementById('sec-' + id) || document.getElementById(id);
    if (el) window.scrollTo({ top: id === 'top' ? 0 : el.offsetTop - 120, behavior: 'smooth' });
  };

  return (
    <div className="rk-root">
      <Masthead bag={bag} onNav={nav} />
      <Hero onNav={nav} />
      <Marquee />

      <section className="rk-section rk-shop" id="sec-shop">
        <SectionHeading tone="onBrand" eyebrow="Shop" title="The *Juices*" sub="Four cold-pressed blends. Pick a size, pick a cadence, and we press the morning it ships." />
        <div className="rk-grid4">
          {JUICES.map((j) => <ShopCard key={j.name} juice={j} onAdd={add} />)}
        </div>
      </section>

      <section className="rk-section" id="sec-about">
        <div className="rk-about-grid">
          <div className="rk-about-copy">
            <Eyebrow>Who are we?</Eyebrow>
            <h2>Where wellness meets vitality.</h2>
            <p>At Revive Wellness, we believe true vitality comes from nurturing your body inside and out. We're more than a juice brand — we're your partners in cultivating a lifestyle that radiates health, balance, and natural beauty.</p>
            <p>We carefully craft fresh, nutrient-rich juices that energize you from within, and curate wellness rituals that support your daily self-care.</p>
            <p className="rk-sign">Welcome to Revive Wellness.</p>
          </div>
          <div className="rk-about-img"><img src={IMG.about} alt="Wellness ritual" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.style.background = 'var(--green)'; }} /></div>
        </div>
      </section>

      <section className="rk-section rk-cleanse" id="sec-cleanses">
        <SectionHeading eyebrow="Reset & Restore" title="Cleanse *Programs*" sub="Guided cold-pressed cleanses to reset your system. Pick a length — we handle the rest." />
        <div className="rk-grid4">
          {CLEANSES.map((c) => <CleanseCard key={c.days} days={c.days} description={c.desc} price={c.price} onStart={() => add({ label: `${c.days} Cleanse`, cleanse: 'cleanse-' + c.days.split('-')[0] })} />)}
        </div>
      </section>

      <section className="rk-section" id="sec-services">
        <SectionHeading eyebrow="Book an experience" title="Wellness *Services*" sub="Beyond the bottle — in-person rituals to restore body and skin." />
        <div className="rk-grid3">
          {SERVICES.map((s) => <ServiceCard key={s.title} title={s.title} description={s.body} cta={`Book a ${s.title.split(' ')[0].toLowerCase()}`} onBook={() => add(s.title)} />)}
        </div>
      </section>

      <section className="rk-section rk-collab" id="sec-collab">
        <Eyebrow tone="gold">Let's Collab!</Eyebrow>
        <h2 className="rk-collab-title">Partner with <em>Revive</em></h2>
        <p>Revive Wellness partners with brands, venues, organizations, and community spaces to bring people together through mindful wellness experiences. Hosting an event or adding fresh-pressed wellness to your space? We'd love to hear from you.</p>
        <Button variant="light">Get in touch</Button>
      </section>

      <footer className="rk-footer">
        <div className="rk-footer-grid">
          <div>
            <Seal variant="white" size={70} />
            <p className="rk-footer-tag">Cold pressed with purpose.<br />Release, refresh, revive.</p>
          </div>
          <div><h4>Shop</h4><ul><li><a>Juices</a></li><li><a>Cleanse Programs</a></li><li><a>Services</a></li></ul></div>
          <div><h4>Company</h4><ul><li><a>Our Story</a></li><li><a href="journal.html">Journal</a></li><li><a href="community.html">Revive Circle</a></li><li><a>Contact</a></li></ul></div>
          <div><h4>Legal</h4><ul><li><a>Privacy</a></li><li><a>Terms</a></li></ul></div>
        </div>
        <div className="rk-footer-legal"><span>© 2026 Revive Wellness</span><span>Where wellness meets vitality.</span></div>
      </footer>

      <div className={'rk-toast' + (toast ? ' show' : '')}>{toast}</div>
    </div>
  );
}

window.ReviveSite = App;
