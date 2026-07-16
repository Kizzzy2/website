import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Missouri City TX",
  "description": "Mobile auto detailing in Missouri City TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving Fort Bend County, Sienna Plantation, Quail Valley, and Texas Pkwy.",
  "url": "https://labshineautodetailing.com/missouri-city-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Missouri City, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Missouri City", "addressRegion": "TX", "postalCode": "77459", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.6186, "longitude": -95.5385 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Missouri City?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Missouri City. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Missouri City?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Missouri City. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Missouri City?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Missouri City location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function MissouriCityMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Missouri City TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Missouri City TX. Full detail from $185, ceramic from $599. Serving Sienna Plantation, Quail Valley, Texas Pkwy & Fort Bend County — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Missouri City TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Missouri City TX. Full detail from $185, ceramic from $599. Serving Sienna Plantation, Quail Valley, Texas Pkwy & Fort Bend County — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/missouri-city-mobile-detailing" />
      <meta property="og:title" content="Missouri City TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Missouri City TX — full detail, ceramic coating, paint correction. Serving Sienna Plantation, Quail Valley, and all of Missouri City. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/missouri-city-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/sugar-land/IMG_4403.JPG" alt="Mobile auto detailing in Missouri City TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Missouri City, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Missouri City TX</span></h1>
          <p>Fort Bend County luxury detailing for Sienna Plantation homeowners, Quail Valley residents, and Texas Pkwy professionals. We come to your driveway — zero drop-off required.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Missouri City</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Missouri City's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Missouri City TX spans ZIP codes 77459 and 77489 in Fort Bend County, home to some of the most desirable master-planned communities in the entire Houston metro. Sienna Plantation's manicured neighborhoods, the established Quail Valley golf community, and the bustling Texas Pkwy corridor attract professional families with high standards for their homes and their vehicles. LabShine's mobile service delivers luxury-grade detailing to your Missouri City driveway — whether you're in a new-build Sienna home or an established Quail Valley estate.
            </p>
            <p>
              Fort Bend County's rapid growth brings new roads, construction dust, and heavy commuter traffic on Sienna Pkwy and Hwy 6 that leaves vehicles looking tired quickly. Missouri City's summer heat intensity rivals any part of the Greater Houston area, accelerating UV paint fade and making interior surfaces brittle without proper conditioning. Our ceramic coating and interior protection packages are built for this level of daily use and sun exposure, keeping Fort Bend County vehicles looking showroom-fresh year-round.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Missouri City home. Removes Sienna Pkwy construction dust, Hwy 6 road film, and all seasonal contaminants from paint, glass, and trim.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Premium steam cleaning, carpet shampoo, and leather conditioning for Missouri City\'s luxury SUVs and family vehicles. Quail Valley and Sienna homeowners trust us for the details that matter.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Handles Fort Bend County\'s intense summer UV, construction fallout from new Sienna development phases, and daily commuter road exposure.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing for Missouri City\'s luxury vehicles. Removes swirl marks, construction micro-abrasion, and hard water etching common in new Fort Bend County communities.' },
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
            <h2>Why Missouri City Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏘️</div>
                <h4>Sienna, Quail Valley & Beyond</h4>
                <p>From Sienna Plantation's newest phases to Quail Valley's established streets and Texas Pkwy commercial areas — we serve every corner of 77459 and 77489.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Top-rated by Fort Bend County and Greater Houston customers on Google and Facebook. Missouri City homeowners expect quality — we consistently deliver it.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚗</div>
                <h4>Luxury SUVs & Family Vehicles</h4>
                <p>Missouri City driveways feature Escalades, Navigators, Range Rovers, and minivans equally. We detail them all with the same meticulous attention to paint and interior condition.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend appointments for Sienna families. Early morning slots before Texas Pkwy commutes. Book in 2 minutes online with instant confirmation.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Missouri City TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Missouri City?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Missouri City. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Missouri City?</h3>
                <p>Yes — we come to your home, driveway, or office anywhere in Missouri City including Sienna Plantation and Quail Valley. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Missouri City?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Missouri City location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Missouri City TX Today</span></h2>
            <p>Serving all of Missouri City TX including Sienna Plantation, Quail Valley, Texas Pkwy corridor, Riverstone, and new Fort Bend County communities throughout 77459 and 77489. Also near Sugar Land, Pearland, and Richmond.</p>
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
