import { Helmet } from 'react-helmet-async'
import './LocationPage.css'
import img from '../lib/images'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Interior Detailing Houston TX",
  "description": "Professional mobile interior detailing in Houston TX. Steam cleaning, carpet shampoo, leather conditioning, odor treatment — we come to your home or office.",
  "url": "https://labshineautodetailing.com/interior-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Houston TX and Greater Houston metro",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Detailing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Detail Reset (Interior + Exterior)" }, "price": "185", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Show Detail" }, "price": "325", "priceCurrency": "USD" }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does interior detailing cost in Houston?",
      "acceptedAnswer": { "@type": "Answer", "text": "LabShine interior detailing is included in our Full Detail Reset starting at $185 for sedans and $225 for SUVs/trucks. Our Premium Show Detail starts at $325 for sedans and includes multi-stage correction and deep interior restoration." }
    },
    {
      "@type": "Question",
      "name": "What does interior detailing include?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our Full Detail Reset interior service includes full steam cleaning, carpet and upholstery shampoo, leather clean and condition, dashboard and trim detail, air vent cleaning, and odor treatment. Our Premium Show Detail adds steam extraction, leather restoration, and glass polishing." }
    },
    {
      "@type": "Question",
      "name": "How long does interior detailing take?",
      "acceptedAnswer": { "@type": "Answer", "text": "A Full Detail Reset takes 4–6 hours. A Premium Show Detail takes 8–12 hours depending on vehicle size and condition." }
    },
    {
      "@type": "Question",
      "name": "Do you do interior-only detailing?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our most popular package is the Full Detail Reset which covers both interior and exterior. Contact us at (346) 452-9991 if you need a custom interior-only quote for your specific situation." }
    }
  ]
}

const included = [
  { icon: '💨', title: 'Steam Cleaning', desc: 'High-pressure steam removes bacteria, odors, and embedded dirt from every surface.' },
  { icon: '🧴', title: 'Carpet & Upholstery Shampoo', desc: 'Hot water extraction shampoo lifts deep stains and restores fibers to near-new condition.' },
  { icon: '🪑', title: 'Leather Clean & Condition', desc: 'pH-balanced leather cleaner removes grime; conditioner restores suppleness and prevents cracking.' },
  { icon: '✨', title: 'Dashboard & Trim Detail', desc: 'Every surface wiped, conditioned, and dressed — dash, door panels, center console, vents.' },
  { icon: '🚗', title: 'Glass & Mirror Polish', desc: 'Interior glass cleaned streak-free for maximum visibility.' },
  { icon: '🌿', title: 'Odor Treatment', desc: 'Enzyme-based odor eliminator neutralizes pet, smoke, and food odors at the source.' },
]

const faqs = [
  { q: 'How much does interior detailing cost in Houston?', a: 'LabShine interior detailing is included in our Full Detail Reset starting at $185 (sedan) / $225 (SUV). Our Premium Show Detail starts at $325 for sedans.' },
  { q: 'What does interior detailing include?', a: 'Full steam clean, carpet & upholstery shampoo, leather clean & condition, dash & trim detail, air vent cleaning, interior glass, and odor treatment.' },
  { q: 'How long does interior detailing take?', a: 'Full Detail Reset: 4–6 hours. Premium Show Detail: 8–12 hours depending on vehicle size and condition.' },
  { q: 'Do you do interior-only detailing?', a: 'Our most popular package is the Full Detail Reset (interior + exterior). Contact us at (346) 452-9991 for a custom interior-only quote.' },
]

export default function InteriorDetailing() {
  return (
    <>
      <Helmet>
        <title>Interior Car Detailing Houston TX | LabShine Auto Detailing</title>
        <meta name="description" content="Mobile interior car detailing Houston TX. Steam clean, carpet shampoo, leather conditioning, odor treatment. Full Detail from $185. We come to you." />
        <link rel="canonical" href="https://labshineautodetailing.com/interior-detailing" />
        <meta property="og:title" content="Interior Car Detailing Houston TX | LabShine Auto Detailing" />
        <meta property="og:description" content="Mobile interior car detailing in Houston. Steam clean, carpet shampoo, leather conditioning, odor treatment. Full Detail Reset from $185 — we come to you." />
        <meta property="og:url" content="https://labshineautodetailing.com/interior-detailing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <main className="location-page">
        <section className="location-hero">
          <img src="/images/houston/IMG_4200.jpeg" alt="Professional interior car detailing Houston TX — LabShine steam cleaning and leather conditioning" className="location-hero-img" loading="eager" />
          <div className="page-hero-overlay" />
          <div className="container">
            <span className="hero-badge">Interior Detailing Houston TX</span>
            <h1>Interior Car Detailing in <span className="cyan">Houston, TX</span></h1>
            <p>Steam cleaning, carpet shampoo, leather conditioning, and odor treatment — performed at your home or office. No drop-off needed.</p>
            <div className="hero-btns">
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Interior Detail</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="location-intro">
              <h2>Houston's Mobile Interior <span className="cyan">Detailing</span> Service</h2>
              <p>Your car's interior takes the hardest abuse — daily commutes, kids, pets, food, and Houston's heat. LabShine's mobile interior detailing service uses professional steam equipment, hot-water extraction, and pH-balanced cleaners to restore your interior to showroom condition.</p>
              <p>We come to your driveway, garage, or office parking lot anywhere in the Greater Houston area. No drop-off, no wasted time — just a clean car waiting for you.</p>
            </div>

            <div className="services-grid" style={{ marginBottom: 60 }}>
              {included.map(item => (
                <div key={item.title} className="service-card">
                  <span style={{ fontSize: '2rem', marginBottom: 12, display: 'block' }}>{item.icon}</span>
                  <h3 style={{ color: 'var(--cyan)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="location-intro">
              <h2>Interior Detailing <span className="cyan">Pricing</span></h2>
              <p>Interior detailing is included in our Full Detail Reset and Premium Show Detail packages. All prices are transparent — no hidden fees.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 60 }}>
              <div className="service-card" style={{ borderColor: 'var(--cyan)' }}>
                <div className="pricing-tag" style={{ display: 'inline-block', marginBottom: 12 }}>Most Popular</div>
                <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Full Detail Reset</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: 16 }}>Interior + Exterior, clay bar, machine polish, sealant</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: 'var(--gray)' }}>Sedan / Coupe</span>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>$185</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ color: 'var(--gray)' }}>SUV / Truck</span>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>$225</span>
                </div>
                <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Book Now →</a>
              </div>
              <div className="service-card">
                <div className="pricing-tag" style={{ display: 'inline-block', marginBottom: 12, background: 'rgba(0,200,255,0.1)' }}>Premium</div>
                <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>Premium Show Detail</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: 16 }}>Multi-stage correction, competition interior, machine wax</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: 'var(--gray)' }}>Sedan / Coupe</span>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>$325</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ color: 'var(--gray)' }}>SUV / Truck</span>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>$395</span>
                </div>
                <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Book Now →</a>
              </div>
            </div>

            {/* FAQs */}
            <div className="location-faq">
              <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Interior Detailing <span style={{ color: 'var(--cyan)' }}>FAQs</span></h2>
              <div className="faq-list">
                {faqs.map((item, i) => (
                  <div key={i} className="faq-item">
                    <h3>{item.q}</h3>
                    <p style={{ color: 'var(--gray)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready for a Clean Interior?</h2>
              <p>Book online — we confirm within the hour and come to you anywhere in Houston.</p>
              <div className="cta-btns">
                <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Interior Detail →</a>
                <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
