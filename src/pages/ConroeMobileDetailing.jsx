import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Conroe TX",
  "description": "Mobile auto detailing in Conroe TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving Lake Conroe, I-45 corridor, and Montgomery County communities.",
  "url": "https://labshineautodetailing.com/conroe-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Conroe, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Conroe", "addressRegion": "TX", "postalCode": "77301", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.3119, "longitude": -95.4561 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Conroe?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Conroe. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Conroe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Conroe. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Conroe?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Conroe location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function ConroeMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Conroe TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Conroe TX. Full detail from $185, ceramic from $599. Serving Lake Conroe, I-45 corridor & Montgomery County — boats, trucks & SUVs welcome." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Conroe TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Conroe TX. Full detail from $185, ceramic from $599. Serving Lake Conroe, I-45 corridor & Montgomery County — boats, trucks & SUVs welcome." />
      <link rel="canonical" href="https://labshineautodetailing.com/conroe-mobile-detailing" />
      <meta property="og:title" content="Conroe TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Conroe TX — full detail, ceramic coating, paint correction. Serving Lake Conroe, Montgomery County, and all of Conroe. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/conroe-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/the-woodlands/IMG_5416.JPG" alt="Mobile auto detailing in Conroe TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Conroe, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Conroe TX</span></h1>
          <p>Lake Conroe boats, Montgomery County trucks, and I-45 corridor SUVs — LabShine details them all at your Conroe location. No drop-off, no commute, just results.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Conroe</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Conroe's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Conroe TX is the seat of Montgomery County and one of the fastest-growing cities in the United States, spanning ZIP codes 77301, 77302, 77303, and 77304. From neighborhoods near the I-45 corridor and downtown Conroe to the lakefront communities along Lake Conroe and the border communities connecting to The Woodlands, LabShine provides mobile detailing that comes directly to your driveway. We handle the full spectrum of Conroe vehicles: lake boats with trailers, full-size trucks for work and weekend adventures, and suburban SUVs used daily on the I-45 corridor.
            </p>
            <p>
              Lake Conroe creates a distinct set of maintenance challenges for vehicle owners. Mineral-rich lake water leaves calcium deposits on hulls and trailers. Algae blooms stain gelcoat if not treated quickly. Humidity from the lake combines with Montgomery County's summer heat to accelerate oxidation on both vehicles and watercraft. LabShine's boat detailing and marine-grade ceramic coating options address these specific challenges, while our automotive packages keep your truck or SUV looking sharp through Conroe's dusty summer months and wet winters.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Conroe home or marina. Removes I-45 road film, Lake Conroe mineral deposits, and all seasonal contaminants from paint and upholstery.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Steam cleaning, carpet shampoo, and odor elimination designed for Conroe\'s outdoorsy lifestyle. We handle lake smells, bait residue, and the general wear of Montgomery County\'s active families.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating for vehicles and marine-grade sealant for boats. Protects against Lake Conroe\'s UV-intense waterfront environment, mineral water, and algae spore contact.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Professional multi-stage paint correction to restore gloss and depth. Removes swirl marks, oxidation, and water spot etching from Conroe trucks and SUVs that live outdoors year-round.' },
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
            <h2>Why Conroe Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🚤</div>
                <h4>Boats & Trailers Welcome</h4>
                <p>Lake Conroe boat owners — we detail hulls, interiors, and trailers right at your dock or driveway. Marine-grade products that handle lake minerals and UV exposure.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated across Google and Facebook by Greater Houston and Montgomery County customers who expect perfection and won't settle for less.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🗺️</div>
                <h4>All Four Conroe ZIP Codes</h4>
                <p>We cover 77301, 77302, 77303, and 77304 — from downtown Conroe to the Lake Conroe waterfront and The Woodlands border communities along Research Forest Dr.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Early morning slots for lake days. Weekend appointments for Conroe families. Book online in 2 minutes — no waiting, no voicemail, instant confirmation.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Conroe TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Conroe?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Conroe. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Conroe?</h3>
                <p>Yes — we come to your home, driveway, or marina anywhere in Conroe including Lake Conroe waterfront and I-45 corridor neighborhoods. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Conroe?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Conroe location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Conroe TX Today</span></h2>
            <p>Serving all of Conroe TX including Lake Conroe waterfront, I-45 corridor, downtown Conroe, Caney Creek communities, and Woodlands border neighborhoods. ZIP codes 77301, 77302, 77303, and 77304. Also near The Woodlands, Magnolia, and Spring.</p>
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
