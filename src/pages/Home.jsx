import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './Home.css'
import img from '../lib/images'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing",
  "description": "Houston's premier mobile auto detailing service. Full detail, ceramic coating, paint correction, and interior detail. We come to you.",
  "url": "https://labshineautodetailing.com",
  "telephone": "+18322577574",
  "priceRange": "$$",
  "image": "https://labshineautodetailing.com/og-image.webp",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7604,
    "longitude": -95.3698
  },
  "areaServed": [
    "Houston TX", "Cypress TX", "Katy TX", "Sugar Land TX",
    "The Woodlands TX", "Pearland TX", "Spring TX", "Friendswood TX",
    "Missouri City TX", "League City TX", "Conroe TX", "Humble TX"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/labshinedetailing",
    "https://www.facebook.com/labshinedetailing"
  ]
}

const heroSlides = [
  { src: img.lamboUrus, alt: 'White Lamborghini Urus mobile detailing in Cypress TX', caption: 'Lamborghini Urus — Full Detail Reset, Cypress, TX' },
  { src: img.ceramicVette, alt: 'Orange Corvette ZR1 ceramic coated by LabShine Houston TX', caption: 'Corvette ZR1 — Ceramic Coating, Houston, TX' },
  { src: img.rollsGhost, alt: 'White Rolls Royce Ghost full detail with LabShine mobile unit Sugar Land TX', caption: 'Rolls Royce Ghost — Full Detail, Sugar Land, TX' },
  { src: img.blackM3, alt: 'Black BMW M3 Competition exterior detail Cypress TX', caption: 'BMW M3 Competition — Exterior Detail, Cypress, TX' },
  { src: img.ferrariFront, alt: 'White Ferrari California T full detail Katy TX', caption: 'Ferrari California T — Full Detail, Katy, TX' },
  { src: img.rangeRoverSV, alt: 'Matte blue Range Rover SV ceramic coating The Woodlands TX', caption: 'Range Rover SV — Ceramic Coating, The Woodlands, TX' },
  { src: img.escaladeRed, alt: 'Cadillac Escalade Sport matte red full detail Houston TX', caption: 'Cadillac Escalade Sport — Full Detail, Houston, TX' },
]

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
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
    <Helmet>
      <title>LabShine Auto Detailing | Houston Mobile Detailing & Ceramic Coating</title>
      <meta name="description" content="Houston's #1 mobile auto detailing. Full detail from $199, ceramic coating from $500, paint correction. We come to your home, office, or garage. 24+ cities served." />
      <link rel="canonical" href="https://labshineautodetailing.com/" />
      <meta property="og:title" content="LabShine Auto Detailing | Houston Mobile Detailing & Ceramic Coating" />
      <meta property="og:description" content="Houston's premier mobile auto detailing. Full detail from $199, ceramic coating from $500. We come to you — driveway, garage, or office. 24+ cities served." />
      <meta property="og:url" content="https://labshineautodetailing.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="LabShine Auto Detailing | Houston Mobile Detailing" />
      <meta name="twitter:description" content="Houston's premier mobile detailing. Full detail from $199. We come to you. 24+ cities." />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>
    <main>
      {/* Hero with slideshow */}
      <section className="hero" id="home">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.src})`, opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="hero-overlay-l" />
        <div className="hero-overlay-b" />
        <div className="hero-content container">
          <span className="hero-badge">Houston Mobile Detailing</span>
          <h1 className="hero-title">Your Vehicle,<br/>Our Obsession.</h1>
          <p className="hero-sub">
            Professional mobile auto detailing at your driveway, garage, or office.
            Ceramic coating, paint correction, interior detailing, and full detail
            services delivered across Houston and 24 surrounding cities.
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
          <div className="hero-caption">{heroSlides[current].caption}</div>
        </div>
        {/* Slide dots */}
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
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
            <div className="ceramic-image" style={{ backgroundImage: `url(${img.ceramicVette})` }}>
              <div className="ceramic-badge">9H Ceramic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="gallery-strip">
        <div className="gallery-strip-grid">
          {[img.bmwX6M, img.challengerPink, img.raptorWhite, img.bmwM4Carbon, img.vetteZR1Porsche, img.porsche911Rear].map((src, i) => (
            <div key={i} className="gallery-strip-item" style={{ backgroundImage: `url(${src})` }} />
          ))}
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
    </>
  )
}
