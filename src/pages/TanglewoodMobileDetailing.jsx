import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Tanglewood Houston TX",
  "description": "Mobile auto detailing in Tanglewood, Houston TX. Full detail, ceramic coating, and paint correction. Serving Tanglewood, Briargrove, and Galleria-area neighborhoods (77056).",
  "url": "https://labshineautodetailing.com/tanglewood-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Tanglewood, Houston TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "postalCode": "77056", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.7443, "longitude": -95.4685 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function TanglewoodMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Tanglewood Houston TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Tanglewood, Houston TX (77056). Full detail from $185, ceramic from $599. Serving Tanglewood, Briargrove & Galleria area — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing Tanglewood Houston TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Tanglewood Houston TX. Full detail from $185, ceramic from $599. Serving Tanglewood, Briargrove & Galleria area — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/tanglewood-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Tanglewood Houston TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Tanglewood Houston — full detail, ceramic coating, paint correction. Serving 77056, Briargrove, and Galleria-area neighborhoods." />
      <meta property="og:url" content="https://labshineautodetailing.com/tanglewood-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/houston/IMG_2355.JPG" alt="Mobile auto detailing in Tanglewood, Houston TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Tanglewood, Houston TX</span>
          <h1>Mobile Detailing in <span className="cyan">Tanglewood Houston</span></h1>
          <p>Premium mobile auto detailing for Tanglewood and Briargrove. We come to your Galleria-area home — full detail, ceramic coating, and paint correction at your driveway.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Tanglewood</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Tanglewood Mobile Detailing <span className="cyan">Done Right</span></h2>
            <p>
              Tanglewood (77056) is one of Houston's most prestigious inner-loop neighborhoods — a quiet enclave of luxury homes just minutes from the Galleria. The vehicles here — from Aston Martins on Tanglewood Boulevard to Range Rovers parked off Briargrove Drive — deserve professional-grade care, not a quick rinse at a drive-through.
            </p>
            <p>
              LabShine brings certified detailing expertise directly to your Tanglewood property. Our team works panel by panel, using professional clay bars, dual-action polishers, and premium coatings to deliver results that match the standard of this neighborhood. No shop required — we do everything at your address.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Tanglewood home. Clay bar, hand polish, paint sealant, engine bay — done in your driveway off Tanglewood Blvd or Briargrove Drive.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Full steam clean, carpet shampoo, leather conditioning. Perfect for Tanglewood and Galleria-area professionals who spend time in their vehicles every day.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating for 2–5 years of protection. Keeps your paint looking showroom-fresh despite Houston\'s UV, humidity, and the environmental fallout near the Galleria.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage correction to remove swirl marks, fine scratches, and oxidation. Perfect pre-coating prep for the luxury and exotic vehicles common in Tanglewood.' },
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
            <h2>Why Tanglewood Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏆</div>
                <h4>Luxury & Exotic Expertise</h4>
                <p>We regularly work on Aston Martins, Porsches, Range Rovers, and Mercedes AMGs. Your high-value vehicle is in the right hands.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Trusted by Houston's most discerning vehicle owners. Clients in the Galleria area keep coming back because the results are consistently excellent.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h4>We Come to You</h4>
                <p>We set up at your home anywhere in Tanglewood, Briargrove, or surrounding 77056 and 77063 zip codes. No drive to a shop needed.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Early morning slots available for Galleria-area executives with busy schedules.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Tanglewood Today</span></h2>
            <p>Serving Tanglewood, Briargrove, Briarwood, Briaroaks, and surrounding 77056 and 77063 zip codes near the Galleria. Book online in 2 minutes.</p>
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
