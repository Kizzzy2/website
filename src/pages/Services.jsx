import { Helmet } from 'react-helmet-async'
import './Services.css'
import img from '../lib/images'

const services = [
  {
    title: 'Full Detail Reset',
    price: 'From $250',
    desc: 'Our most comprehensive package. Complete interior and exterior detailing with clay bar decontamination, hand polish, paint sealant, engine bay clean, and final walkthrough.',
    image: img.lamboUrus,
    duration: '4–6 hours',
    bullets: ['Interior deep clean', 'Exterior wash & dry', 'Clay bar', 'Hand polish', 'Paint sealant', 'Engine bay'],
  },
  {
    title: 'Interior Detail',
    price: 'From $200',
    desc: 'Full interior steam clean, carpet and upholstery shampoo, leather conditioning, odor treatment, and complete dash and trim detail.',
    image: img.rrInterior,
    duration: '2–4 hours',
    bullets: ['Steam cleaning', 'Carpet shampoo', 'Leather condition', 'Odor treatment', 'Dash & trim'],
  },
  {
    title: 'Exterior Detail',
    price: 'From $175',
    desc: 'Foam cannon pre-wash, hand wash, clay bar decontamination, iron fallout removal, hand polish, and paint sealant for maximum shine.',
    image: img.blackM3,
    duration: '2–3 hours',
    bullets: ['Foam pre-wash', 'Clay bar', 'Iron removal', 'Hand polish', 'Paint sealant'],
  },
  {
    title: 'Ceramic Coating',
    price: 'From $800',
    desc: 'Professional 9H ceramic coating application. Long-lasting paint protection with hydrophobic properties, UV resistance, and enhanced gloss.',
    image: img.ceramicVette,
    duration: '1–2 days',
    bullets: ['9H hardness', '2–5 year protection', 'Hydrophobic', 'UV protection', 'Enhanced gloss'],
  },
  {
    title: 'Paint Correction',
    price: 'From $800',
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
    <>
    <Helmet>
      <title>Auto Detailing Services Houston TX | Full Detail, Ceramic Coating | LabShine</title>
      <meta name="description" content="Full menu of mobile detailing services in Houston: full detail reset, interior detail, ceramic coating, paint correction & fleet. Mobile to your driveway — no drop-off needed." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Auto Detailing Services Houston TX | LabShine" />
      <meta name="twitter:description" content="Full menu of mobile detailing services in Houston: full detail, interior, ceramic coating, paint correction & fleet. Mobile to your driveway — no drop-off needed." />
      <link rel="canonical" href="https://labshineautodetailing.com/services" />
      <meta property="og:title" content="Auto Detailing Services Houston TX | LabShine" />
      <meta property="og:description" content="Full menu of mobile detailing services in Houston: full detail, interior, ceramic coating, paint correction & fleet. We come to your driveway — no drop-off needed." />
      <meta property="og:url" content="https://labshineautodetailing.com/services" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "AutoRepair"],
        "name": "LabShine Auto Detailing",
        "description": "Full menu of mobile auto detailing services in Houston TX. Full detail, interior detail, ceramic coating, paint correction, fleet, and RV services.",
        "url": "https://labshineautodetailing.com/services",
        "telephone": "+13464529991",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "LabShine Mobile Detailing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Detail Reset" }, "price": "250", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Detail" }, "price": "200", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Detail" }, "price": "175", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Coating" }, "price": "800", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paint Correction" }, "price": "350", "priceCurrency": "USD" }
          ]
        }
      })}</script>
    </Helmet>
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
                <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book This Service</a>
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
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
