import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Pearland TX",
  "description": "Mobile auto detailing in Pearland TX. Full detail, ceramic coating, and paint correction delivered to your home. Serving Shadow Creek Ranch, Silverlake, Southwyck, and all of Pearland.",
  "url": "https://labshineautodetailing.com/pearland-mobile-detailing",
  "telephone": "+18322577574",
  "areaServed": "Pearland, TX"
}

export default function PearlandMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Pearland TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Professional mobile auto detailing in Pearland TX. Full detail from $199, ceramic coating from $500. Serving Shadow Creek Ranch, Silverlake, and all of Pearland — we come to your home." />
      <link rel="canonical" href="https://labshineautodetailing.com/pearland-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Pearland TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Pearland TX. Full detail, ceramic coating, paint correction. Serving Shadow Creek Ranch, Silverlake, and all of Pearland." />
      <meta property="og:url" content="https://labshineautodetailing.com/pearland-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Pearland, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Pearland TX</span></h1>
          <p>Professional mobile detailing in Pearland and Brazoria County. Full detail, ceramic coating, and paint correction — we come to Shadow Creek Ranch, Silverlake, and beyond.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book in Pearland</a>
            <a href="tel:8322577574" className="btn-outline">Call (832) 257-7574</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Pearland's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Pearland has become one of the fastest-growing cities in Texas, and its residents have developed a strong appreciation for quality — including how their vehicles look. From Shadow Creek Ranch to Silverlake, LabShine provides the professional detailing that Pearland's suburban professionals and families deserve, delivered straight to their driveways.
            </p>
            <p>
              Pearland's location near the Gulf Coast means salt air, humidity, and UV combine to create one of the harshest environments for automotive paint in Texas. Our ceramic coating packages are engineered for exactly this kind of climate — creating a corrosion-resistant, hydrophobic barrier that extends the life of your paint and keeps your vehicle looking showroom-fresh year-round.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $199', desc: 'Complete interior + exterior detailing done at your Pearland home. Clay bar decontamination, hand polish, paint sealant, and engine bay cleaning included.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $175', desc: 'Deep steam clean, carpet shampoo, leather conditioning, and odor treatment. Perfect for Pearland families, dog owners, and daily commuters on Hwy 288.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $500', desc: '9H ceramic coating ideal for Pearland\'s coastal humidity and UV conditions. 2–5 years of protection against salt air, hard water, and summer heat.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Remove oxidation, swirl marks, and paint defects. Especially important for Pearland vehicles that accumulate salt air and hard water deposits.' },
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
            <h2>Why Pearland Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏠</div>
                <h4>We Come to Pearland</h4>
                <p>We set up at your home — Shadow Creek Ranch, Silverlake, Southwyck, Corrigan, or anywhere in Pearland. No driving to a shop.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Houston area customers. Pearland clients trust LabShine for repeat details because the quality never slips.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🌊</div>
                <h4>Gulf Coast Climate Experts</h4>
                <p>We understand what salt air, humidity, and UV do to paint in Pearland's coastal environment and treat accordingly.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Convenient scheduling for Pearland's busy professionals and families.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Pearland TX</span></h2>
            <p>Serving Shadow Creek Ranch, Silverlake, Southwyck, Corrigan, Country Place, Pearland Town Center area, and all of Pearland and Brazoria County. Book in 2 minutes online.</p>
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
