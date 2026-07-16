import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Friendswood TX",
  "description": "Mobile auto detailing in Friendswood TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving FM 518, Friendswood Village, Clear Creek, and Westwood Golf Club.",
  "url": "https://labshineautodetailing.com/friendswood-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Friendswood, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Friendswood", "addressRegion": "TX", "postalCode": "77546", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.5294, "longitude": -95.2010 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Friendswood?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Friendswood. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Friendswood?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Friendswood. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Friendswood?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Friendswood location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function FriendswoodMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Friendswood TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Friendswood TX. Full detail from $185, ceramic from $599. Serving FM 518, Friendswood Village, Clear Creek & Westwood Golf Club — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Friendswood TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Friendswood TX. Full detail from $185, ceramic from $599. Serving FM 518, Friendswood Village, Clear Creek & Westwood Golf Club — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/friendswood-mobile-detailing" />
      <meta property="og:title" content="Friendswood TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Friendswood TX — full detail, ceramic coating, paint correction. Serving Friendswood Village, Clear Creek, and all of Friendswood. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/friendswood-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/pearland/IMG_4247.JPG" alt="Mobile auto detailing in Friendswood TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Friendswood, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Friendswood TX</span></h1>
          <p>Luxury detailing for Friendswood's discerning vehicle owners. Sports cars, luxury SUVs, and family vehicles detailed at your FM 518 home or Westwood Golf Club property.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Friendswood</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Friendswood's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Friendswood TX (ZIP 77546) sits at the intersection of Galveston County and Harris County, known throughout the Houston metro for its excellent schools, quiet residential streets, and affluent, vehicle-conscious population. From the historic Friendswood Village area and the FM 518 commercial corridor to the manicured neighborhoods near Westwood Golf Club and the tree-lined streets along Clear Creek, LabShine delivers five-star mobile detailing to your front door. Luxury SUVs, sports cars, and family vehicles all receive the same meticulous care.
            </p>
            <p>
              Friendswood's proximity to Clear Creek and Galveston Bay means vehicles in this area deal with coastal humidity that's different from inland Houston. Salt air accelerates oxidation on chrome trim and alloy wheels, while the moisture-heavy atmosphere promotes water spot formation from irrigation and rain. Our paint correction and ceramic coating services are especially effective at reversing existing oxidation damage and creating a long-term barrier against Friendswood's coastal-adjacent climate conditions.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Friendswood home. Special attention to alloy wheel faces, chrome trim, and exterior glass that coastal humidity and salt air degrade faster than inland areas.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Premium leather conditioning, steam cleaning, and odor neutralization. Friendswood\'s luxury SUVs and sports cars get the white-glove treatment their interiors deserve.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Creates a critical barrier against Clear Creek humidity, coastal salt air, and Galveston County\'s intense summer UV.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing for Friendswood\'s luxury vehicles. Removes water spot etching, swirl marks, and oxidation from coastal air exposure — restoring a showroom-quality finish.' },
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
            <h2>Why Friendswood Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏌️</div>
                <h4>Country Club Quality at Home</h4>
                <p>Friendswood residents near Westwood Golf Club and Clear Creek expect excellence. We deliver the same standard your vehicles deserve — at your driveway, on your schedule.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Trusted across Google and Facebook by Houston South Shore and Galveston County vehicle owners who want perfection — not a mediocre result from a gas station wash bay.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚗</div>
                <h4>Sports Cars & Luxury Vehicles</h4>
                <p>We treat Friendswood's sports cars and luxury vehicles with the care they require. Proper products, hand application, and attention to paint clearance thresholds every time.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend availability for Friendswood professionals. Early slots for parents before the school run. Book in 2 minutes — no waiting, no shop scheduling delays.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Friendswood TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Friendswood?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Friendswood. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Friendswood?</h3>
                <p>Yes — we come to your home, driveway, or office anywhere in Friendswood including Friendswood Village, FM 518, and the Westwood Golf Club area. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Friendswood?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Friendswood location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Friendswood TX Today</span></h2>
            <p>Serving all of Friendswood TX including Friendswood Village, FM 518 corridor, Clear Creek neighborhoods, Westwood Golf Club area, and West Ranch communities. ZIP 77546. Also near Pearland, League City, and Clear Lake.</p>
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
