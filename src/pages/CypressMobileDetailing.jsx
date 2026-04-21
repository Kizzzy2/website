import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Cypress TX",
  "description": "Mobile auto detailing in Cypress TX. Full detail, ceramic coating, and paint correction delivered to your home. Serving Bridgeland, Fairfield, Stone Gate, and all of Cypress.",
  "url": "https://labshineautodetailing.com/cypress-mobile-detailing",
  "telephone": "+18322577574",
  "areaServed": "Cypress, TX"
}

export default function CypressMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Cypress TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Professional mobile auto detailing in Cypress TX. Full detail from $199, ceramic coating from $500. LabShine serves Bridgeland, Fairfield, Stone Gate, and all of Cypress — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/cypress-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Cypress TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Cypress TX. Full detail, ceramic coating, paint correction. Serving Bridgeland, Fairfield, and all of Cypress. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/cypress-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Cypress, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Cypress TX</span></h1>
          <p>LabShine's home base. Full detail, ceramic coating, and paint correction brought directly to your Cypress property — no shop, no waiting.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book in Cypress</a>
            <a href="tel:8322577574" className="btn-outline">Call (832) 257-7574</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Cypress's Premier Mobile <span className="cyan">Detailing Team</span></h2>
            <p>
              Cypress is where LabShine operates — we know every neighborhood, every road, and the exact conditions your vehicle deals with daily. From Bridgeland's waterfront estates to Fairfield's established neighborhoods along Huffmeister, we've detailed hundreds of Cypress vehicles with results that consistently exceed expectations.
            </p>
            <p>
              Living in Cypress means dealing with intense summer humidity, UV that fades paint fast, and the pollen seasons that coat every car in yellow. Our full detail packages handle all of this — decontaminating the paint surface, correcting any existing damage, and applying protective coatings that make future maintenance dramatically easier.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $199', desc: 'Complete interior + exterior detail done at your Cypress home or driveway. Clay bar decontamination, hand polish, paint sealant, and engine bay clean.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $175', desc: 'Deep interior clean with steam, carpet shampooing, leather conditioning, and odor treatment. Cypress families love this for school run and sports vehicles.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $500', desc: '9H ceramic coating built for Cypress\'s climate. Protects against UV fading, summer heat, hard water, and the daily grind of commuting on 290.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing to eliminate swirls, water spot etching, and light scratches. Restores a factory-new depth of gloss.' },
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
            <h2>Why Cypress Trusts <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏡</div>
                <h4>Local to Cypress</h4>
                <p>We're based in Cypress — short travel times mean faster booking availability and we know your area intimately. Bridgeland, Fairfield, Stone Gate, we cover it all.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>5-Star Rated</h4>
                <p>127+ five-star reviews from Greater Houston customers, with a strong concentration of repeat clients right here in Cypress.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🔑</div>
                <h4>One Detailer, Your Car</h4>
                <p>One professional dedicated to your vehicle for the entire service. No assembly line, no handoffs, no shortcuts.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Book a weekday to fit your work-from-home schedule or a weekend morning while you're out.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Cypress TX</span></h2>
            <p>Serving Bridgeland, Fairfield, Stone Gate, Copper Lakes, Longwood, Towne Lake, Cypress Creek Lakes, and all Cypress neighborhoods. Same-week appointments usually available.</p>
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
