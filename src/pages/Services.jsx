import './Services.css'
import img from '../lib/images'

const services = [
  {
    title: 'Full Detail Reset',
    price: 'From $199',
    desc: 'Our most comprehensive package. Complete interior and exterior detailing with clay bar decontamination, hand polish, paint sealant, engine bay clean, and final walkthrough.',
    image: img.lamboUrus,
    duration: '4–6 hours',
    bullets: ['Interior deep clean', 'Exterior wash & dry', 'Clay bar', 'Hand polish', 'Paint sealant', 'Engine bay'],
  },
  {
    title: 'Interior Detail',
    price: 'From $175',
    desc: 'Full interior steam clean, carpet and upholstery shampoo, leather conditioning, odor treatment, and complete dash and trim detail.',
    image: img.rrInterior,
    duration: '2–4 hours',
    bullets: ['Steam cleaning', 'Carpet shampoo', 'Leather condition', 'Odor treatment', 'Dash & trim'],
  },
  {
    title: 'Exterior Detail',
    price: 'From $150',
    desc: 'Foam cannon pre-wash, hand wash, clay bar decontamination, iron fallout removal, hand polish, and paint sealant for maximum shine.',
    image: img.blackM3,
    duration: '2–3 hours',
    bullets: ['Foam pre-wash', 'Clay bar', 'Iron removal', 'Hand polish', 'Paint sealant'],
  },
  {
    title: 'Ceramic Coating',
    price: 'From $500',
    desc: 'Professional 9H ceramic coating application. Long-lasting paint protection with hydrophobic properties, UV resistance, and enhanced gloss.',
    image: img.ceramicVette,
    duration: '1–2 days',
    bullets: ['9H hardness', '2–5 year protection', 'Hydrophobic', 'UV protection', 'Enhanced gloss'],
  },
  {
    title: 'Paint Correction',
    price: 'From $500',
    desc: 'Multi-stage machine polishing to remove swirl marks, water spots, light scratches, and oxidation. Restore your paint to showroom condition.',
    image: img.bmwX5Before,
    duration: '4–8 hours',
    bullets: ['Swirl removal', 'Scratch correction', 'Oxidation removal', 'Multi-stage polish'],
  },
  {
    title: 'Express Detail',
    price: 'From $135',
    desc: 'Quick maintenance detail — exterior hand wash, interior vacuum, window cleaning, tire dressing, and dashboard wipe-down.',
    image: img.escaladeRed,
    duration: '1–2 hours',
    bullets: ['Exterior wash', 'Interior vacuum', 'Window clean', 'Tire dressing'],
  },
  {
    title: 'Fleet Services',
    price: 'Custom Pricing',
    desc: 'Recurring mobile detailing programs for commercial fleets. We service dealerships, rental companies, and corporate fleets of any size across Houston.',
    image: img.poolTruck,
    duration: 'By Agreement',
    bullets: ['Volume discounts', 'On-site mobile', 'Recurring schedules', 'Any fleet size'],
  },
  {
    title: 'RV & Truck Detail',
    price: 'From $350',
    desc: 'Specialized detailing for large vehicles — RVs, box trucks, semi cabs, trailers, and boats. Full exterior and interior services.',
    image: img.raptorWhite,
    duration: 'Varies',
    bullets: ['RV detailing', 'Truck cabs', 'Trailers', 'Boats', 'Semi trucks'],
  },
]

export default function Services() {
  return (
    <main className="services-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.lamboUrus})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">What We Offer</span>
          <h1>Our <span className="cyan">Services</span></h1>
          <p>Professional mobile auto detailing delivered to your door across the Houston metro area.</p>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="container">
          {services.map((svc, i) => (
            <div key={svc.title} className={`svc-row${i % 2 === 1 ? ' reverse' : ''}`}>
              <div className="svc-img" style={{ backgroundImage: `url(${svc.image})` }} />
              <div className="svc-text">
                <span className="section-label">Service</span>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>
                <div className="svc-meta">
                  <span className="svc-price">{svc.price}</span>
                  <span className="svc-duration">⏱ {svc.duration}</span>
                </div>
                <ul className="svc-bullets">
                  {svc.bullets.map(b => <li key={b}><span className="cyan">✓</span> {b}</li>)}
                </ul>
                <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book This Service</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Book your mobile detailing appointment online. We come to you anywhere in the Houston area.</p>
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
