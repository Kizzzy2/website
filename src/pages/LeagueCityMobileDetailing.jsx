import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — League City TX",
  "description": "Mobile auto detailing in League City TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving Clear Lake area, I-45, Galveston Bay, South Shore Harbour, and Marina del Sol.",
  "url": "https://labshineautodetailing.com/league-city-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "League City, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "League City", "addressRegion": "TX", "postalCode": "77573", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.5075, "longitude": -95.0949 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in League City?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in League City. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in League City?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or marina anywhere in League City. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in League City?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your League City location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function LeagueCityMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>League City TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in League City TX. Full detail from $185, ceramic from $599. Serving South Shore Harbour, Marina del Sol, Clear Lake & Galveston Bay — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="League City TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in League City TX. Full detail from $185, ceramic from $599. Serving South Shore Harbour, Marina del Sol, Clear Lake & Galveston Bay — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/league-city-mobile-detailing" />
      <meta property="og:title" content="League City TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in League City TX — full detail, ceramic coating, paint correction. Serving South Shore Harbour, Marina del Sol, and all of League City. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/league-city-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/houston/IMG_4989.JPG" alt="Mobile auto detailing in League City TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving League City, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">League City TX</span></h1>
          <p>Waterfront-ready detailing for League City boats, sports cars, and luxury SUVs. We service South Shore Harbour, Marina del Sol, and every community along Galveston Bay.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in League City</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>League City's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              League City TX spans ZIP codes 77573 and 77574 along the northern shore of Galveston Bay, making it one of the most water-oriented communities in the Greater Houston area. From the upscale marina communities of South Shore Harbour and Marina del Sol to the I-45 corridor's growing residential footprint, League City residents share a passion for waterfront living and well-maintained vehicles. LabShine's mobile service is uniquely positioned to serve both — detailing your sports car, luxury SUV, or bay boat right at your driveway or marina slip.
            </p>
            <p>
              Galveston Bay proximity means League City vehicles are exposed to salt air year-round — one of the most corrosive environments for automotive paint, chrome, and aluminum trim. Salt deposits accelerate oxidation on wheel faces and exhaust tips, while bay mist coats surfaces in a fine mineral film that dulls even freshly cleaned paint within days. Our marine-grade ceramic coating packages are formulated specifically for this coastal environment, providing the hydrophobic barrier and UV resistance that League City vehicle owners need to stay ahead of bay-area degradation.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your League City home or marina. We neutralize salt air film, polish chrome trim, and apply a sealant that holds up against Galveston Bay\'s coastal environment.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Premium steam cleaning, leather conditioning, and odor elimination for League City\'s sports cars and luxury SUVs. Bay area sand and salt in floor mats removed with professional extraction.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating engineered for coastal environments. Protects League City vehicles against Galveston Bay salt air, UV intensity, and the corrosive humidity that accelerates oxidation on alloy wheels.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing to reverse salt air oxidation, water spot etching, and swirl damage. Restores depth to League City luxury vehicles before ceramic coating application.' },
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
            <h2>Why League City Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">⚓</div>
                <h4>Marina & Driveway Service</h4>
                <p>We come to South Shore Harbour, Marina del Sol, and waterfront properties throughout 77573 and 77574. Car, boat, or both — we handle it at your location.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Trusted across Google and Facebook by South Shore area vehicle owners who understand what Bay Area salt air does to paint and expect a detailer who addresses it properly.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚤</div>
                <h4>Boats & Coastal Vehicles Welcome</h4>
                <p>We detail bay boats, center consoles, and trailered watercraft alongside your cars. Marine-grade sealants and hull restoration available at the same appointment.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Pre-weekend appointments for League City boaters. Evening slots for I-45 commuters. Book online in minutes — your marina or driveway, your schedule.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">League City TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in League City?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in League City. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in League City?</h3>
                <p>Yes — we come to your home, driveway, or marina anywhere in League City including South Shore Harbour and Marina del Sol. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in League City?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your League City location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">League City TX Today</span></h2>
            <p>Serving all of League City TX including South Shore Harbour, Marina del Sol, Clear Lake Shores, I-45 corridor communities, and Galveston Bay waterfront properties. ZIP codes 77573 and 77574. Also near Friendswood, Clear Lake, and Pearland.</p>
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
