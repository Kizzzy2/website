import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — West University Houston TX",
  "description": "Mobile auto detailing in West University Place, Houston TX. Full detail, ceramic coating, and paint correction. Serving West U, Southside Place, and surrounding 77005 areas.",
  "url": "https://labshineautodetailing.com/west-university-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "West University Place, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "West University Place", "addressRegion": "TX", "postalCode": "77005", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.7168, "longitude": -95.4291 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function WestUniversityMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing West University Houston TX | LabShine</title>
      <meta name="description" content="Mobile auto detailing in West University Place, Houston TX (77005). Full detail from $185, ceramic from $599. We come to your West U driveway — no drop-off needed." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing West University Houston TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in West University Place, Houston TX. Full detail from $185, ceramic from $599. We come to you in West U — no drop-off needed." />
      <link rel="canonical" href="https://labshineautodetailing.com/west-university-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing West University Houston TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in West University Place — full detail, ceramic coating, paint correction. We come to your 77005 home." />
      <meta property="og:url" content="https://labshineautodetailing.com/west-university-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/houston/IMG_4200.jpeg" alt="Mobile auto detailing in West University, Houston TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving West University, Houston TX</span>
          <h1>Mobile Detailing in <span className="cyan">West University</span></h1>
          <p>Professional mobile auto detailing for West University Place and Southside Place. We come to your 77005 driveway — no drop-off, no waiting rooms.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in West U</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>West University Mobile Detailing <span className="cyan">Done Right</span></h2>
            <p>
              West University Place (77005) is consistently ranked one of the most affluent and educated communities in Texas — and the vehicles here reflect that standard. From the tree-lined streets near Rice University to the quiet cul-de-sacs off Bellaire Boulevard, LabShine provides professional mobile detailing that West U residents deserve, delivered straight to their driveways.
            </p>
            <p>
              Vehicles in West U face a combination of Houston's heat, humidity, and the tree canopy pollen that settles on paint between weekly washes. Our ceramic coatings provide a hydrophobic, UV-resistant barrier that dramatically reduces maintenance while keeping your paint in showroom condition year-round.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior + exterior detailing at your West U home. Clay bar, hand polish, paint sealant, and engine bay — done in your driveway off Bissonnet, Bellaire, or West Main.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Full steam clean, carpet shampoo, leather conditioning. Popular with West U families and Rice University area professionals after daily commutes and weekend activities.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating for 2–5 years of protection against West U\'s heat, humidity, and seasonal pollen. Hydrophobic effect makes every wash effortless.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage correction removes swirls, water spots, and oxidation. Restores your paint to factory condition before applying protective coating.' },
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
            <h2>Why West U Residents Choose <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏠</div>
                <h4>We Come to West U</h4>
                <p>We set up at your home anywhere in 77005 or 77401. Bissonnet, Bellaire, West Main, Sunset — we work at your location, not the other way around.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Houston area customers. West U clients return because the quality is always there — on every single job.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚘</div>
                <h4>Luxury Vehicle Experts</h4>
                <p>We regularly work on BMWs, Mercedes, Range Rovers, and Porsches. Your vehicle is in experienced hands with the right products for your specific paint.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday–Sunday, 7AM–7PM. Flexible scheduling for West U's professionals, academics, and busy families.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">West University Today</span></h2>
            <p>Serving West University Place, Southside Place, Bellaire, and surrounding 77005 and 77401 zip codes. Most appointments available within 48 hours. Book online in 2 minutes.</p>
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
