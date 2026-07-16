import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Humble TX",
  "description": "Mobile auto detailing in Humble TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving FM 1960, Humble Civic Center, Atascocita border, and Generation Park.",
  "url": "https://labshineautodetailing.com/humble-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Humble, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Humble", "addressRegion": "TX", "postalCode": "77338", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.9988, "longitude": -95.2621 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Humble?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Humble. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Humble?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Humble. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Humble?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Humble location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function HumbleMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Humble TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Humble TX. Full detail from $185, ceramic from $599. Serving FM 1960, Generation Park, Atascocita border & Humble Civic Center area — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Humble TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Humble TX. Full detail from $185, ceramic from $599. Serving FM 1960, Generation Park, Atascocita border & Humble Civic Center area — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/humble-mobile-detailing" />
      <meta property="og:title" content="Humble TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Humble TX — full detail, ceramic coating, paint correction. Serving FM 1960, Generation Park, and all of Humble. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/humble-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/katy/IMG_5207.JPG" alt="Mobile auto detailing in Humble TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Humble, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Humble TX</span></h1>
          <p>Reliable, professional mobile detailing for Humble's hardworking families and everyday drivers. FM 1960 corridor, Generation Park, and the Atascocita border — all covered.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Humble</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Humble's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Humble TX covers ZIP codes 77338, 77339, and 77396 in northeastern Harris County, stretching from the established neighborhoods near the Humble Civic Center and the FM 1960 commercial corridor all the way to the innovative Generation Park mixed-use development and the Atascocita border communities. It's a community of everyday families, commuters, and working professionals who drive trucks and SUVs hard and expect their vehicles to look good doing it. LabShine brings full mobile detailing capability to every Humble address — no shop required.
            </p>
            <p>
              Humble sits at the intersection of several major East Houston commute routes, meaning vehicles here deal with high-traffic road film, diesel exhaust fallout from heavy trucking on FM 1960 and Beltway 8, and the relentless humidity from the surrounding bayou network. Pollen counts in this part of Harris County spike dramatically in spring, coating vehicles in a fine yellow film that bonds to paint within hours. Our systematic clay bar and wash protocols remove these bonded contaminants before they etch the clear coat permanently.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Humble home. Removes FM 1960 road film, diesel exhaust fallout, and spring pollen before it permanently damages your clear coat.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Steam cleaning, carpet shampoo, and odor elimination for Humble\'s everyday family trucks and SUVs. Kids, sports gear, work gear — we reset your interior to showroom condition.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Makes your Humble vehicle easier to maintain through heavy FM 1960 commutes, East Harris County humidity, and spring pollen seasons.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing for Humble\'s daily drivers. Removes swirl marks from automated washes, water spot etching from hard water, and fine scratches that dull paint over time.' },
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
            <h2>Why Humble Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏠</div>
                <h4>We Cover All of Humble</h4>
                <p>From the Humble Civic Center area and FM 1960 corridor to Generation Park and the Atascocita border — we serve every pocket of 77338, 77339, and 77396.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Greater Houston customers on Google and Facebook. Humble families know the difference between a real detail and a rinse — and they choose LabShine.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚙</div>
                <h4>Everyday Vehicles Done Right</h4>
                <p>Not every vehicle is a luxury car — but every vehicle deserves professional care. We treat Humble's everyday trucks and family SUVs with the same standard as any high-end vehicle.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend and evening slots for Humble's working families. Early morning availability before FM 1960 commutes. Book in 2 minutes online — we confirm the same day.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Humble TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Humble?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Humble. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Humble?</h3>
                <p>Yes — we come to your home, driveway, or office anywhere in Humble including FM 1960, Generation Park, and the Atascocita border area. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Humble?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Humble location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Humble TX Today</span></h2>
            <p>Serving all of Humble TX including FM 1960 corridor, Humble Civic Center area, Generation Park, Atascocita border communities, and Summerwood neighborhoods. ZIP codes 77338, 77339, and 77396. Also near Kingwood, Atascocita, and Spring.</p>
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
