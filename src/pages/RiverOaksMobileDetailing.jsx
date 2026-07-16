import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — River Oaks Houston TX",
  "description": "Mobile auto detailing in River Oaks, Houston TX. Full detail, ceramic coating, and paint correction for luxury and exotic vehicles. We come to your home or garage.",
  "url": "https://labshineautodetailing.com/river-oaks-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "River Oaks, Houston TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "postalCode": "77019", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.7488, "longitude": -95.4197 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function RiverOaksMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing River Oaks Houston TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in River Oaks, Houston TX (77019). Full detail from $185, ceramic from $599. We come to your River Oaks home — no drop-off needed." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing River Oaks Houston TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in River Oaks, Houston TX. Full detail from $185, ceramic from $599. We come to your home — no drop-off needed." />
      <link rel="canonical" href="https://labshineautodetailing.com/river-oaks-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing River Oaks Houston TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in River Oaks — full detail, ceramic coating, paint correction for luxury and exotic vehicles. We come to you." />
      <meta property="og:url" content="https://labshineautodetailing.com/river-oaks-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/houston/IMG_3345.JPG" alt="Mobile auto detailing in River Oaks, Houston TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving River Oaks, Houston TX</span>
          <h1>Mobile Detailing in <span className="cyan">River Oaks</span></h1>
          <p>Houston's most prestigious neighborhood deserves the best. Professional mobile auto detailing at your River Oaks home or garage — no drop-off, no disruption.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in River Oaks</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>River Oaks Mobile Detailing <span className="cyan">Specialists</span></h2>
            <p>
              River Oaks (77019) is home to some of Houston's most exclusive residences — and the vehicles parked in those garages match. From Ferraris and McLarens to Rolls Royces and Bentleys, the cars in this neighborhood require a level of care that goes beyond a standard car wash. LabShine provides certified, professional-grade mobile detailing at your door, with the experience and techniques these vehicles demand.
            </p>
            <p>
              Even garage-kept exotics in River Oaks face Houston's year-round humidity, dust from surrounding landscaping, and the occasional hard water spot from irrigation systems. Our ceramic coating packages create a durable hydrophobic barrier that makes every surface effortless to maintain — and our paint correction services restore even the most delicate factory finishes to showroom condition.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your River Oaks property. Clay bar decontamination, hand polish, paint sealant, engine bay — done in your driveway or garage.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Full steam clean, leather conditioning, and odor treatment. Essential for maintaining the immaculate interiors River Oaks vehicles are known for.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating designed for exotic and luxury vehicles. Creates 2–5 years of UV, humidity, and contaminant protection — your paint stays protected without sacrificing gloss.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage correction removes swirl marks, fine scratches, and oxidation from any paint finish. We specialize in exotic paint types, matte finishes, and factory wraps.' },
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
            <h2>Why River Oaks Residents Choose <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏎️</div>
                <h4>Exotic & Luxury Expertise</h4>
                <p>We regularly work on Ferraris, McLarens, Bentleys, Rolls Royces, and Porsches. Your vehicle receives the specialized care its paint and materials require.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated across Houston for quality and professionalism. River Oaks clients trust LabShine because the results exceed expectations every time.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h4>We Come to You</h4>
                <p>No drop-off, no waiting at a shop. We work at your River Oaks home, garage, or office on River Oaks Blvd, Kirby Drive, or anywhere in 77019.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Early morning and weekend slots available to fit your schedule.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">River Oaks Today</span></h2>
            <p>Serving all of River Oaks including River Oaks Boulevard, Kirby Drive, Shepherd Drive, and surrounding 77019 and 77098 zip codes. Book in under 2 minutes.</p>
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
