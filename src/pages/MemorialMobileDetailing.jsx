import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Memorial Houston TX",
  "description": "Mobile auto detailing in Memorial, Houston TX. Full detail, ceramic coating, and paint correction. Serving Memorial Villages, Hunters Creek, Piney Point, and surrounding 77024 areas.",
  "url": "https://labshineautodetailing.com/memorial-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Memorial, Houston TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "postalCode": "77024", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.7654, "longitude": -95.5086 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function MemorialMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Memorial Houston TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Memorial, Houston TX (77024). Full detail from $185, ceramic from $599. Serving Memorial Villages, Hunters Creek & Piney Point — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing Memorial Houston TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Memorial Houston TX. Full detail from $185, ceramic from $599. Serving Memorial Villages, Hunters Creek & Piney Point — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/memorial-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Memorial Houston TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Memorial Houston — full detail, ceramic coating, paint correction. Serving Memorial Villages, Hunters Creek, Piney Point, and 77024." />
      <meta property="og:url" content="https://labshineautodetailing.com/memorial-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/memorial/IMG_5217.JPG" alt="Mobile auto detailing in Memorial, Houston TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Memorial, Houston TX</span>
          <h1>Mobile Detailing in <span className="cyan">Memorial Houston</span></h1>
          <p>Professional mobile auto detailing for Memorial's most discerning vehicle owners. We come to your home in Memorial Villages, Hunters Creek, or Piney Point — no drop-off needed.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Memorial</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Memorial's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Memorial (77024) is one of Houston's most sought-after addresses — and vehicles in Memorial Villages, Hunters Creek, Piney Point, and Bunker Hill reflect that standard. LabShine brings certified mobile detailing directly to your Memorial property, whether your daily driver is a Range Rover Sport or a garage-kept Porsche GT3.
            </p>
            <p>
              Memorial's stunning tree canopy along Memorial Drive creates a unique detailing challenge: consistent pollen, pine sap, and bird dropping exposure that can permanently etch paint if left untreated. Our ceramic coatings and paint correction services are specifically designed to address these organic contaminants and lock in long-term protection — so your vehicle looks as polished as the neighborhood.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior + exterior detailing at your Memorial home. Includes clay bar, hand polish, paint sealant, and engine bay — done in your driveway while you work or relax.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Full steam clean, carpet shampoo, leather conditioning, and odor treatment. Perfect for Memorial families after school runs, weekend trips, and Country Club drives.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating that fights the pollen, sap, and UV that Memorial\'s tree canopy produces year-round. 2–5 years of protection applied at your 77024 address.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Remove bird dropping etching, sap hazing, and swirl marks. Critical for Memorial vehicles where organic contamination is constant along the bayou and wooded streets.' },
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
            <h2>Why Memorial Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🌳</div>
                <h4>Tree Canopy Expertise</h4>
                <p>We understand what pollen, pine sap, and bird droppings do to paint on Memorial Drive. Our treatments address organic contamination before it permanently etches your clearcoat.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Trusted by Houston area clients for consistent, high-quality results. Memorial clients come back repeatedly because the results never slip.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🏠</div>
                <h4>We Come to You</h4>
                <p>We set up at your Memorial Villages, Hunters Creek, Piney Point, or Bunker Hill home. No driving to a shop — zero disruption to your day.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Flexible scheduling for Memorial's professionals and families.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Memorial Houston</span></h2>
            <p>Serving Memorial Villages, Hunters Creek, Piney Point, Bunker Hill, Spring Valley, and all of Houston's 77024 and 77079 zip codes. Book in under 2 minutes.</p>
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
