import './Pricing.css'
import img from '../lib/images'

const services = [
  {
    id: 'full-detail-reset',
    name: 'Full Detail Reset',
    tag: 'Most Popular',
    featured: true,
    description: 'Complete interior and exterior detail with paint decontamination and protection.',
    price: 'From $199',
    image: img.rangeRoverSV,
    included: [
      'Complete interior detail',
      'Full exterior wash & dry',
      'Clay bar decontamination',
      'Hand polish',
      'Paint sealant',
      'Engine bay clean',
      'Door jambs',
      'Trim dressing',
      'Final walkthrough',
    ],
    duration: '4–6 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$199' },
      { label: 'SUV / Truck', price: '$225' },
      { label: 'XL / Van', price: '$250' },
    ],
  },
  {
    id: 'full-detail-machine-wax',
    name: 'Full Detail + Machine Wax',
    tag: 'Best Value',
    description: 'Everything in Full Detail Reset plus a machine-applied carnauba wax for extra shine.',
    price: 'From $235',
    image: img.lamboUrus,
    included: [
      'Everything in Full Detail Reset',
      'Machine wax application',
      'Carnauba wax protection',
      'Extra paint gloss',
      'Wheel face polish',
    ],
    duration: '5–7 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$235' },
      { label: 'SUV / Truck', price: '$275' },
      { label: 'XL / Van', price: '$315' },
    ],
  },
  {
    id: 'interior',
    name: 'Interior Detail',
    tag: 'Interior',
    description: 'Steam clean, carpet shampoo, leather conditioning, and odor treatment.',
    price: 'From $175',
    image: img.rrInterior,
    included: [
      'Full steam cleaning',
      'Carpet & upholstery shampoo',
      'Leather clean & condition',
      'Dashboard & trim detail',
      'Air vent cleaning',
      'Odor treatment',
    ],
    duration: '2–4 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$175' },
      { label: 'SUV / Truck', price: '$200' },
      { label: 'XL / Van', price: '$225' },
    ],
  },
  {
    id: 'express',
    name: 'Express Detail',
    tag: 'Quick Clean',
    description: 'Fast interior vacuum and exterior wash — perfect for maintenance between full details.',
    price: 'From $135',
    image: img.escaladeRed,
    included: [
      'Exterior hand wash',
      'Interior vacuum',
      'Window cleaning',
      'Tire dressing',
      'Dashboard wipe-down',
    ],
    duration: '1–2 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$135' },
      { label: 'SUV / Truck', price: '$160' },
    ],
  },
  {
    id: 'exterior',
    name: 'Exterior Detail',
    tag: 'Exterior',
    description: 'Full exterior wash, clay bar, polish, and paint sealant for maximum shine.',
    price: 'From $150',
    image: img.blackM3,
    included: [
      'Foam cannon pre-wash',
      'Hand wash & dry',
      'Clay bar decontamination',
      'Iron fallout removal',
      'Hand polish',
      'Paint sealant',
      'Wheel & tire detail',
      'Trim & glass',
    ],
    duration: '2–3 hours',
    sizes: [
      { label: 'Sedan / Coupe', price: '$150' },
      { label: 'SUV / Truck', price: '$175' },
    ],
  },
  {
    id: 'add-ons',
    name: 'À La Carte Add-Ons',
    tag: 'Add-Ons',
    description: 'Customize any service with these individual upgrades.',
    price: 'From $30',
    image: img.workerFerrariWheel,
    included: [
      'Paint sealant upgrade — $45',
      'Engine bay clean — $60',
      'Odor bomb treatment — $50',
      'Ceramic spray coating — $75',
      'Headlight restoration — $35',
      'Scratch/swirl touch-up — $45',
      'Tar/adhesive removal — $30',
      'Pet hair removal — $50',
    ],
    duration: 'Varies',
  },
]

export default function Pricing() {
  return (
    <main className="pricing-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.escaladeRed})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">What It Costs</span>
          <h1>Transparent<br /><span className="cyan">Pricing</span></h1>
          <p>No hidden fees. No surprises. Pricing varies by vehicle size and condition.</p>
        </div>
      </section>

      <div className="pricing-note">
        <div className="container">
          <span>ℹ️</span>
          <span>After booking, a LabShine specialist will confirm your final price based on vehicle size and condition.</span>
        </div>
      </div>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {services.map(svc => (
              <div key={svc.id} className={`pricing-card${svc.featured ? ' featured' : ''}`}>
                <div className="pricing-card-img" style={{ backgroundImage: `url(${svc.image})` }}>
                  {svc.tag && <span className="pricing-tag">{svc.tag}</span>}
                </div>
                <div className="pricing-card-body">
                  <h3>{svc.name}</h3>
                  <p className="pricing-desc">{svc.description}</p>
                  <div className="pricing-price">{svc.price}</div>
                  {svc.duration && <div className="pricing-duration">⏱ {svc.duration}</div>}
                  {svc.sizes && (
                    <div className="pricing-sizes">
                      {svc.sizes.map(sz => (
                        <div key={sz.label} className="pricing-size-row">
                          <span>{sz.label}</span>
                          <span className="cyan">{sz.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="pricing-includes">
                    {svc.included.map(item => (
                      <li key={item}><span className="cyan">✓</span> {item}</li>
                    ))}
                  </ul>
                  <a
                    href="https://app.squareup.com/appointments/book/labshine"
                    target="_blank"
                    rel="noopener"
                    className="btn-primary pricing-cta"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Not Sure Which Service?</h2>
            <p>Call or text us and we'll recommend the best package for your vehicle's needs.</p>
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
