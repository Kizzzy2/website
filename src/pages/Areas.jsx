import { Helmet } from 'react-helmet-async'
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
    <>
    <Helmet>
      <title>Houston Mobile Detailing Service Areas | LabShine</title>
      <meta name="description" content="LabShine serves 24+ Houston neighborhoods: River Oaks, Memorial, The Woodlands, Katy, Sugar Land, Bellaire, Cypress, Pearland, Spring & more. Mobile to your driveway." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Houston Mobile Detailing Service Areas | LabShine" />
      <meta name="twitter:description" content="LabShine serves 24+ Houston neighborhoods: River Oaks, Memorial, The Woodlands, Katy, Sugar Land, Bellaire, Cypress, Pearland, Spring & more. Mobile to your driveway." />
      <link rel="canonical" href="https://labshineautodetailing.com/areas" />
      <meta property="og:title" content="Houston Mobile Detailing Service Areas | LabShine" />
      <meta property="og:description" content="LabShine serves 24+ Houston neighborhoods: River Oaks, Memorial, Woodlands, Katy, Sugar Land, Bellaire, Cypress, Pearland, Spring & more. Mobile to your driveway." />
      <meta property="og:url" content="https://labshineautodetailing.com/areas" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "LabShine Auto Detailing",
        "description": "Mobile auto detailing serving 24+ Houston TX cities. Full detail, ceramic coating, paint correction — we come to your home or office.",
        "url": "https://labshineautodetailing.com/areas",
        "telephone": "+13464529991",
        "priceRange": "$$",
        "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        "areaServed": ["Houston TX","Cypress TX","Katy TX","Sugar Land TX","The Woodlands TX","Pearland TX","Spring TX","Friendswood TX","Missouri City TX","Richmond TX","Rosenberg TX","Stafford TX","League City TX","Pasadena TX","Baytown TX","Humble TX","Tomball TX","Conroe TX","Kingwood TX","Deer Park TX","La Porte TX","Webster TX","Clear Lake TX","Galveston TX"],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" }
      })}</script>
    </Helmet>
    <main className="areas-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.raptorWhite})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">We Come to You</span>
          <h1>Houston Mobile Detailing <span className="cyan">Service Areas</span></h1>
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
                <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="area-book-link">
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
