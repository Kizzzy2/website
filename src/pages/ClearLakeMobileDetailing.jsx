import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Clear Lake TX",
  "description": "Mobile auto detailing in Clear Lake TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving NASA JSC area, Bay Area Blvd, El Camino Real, and Clear Lake City Blvd.",
  "url": "https://labshineautodetailing.com/clear-lake-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Clear Lake, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "postalCode": "77058", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.5588, "longitude": -95.1066 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Clear Lake?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Clear Lake. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Clear Lake?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Clear Lake. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Clear Lake?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Clear Lake location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function ClearLakeMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Clear Lake TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Clear Lake TX. Full detail from $185, ceramic from $599. Serving NASA JSC area, Bay Area Blvd, El Camino Real & Clear Lake City Blvd — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Clear Lake TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Clear Lake TX. Full detail from $185, ceramic from $599. Serving NASA JSC area, Bay Area Blvd, El Camino Real & Clear Lake City Blvd — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/clear-lake-mobile-detailing" />
      <meta property="og:title" content="Clear Lake TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Clear Lake TX — full detail, ceramic coating, paint correction. Serving NASA area, Bay Area Blvd, and all of Clear Lake City. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/clear-lake-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/pearland/IMG_4934.JPG" alt="Mobile auto detailing in Clear Lake, Houston TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Clear Lake, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Clear Lake TX</span></h1>
          <p>Precision detailing for Clear Lake City professionals, aerospace engineers, and boat owners. We come to your Bay Area Blvd home or NASA-area office — fully equipped, zero commute needed.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Clear Lake</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Clear Lake's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Clear Lake TX (ZIP codes 77058 and 77059) is the home of NASA's Johnson Space Center and one of Houston's most professionally accomplished communities. Residents along Bay Area Blvd, El Camino Real, and Clear Lake City Blvd include aerospace engineers, government contractors, research professionals, and waterfront homeowners who treat their vehicles as an extension of their standards. LabShine's mobile detailing service is built for this community — we come to your home or Clear Lake City office with a fully stocked setup that delivers showroom results without disrupting your workday.
            </p>
            <p>
              Clear Lake's bayfront geography creates a persistent coastal challenge for vehicle owners. The lake and surrounding waterways generate high ambient humidity and light salt air that dulls exterior surfaces and accelerates oxidation on metal trim. Boats docked at Clear Lake marinas face hull staining, waterline buildup, and UV degradation from long hours on the water. LabShine's ceramic coating packages address both automotive and marine surfaces with products engineered for the specific conditions of Southeast Houston's waterfront communities.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Clear Lake home or office. Perfect for aerospace and government professionals who need a spotless vehicle for daily JSC commutes and client meetings.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Premium steam cleaning, leather conditioning, and odor elimination for Clear Lake\'s professionals. Removes bay area salt residue, sunscreen, and the kind of interior buildup that a detail schedule prevents.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Developed for coastal conditions — repels Clear Lake humidity, salt mist, and UV at NASA Road 1-level intensity that fades paint without protection.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing to eliminate swirl marks, waterline mineral etching, and oxidation from Clear Lake\'s bayfront environment. Ideal prep before ceramic coating application.' },
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
            <h2>Why Clear Lake Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🚀</div>
                <h4>JSC-Area Professionals</h4>
                <p>We work around the schedules of Clear Lake's aerospace professionals and NASA contractors. Home appointments before your JSC shift or weekend slots — your choice.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Houston SE and Bay Area vehicle owners who work in exacting environments and expect the same precision from their detailer.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⛵</div>
                <h4>Marine Detailing Available</h4>
                <p>Clear Lake marina boats, ski boats, and watercraft detailed at your dock or driveway. Waterline deposits, hull staining, and UV-oxidized gelcoat restored on-site.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Flexible scheduling for Clear Lake's shift workers and professionals. Weekend and early morning appointments available for 77058 and 77059.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Clear Lake TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Clear Lake?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Clear Lake. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Clear Lake?</h3>
                <p>Yes — we come to your home, driveway, or office anywhere in Clear Lake including Bay Area Blvd, El Camino Real, and NASA Road 1 area. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Clear Lake?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Clear Lake location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Clear Lake TX Today</span></h2>
            <p>Serving all of Clear Lake TX including NASA Johnson Space Center area, Bay Area Blvd, El Camino Real, Clear Lake City Blvd, and waterfront communities along the lake. ZIP codes 77058 and 77059. Also near League City, Friendswood, and Pearland.</p>
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
