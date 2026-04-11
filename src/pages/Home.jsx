import './Home.css'

const services = [
  { icon: '🚗', title: 'Full Detail', desc: 'Complete interior and exterior detailing for a showroom-worthy finish.' },
  { icon: '✨', title: 'Interior Detail', desc: 'Deep clean of every surface — seats, carpet, dash, and trim.' },
  { icon: '🛡️', title: 'Ceramic Coating', desc: '9H ceramic coating for long-lasting paint protection and hydrophobic effect.' },
  { icon: '🔧', title: 'Paint Correction', desc: 'Remove swirl marks, scratches, and oxidation to restore your paint.' },
  { icon: '🏢', title: 'Fleet Services', desc: 'Recurring detailing programs for commercial fleets of any size.' },
  { icon: '🚌', title: 'RV & Truck Detail', desc: 'Specialized detailing for large vehicles, RVs, boats, and trailers.' },
]

const areas = [
  'Houston','Sugar Land','Katy','Pearland','The Woodlands','Spring','Cypress',
  'Friendswood','Missouri City','Richmond','Rosenberg','Stafford','League City',
  'Pasadena','Baytown','Humble','Tomball','Conroe','Kingwood','Deer Park',
  'La Porte','Webster','Clear Lake','Galveston'
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="hero-badge">Houston Mobile Detailing</span>
          <h1 className="hero-title">Your Vehicle,<br/>Our Obsession.</h1>
          <p className="hero-sub">
            Professional mobile auto detailing at your driveway, garage, or office.
            Ceramic coating, paint correction, interior detailing, and full detail services
            delivered across Houston and 24 surrounding cities.
          </p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">
              Book Online
            </a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
          <div className="hero-stats">
            <span>⭐ 4.9 Stars on Google</span>
            <span>•</span>
            <span>500+ Vehicles Detailed</span>
            <span>•</span>
            <span>24 Cities Served</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Our Services</h2>
            <p>Professional detailing services delivered to your location across the Houston metro area.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="service-link">
                  Book This Service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramic Coating CTA */}
      <section className="ceramic-section" id="ceramic">
        <div className="container">
          <div className="ceramic-content">
            <div className="ceramic-text">
              <span className="section-label">Ultimate Protection</span>
              <h2>Ceramic Coating</h2>
              <p>Our professional-grade 9H ceramic coating provides years of protection against UV rays, chemical contaminants, and water spotting. Your paint stays looking showroom-fresh longer.</p>
              <ul className="ceramic-list">
                <li>✓ 9H Hardness Rating</li>
                <li>✓ 2–5 Year Protection</li>
                <li>✓ Hydrophobic Effect</li>
                <li>✓ UV Protection</li>
                <li>✓ Self-Cleaning Properties</li>
                <li>✓ Enhanced Gloss</li>
              </ul>
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">
                Get a Quote
              </a>
            </div>
            <div className="ceramic-image">
              <div className="ceramic-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="areas-section" id="areas">
        <div className="container">
          <div className="section-header">
            <span className="section-label">We Come to You</span>
            <h2>Service Areas</h2>
            <p>Serving Houston and 24 surrounding cities. We bring the detail shop to your door.</p>
          </div>
          <div className="areas-grid">
            {areas.map(area => (
              <div key={area} className="area-tag">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Shine?</h2>
            <p>Book your mobile detailing appointment online. We come to you — home, office, or anywhere in the Houston area.</p>
            <div className="cta-btns">
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">
                Book Online Now
              </a>
              <a href="tel:3464529991" className="btn-outline">
                Call (346) 452-9991
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}