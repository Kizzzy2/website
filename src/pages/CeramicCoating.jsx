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
      <title>Ceramic Coating Houston TX | 9H Paint Protection | LabShine</title>
      <meta name="description" content="Professional 9H ceramic coating in Houston from $500. 2–5 years of paint protection, hydrophobic effect, and showroom gloss. Certified mobile application — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/ceramic-coating" />
      <meta property="og:title" content="Ceramic Coating Houston TX | 9H Paint Protection | LabShine" />
      <meta property="og:description" content="Professional 9H ceramic coating from $500. 2–5 years of paint protection in Houston's brutal heat. Mobile application — we come to you." />
      <meta property="og:url" content="https://labshineautodetailing.com/ceramic-coating" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
    </Helmet>
    <main className="ceramic-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.ceramicVette})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Ultimate Protection</span>
          <h1>9H Ceramic<br/><span className="cyan">Coating</span></h1>
          <p>Professional ceramic coating applied by certified detailers. 2–5 years of paint protection, hydrophobic effect, and showroom gloss.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Get a Free Quote</a>
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
              <h3>Entry Ceramic</h3>
              <div className="package-price">From $500</div>
              <ul>
                <li>✓ Single-stage paint correction</li>
                <li>✓ 1-year ceramic coating</li>
                <li>✓ All painted surfaces</li>
                <li>✓ Hydrophobic protection</li>
              </ul>
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-outline">Get a Quote</a>
            </div>
            <div className="package-card featured">
              <span className="pkg-tag">Most Popular</span>
              <h3>Pro Ceramic</h3>
              <div className="package-price">From $900</div>
              <ul>
                <li>✓ 2-stage paint correction</li>
                <li>✓ 3-year ceramic coating</li>
                <li>✓ All painted surfaces</li>
                <li>✓ Wheel coating</li>
                <li>✓ Glass coating</li>
                <li>✓ 1-year follow-up inspection</li>
              </ul>
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Get a Quote</a>
            </div>
            <div className="package-card">
              <h3>Elite Ceramic</h3>
              <div className="package-price">From $1,200</div>
              <ul>
                <li>✓ 3-stage paint correction</li>
                <li>✓ 5-year ceramic coating</li>
                <li>✓ All surfaces + interior</li>
                <li>✓ Wheel & brake caliper coating</li>
                <li>✓ Glass & plastic coating</li>
                <li>✓ Annual maintenance plan</li>
              </ul>
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-outline">Get a Quote</a>
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
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Get a Free Quote</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
