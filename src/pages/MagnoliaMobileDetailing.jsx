import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Magnolia TX",
  "description": "Mobile auto detailing in Magnolia TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving FM 1488, Magnolia Town Center, Woodlands Pkwy extension, and Nichols Sawmill.",
  "url": "https://labshineautodetailing.com/magnolia-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Magnolia, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Magnolia", "addressRegion": "TX", "postalCode": "77354", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.2099, "longitude": -95.7508 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Magnolia?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Magnolia. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Magnolia?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Magnolia. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Magnolia?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Magnolia location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function MagnoliaMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Magnolia TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Magnolia TX. Full detail from $185, ceramic from $599. Serving FM 1488, Magnolia Town Center, Woodlands Pkwy & Nichols Sawmill — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Magnolia TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Magnolia TX. Full detail from $185, ceramic from $599. Serving FM 1488, Magnolia Town Center, Woodlands Pkwy & Nichols Sawmill — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/magnolia-mobile-detailing" />
      <meta property="og:title" content="Magnolia TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Magnolia TX — full detail, ceramic coating, paint correction. Serving FM 1488, Magnolia Town Center, and all of Magnolia. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/magnolia-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/cypress/IMG_4290.JPG" alt="Mobile auto detailing in Magnolia TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Magnolia, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Magnolia TX</span></h1>
          <p>Professional detailing for Magnolia's pickup trucks, acreage SUVs, and new-construction community vehicles. We come to your FM 1488 property or Woodlands Pkwy neighborhood.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Magnolia</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Magnolia's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Magnolia TX is a rapidly expanding Montgomery County community covering ZIP codes 77354 and 77355. Stretching from the FM 1488 corridor and Magnolia Town Center to the Woodlands Pkwy extension and the historic Nichols Sawmill area, Magnolia attracts new-construction residents, ranching families, and commuters who want a rural feel with suburban convenience. LabShine serves them all with mobile detailing that comes directly to your property — whether that's a new neighborhood off Woodlands Pkwy or a working ranch near Nichols Sawmill Road.
            </p>
            <p>
              Magnolia's semi-rural character and active construction activity mean vehicles accumulate a challenging mix of road dust, construction fallout, and organic debris from surrounding pine and oak tree cover. New residents in recently built communities often find their vehicles covered in concrete dust and overspray that standard car washes can't remove. Our clay bar decontamination and paint correction services are particularly valuable in Magnolia's newer neighborhoods where construction activity is ongoing.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Magnolia property. We tackle FM 1488 road dust, construction fallout from new developments, and tree sap from Magnolia\'s mature canopy.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Steam cleaning, carpet extraction, and odor elimination for Magnolia\'s ranching families and new-construction residents dealing with construction dust, outdoor debris, and daily wear.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Shields Magnolia vehicles against construction fallout, organic debris, and the intense UV of Montgomery County summers.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polish designed for Magnolia\'s dusty conditions. Removes construction micro-scratches, water spot etching, and oxidation from vehicles stored outdoors on acreage.' },
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
            <h2>Why Magnolia Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🌾</div>
                <h4>Rural & Subdivision Ready</h4>
                <p>From working ranches near Nichols Sawmill Rd to new subdivisions off Woodlands Pkwy, we navigate all of Magnolia's 77354 and 77355 ZIP codes with full equipment.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Montgomery County and Greater Houston customers across Google and Facebook who expect a professional result without the shop hassle.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🏗️</div>
                <h4>Construction Fallout Specialists</h4>
                <p>New Magnolia communities have active construction nearby. We remove concrete dust, overspray, and industrial fallout that bonded to your paint — damage that regular washes make worse.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend availability for Magnolia families. Early slots for ranchers. Book online in 2 minutes with same-day confirmation for 77354 and 77355.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Magnolia TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Magnolia?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Magnolia. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Magnolia?</h3>
                <p>Yes — we come to your home, ranch, or property anywhere in Magnolia including FM 1488, Magnolia Town Center, and the Woodlands Pkwy area. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Magnolia?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Magnolia location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Magnolia TX Today</span></h2>
            <p>Serving all of Magnolia TX including FM 1488 corridor, Magnolia Town Center, Woodlands Pkwy extension, Nichols Sawmill area, and new-construction communities throughout 77354 and 77355. Also near Tomball, Conroe, and Cypress.</p>
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
