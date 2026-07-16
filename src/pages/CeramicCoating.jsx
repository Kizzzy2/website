import { Helmet } from 'react-helmet-async'
import './Ceramic.css'
import img from '../lib/images'

const steps = [
  { num: '01', title: 'Paint Decontamination', desc: 'Clay bar treatment, iron fallout removal, and thorough chemical decontamination to prep the surface.' },
  { num: '02', title: 'Paint Correction', desc: 'Multi-stage machine polishing removes swirl marks, water spots, and light scratches before coating.' },
  { num: '03', title: 'Ceramic Application', desc: '9H ceramic coating is carefully applied panel by panel in a controlled environment.' },
  { num: '04', title: 'Curing & Inspection', desc: 'Coating cures for 24–48 hours. Final quality inspection before delivery.' },
]

const faqs = [
  { q: 'How long does ceramic coating last?', a: 'Our professional-grade ceramic coating lasts 2–5 years with proper care and maintenance washes.' },
  { q: 'Can I wash my car after ceramic coating?', a: 'Yes — but wait 7 days before the first wash. After that, regular hand washing is recommended. Avoid automatic car washes.' },
  { q: 'Do I need paint correction first?', a: 'Yes — we always do paint correction before coating. Ceramic seals in the surface, so any defects underneath will be permanently locked in.' },
  { q: 'Does ceramic coating prevent scratches?', a: 'Ceramic coating adds hardness (9H) that resists light scratches, but it is not scratch-proof. It significantly reduces the chance of light swirls from washing.' },
  { q: 'Is ceramic coating worth it?', a: 'For vehicles that matter to you, absolutely. The hydrophobic effect alone makes washing effortless, and the UV protection keeps your paint looking new for years.' },
]

export default function CeramicCoating() {
  return (
    <>
    <Helmet>
      <title>Ceramic Coating Houston TX | 2, 5, 9-Year | LabShine</title>
      <meta name="description" content="Ceramic coating Houston TX by LabShine. 2-yr Pro $599, 5-yr Premium $1,099, 9-yr Crystal $2,499 (Gtechniq/SystemX). Mobile install at your home or office." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ceramic Coating Houston TX | 2, 5 & 9-Year Options | LabShine" />
      <meta name="twitter:description" content="Ceramic coating Houston TX by LabShine. 2-yr Pro $599, 5-yr Premium $1,099, 9-yr Crystal $2,499 (Gtechniq/SystemX). Mobile install at your home or office." />
      <link rel="canonical" href="https://labshineautodetailing.com/ceramic-coating" />
      <meta property="og:title" content="Ceramic Coating Houston TX | 2, 5 & 9-Year Options | LabShine" />
      <meta property="og:description" content="Ceramic coating Houston TX by LabShine. 2-yr Pro $599, 5-yr Premium $1,099, 9-yr Crystal $2,499 (Gtechniq/SystemX). Mobile install at your home or office." />
      <meta property="og:url" content="https://labshineautodetailing.com/ceramic-coating" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "AutoRepair"],
        "name": "LabShine Auto Detailing — Ceramic Coating Houston TX",
        "description": "Professional ceramic coating in Houston TX. 2-year Pro $599, 5-year Premium $1,099, 9-year Crystal $2,499. Mobile installation at your home or office.",
        "url": "https://labshineautodetailing.com/ceramic-coating",
        "telephone": "+13464529991",
        "priceRange": "$$$",
        "areaServed": "Houston TX and Greater Houston metro",
        "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Ceramic Coating Packages",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "2-Year Pro Ceramic Coating" }, "price": "599", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "5-Year Premium Ceramic Coating" }, "price": "1099", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "9-Year Crystal Ceramic Coating (Gtechniq/SystemX)" }, "price": "2499", "priceCurrency": "USD" }
          ]
        }
      })}</script>
    </Helmet>
    <main className="ceramic-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.ceramicVette})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Ultimate Protection</span>
          <h1>Ceramic Coating in Houston, TX —<br/><span className="cyan">2, 5 & 9-Year Protection</span></h1>
          <p>Professional ceramic coating applied by certified detailers. From 2-year Pro to 9-year Crystal-tier (Gtechniq/SystemX). Mobile install at your home or office.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Free Quote</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ceramic-benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Ceramic?</span>
            <h2>What Ceramic Coating Does</h2>
          </div>
          <div className="benefits-grid">
            {[
              { icon: '🛡️', title: '9H Hardness', desc: 'Adds a hard nano-coating over your clear coat that resists light scratches and chemical etching.' },
              { icon: '💧', title: 'Hydrophobic Effect', desc: 'Water beads and rolls off the surface, taking dirt with it. Your car stays cleaner longer.' },
              { icon: '☀️', title: 'UV Protection', desc: 'Blocks harmful UV rays that oxidize and fade paint over time. Your color stays vibrant for years.' },
              { icon: '✨', title: 'Enhanced Gloss', desc: 'Adds depth and clarity to your paint, giving it a permanent wet-look shine.' },
              { icon: '🧪', title: 'Chemical Resistance', desc: 'Resists bird droppings, tree sap, and road chemicals that would otherwise etch into clear coat.' },
              { icon: '🧽', title: 'Easy Maintenance', desc: 'Contaminants don\'t bond to the surface. Washing takes minutes, not hours.' },
            ].map(b => (
              <div key={b.title} className="benefit-card">
                <span className="benefit-icon">{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ceramic-process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2>Our Process</h2>
          </div>
          <div className="process-grid">
            {steps.map(step => (
              <div key={step.num} className="process-step">
                <span className="step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="ceramic-packages-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Ceramic Coating Packages</h2>
          </div>
          <div className="packages-grid">
            <div className="package-card">
              <h3>2-Year Pro Ceramic</h3>
              <div className="package-price">From $599</div>
              <ul>
                <li>✓ Single-stage paint correction</li>
                <li>✓ 2-year ceramic coating</li>
                <li>✓ All painted surfaces</li>
                <li>✓ Hydrophobic protection</li>
                <li>✓ UV protection</li>
              </ul>
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-outline">Get a Quote</a>
            </div>
            <div className="package-card featured">
              <span className="pkg-tag">Best Value</span>
              <h3>5-Year Premium Ceramic</h3>
              <div className="package-price">From $1,099</div>
              <ul>
                <li>✓ Multi-stage paint correction</li>
                <li>✓ 5-year ceramic coating</li>
                <li>✓ Gtechniq / SystemX coating</li>
                <li>✓ 9H hardness protection</li>
                <li>✓ Glass coating</li>
                <li>✓ Post-cure inspection</li>
              </ul>
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Quote</a>
            </div>
            <div className="package-card">
              <span className="pkg-tag">Elite</span>
              <h3>9-Year Crystal-Tier Ceramic</h3>
              <div className="package-price">From $2,499</div>
              <ul>
                <li>✓ Full multi-stage paint correction</li>
                <li>✓ 9-year warranted protection</li>
                <li>✓ Crystal Serum Ultra / SystemX Diamond</li>
                <li>✓ 10H hardness — maximum protection</li>
                <li>✓ Complete documentation & warranty card</li>
              </ul>
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-outline">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ceramic-faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Questions</span>
            <h2>FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map(faq => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Protect Your Investment</h2>
            <p>Get a free ceramic coating quote today. We come to your home or office.</p>
            <div className="cta-btns">
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Get a Free Quote</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
