import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Fulshear TX",
  "description": "Mobile auto detailing in Fulshear TX. Full detail, ceramic coating, paint correction, and interior detail. We come to your home or driveway in Fulshear and Katy.",
  "url": "https://labshineautodetailing.com/fulshear-mobile-detailing",
  "telephone": "+18322577574",
  "areaServed": "Fulshear, TX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fulshear",
    "addressRegion": "TX",
    "addressCountry": "US"
  }
}

export default function FulshearMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Fulshear TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Professional mobile auto detailing in Fulshear TX. Full detail from $199, ceramic coating from $500, interior detail from $175. LabShine comes to your driveway — no drop-off needed." />
      <link rel="canonical" href="https://labshineautodetailing.com/fulshear-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Fulshear TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Fulshear TX — full detail, ceramic coating, paint correction. We come to you. Book online today." />
      <meta property="og:url" content="https://labshineautodetailing.com/fulshear-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Fulshear, TX</span>
          <h1>Mobile Detailing in <span className="cyan">Fulshear TX</span></h1>
          <p>Professional auto detailing delivered to your Fulshear driveway. Full detail, ceramic coating, and paint correction — no drop-off, no waiting.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book in Fulshear</a>
            <a href="tel:8322577574" className="btn-outline">Call (832) 257-7574</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Fulshear's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Fulshear has grown into one of the most sought-after communities in Greater Houston, and the vehicles out here reflect that — Range Rovers on Cross Creek Ranch, F-250s on working ranches, and everything in between. LabShine brings professional-grade detailing directly to your property, whether you're on a 5-acre lot off FM 1093 or in one of Fulshear's newer master-planned communities.
            </p>
            <p>
              Houston's heat, humidity, and hard water are brutal on paint. Fulshear sits on the far west side where summer temperatures regularly push past 100°F, and the UV index can fade and oxidize paint quickly. Our ceramic coating packages are specifically designed to handle this climate — providing 2–5 years of heat-resistant, hydrophobic protection that makes every wash dramatically easier.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $199', desc: 'Complete interior and exterior detailing. Clay bar, hand polish, paint sealant, engine bay — everything done at your property in Fulshear.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $175', desc: 'Full interior steam clean, carpet shampoo, leather conditioning, and odor treatment. Perfect for Fulshear families after sports, pets, or road trips.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $500', desc: '9H ceramic coating that protects against Fulshear\'s brutal UV exposure, summer heat, and hard water. 2–5 years of protection.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Remove swirl marks, scratches, and oxidation. Restores your paint to a level that turns heads on FM 359 and Cross Creek Ranch Blvd.' },
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
            <h2>Why Fulshear Residents Choose <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h4>We Come to You</h4>
                <p>No drop-off, no waiting at a shop. We work in your driveway, garage, or at your office while you go about your day.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>5-Star Rated</h4>
                <p>127+ five-star reviews across Google and Facebook. Trusted by Fulshear, Katy, and West Houston residents for exceptional results.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🔑</div>
                <h4>One Detailer, One Car</h4>
                <p>Your vehicle gets undivided attention — not rushed through a shop with 6 other cars. Every detail done right, every time.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>Available 7 Days</h4>
                <p>Monday through Sunday, 7AM–7PM. Weekend and early morning appointments available for Fulshear's busy schedules.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Fulshear Today</span></h2>
            <p>We serve all of Fulshear including Cross Creek Ranch, Pecan Ridge, Fulshear Lakes, Polo Ranch, and surrounding FM 1093 and FM 359 areas. Book online in under 2 minutes.</p>
            <div className="hero-btns">
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book Online</a>
              <a href="tel:8322577574" className="btn-outline">Call or Text</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
