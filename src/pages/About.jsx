import './About.css'
import img from '../lib/images'

const stats = [
  { val: '500+', label: 'Vehicles Detailed' },
  { val: '4.9★', label: 'Google Rating' },
  { val: '24', label: 'Cities Served' },
  { val: '5+', label: 'Years Experience' },
]

export default function About() {
  return (
    <main className="about-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.bmwX6MAbout})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Our Story</span>
          <h1>About <span className="cyan">LabShine</span></h1>
          <p>Houston's premier mobile auto detailing service. We come to you.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-text">
              <span className="section-label">Who We Are</span>
              <h2>Built on Passion for Perfection</h2>
              <p>LabShine Auto Detailing was founded in Houston, TX by Adrian Cespedes — a car enthusiast who turned his obsession with pristine paint into a professional mobile detailing business.</p>
              <p>After years of detailing high-end vehicles, Adrian built a team that shares the same commitment to quality. Every vehicle we touch receives the same attention to detail, whether it's a daily driver or a six-figure supercar.</p>
              <p>We operate as a fully mobile service — no shop overhead, no waiting rooms, no dropping your car off. We come to your home, your office, or wherever is most convenient for you.</p>
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book with Our Team</a>
            </div>
            <div className="about-images">
              <div className="about-img-main" style={{ backgroundImage: `url(${img.adrianTeam})` }} />
              <div className="about-img-secondary" style={{ backgroundImage: `url(${img.mobileUnit})` }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Standards</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Precision', desc: 'Every detail matters. We take the time to get it right — no rushing, no cutting corners.' },
              { icon: '📍', title: 'Convenience', desc: 'We come to you. Your home, your office, your schedule. Zero disruption to your day.' },
              { icon: '🏆', title: 'Quality Products', desc: 'We only use professional-grade ceramic coatings, polishes, and cleaning products.' },
              { icon: '🤝', title: 'Honesty', desc: 'Transparent pricing, honest assessments. No upsells you don\'t need.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="team-section">
        <div className="team-img" style={{ backgroundImage: `url(${img.fireTruckCrew})` }}>
          <div className="team-overlay" />
          <div className="container team-text">
            <h2>"Your Vehicle. Elevated."</h2>
            <p>— The LabShine Team</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Experience the LabShine Difference</h2>
            <p>Book your appointment and see why Houston trusts us with their vehicles.</p>
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
