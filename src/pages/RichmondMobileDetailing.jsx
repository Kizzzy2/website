import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Richmond TX",
  "description": "Mobile auto detailing in Richmond TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving Fort Bend County, Grand Parkway 99, Long Meadow Farms, and Pecan Grove.",
  "url": "https://labshineautodetailing.com/richmond-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Richmond, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Richmond", "addressRegion": "TX", "postalCode": "77406", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.5818, "longitude": -95.7607 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Richmond?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Richmond. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Richmond?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Richmond. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Richmond?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Richmond location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function RichmondMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Richmond TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Richmond TX. Full detail from $185, ceramic from $599. Serving Grand Pkwy 99, Long Meadow Farms, Pecan Grove & Fort Bend County — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Richmond TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Richmond TX. Full detail from $185, ceramic from $599. Serving Grand Pkwy 99, Long Meadow Farms, Pecan Grove & Fort Bend County — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/richmond-mobile-detailing" />
      <meta property="og:title" content="Richmond TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Richmond TX — full detail, ceramic coating, paint correction. Serving Long Meadow Farms, Pecan Grove, and all of Richmond. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/richmond-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/sugar-land/IMG_5121.JPG" alt="Mobile auto detailing in Richmond TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Richmond, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Richmond TX</span></h1>
          <p>Fort Bend County detailing for Richmond's Long Meadow Farms, Pecan Grove, and Grand Pkwy 99 communities. Trucks, SUVs, and country club vehicles detailed at your driveway.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Richmond</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Richmond's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Richmond TX spans ZIP codes 77406 and 77469 in Fort Bend County, encompassing some of the region's most sought-after communities. Long Meadow Farms and its neighboring master-planned developments along the Grand Parkway (Hwy 99) corridor attract upwardly mobile families and professionals who invest in their properties and vehicles alike. The historic Pecan Grove community on the older side of Richmond brings a different character — established estates, mature trees, and residents who've maintained their vehicles with care for decades. LabShine serves both with mobile detailing that travels to your driveway.
            </p>
            <p>
              Richmond's position in Fort Bend County means vehicles navigate a mix of grand parkway construction zones, rural FM roads, and suburban traffic daily. The resulting paint accumulation — road tar from Hwy 99, agricultural dust from nearby fields, and tree sap from Pecan Grove's namesake pecan canopy — requires more than a standard car wash. Our clay bar decontamination service removes bonded surface contamination that automated washes leave behind, creating the clean foundation that paint sealants and ceramic coatings need to bond properly.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detail at your Richmond property. We remove Grand Pkwy 99 road tar, pecan sap from Pecan Grove\'s tree canopy, and FM road dust from every surface.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Deep steam cleaning, carpet extraction, and leather conditioning for Richmond\'s truck cabins and luxury SUVs. Country club-quality interior results on every appointment.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Ideal for Richmond vehicles that travel Hwy 99 daily — creates a durable barrier against road tar, UV fade, and agricultural dust.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing to remove swirl marks, sap etching, and oxidation from Richmond trucks and SUVs. Restores factory paint depth before any coating application.' },
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
            <h2>Why Richmond Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🌳</div>
                <h4>Pecan Grove to Long Meadow Farms</h4>
                <p>We cover all of Richmond's diverse communities — from Pecan Grove's mature estates to the new construction phases in Long Meadow Farms and the Grand Pkwy 99 corridor.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Fort Bend County customers across Google and Facebook. Richmond homeowners expect a premium result — that's precisely what we deliver every time.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚗</div>
                <h4>Trucks, SUVs & Club Cars Welcome</h4>
                <p>Richmond's country club vehicles and work trucks receive identical care. We bring full professional equipment to every Richmond ZIP code regardless of vehicle size or type.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend slots for Richmond's busy families. Early morning options before the Hwy 99 commute. Book online in minutes with same-day confirmation for 77406 and 77469.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Richmond TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Richmond?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Richmond. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Richmond?</h3>
                <p>Yes — we come to your home, driveway, or office anywhere in Richmond including Long Meadow Farms, Pecan Grove, and the Grand Pkwy 99 corridor. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Richmond?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Richmond location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Richmond TX Today</span></h2>
            <p>Serving all of Richmond TX including Long Meadow Farms, Pecan Grove, Grand Pkwy 99 corridor, Aliana, and Fort Bend County communities throughout 77406 and 77469. Also near Sugar Land, Missouri City, and Fulshear.</p>
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
