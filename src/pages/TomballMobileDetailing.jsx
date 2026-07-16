import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Tomball TX",
  "description": "Mobile auto detailing in Tomball TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving FM 2920, Northpointe, Tomball Parkway, and Willow Creek Ranch.",
  "url": "https://labshineautodetailing.com/tomball-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Tomball, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Tomball", "addressRegion": "TX", "postalCode": "77375", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.0974, "longitude": -95.6163 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Tomball?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Tomball. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Tomball?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Tomball. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Tomball?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Tomball location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function TomballMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Tomball TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Tomball TX. Full detail from $185, ceramic from $599. Serving FM 2920, Northpointe, Tomball Pkwy & Willow Creek Ranch — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tomball TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Tomball TX. Full detail from $185, ceramic from $599. Serving FM 2920, Northpointe, Tomball Pkwy & Willow Creek Ranch — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/tomball-mobile-detailing" />
      <meta property="og:title" content="Tomball TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Tomball TX — full detail, ceramic coating, paint correction. Serving Northpointe, Willow Creek Ranch, and all of Tomball. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/tomball-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/cypress/IMG_4133.JPG" alt="Mobile auto detailing in Tomball TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Tomball, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Tomball TX</span></h1>
          <p>Showroom-quality detailing delivered to Tomball ranches, subdivisions, and driveways. Trucks, ranch vehicles, and suburban SUVs detailed right where you park them.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Tomball</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Tomball's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Tomball TX blends small-town character with rapid suburban growth across ZIP codes 77375 and 77377. Whether you're on a ranch property off FM 2920, a newer home in the Northpointe master-planned community, or a family living along Tomball Parkway (Hwy 249), LabShine comes to you with a full professional setup. Tomball driveways are home to heavy-duty pickup trucks, work rigs that double as weekend vehicles, and well-appointed suburban SUVs — and every one of them benefits from the mobile detailing treatment we deliver right at your property.
            </p>
            <p>
              Tomball's semi-rural character means vehicles face a unique combination of challenges: red clay soil that embeds in carpet fibers, tree sap from mature post oaks that bonds to paint, and agricultural dust that accumulates in AC vents and door seams. Add in the Gulf humidity and summer UV intensity, and unprotected paint degrades faster than owners expect. Our ceramic coating packages are specifically effective against this combination of organic and environmental contaminants.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Comprehensive interior and exterior detail performed at your Tomball property. We tackle the clay soil, pollen, and sap accumulation common to FM 2920 and Willow Creek Ranch driveways.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Deep steam cleaning, carpet extraction, and leather conditioning. Designed for Tomball trucks and ranch vehicles that carry dirt, equipment, and livestock-related odors on the regular.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Creates a sacrificial layer against tree sap, road tar from Hwy 249, and the relentless North Harris County UV exposure.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Professional swirl removal, scratch reduction, and paint restoration. Restores luster to Tomball work trucks and suburban SUVs dulled by automated washes and outdoor storage.' },
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
            <h2>Why Tomball Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏠</div>
                <h4>We Come to Your Property</h4>
                <p>Ranch driveways, suburban garages, commercial lots off Tomball Pkwy — wherever you park in 77375 or 77377, we set up and work around your schedule.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Top-rated across Google and Facebook by Houston-area customers who want detail work done once and done right — not rushed for throughput.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚜</div>
                <h4>Built for Trucks & Ranch Vehicles</h4>
                <p>We know what real Tomball work looks like inside a truck cab. Heavy-duty extraction, engine bay cleaning, and full bed detailing available on request.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>Open 7 Days, 7AM–7PM</h4>
                <p>Early morning slots work for ranchers. Weekend availability for busy Northpointe and Willow Creek Ranch families. Book in 2 minutes online.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Tomball TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Tomball?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Tomball. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Tomball?</h3>
                <p>Yes — we come to your home, ranch, or business anywhere in Tomball including Northpointe, FM 2920, and Willow Creek Ranch. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Tomball?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Tomball location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Tomball TX Today</span></h2>
            <p>Serving all of Tomball TX including Northpointe, Willow Creek Ranch, FM 2920 corridor, Tomball Parkway (Hwy 249), and Rosehill communities. ZIP codes 77375 and 77377. Also near Spring, Cypress, and Magnolia.</p>
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
