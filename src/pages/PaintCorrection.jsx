import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Ceramic.css'
import img from '../lib/images'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Paint Correction Houston TX",
  "description": "Professional mobile paint correction in Houston TX. Single and multi-stage machine polishing to remove swirl marks, scratches, water spots, and oxidation.",
  "url": "https://labshineautodetailing.com/paint-correction",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Houston TX and Greater Houston metro",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paint Correction Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Single-Stage Paint Correction" }, "price": "185", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-Stage Paint Correction" }, "price": "325", "priceCurrency": "USD" },
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is paint correction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Paint correction is the process of using machine polishers and abrasive compounds to remove defects from a car's clear coat — swirl marks, scratches, water spots, oxidation, and buffer trails. The result is a mirror-flat finish that reflects light perfectly." }
    },
    {
      "@type": "Question",
      "name": "How much does paint correction cost in Houston?",
      "acceptedAnswer": { "@type": "Answer", "text": "LabShine paint correction starts at $185 for a single-stage polish included with a Full Detail Reset, and $325+ for a multi-stage correction as part of a Premium Show Detail. Exact pricing depends on vehicle size, paint condition, and the number of stages needed." }
    },
    {
      "@type": "Question",
      "name": "How long does paint correction take?",
      "acceptedAnswer": { "@type": "Answer", "text": "A single-stage correction typically takes 3–4 hours. Multi-stage correction for a full vehicle can take 8–12 hours depending on paint severity and vehicle size." }
    },
    {
      "@type": "Question",
      "name": "Is paint correction permanent?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — paint correction physically removes defects from the clear coat rather than filling or hiding them. Results are permanent until new defects are introduced. Following correction with a ceramic coating protects the corrected surface for years." }
    },
    {
      "@type": "Question",
      "name": "Does paint correction remove deep scratches?",
      "acceptedAnswer": { "@type": "Answer", "text": "Paint correction removes defects within the clear coat. Deep scratches that have penetrated through to the base coat or primer require touch-up paint, not polishing. We assess your vehicle and are transparent about what can and cannot be corrected." }
    },
  ]
}

const steps = [
  { num: '01', title: 'Paint Inspection', desc: 'We inspect your paint under a high-intensity inspection light to assess defects, measure paint depth, and determine the number of stages needed.' },
  { num: '02', title: 'Wash & Decontamination', desc: 'Full foam cannon wash, iron fallout removal, and clay bar decontamination. Paint must be 100% clean before polishing begins.' },
  { num: '03', title: 'Machine Polishing', desc: 'Single or multi-stage machine polishing using dual-action or rotary polishers with diminishing abrasive compounds to remove swirls, scratches, and oxidation.' },
  { num: '04', title: 'Final Wipe & Inspection', desc: 'Paint is wiped down with an IPA panel wipe to remove any polishing oils, then re-inspected under lights to confirm correction levels.' },
]

export default function PaintCorrection() {
  return (
    <>
    <Helmet>
      <title>Paint Correction Houston TX | Swirl & Scratch Removal | LabShine</title>
      <meta name="description" content="Paint correction Houston TX by LabShine. Remove swirl marks, scratches & oxidation with machine polishing. Mobile — we come to you. Included in Full Detail from $185." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Paint Correction Houston TX | LabShine Auto Detailing" />
      <meta name="twitter:description" content="Machine paint correction in Houston TX. Remove swirl marks, scratches & oxidation. Mobile service — we come to your home or office. Book online." />
      <link rel="canonical" href="https://labshineautodetailing.com/paint-correction" />
      <meta property="og:title" content="Paint Correction Houston TX | LabShine Auto Detailing" />
      <meta property="og:description" content="Paint correction Houston TX by LabShine. Remove swirl marks, scratches & oxidation with machine polishing. Mobile — we come to you. Full Detail from $185." />
      <meta property="og:url" content="https://labshineautodetailing.com/paint-correction" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <main className="ceramic-page">

      <section className="page-hero" style={{ backgroundImage: `url(${img.blackM3})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Paint Correction Houston</span>
          <h1>Paint Correction in Houston, TX<br /><span className="cyan">Remove Swirls, Scratches & Oxidation</span></h1>
          <p>Houston's heat, humidity, and UV exposure accelerate paint defects. Our machine polishing restores your clear coat to a mirror finish — mobile, at your home or office.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Paint Correction →</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      {/* Why Houston paint needs correction */}
      <section className="ceramic-why section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Houston's Climate Problem</span>
            <h2>Why Houston Cars Need Paint Correction</h2>
            <p>Houston ranks among the most damaging climates for automotive paint in the US.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-icon">☀️</span>
              <h3>UV Oxidation</h3>
              <p>Houston averages 204 sunny days per year. Prolonged UV exposure breaks down clear coat and causes fading, chalking, and oxidation — especially on reds, blacks, and dark colors.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">💧</span>
              <h3>Hard Water Spots</h3>
              <p>Houston's tap water is high in mineral content. Sprinkler overspray and rain leave mineral deposits that etch into the clear coat if not removed quickly.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🌀</span>
              <h3>Swirl Marks</h3>
              <p>Automatic car washes and improper hand washing create circular micro-scratches that scatter light and make dark paint look dull and hazy in sunlight.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🌿</span>
              <h3>Tree Sap & Pollen</h3>
              <p>Houston's aggressive pollen season and abundant tree cover mean sap, oak tannins, and airborne contaminants bond to paint and etch the clear coat if left untreated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we correct */}
      <section className="section-pad bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Defects We Remove</span>
            <h2>What Paint Correction Fixes</h2>
          </div>
          <div className="includes-grid">
            {[
              'Swirl marks from automatic car washes',
              'Fine scratches and buffer trails',
              'Water spots and mineral etching',
              'UV oxidation and paint hazing',
              'Bird dropping etching',
              'Light scuffs and contact marks',
              'Tree sap etching',
              'Rail dust and environmental fallout',
            ].map(item => (
              <div key={item} className="include-item">
                <span className="cyan">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ceramic-process section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>How We Do Paint Correction</h2>
          </div>
          <div className="process-steps">
            {steps.map(step => (
              <div key={step.num} className="process-step">
                <div className="step-num">{step.num}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Paint Correction Pricing in Houston</h2>
            <p>Paint correction is included in our Full Detail Reset and Premium Show Detail packages.</p>
          </div>
          <div className="ceramic-tiers">
            <div className="ceramic-tier">
              <div className="tier-badge">Included</div>
              <h3>Single-Stage Correction</h3>
              <p>One-stage machine polish removes light swirl marks, water spots, and minor oxidation. Included with our Full Detail Reset.</p>
              <div className="tier-price">From <span className="cyan">$185</span></div>
              <ul>
                <li>✓ Light swirl removal</li>
                <li>✓ Water spot treatment</li>
                <li>✓ Light oxidation removal</li>
                <li>✓ Machine polish + paint sealant</li>
              </ul>
              <Link to="/pricing" className="btn-primary">See Full Detail Pricing →</Link>
            </div>
            <div className="ceramic-tier featured">
              <div className="tier-badge">Most Results</div>
              <h3>Multi-Stage Correction</h3>
              <p>Two or three stage machine polishing for heavy swirls, scratches, severe oxidation, and paint that needs maximum restoration. Included with Premium Show Detail.</p>
              <div className="tier-price">From <span className="cyan">$325</span></div>
              <ul>
                <li>✓ Heavy swirl & scratch removal</li>
                <li>✓ Severe oxidation treatment</li>
                <li>✓ Buffer trail removal</li>
                <li>✓ Glass polishing included</li>
                <li>✓ Machine wax / LSP finish</li>
              </ul>
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Multi-Stage →</a>
            </div>
            <div className="ceramic-tier">
              <div className="tier-badge">Best Protection</div>
              <h3>Correction + Ceramic Coating</h3>
              <p>Paint correction followed by a professional ceramic coating locks in the corrected finish and protects it for 2–9 years. The ultimate combo.</p>
              <div className="tier-price">From <span className="cyan">$599</span></div>
              <ul>
                <li>✓ Full paint correction included</li>
                <li>✓ 9H ceramic coating applied</li>
                <li>✓ 2, 5, or 9-year options</li>
                <li>✓ Hydrophobic UV protection</li>
              </ul>
              <Link to="/ceramic-coating" className="btn-primary">See Ceramic Options →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After note */}
      <section className="section-pad bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Results</span>
            <h2>Real Results on Houston Vehicles</h2>
            <p>We've corrected paint on Lamborghinis, Ferraris, Rolls-Royces, BMWs, and everyday daily drivers across River Oaks, Memorial, The Woodlands, Katy, Cypress, and Sugar Land.</p>
          </div>
          <div className="cta-btns" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/gallery" className="btn-primary">View Before & After Gallery →</Link>
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-outline">Book Paint Correction</a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Mobile Service</span>
            <h2>Paint Correction — We Come to You</h2>
            <p>No drop-off required. We bring our paint correction setup to your home, garage, or office anywhere in Greater Houston.</p>
          </div>
          <div className="areas-chips">
            {['River Oaks','Memorial','West University','Bellaire','The Woodlands','Katy','Cypress','Sugar Land','Pearland','Spring','Friendswood','Kingwood','Clear Lake','League City','Humble','Tomball','Conroe'].map(city => (
              <span key={city} className="area-chip">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ceramic-faq section-pad bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Paint Correction FAQs</h2>
          </div>
          <div className="faq-list">
            {faqSchema.mainEntity.map(item => (
              <details key={item.name} className="faq-item">
                <summary>{item.name}</summary>
                <p>{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Restore Your Paint?</h2>
            <p>Book online or call us. We confirm within the hour and come to you anywhere in Houston.</p>
            <div className="cta-btns">
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Paint Correction →</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  )
}
