import './Areas.css'
import img from '../lib/images'

const areas = [
  { name: 'Houston', desc: 'All Houston neighborhoods including Galleria, River Oaks, Midtown, Heights, Energy Corridor, and more.' },
  { name: 'Cypress', desc: 'Mobile detailing throughout Cypress including Bridgeland, Stone Gate, and surrounding communities.' },
  { name: 'Katy', desc: 'Full detailing services across Katy, including Cinco Ranch, Grand Lakes, and LaCenterra areas.' },
  { name: 'Sugar Land', desc: 'Serving Sugar Land including First Colony, Riverstone, New Territory, and Telfair.' },
  { name: 'The Woodlands', desc: 'Mobile detailing in The Woodlands, Spring Branch, and surrounding Woodlands communities.' },
  { name: 'Pearland', desc: 'Detailing services in Pearland, Shadow Creek Ranch, and Silverlake communities.' },
  { name: 'Spring', desc: 'Serving Spring, Klein, Tomball, and surrounding north Houston communities.' },
  { name: 'Friendswood', desc: 'Mobile detailing in Friendswood and surrounding Clear Lake and Bay Area communities.' },
  { name: 'Missouri City', desc: 'Serving Missouri City, Sienna Plantation, and surrounding Fort Bend County communities.' },
  { name: 'Richmond', desc: 'Detailing in Richmond, Rosenberg, and surrounding Fort Bend County areas.' },
  { name: 'Rosenberg', desc: 'Mobile detailing throughout Rosenberg and surrounding Richmond communities.' },
  { name: 'Stafford', desc: 'Serving Stafford and surrounding southwest Houston and Sugar Land communities.' },
  { name: 'League City', desc: 'Mobile detailing in League City, Kemah, and Clear Lake Shore communities.' },
  { name: 'Pasadena', desc: 'Detailing services throughout Pasadena, South Houston, and Deer Park communities.' },
  { name: 'Baytown', desc: 'Mobile detailing in Baytown, La Marque, and surrounding east Houston communities.' },
  { name: 'Humble', desc: 'Serving Humble, Atascocita, and surrounding northeast Houston communities.' },
  { name: 'Tomball', desc: 'Mobile detailing in Tomball, Magnolia, and surrounding northwest Houston communities.' },
  { name: 'Conroe', desc: 'Detailing services in Conroe, Montgomery, and surrounding Lake Conroe communities.' },
  { name: 'Kingwood', desc: 'Serving Kingwood, Summerwood, and surrounding Lake Houston area communities.' },
  { name: 'Deer Park', desc: 'Mobile detailing in Deer Park, La Porte, and surrounding southeast Houston communities.' },
  { name: 'La Porte', desc: 'Serving La Porte, Seabrook, and surrounding Galveston Bay communities.' },
  { name: 'Webster', desc: 'Detailing in Webster, Nassau Bay, and surrounding Clear Lake communities.' },
  { name: 'Clear Lake', desc: 'Mobile detailing throughout the Clear Lake City, Bay Area, and NASA communities.' },
  { name: 'Galveston', desc: 'Detailing services on Galveston Island and surrounding Bolivar Peninsula communities.' },
]

export default function Areas() {
  return (
    <main className="areas-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.raptorWhite})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">We Come to You</span>
          <h1>Service <span className="cyan">Areas</span></h1>
          <p>Serving Houston and 24 surrounding cities. We bring the detail shop to your door — home, office, or anywhere in Greater Houston.</p>
        </div>
      </section>

      <section className="areas-map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Coverage</span>
            <h2>24 Cities Across Greater Houston</h2>
            <p>No matter where you are in the Houston metro area, we can come to you.</p>
          </div>
          <div className="areas-detail-grid">
            {areas.map(area => (
              <div key={area.name} className="area-card">
                <h3>{area.name}</h3>
                <p>{area.desc}</p>
                <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="area-book-link">
                  Book in {area.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don\'t See Your City?</h2>
            <p>Call us — we may still be able to accommodate your location. We travel across Greater Houston.</p>
            <div className="cta-btns">
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book Online</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
