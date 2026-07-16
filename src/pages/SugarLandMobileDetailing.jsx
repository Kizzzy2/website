import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Sugar Land TX",
  "description": "Mobile auto detailing in Sugar Land TX. Full detail, ceramic coating, and paint correction delivered to your home. Serving First Colony, New Territory, Riverstone, and all of Sugar Land.",
  "url": "https://labshineautodetailing.com/sugar-land-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Sugar Land, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Sugar Land", "addressRegion": "TX", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.6197, "longitude": -95.6349 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }]
}

export default function SugarLandMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Sugar Land TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Sugar Land TX. Full detail from $185, ceramic from $599. Serving First Colony, New Territory & Riverstone — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing Sugar Land TX | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Sugar Land TX. Full detail from $185, ceramic from $599. Serving First Colony, New Territory & Riverstone — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/sugar-land-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Sugar Land TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Sugar Land TX. Full detail, ceramic coating, paint correction. Serving First Colony, Riverstone, and all of Sugar Land." />
      <meta property="og:url" content="https://labshineautodetailing.com/sugar-land-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/sugar-land/IMG_4403.JPG" alt="Mobile auto detailing in Sugar Land TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Sugar Land, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Sugar Land TX</span></h1>
          <p>Professional mobile detailing for Sugar Land's luxury vehicles. Full detail, ceramic coating, and paint correction — delivered to your First Colony home or Riverstone estate.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Sugar Land</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Sugar Land Mobile Detailing <span className="cyan">Done Right</span></h2>
            <p>
              Sugar Land is one of Houston's most prestigious communities, consistently ranked among the best places to live in Texas. The vehicles here reflect that — from the Rolls Royces and Porsches in First Colony to the luxury SUVs lining Sugar Creek Country Club. LabShine brings the professional detailing these vehicles deserve, directly to your property.
            </p>
            <p>
              Sugar Land's proximity to the Brazos River means humidity stays high year-round, and the summer sun off Hwy 6 is relentless. Our ceramic coating programs are specifically designed for this climate — creating a heat-resistant, hydrophobic shell that keeps your paint looking immaculate despite the Houston elements.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detail at your Sugar Land home. Clay bar, multi-stage polish, paint sealant, and engine bay — all done in your driveway.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Steam clean, carpet shampoo, leather condition, and odor treatment. Popular with Sugar Land families after road trips, school runs, and country club events.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating for 2–5 years of protection in Sugar Land\'s humid, UV-heavy climate. Hydrophobic effect makes every wash effortless.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage paint correction removing swirls, water spot etching, and scratches. Restores the factory finish on any vehicle in Sugar Land\'s garage.' },
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
            <h2>Why Sugar Land Residents Choose <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏘️</div>
                <h4>We Come to You</h4>
                <p>We set up at your Sugar Land home — First Colony, New Territory, Riverstone, Telfair, or Sugar Creek. No driving to a shop on Hwy 6.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>Trusted & 5-Star Rated</h4>
                <p>127+ five-star reviews from Houston area customers who demand excellence. Sugar Land clients return repeatedly because the results are consistent.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚘</div>
                <h4>Luxury Vehicle Experts</h4>
                <p>We regularly work on Ferraris, Porsches, Range Rovers, and Rolls Royces. Your luxury vehicle is in experienced hands.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday–Sunday, 7AM–7PM. Flexible scheduling for Sugar Land's professionals, executives, and busy families.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Sugar Land Today</span></h2>
            <p>Serving First Colony, New Territory, Riverstone, Telfair, Sugar Creek, Greatwood, and all of Sugar Land. Most appointments available within 48 hours.</p>
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
