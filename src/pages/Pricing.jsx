import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Pricing.css'
import img from '../lib/images'

// LOCKED PRICING — do not change without approval
// Full Detail: Sedan $250 / SUV $300 | $100 OFF promo active
// Interior Only: $200 all sizes
// Exterior Only: $175 all sizes
// Ceramic Coating: $800 min (scales by vehicle/condition)

const services = [
  {
    id: 'full-detail',
    name: 'Full Detail',
    tag: 'Most Popular',
    promo: '$100 OFF',
    featured: true,
    description: 'Complete interior and exterior detailing with paint decontamination and protection.',
    image: img.rangeRoverSV,
    included: [
      'Complete interior detail',
      'Full exterior wash & dry',
      'Clay bar decontamination',
      'Hand polish',
      'Paint sealant',
      'Engine bay clean',
      'Door jambs & trim dressing',
      'Final walkthrough',
    ],
    duration: '4–6 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$250' },
      { label: 'SUV / Truck', price: '$300' },
    ],
  },
  {
    id: 'interior',
    name: 'Interior Only',
    tag: 'Interior',
    description: 'Steam clean, carpet shampoo, leather conditioning, and odor treatment.',
    image: img.rrInterior,
    included: [
      'Full steam cleaning',
      'Carpet & upholstery shampoo',
      'Leather clean & condition',
      'Dashboard & trim detail',
      'Air vent cleaning',
      'Odor treatment',
    ],
    duration: '2–4 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$200' },
      { label: 'SUV / Truck', price: '$200' },
    ],
  },
  {
    id: 'exterior',
    name: 'Exterior Only',
    tag: 'Exterior',
    description: 'Foam cannon pre-wash, hand wash, clay bar, polish, and paint sealant for maximum shine.',
    image: img.blackM3,
    included: [
      'Foam cannon pre-wash',
      'Hand wash & dry',
      'Clay bar decontamination',
      'Iron fallout removal',
      'Hand polish',
      'Paint sealant',
      'Wheel & tire detail',
    ],
    duration: '2–3 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$175' },
      { label: 'SUV / Truck', price: '$175' },
    ],
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    tag: 'Premium',
    description: 'Professional 9H ceramic coating. Pricing scales by vehicle size and paint condition — contact us for an exact quote.',
    image: img.ceramicVette,
    included: [
      '9H hardness coating',
      '2–5 year protection',
      'Hydrophobic effect',
      'UV protection',
      'Enhanced gloss',
      'Pre-coating paint prep included',
    ],
    duration: '1–2 days',
    sizes: [
      { label: 'Starting at', price: '$800' },
    ],
    note: 'Final price based on vehicle size and paint condition.',
  },
]

const WEBHOOK = '/api/lead'

export default function Pricing() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', service: '', zip: '' })
  const [status, setStatus] = useState(null)

  async function handleQuote(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', vehicle: '', service: '', zip: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
    <Helmet>
      <title>Auto Detailing Prices Houston | Full Detail $250 | LabShine</title>
      <meta name="description" content="Transparent auto detailing pricing in Houston. Full detail from $250, interior $200, exterior $175, ceramic coating from $800. No hidden fees. 20% deposit to book." />
      <link rel="canonical" href="https://labshineautodetailing.com/pricing" />
      <meta property="og:title" content="Auto Detailing Prices Houston | LabShine" />
      <meta property="og:description" content="Transparent detailing prices. Full detail $250, interior $200, ceramic coating from $800. No hidden fees. Houston mobile detailing." />
      <meta property="og:url" content="https://labshineautodetailing.com/pricing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
    </Helmet>
    <main className="pricing-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.escaladeRed})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Transparent Pricing</span>
          <h1>What It<br /><span className="cyan">Costs</span></h1>
          <p>No hidden fees. No surprises. 20% deposit to lock in your appointment.</p>
        </div>
      </section>

      <div className="pricing-note">
        <div className="container">
          <span>🔥</span>
          <span><strong>Limited Promo — $100 OFF Full Detail.</strong> Book now before it ends.</span>
        </div>
      </div>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {services.map(svc => (
              <div key={svc.id} className={`pricing-card${svc.featured ? ' featured' : ''}`}>
                <div className="pricing-card-img" style={{ backgroundImage: `url(${svc.image})` }}>
                  {svc.tag && <span className="pricing-tag">{svc.tag}</span>}
                  {svc.promo && <span className="pricing-promo">{svc.promo}</span>}
                </div>
                <div className="pricing-card-body">
                  <h3>{svc.name}</h3>
                  <p className="pricing-desc">{svc.description}</p>
                  {svc.duration && <div className="pricing-duration">⏱ {svc.duration}</div>}
                  {svc.sizes && (
                    <div className="pricing-sizes">
                      {svc.sizes.map(sz => (
                        <div key={sz.label} className="pricing-size-row">
                          <span>{sz.label}</span>
                          <span className="cyan">{sz.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {svc.note && <p className="pricing-note-inline">{svc.note}</p>}
                  <ul className="pricing-includes">
                    {svc.included.map(item => (
                      <li key={item}><span className="cyan">✓</span> {item}</li>
                    ))}
                  </ul>
                  <a
                    href="/pricing"
                    target="_blank"
                    rel="noopener"
                    className="btn-primary pricing-cta"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture — get a quote */}
      <section className="quote-section" id="quote">
        <div className="container">
          <div className="quote-wrap">
            <div className="quote-text">
              <span className="section-label">Free Quote</span>
              <h2>Get a Custom <span className="cyan">Quote</span></h2>
              <p>Not sure which service fits? Tell us about your vehicle and we'll send you an exact price within minutes.</p>
              <ul className="quote-promise">
                <li>✓ Response within minutes</li>
                <li>✓ No obligation</li>
                <li>✓ Exact price — no surprises</li>
              </ul>
            </div>
            <form className="quote-form" onSubmit={handleQuote}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Vehicle (Year, Make, Model) *"
                value={form.vehicle}
                onChange={e => setForm(f => ({ ...f, vehicle: e.target.value }))}
                required
              />
              <div className="form-row">
                <select
                  value={form.service}
                  onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                  required
                >
                  <option value="">Service Interested In *</option>
                  <option>Full Detail</option>
                  <option>Interior Only</option>
                  <option>Exterior Only</option>
                  <option>Ceramic Coating</option>
                  <option>Paint Correction</option>
                  <option>Not Sure — Need Advice</option>
                </select>
                <input
                  type="text"
                  placeholder="Your ZIP Code"
                  value={form.zip}
                  onChange={e => setForm(f => ({ ...f, zip: e.target.value }))}
                />
              </div>
              {status === 'sent' ? (
                <div className="form-success">✅ Got it! We'll send your quote within minutes.</div>
              ) : (
                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Get My Free Quote →'}
                </button>
              )}
              {status === 'error' && (
                <p className="form-error">Something went wrong. Call us at (346) 452-9991.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book?</h2>
            <p>20% deposit locks in your slot via Square. We confirm within the hour.</p>
            <div className="cta-btns">
              <a href="/pricing" target="_blank" rel="noopener" className="btn-primary">Book Online</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
