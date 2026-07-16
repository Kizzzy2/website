import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Home.css'
import img from '../lib/images'
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'
import BeforeAfter from '../components/BeforeAfter'
import MagneticBtn from '../components/MagneticBtn'
import BookingWidget from '../components/BookingWidget'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing",
  "description": "Houston's premier mobile auto detailing service. Full detail, ceramic coating, paint correction, and interior detail. We come to you.",
  "url": "https://labshineautodetailing.com",
  "telephone": "+13464529991",
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
    "Houston TX", "River Oaks TX", "Memorial Houston TX", "Bellaire TX",
    "West University Place TX", "Tanglewood Houston TX", "Heights Houston TX",
    "Cypress TX", "Katy TX", "Sugar Land TX", "The Woodlands TX", "Pearland TX",
    "Fulshear TX", "Spring TX", "Tomball TX", "Kingwood TX", "Atascocita TX",
    "Conroe TX", "Magnolia TX", "Friendswood TX", "League City TX",
    "Clear Lake TX", "Missouri City TX", "Richmond TX", "Humble TX"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "LabShine Mobile Detailing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Detail" }, "price": "150", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Detail" }, "price": "250", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Detail" }, "price": "350", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Coating" }, "price": "750", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Coating + Paint Correction" }, "price": "1000", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Headlight Restoration" }, "price": "120", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Engine Bay Detail" }, "price": "120", "priceCurrency": "USD" }
    ]
  },
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
    "https://www.facebook.com/labshineautodetailinghtx"
  ]
}

const heroBg = '/images/the-woodlands/IMG_5481.JPG'

const services = [
  { title: 'Full Detail', desc: 'Complete interior and exterior for a showroom finish. Our most popular package.', link: '/pricing', img: '/images/the-woodlands/IMG_5416.JPG', price: 'From $300', pos: 'center 50%' },
  { title: 'Interior Detail', desc: 'Deep clean of every surface — seats, carpet, dash, panels, and trim.', link: '/interior-detailing', img: '/images/katy/IMG_5337.JPG', price: 'From $250', pos: 'center 65%' },
  { title: 'Ceramic Coating', desc: '9H ceramic coating for years of paint protection and hydrophobic effect.', link: '/ceramic-coating', img: '/images/sugar-land/IMG_4403.JPG', price: 'From $599', pos: 'center 50%' },
  { title: 'Paint Correction', desc: 'Remove swirl marks, scratches, and oxidation. Restore paint to new condition.', link: '/paint-correction', img: '/images/cypress/IMG_4133.JPG', price: 'From $350', pos: 'center 68%' },
  { title: 'Exterior Detail', desc: 'Hand wash, clay bar, wax or sealant — exterior protection done right.', link: '/pricing', img: '/images/katy/IMG_5346.JPG', price: 'From $150', pos: 'center 50%' },
  { title: 'Fleet Services', desc: 'Recurring detailing programs for commercial fleets of any size in Houston.', link: '/fleet', img: '/images/sugar-land/IMG_4403.JPG', price: 'Custom Quote', pos: 'center 35%' },
]

const igPhotos = [
  { src: '/images/sugar-land/IMG_4403.JPG', alt: 'Rolls Royce Ghost ceramic coating — Sugar Land TX', pos: 'center 50%' },
  { src: '/images/cypress/IMG_4133.JPG', alt: 'Dodge Durango SRT paint correction — Cypress TX', pos: 'center 68%' },
  { src: '/images/the-woodlands/IMG_5416.JPG', alt: 'Ford F250 full detail — The Woodlands TX', pos: 'center 50%' },
  { src: '/images/sugar-land/IMG_4406.JPG', alt: 'Corvette ZR1 ceramic coating — Sugar Land TX', pos: 'center 50%' },
  { src: '/images/katy/IMG_5337.JPG', alt: 'BMW M4 convertible detail — Katy TX', pos: 'center 65%' },
  { src: '/images/pearland/IMG_4247.JPG', alt: 'BMW M3 exterior detail — Pearland TX', pos: 'center 50%' },
  { src: '/images/pearland/IMG_4934.JPG', alt: 'Red Cadillac Escalade full detail — Pearland TX', pos: 'center 50%' },
  { src: '/images/the-woodlands/IMG_5479.JPG', alt: 'LabShine Auto Detailing crew — Houston TX', pos: 'center 50%' },
  { src: '/images/katy/IMG_5346.JPG', alt: 'BMW X6 full detail in garage — Katy TX', pos: 'center 50%' },
]

const areas = [
  'Houston','Sugar Land','Katy','Pearland','The Woodlands','Spring','Cypress',
  'Friendswood','Missouri City','Richmond','Rosenberg','Stafford','League City',
  'Pasadena','Baytown','Humble','Tomball','Conroe','Kingwood','Deer Park',
  'La Porte','Webster','Clear Lake','Galveston'
]

function AnimCount({ target, suffix = '', prefix = '' }) {
  const [started, setStarted] = useState(false)
  const count = useCountUp(target, 1600, true)
  return <>{prefix}{count}{suffix}</>
}

export default function Home() {
  const [servicesRef, servicesVisible] = useScrollReveal()
  const [ceramicRef, ceramicVisible] = useScrollReveal()
  const [areasRef, areasVisible] = useScrollReveal()
  const [ctaRef, ctaVisible] = useScrollReveal()
  const [statsRef, statsVisible] = useScrollReveal()

  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Houston TX | LabShine Auto Detailing</title>
      <meta name="description" content="Houston's premium mobile auto detailing — River Oaks, Memorial, The Woodlands & 24+ areas. Full detail from $185, ceramic from $599. Book online today." />
      <link rel="canonical" href="https://labshineautodetailing.com/" />
      <meta property="og:title" content="Mobile Auto Detailing Houston TX | LabShine Auto Detailing" />
      <meta property="og:description" content="Houston's premium mobile auto detailing — River Oaks, Memorial, The Woodlands & 24+ areas. Full detail from $185, ceramic from $599. Book online today." />
      <meta property="og:url" content="https://labshineautodetailing.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mobile Auto Detailing Houston TX | LabShine" />
      <meta name="twitter:description" content="Houston's premium mobile detailing — River Oaks, Memorial, The Woodlands & 24+ areas. Full detail from $185, ceramic from $599. Book today." />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>
    <main>
      {/* Hero */}
      <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay-l" />
        <div className="hero-overlay-b" />
        <div className="hero-content container">
          <span className="hero-badge">Houston Mobile Detailing</span>
          <h1 className="hero-title">Houston's Premium<br/><span className="cyan">Mobile Auto Detailing</span></h1>
          <p className="hero-sub">
            Professional mobile detailing at your driveway, garage, or office.
            Ceramic coating, paint correction, interior detail, and full packages
            across Houston and 24 surrounding cities.
          </p>
          <div className="hero-btns">
            <MagneticBtn href="https://labshine-ops.vercel.app/book" className="btn-primary" strength={0.4}>
              Book Online
            </MagneticBtn>
            <MagneticBtn href="/pricing" className="btn-outline" strength={0.3}>
              View Pricing
            </MagneticBtn>
          </div>
          <div className="hero-stats">
            <span>⭐ 4.9 Stars on Google</span>
            <span className="sep">|</span>
            <span>500+ Vehicles Detailed</span>
            <span className="sep">|</span>
            <span>24 Cities Served</span>
          </div>
        </div>
        <div className="hero-clip-bottom" />
      </section>

      {/* Animated Stats Strip */}
      <div className="stats-strip" ref={statsRef}>
        <div className="container">
          <div className="stats-strip-inner">
            <div className="stat-item">
              <div className={`stat-number reveal${statsVisible ? ' visible' : ''}`}>
                {statsVisible ? <AnimCount target={500} suffix="+" /> : '0+'}
              </div>
              <div className="stat-label">Vehicles Detailed</div>
            </div>
            <div className="stat-item">
              <div className={`stat-number reveal reveal-delay-1${statsVisible ? ' visible' : ''}`}>
                {statsVisible ? <AnimCount target={127} suffix="+" /> : '0+'}
              </div>
              <div className="stat-label">5-Star Reviews</div>
            </div>
            <div className="stat-item">
              <div className={`stat-number reveal reveal-delay-2${statsVisible ? ' visible' : ''}`}>
                {statsVisible ? <AnimCount target={24} suffix="" /> : '0'}
              </div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-item">
              <div className={`stat-number reveal reveal-delay-3${statsVisible ? ' visible' : ''}`}>
                {statsVisible ? '4.9' : '4.9'}
              </div>
              <div className="stat-label">Google Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="services-section" id="services" ref={servicesRef}>
        <div className="container">
          <div className={`section-header reveal${servicesVisible ? ' visible' : ''}`}>
            <span className="section-label">What We Offer</span>
            <h2>Our Services</h2>
            <p>Professional detailing services delivered to your location across the Houston metro area.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`service-img-card reveal reveal-delay-${i + 1}${servicesVisible ? ' visible' : ''}`}
              >
                <div className="service-img-bg" style={{ backgroundImage: `url(${s.img})`, backgroundPosition: s.pos }} />
                <div className="service-img-overlay" />
                <div className="service-img-accent" />
                <div className="service-img-content">
                  <span className="service-price">{s.price}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={s.link} className="service-link">Book Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramic Coating CTA */}
      <section className="ceramic-section" id="ceramic" ref={ceramicRef}>
        <div className="container">
          <div className="ceramic-content">
            <div className={`ceramic-text reveal-left${ceramicVisible ? ' visible' : ''}`}>
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
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get a Quote
              </a>
            </div>
            <div className={`ceramic-image reveal-right${ceramicVisible ? ' visible' : ''}`} style={{ backgroundImage: `url(${img.ceramicVette})` }}>
              <div className="ceramic-badge">9H Ceramic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip — real customer photos */}
      <section className="gallery-strip">
        <div className="gallery-strip-grid">
          {[
            '/images/the-woodlands/IMG_5416.JPG',
            '/images/katy/IMG_5337.JPG',
            '/images/sugar-land/IMG_4403.JPG',
            '/images/cypress/IMG_4133.JPG',
            '/images/memorial/IMG_5217.JPG',
            '/images/houston/IMG_3345.JPG',
          ].map((src, i) => (
            <div key={i} className="gallery-strip-item" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </section>

      {/* Photo Mosaic — real work across Houston */}
      <section className="photo-mosaic-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Real Work. Real Results.</span>
            <h2>Across <span className="cyan">Houston</span></h2>
          </div>
          <div className="photo-mosaic">
            <div className="mosaic-large">
              <img src="/images/the-woodlands/IMG_5483.JPG" alt="LabShine mobile detailing on location — The Woodlands TX" loading="lazy" />
            </div>
            <div className="mosaic-small-grid">
              <img src="/images/katy/IMG_5346.JPG" alt="Full detail — Katy TX" loading="lazy" />
              <img src="/images/sugar-land/IMG_4406.JPG" alt="Exterior detail — Sugar Land TX" loading="lazy" />
              <img src="/images/cypress/IMG_4290.JPG" alt="Full detail — Cypress TX" loading="lazy" />
              <img src="/images/memorial/IMG_5313.JPG" alt="Exterior detail — Memorial Houston TX" loading="lazy" />
            </div>
            <div className="mosaic-tall">
              <img src="/images/the-woodlands/IMG_5479.JPG" alt="Adrian Medina — LabShine owner and operator, The Woodlands TX" loading="lazy" />
            </div>
            <div className="mosaic-wide">
              <img src="/images/pearland/IMG_4247.JPG" alt="Exterior detail — Pearland TX" loading="lazy" />
            </div>
            <div className="mosaic-small-grid">
              <img src="/images/houston/IMG_3352.JPG" alt="Full detail — Houston TX" loading="lazy" />
              <img src="/images/sugar-land/IMG_5121.JPG" alt="Detail service — Sugar Land TX" loading="lazy" />
              <img src="/images/katy/IMG_2785.JPG" alt="Exterior detail — Katy TX" loading="lazy" />
              <img src="/images/memorial/IMG_5010.JPG" alt="Exterior detail — Memorial Houston TX" loading="lazy" />
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/gallery" className="btn-outline">See Full Gallery →</a>
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <section className="ba-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The LabShine Difference</span>
            <h2>See the <span className="cyan">Transformation</span></h2>
            <p>Drag the slider to see the before and after on a real customer vehicle.</p>
          </div>
        </div>
        <BeforeAfter
          before={img.durangoInteriorBefore}
          after={img.durangoInteriorAfter}
          beforeLabel="Before"
          afterLabel="After"
        />
        <div style={{ textAlign: 'center', marginTop: 32, paddingBottom: 8 }}>
          <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book My Detail →</a>
        </div>
      </section>

      {/* Owner-Operated Team Feature */}
      <section className="home-team-section">
        <div className="container">
          <div className="home-team-grid">
            <div className="home-team-photo">
              <img
                src="/images/the-woodlands/IMG_5481.JPG"
                alt="LabShine Auto Detailing team — Adrian Medina and technician with exotic cars, The Woodlands TX"
                loading="lazy"
              />
            </div>
            <div className="home-team-text">
              <span className="section-label">Owner-Operated</span>
              <h2>Real People.<br/>Real <span className="cyan">Results.</span></h2>
              <p>LabShine is owner-operated by Adrian Medina — a Houston car enthusiast who turned his obsession into a business. Every job is personal. Every vehicle gets the same attention to detail, whether it's a daily driver or a six-figure supercar.</p>
              <p>Adrian is on-site for every job or personally trains every technician he sends out. When you book LabShine, you get the owner's standards every single time.</p>
              <div className="home-team-stats">
                <div><strong>500+</strong><span>Vehicles Detailed</span></div>
                <div><strong>4.9★</strong><span>Google Rating</span></div>
                <div><strong>5+</strong><span>Years Experience</span></div>
              </div>
              <a href="/about" className="btn-outline" style={{ marginTop: '24px', display: 'inline-block' }}>Meet the Team →</a>
            </div>
          </div>
        </div>
      </section>


      {/* Instagram Feed */}
      <section className="ig-section">
        <div className="container">
          <div className="ig-header">
            <a href="https://www.instagram.com/labshinedetailing" target="_blank" rel="noopener noreferrer" className="ig-handle-link">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@labshinedetailing</span>
            </a>
            <p>Before & afters, car care tips, and real Houston clients. Follow along.</p>
          </div>
          <div className="ig-grid">
            {igPhotos.map((photo, i) => (
              <a
                key={i}
                href="https://www.instagram.com/labshinedetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="ig-cell"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={{ objectPosition: photo.pos }}
                />
                <div className="ig-cell-overlay">
                  <svg viewBox="0 0 24 24" fill="white" width="22" height="22" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <div className="ig-follow-cta">
            <a href="https://www.instagram.com/labshinedetailing" target="_blank" rel="noopener noreferrer" className="btn-ig">
              <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @labshinedetailing
            </a>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="areas-section" id="areas" ref={areasRef}>
        <div className="container">
          <div className={`section-header reveal${areasVisible ? ' visible' : ''}`}>
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

      {/* Booking Widget */}
      <section className="booking-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="section-label">Get Started</span>
            <h2>Book Your Detail</h2>
            <p>Fill out the form below — quotes, bookings, and service details all in one place.</p>
          </div>
        </div>
        <BookingWidget />
      </section>
    </main>
    </>
  )
}
