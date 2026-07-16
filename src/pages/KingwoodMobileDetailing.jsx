import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Kingwood TX",
  "description": "Mobile auto detailing in Kingwood TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving Kingwood Drive, Lake Houston, Greens Crossing, and Kings Forest.",
  "url": "https://labshineautodetailing.com/kingwood-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Kingwood, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Kingwood", "addressRegion": "TX", "postalCode": "77339", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.0566, "longitude": -95.1929 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Kingwood?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Kingwood. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Kingwood?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Kingwood. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Kingwood?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Kingwood location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function KingwoodMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Kingwood TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Kingwood TX. Full detail from $185, ceramic from $599. Serving Kingwood Drive, Lake Houston, Greens Crossing & Kings Forest — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kingwood TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Kingwood TX. Full detail from $185, ceramic from $599. Serving Kingwood Drive, Lake Houston, Greens Crossing & Kings Forest — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/kingwood-mobile-detailing" />
      <meta property="og:title" content="Kingwood TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Kingwood TX — full detail, ceramic coating, paint correction. Serving Kings Forest, Lake Houston, and all of Kingwood. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/kingwood-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/houston/IMG_3352.JPG" alt="Mobile auto detailing in Kingwood TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Kingwood, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Kingwood TX</span></h1>
          <p>Precision mobile detailing for Kingwood's luxury SUVs, lake boats, and family vehicles — delivered directly to your Kings Forest or Greens Crossing driveway.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Kingwood</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Kingwood's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Kingwood TX — known as the "Livable Forest" — is one of Houston's most prestigious master-planned communities, spanning ZIP codes 77339 and 77345. The neighborhoods along Kingwood Drive, from Kings Forest to Greens Crossing, are home to luxury SUVs, high-end pickup trucks, and family vehicles that deserve professional care. LabShine brings a full mobile detailing operation to your Kingwood driveway — no shop, no waiting, no hassle. We also specialize in detailing lake boats and watercraft that call Lake Houston home.
            </p>
            <p>
              Living adjacent to Lake Houston and the East Fork watershed means Kingwood vehicles face a unique set of contaminants: waterway humidity that accelerates oxidation, seasonal pollen from the forest canopy that stains light-colored paint, and algae-related residue on boats and trailers pulled from the lake. Our watercraft detailing and ceramic coating services are calibrated for exactly these conditions — protecting your investment whether it's parked on the water or in your garage.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Interior and exterior detailing at your Kingwood home. Clay bar decontamination removes road fallout and forest pollen bonded to your paint. Hand polish and paint sealant finish the job.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Premium steam cleaning, leather conditioning, and odor neutralization. Ideal for Kingwood luxury SUVs with perforated leather seats and dark headliners that show every fingerprint.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection. Defends Kingwood vehicles against lake spray, forest humidity, and the heavy pollen load from the tree canopy each spring and fall.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polish to eliminate swirl marks and micro-scratches. Restores true depth to Kingwood\'s luxury SUVs and sports cars that have endured years of drive-through washes.' },
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
            <h2>Why Kingwood Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🌳</div>
                <h4>Forest-to-Driveway Service</h4>
                <p>We navigate Kingwood's winding wooded streets to reach Kings Forest, Greens Crossing, and every neighborhood along Kingwood Drive — 77339 and 77345 fully covered.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Greater Houston customers on Google and Facebook. Kingwood homeowners expect quality — that's exactly what we deliver, every appointment.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⛵</div>
                <h4>Boats & Watercraft Welcome</h4>
                <p>We detail lake boats, personal watercraft, and trailers right at your Kingwood dock or driveway — removing algae, oxidation, and waterline staining.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend and early morning slots for Kingwood's working professionals. Book online in minutes — no phone tag, no uncertainty.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Kingwood TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Kingwood?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Kingwood. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Kingwood?</h3>
                <p>Yes — we come to your home, driveway, or lakefront property anywhere in Kingwood including Kings Forest and Greens Crossing. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Kingwood?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Kingwood location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Kingwood TX Today</span></h2>
            <p>Serving all of Kingwood TX including Kings Forest, Greens Crossing, Kingwood Drive corridor, Lake Houston waterfront properties, and Elm Grove communities. ZIP codes 77339 and 77345. Also near Atascocita, Humble, and Spring.</p>
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
