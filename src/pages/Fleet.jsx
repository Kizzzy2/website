import './Fleet.css'
import img from '../lib/images'

const fleetTypes = [
  { icon: '🚗', title: 'Dealership Fleets', desc: 'Lot washes, showroom prep, and pre-delivery detail for car dealerships of all sizes.' },
  { icon: '🚕', title: 'Rental Car Companies', desc: 'Regular maintenance washes and full turnaround details for rental fleets.' },
  { icon: '🚐', title: 'Corporate Fleets', desc: 'Recurring mobile detailing for company vehicles, service vans, and executive cars.' },
  { icon: '🚛', title: 'Commercial Trucks', desc: 'Full exterior and interior detailing for semi cabs, box trucks, and work vehicles.' },
  { icon: '🚌', title: 'Shuttle & Bus Fleets', desc: 'Interior and exterior detail for shuttle services, charter buses, and transit vehicles.' },
  { icon: '🏗️', title: 'Construction & Heavy Equipment', desc: 'Pressure washing and detailing for construction vehicles and heavy equipment.' },
]

const benefits = [
  { val: 'On-Site', label: 'We come to your lot or facility' },
  { val: 'Volume', label: 'Discounts for fleet contracts' },
  { val: 'Recurring', label: 'Scheduled weekly or monthly service' },
  { val: 'Custom', label: 'Tailored programs for your fleet' },
]

export default function Fleet() {
  return (
    <main className="fleet-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.poolTruck})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Fleet Car Washing Near Me</span>
          <h1>Fleet Detailing<br/><span className="cyan">Houston TX</span></h1>
          <p>Commercial fleet washing and detailing for dealerships, rental companies, and corporate fleets. Volume discounts. On-site mobile service across Greater Houston.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Get a Fleet Quote</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="fleet-benefits-banner">
        <div className="container">
          <div className="fleet-benefits-grid">
            {benefits.map(b => (
              <div key={b.val} className="fleet-benefit-item">
                <span className="fleet-benefit-val">{b.val}</span>
                <span className="fleet-benefit-label">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fleet-types-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who We Serve</span>
            <h2>Fleet Types We Service</h2>
          </div>
          <div className="fleet-types-grid">
            {fleetTypes.map(ft => (
              <div key={ft.title} className="fleet-type-card">
                <span className="fleet-icon">{ft.icon}</span>
                <h3>{ft.title}</h3>
                <p>{ft.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fleet-includes-section">
        <div className="container">
          <div className="fleet-includes-grid">
            <div className="fleet-img" style={{ backgroundImage: `url(${img.mobileUnit})` }} />
            <div className="fleet-includes-text">
              <span className="section-label">Our Fleet Program</span>
              <h2>What Is Included</h2>
              <p>Every fleet contract is customized to your specific needs and budget. We work with you to create a maintenance schedule that keeps your fleet looking sharp at all times.</p>
              <ul className="fleet-includes-list">
                <li>On-site mobile service at your location</li>
                <li>Flexible scheduling (daily, weekly, monthly)</li>
                <li>Volume pricing and contract rates</li>
                <li>Dedicated fleet account manager</li>
                <li>Priority scheduling and emergency cleans</li>
                <li>Detailed service reports</li>
                <li>All vehicle sizes accommodated</li>
              </ul>
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Request Fleet Pricing</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Get a Custom Fleet Quote</h2>
            <p>Call or book online and we will create a custom program for your fleet size and frequency.</p>
            <div className="cta-btns">
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Request a Quote</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
