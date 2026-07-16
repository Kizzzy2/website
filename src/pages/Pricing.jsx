import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './Pricing.css'
import img from '../lib/images'
import BookingWidget from '../components/BookingWidget'

const packages = [
  {
    id: 'full-synthesis',
    name: 'Stage 2 — Full Detail',
    tag: 'Best Value',
    featured: true,
    type: 'Full Detail',
    description: 'Designed to restore interior/exterior condition & protect against future contamination. Recommended for new clients.',
    image: img.rangeRoverSV,
    included: [
      '— EXTERIOR —',
      '2 Bucket Hand Wash',
      'Deep Wheel Cleaning',
      'Bug Removal',
      'Iron Fall Out Removal',
      'Clay Bar Treatment',
      'Engine Bay Wash',
      'Ceramic Spray Sealant',
      'Trim Restoration',
      'Ceramic Tire Dressing',
      '— INTERIOR —',
      'Vacuum',
      'Plastic Wipe Down',
      'Steam Clean',
      'Interior Conditioner',
      'Shampoo Seats & Carpet',
      'Headliner Clean',
      'Germ/Odor Elimination',
    ],
    sizes: [
      { label: 'Small', price: '$300' },
      { label: 'Medium', price: '$350' },
      { label: 'Large', price: '$400' },
    ],
    duration: '4–6 hours',
  },
  {
    id: 'catalyst',
    name: 'Stage 1 — Wash & Wax',
    tag: 'Maintenance',
    type: 'Wash & Wax',
    description: 'Designed for repeat clients and/or properly maintained vehicles.',
    image: img.blackM3,
    included: [
      '— EXTERIOR —',
      '2 Bucket Wash',
      'Wheel Cleaning',
      'Bug Removal',
      'Spray Wax',
      'Windows',
      'Tire Dressing',
      '— INTERIOR —',
      'Interior Wipe Down',
      'Dust & Vacuum',
    ],
    sizes: [
      { label: 'Small', price: '$150' },
      { label: 'Medium', price: '$225' },
      { label: 'Large', price: '$250' },
    ],
    duration: '1.5–2.5 hours',
  },
  {
    id: 'exterior-synthesis',
    name: 'Exterior Only — Full',
    tag: 'Exterior Full',
    type: 'Full Exterior Detail',
    description: 'Our most thorough exterior-only service. Full decontamination, hand wash, paint prep, and protection from bumper to bumper.',
    image: img.ceramicVette,
    included: [
      'Deep Hand Wash',
      'Deep Wheel Cleaning',
      'Bugs Removal',
      'Iron Decon Removal',
      'Clay Bar Treatment',
      'Engine Bay Detail',
      'Sealant Wax (3 mo)',
      'Trim Restoration',
      'Tire Shine',
      'Cleaning Windows',
    ],
    sizes: [
      { label: 'Small', price: '$150' },
      { label: 'Medium', price: '$175' },
      { label: 'Large', price: '$200' },
    ],
    duration: '2–3 hours',
  },
  {
    id: 'exterior-catalyst',
    name: 'Exterior Only — Standard',
    tag: 'Exterior Standard',
    type: 'Standard Exterior',
    description: 'A clean, professional exterior wash at a sharp price. Great for regular upkeep on vehicles that stay clean.',
    image: img.escaladeRed,
    included: [
      'Hand Wash',
      'Wheel Cleaning',
      'Bugs Removal',
      'Spray Wax',
      'Cleaning Windows',
      'Tire Shine',
    ],
    sizes: [
      { label: 'Small', price: '$70' },
      { label: 'Medium', price: '$85' },
      { label: 'Large', price: '$100' },
    ],
    duration: '1–1.5 hours',
  },
  {
    id: 'cabin-synthesis',
    name: 'Interior Only — Full',
    tag: 'Interior Full',
    type: 'Full Interior Detail',
    description: 'A deep interior restoration — steam sanitized, shampooed, conditioned, and inspected to make your cabin feel and smell brand new.',
    image: img.rrInterior,
    included: [
      'Deep Plastic Steam Clean',
      'Leather, Plastic, Vinyl Protection',
      'Shampoo Seats & Carpet',
      'Headliner Gentle Clean',
      'Germ/Odor Elimination',
      'Clean Windows',
    ],
    sizes: [
      { label: 'Small', price: '$175' },
      { label: 'Medium', price: '$200' },
      { label: 'Large', price: '$225' },
    ],
    duration: '2.5–4 hours',
  },
  {
    id: 'cabin-catalyst',
    name: 'Interior Only — Standard',
    tag: 'Interior Standard',
    type: 'Standard Interior',
    description: 'A solid interior refresh. Vacuumed, wiped down, and cleaned — ideal for regular maintenance between deep cleans.',
    image: img.rrInterior,
    included: [
      'Clean/Wipe Down All Surfaces',
      'Dust & Vacuum',
      'Clean Windows',
    ],
    sizes: [
      { label: 'Small', price: '$100' },
      { label: 'Medium', price: '$120' },
      { label: 'Large', price: '$150' },
    ],
    duration: '1–2 hours',
  },
]

const maintenancePlans = [
  {
    id: 'reaction',
    name: 'The Reaction',
    interval: 'Weekly',
    discount: '20% off',
    description: 'Stay ahead of dirt, water spots, and buildup. Weekly service keeps your vehicle in peak condition year-round.',
    sizes: [
      { label: 'Small', price: '$120' },
      { label: 'Medium', price: '$180' },
      { label: 'Large', price: '$200' },
    ],
  },
  {
    id: 'cycle',
    name: 'The Cycle',
    interval: 'Bi-Weekly',
    discount: '15% off',
    description: 'The sweet spot for most clients. Every two weeks keeps your vehicle looking fresh without the weekly commitment.',
    sizes: [
      { label: 'Small', price: '$130' },
      { label: 'Medium', price: '$190' },
      { label: 'Large', price: '$215' },
    ],
  },
  {
    id: 'routine',
    name: 'The Routine',
    interval: 'Monthly',
    discount: '10% off',
    description: 'A monthly reset to keep your vehicle clean and maintained. Perfect if you take good care of it day-to-day.',
    sizes: [
      { label: 'Small', price: '$135' },
      { label: 'Medium', price: '$200' },
      { label: 'Large', price: '$225' },
    ],
  },
]

const addonsStandard = [
  { name: 'Fur Extraction', sub: 'Pet hair removal', price: '$50 / $75 / $100' },
  { name: 'Headlight Clarity', sub: 'Per pair', price: '$80' },
  { name: 'Engine Bay Detail', sub: 'Full clean & dress', price: '$60' },
  { name: 'Odor Neutralization', sub: 'Ozone treatment', price: '$90' },
  { name: 'Clay Bar Add-On', sub: 'Paint decontamination', price: '$50' },
  { name: 'Water Spot Removal', sub: 'Paint-safe process', price: '$75' },
  { name: 'Spot Treatment', sub: 'Per stain', price: '$25' },
  { name: 'Trim Restoration', sub: 'Faded trim renewed', price: '$40' },
  { name: 'Leather Conditioning Plus', sub: 'Deep feed & protect', price: '$50' },
  { name: 'Convertible Top Treatment', sub: 'Clean & protect', price: '$100' },
]

const addonsPremium = [
  { name: 'Ceramic Shield 1', sub: '1-Year protection', price: '$500' },
  { name: 'Ceramic Shield 2', sub: '2-Year protection', price: '$800' },
  { name: 'Ceramic Shield 5', sub: '5-Year protection', price: '$1,800' },
  { name: 'Paint Correction — Single Stage', sub: 'Light scratch & swirl removal', price: '$400' },
  { name: 'Paint Correction — Multi-Stage', sub: 'Deep correction + polish', price: '$800' },
]

export default function Pricing() {
  useEffect(() => {
    if (window.location.hash === '#quote') {
      setTimeout(() => {
        document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [])

  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Prices Houston | LabShine Pricing</title>
      <meta name="description" content="LabShine mobile detailing prices in Houston. Full Synthesis from $300, Exterior from $70, Interior from $100, ceramic coating from $500. Transparent S/M/L pricing." />
      <link rel="canonical" href="https://labshineautodetailing.com/pricing" />
      <meta property="og:title" content="Mobile Auto Detailing Prices Houston | LabShine" />
      <meta property="og:description" content="Transparent S/M/L pricing. Full detail from $300, exterior from $70, interior from $100, ceramic from $500. Houston's premium mobile detailing." />
      <meta property="og:url" content="https://labshineautodetailing.com/pricing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "AutoRepair"],
        "name": "LabShine Auto Detailing",
        "url": "https://labshineautodetailing.com/pricing",
        "telephone": "+13464529991",
        "email": "info@labshineauto.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobile Auto Detailing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Full Synthesis" }, "price": "300", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Catalyst" }, "price": "150", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Exterior Synthesis" }, "price": "150", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Exterior Catalyst" }, "price": "70", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Cabin Synthesis" }, "price": "175", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Cabin Catalyst" }, "price": "100", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Shield 1" }, "price": "500", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Shield 5" }, "price": "1800", "priceCurrency": "USD" }
          ]
        }
      })}</script>
    </Helmet>
    <main className="pricing-page">

      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `url(${img.escaladeRed})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Transparent Pricing</span>
          <h1>Detailing Packages<br /><span className="cyan">Built for Houston</span></h1>
          <p>S / M / L pricing. No hidden fees. No surprises.</p>
        </div>
      </section>

      {/* Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Packages</span>
            <h2>Choose Your <span className="cyan">Service</span></h2>
            <p className="section-sub">S = sedans & coupes &nbsp;·&nbsp; M = SUVs & trucks &nbsp;·&nbsp; L = large trucks, vans & XL SUVs</p>
          </div>
          <div className="pricing-grid">
            {packages.map(svc => (
              <div key={svc.id} className={`pricing-card${svc.featured ? ' featured' : ''}`}>
                <div className="pricing-card-img" style={{ backgroundImage: `url(${svc.image})` }}>
                  {svc.tag && <span className="pricing-tag">{svc.tag}</span>}
                </div>
                <div className="pricing-card-body">
                  <p className="pricing-type">{svc.type}</p>
                  <h3>{svc.name}</h3>
                  <p className="pricing-desc">{svc.description}</p>
                  {svc.duration && <div className="pricing-duration">⏱ {svc.duration}</div>}
                  <div className="pricing-sizes">
                    {svc.sizes.map(sz => (
                      <div key={sz.label} className="pricing-size-row">
                        <span>{sz.label}</span>
                        <span className="cyan">{sz.price}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="pricing-includes">
                    {svc.included.map(item => (
                      <li key={item}><span className="cyan">✓</span> {item}</li>
                    ))}
                  </ul>
                  <a href="https://labshine-ops.vercel.app/book" className="btn-primary pricing-cta">Get a Quote →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="maintenance-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Recurring Plans</span>
            <h2>Maintenance <span className="cyan">Plans</span></h2>
            <p className="section-sub">Lock in your schedule and save. The more often we come, the less you pay.</p>
          </div>
          <div className="plans-grid">
            {maintenancePlans.map(plan => (
              <div key={plan.id} className="plan-card">
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <span className="plan-interval">{plan.interval}</span>
                  <span className="plan-discount cyan">{plan.discount}</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
                <div className="pricing-sizes">
                  {plan.sizes.map(sz => (
                    <div key={sz.label} className="pricing-size-row">
                      <span>{sz.label}</span>
                      <span className="cyan">{sz.price}</span>
                    </div>
                  ))}
                </div>
                <a href="https://labshine-ops.vercel.app/book" className="btn-outline plan-cta">Start a Plan →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="addons-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Customize Your Service</span>
            <h2>Add-Ons & <span className="cyan">Upgrades</span></h2>
          </div>
          <div className="addons-wrap">
            <div className="addons-col">
              <h4 className="addons-col-title">Standard Add-Ons</h4>
              <ul className="addons-list">
                {addonsStandard.map(a => (
                  <li key={a.name} className="addon-item">
                    <div>
                      <span className="addon-name">{a.name}</span>
                      <span className="addon-sub">{a.sub}</span>
                    </div>
                    <span className="addon-price cyan">{a.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="addons-col">
              <h4 className="addons-col-title">Premium Add-Ons</h4>
              <ul className="addons-list">
                {addonsPremium.map(a => (
                  <li key={a.name} className="addon-item">
                    <div>
                      <span className="addon-name">{a.name}</span>
                      <span className="addon-sub">{a.sub}</span>
                    </div>
                    <span className="addon-price cyan">{a.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="quote-section" id="quote" style={{ padding: '60px 0 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="section-label">Free Quote</span>
            <h2>Get a Custom <span className="cyan">Quote</span></h2>
            <p>Fill out the form below — quotes, bookings, and service details all in one place.</p>
          </div>
        </div>
        <BookingWidget />
      </section>

    </main>
    </>
  )
}
