import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Houston Heights TX",
  "description": "Mobile auto detailing in Houston Heights, TX. Full detail, ceramic coating, and paint correction. Serving Heights, Montrose, Garden Oaks, and surrounding 77008 areas.",
  "url": "https://labshineautodetailing.com/heights-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Houston Heights, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "postalCode": "77008", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.7985, "longitude": -95.4003 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function HeightsMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Houston Heights TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Houston Heights TX (77008). Full detail from $185, ceramic from $599. Serving the Heights, Montrose & Garden Oaks — we come to your driveway." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing Houston Heights TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Houston Heights TX. Full detail from $185, ceramic from $599. Serving Heights, Montrose & Garden Oaks — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/heights-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Houston Heights TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Houston Heights — full detail, ceramic coating, paint correction. Serving 77008, Montrose, and Garden Oaks neighborhoods." />
      <meta property="og:url" content="https://labshineautodetailing.com/heights-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/memorial/IMG_3388.JPG" alt="Mobile auto detailing in The Heights, Houston TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Houston Heights, TX</span>
          <h1>Mobile Detailing in <span className="cyan">Houston Heights</span></h1>
          <p>Professional mobile auto detailing for the Heights, Montrose, and Garden Oaks. We come to your driveway — full detail, ceramic coating, and paint correction on your schedule.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in the Heights</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Houston Heights Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Houston Heights (77008) is one of Houston's most vibrant and rapidly evolving inner-loop neighborhoods — and the vehicles on its streets are just as diverse as its character. From restored vintage trucks on White Oak Drive to new Teslas and BMWs parked off 19th Street, LabShine serves the Heights community with the same professional-grade mobile detailing that we provide across Greater Houston.
            </p>
            <p>
              Heights vehicles face the same brutal Houston elements as any inner-loop car — intense UV, humidity, seasonal pollen, and hard water deposits. Our ceramic coatings and paint correction services address these issues head-on, giving your vehicle long-term protection while dramatically simplifying your maintenance routine.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Heights home. Clay bar, hand polish, paint sealant, and engine bay — done in your driveway off Heights Blvd, 19th St, or White Oak.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Full steam clean, carpet shampoo, leather conditioning, and odor treatment. Popular with Heights residents after farmers markets, White Oak brewery runs, and weekend adventures.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating for 2–5 years of protection in Houston\'s heat and humidity. The hydrophobic effect makes every wash faster and keeps your paint looking new year-round.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage correction removes swirl marks, water spots, and oxidation. Restores your paint to factory condition before adding a protective ceramic layer.' },
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
            <h2>Why Heights Residents Choose <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h4>We Come to the Heights</h4>
                <p>No driving across town to a shop. We set up at your Heights, Montrose, or Garden Oaks home. Heights Blvd, 11th, 19th, or White Oak — we come to you.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Houston area customers for quality and professionalism. Heights clients keep coming back because the results are reliable.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🔑</div>
                <h4>One Detailer, One Car</h4>
                <p>Your vehicle gets undivided, focused attention — not rushed through a conveyor belt. We finish every job the right way, every time.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>Available 7 Days</h4>
                <p>Monday through Sunday, 7AM–7PM. Early morning slots available for Heights professionals heading into the Medical Center or downtown.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Houston Heights Today</span></h2>
            <p>Serving Houston Heights, Montrose, Garden Oaks, Sunset Heights, Norhill, and surrounding 77008 and 77009 zip codes. Book in under 2 minutes.</p>
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
