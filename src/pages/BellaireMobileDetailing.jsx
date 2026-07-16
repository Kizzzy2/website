import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Bellaire TX",
  "description": "Mobile auto detailing in Bellaire, TX. Full detail, ceramic coating, and paint correction delivered to your home. Serving Bellaire, West U, Meyerland, and surrounding 77401 areas.",
  "url": "https://labshineautodetailing.com/bellaire-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Bellaire, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Bellaire", "addressRegion": "TX", "postalCode": "77401", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.7057, "longitude": -95.4588 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function BellaireMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Bellaire TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Bellaire TX (77401). Full detail from $185, ceramic from $599. Serving Bellaire, Meyerland & West U — we come to your driveway." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing Bellaire TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Bellaire TX. Full detail from $185, ceramic from $599. Serving Bellaire, Meyerland & West U — we come to your driveway." />
      <link rel="canonical" href="https://labshineautodetailing.com/bellaire-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Bellaire TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Bellaire TX — full detail, ceramic coating, paint correction. We come to your home in Bellaire, Meyerland, or West U." />
      <meta property="og:url" content="https://labshineautodetailing.com/bellaire-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/houston/IMG_4084.jpeg" alt="Mobile auto detailing in Bellaire TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Bellaire, TX</span>
          <h1>Mobile Detailing in <span className="cyan">Bellaire TX</span></h1>
          <p>Professional mobile auto detailing delivered to your Bellaire driveway. Full detail, ceramic coating, and paint correction — no shop required.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Bellaire</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Bellaire's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Bellaire (77401) sits at the heart of Houston's most desirable inner-loop communities. Bordering West University Place and Meyerland, Bellaire residents have high standards for their homes — and their vehicles. LabShine brings certified mobile auto detailing directly to your Bellaire home, saving you the hassle of scheduling around a shop while delivering results that exceed what most shops produce.
            </p>
            <p>
              Vehicles in Bellaire face the same challenges as all inner-loop Houston cars — intense summer UV, humidity, and seasonal pollen from the many mature trees lining Bellaire Boulevard and its surrounding neighborhoods. Our ceramic coating packages create a long-lasting hydrophobic shield that simplifies maintenance and protects your investment year-round.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior + exterior detailing at your Bellaire home. Clay bar, hand polish, paint sealant, and engine bay — done in your driveway off Bellaire Blvd or Newcastle Drive.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Full steam clean, carpet shampoo, leather conditioning, and odor treatment. Perfect for Bellaire families, daily commuters, and dog owners.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating providing 2–5 years of protection against Bellaire\'s Houston heat, humidity, and UV exposure. Hydrophobic and self-cleaning properties.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Remove swirl marks, water spot etching, and oxidation from any vehicle. Restore your factory finish before applying protective coating in Bellaire.' },
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-price">{s.price}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="location-why">
            <h2>Why Bellaire Residents Choose <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h4>We Come to Bellaire</h4>
                <p>We set up at your home anywhere in Bellaire (77401). Bellaire Blvd, Newcastle, Mulberry, or S Rice Ave — we work at your location, not ours.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Trusted by Houston area customers who demand quality. Bellaire clients recommend LabShine to neighbors because the results are always consistent.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🔑</div>
                <h4>One Detailer, One Car</h4>
                <p>Your vehicle gets undivided attention — not rushed through a shop with multiple other cars. Every detail done right, start to finish.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Weekend and weekday appointments available to fit your schedule.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Bellaire Today</span></h2>
            <p>Serving Bellaire, Meyerland, West University Place, Braeswood, and surrounding 77401 and 77025 zip codes. Book online in under 2 minutes.</p>
            <div className="hero-btns">
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
              <a href="tel:3464529991" className="btn-outline">Call or Text</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
