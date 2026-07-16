import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Gallery.css'
import img from '../lib/images'

const galleryItems = [
  { src: img.lamboUrus, caption: 'Lamborghini Urus — Full Detail Reset, Cypress, TX', cat: 'Full Detail' },
  { src: img.ceramicVette, caption: 'Corvette ZR1 — Ceramic Coating, Houston, TX', cat: 'Ceramic Coating' },
  { src: img.rollsGhost, caption: 'Rolls Royce Ghost — Full Detail, Sugar Land, TX', cat: 'Full Detail' },
  { src: img.blackM3, caption: 'BMW M3 Competition — Exterior Detail, Cypress, TX', cat: 'Exterior' },
  { src: img.ferrariFront, caption: 'Ferrari California T — Full Detail, Katy, TX', cat: 'Full Detail' },
  { src: img.rangeRoverSV, caption: 'Range Rover SV — Ceramic Coating, The Woodlands, TX', cat: 'Ceramic Coating' },
  { src: img.escaladeRed, caption: 'Cadillac Escalade Sport — Full Detail, Houston, TX', cat: 'Full Detail' },
  { src: img.bmwX6M, caption: 'BMW X6M Competition — Exterior Detail, Sugar Land, TX', cat: 'Exterior' },
  { src: img.challengerPink, caption: 'Dodge Challenger 392 — Ceramic Coating, Houston, TX', cat: 'Ceramic Coating' },
  { src: img.raptorWhite, caption: 'Ford Raptor — Full Detail, The Woodlands, TX', cat: 'Full Detail' },
  { src: img.bmwM4Carbon, caption: 'BMW M4 Competition — Full Detail, Cypress, TX', cat: 'Full Detail' },
  { src: img.vetteZR1Porsche, caption: 'ZR1 + Porsche 911 — Multi-Car Detail, Houston, TX', cat: 'Full Detail' },
  { src: img.challengerSide, caption: 'Dodge Challenger — Paint Correction, Houston, TX', cat: 'Paint Correction' },
  { src: img.bmwX7M, caption: 'BMW X7M — Full Detail, The Woodlands, TX', cat: 'Full Detail' },
  { src: img.raptorR37, caption: 'Ford Raptor R 37 — Full Detail, Katy, TX', cat: 'Full Detail' },
  { src: img.porsche911Rear, caption: 'Porsche 911 — Ceramic Coating, Houston, TX', cat: 'Ceramic Coating' },
  { src: img.porsche911Front, caption: 'Porsche 911 Carrera — Full Detail, Houston, TX', cat: 'Full Detail' },
  { src: img.rrInterior, caption: 'Rolls Royce Ghost — Interior Detail', cat: 'Interior' },
  { src: img.lamboDash, caption: 'Lamborghini Urus — Interior Detail', cat: 'Interior' },
  { src: img.lamboInterior, caption: 'Lamborghini — Interior Steam Clean', cat: 'Interior' },
  { src: img.bmwM3InteriorAfter, caption: 'BMW M3 — Interior Detail After', cat: 'Interior' },
  { src: img.bmwX5Before, caption: 'BMW X5 — Paint Correction Before/After', cat: 'Paint Correction' },
  { src: img.truckInteriorBefore, caption: 'Truck Interior — Deep Clean Before/After', cat: 'Interior' },
  { src: img.interiorDetail, caption: 'Interior Steam Detail Close-up', cat: 'Interior' },
  // Real customer photos — Houston area
  { src: '/images/the-woodlands/IMG_5481.JPG', caption: 'LabShine Team with Exotic Lineup — The Woodlands, TX', cat: 'Full Detail' },
  { src: '/images/the-woodlands/IMG_5483.JPG', caption: 'On the Job — The Woodlands, TX', cat: 'Full Detail' },
  { src: '/images/the-woodlands/IMG_5479.JPG', caption: 'Owner Adrian Medina — The Woodlands, TX', cat: 'Full Detail' },
  { src: '/images/the-woodlands/IMG_5416.JPG', caption: 'Full Detail — The Woodlands, TX', cat: 'Full Detail' },
  { src: '/images/the-woodlands/IMG_5413.JPG', caption: 'Exterior Detail — The Woodlands, TX', cat: 'Exterior' },
  { src: '/images/the-woodlands/IMG_5458.JPG', caption: 'Detail Service — The Woodlands, TX', cat: 'Full Detail' },
  { src: '/images/the-woodlands/IMG_4273.JPG', caption: 'Full Detail — The Woodlands, TX', cat: 'Full Detail' },
  { src: '/images/katy/IMG_5337.JPG', caption: 'Exterior Detail — Katy, TX', cat: 'Exterior' },
  { src: '/images/katy/IMG_5346.JPG', caption: 'Full Detail — Katy, TX', cat: 'Full Detail' },
  { src: '/images/katy/IMG_5207.JPG', caption: 'Detail Service — Katy, TX', cat: 'Full Detail' },
  { src: '/images/katy/IMG_2782.JPG', caption: 'Full Detail — Katy, TX', cat: 'Full Detail' },
  { src: '/images/katy/IMG_2785.JPG', caption: 'Exterior Detail — Katy, TX', cat: 'Exterior' },
  { src: '/images/katy/IMG_2788.JPG', caption: 'Full Detail — Katy, TX', cat: 'Full Detail' },
  { src: '/images/cypress/IMG_4133.JPG', caption: 'Paint Correction — Cypress, TX', cat: 'Paint Correction' },
  { src: '/images/cypress/IMG_4290.JPG', caption: 'Full Detail — Cypress, TX', cat: 'Full Detail' },
  { src: '/images/cypress/IMG_4306.JPG', caption: 'Exterior Detail — Cypress, TX', cat: 'Exterior' },
  { src: '/images/cypress/IMG_5356.JPG', caption: 'Detail Service — Cypress, TX', cat: 'Full Detail' },
  { src: '/images/cypress/IMG_2728.JPG', caption: 'Full Detail — Cypress, TX', cat: 'Full Detail' },
  { src: '/images/cypress/IMG_4117.jpeg', caption: 'Exterior Detail — Cypress, TX', cat: 'Exterior' },
  { src: '/images/sugar-land/IMG_4403.JPG', caption: 'Exterior Detail — Sugar Land, TX', cat: 'Exterior' },
  { src: '/images/sugar-land/IMG_4406.JPG', caption: 'Full Detail — Sugar Land, TX', cat: 'Full Detail' },
  { src: '/images/sugar-land/IMG_4471.JPG', caption: 'Detail Service — Sugar Land, TX', cat: 'Full Detail' },
  { src: '/images/sugar-land/IMG_4474.JPG', caption: 'Exterior Detail — Sugar Land, TX', cat: 'Exterior' },
  { src: '/images/sugar-land/IMG_5121.JPG', caption: 'Full Detail — Sugar Land, TX', cat: 'Full Detail' },
  { src: '/images/sugar-land/IMG_4276.JPG', caption: 'Full Detail — Sugar Land, TX', cat: 'Full Detail' },
  { src: '/images/memorial/IMG_5217.JPG', caption: 'Full Detail — Memorial, Houston TX', cat: 'Full Detail' },
  { src: '/images/memorial/IMG_5307.JPG', caption: 'Ceramic Coating — Memorial, Houston TX', cat: 'Ceramic Coating' },
  { src: '/images/memorial/IMG_5313.JPG', caption: 'Exterior Detail — Memorial, Houston TX', cat: 'Exterior' },
  { src: '/images/memorial/IMG_5202.JPG', caption: 'Detail Service — Memorial, Houston TX', cat: 'Full Detail' },
  { src: '/images/memorial/IMG_3388.JPG', caption: 'Full Detail — Memorial, Houston TX', cat: 'Full Detail' },
  { src: '/images/memorial/IMG_5010.JPG', caption: 'Exterior Detail — Memorial, Houston TX', cat: 'Exterior' },
  { src: '/images/pearland/IMG_4247.JPG', caption: 'Exterior Detail — Pearland, TX', cat: 'Exterior' },
  { src: '/images/pearland/IMG_4238.JPG', caption: 'Full Detail — Pearland, TX', cat: 'Full Detail' },
  { src: '/images/pearland/IMG_4249.JPG', caption: 'Full Detail — Pearland, TX', cat: 'Full Detail' },
  { src: '/images/pearland/IMG_4301.jpeg', caption: 'Detail Service — Pearland, TX', cat: 'Full Detail' },
  { src: '/images/pearland/IMG_4934.JPG', caption: 'Exterior Detail — Pearland, TX', cat: 'Exterior' },
  { src: '/images/houston/IMG_3345.JPG', caption: 'Exterior Detail — Houston, TX', cat: 'Exterior' },
  { src: '/images/houston/IMG_3352.JPG', caption: 'Full Detail — Houston, TX', cat: 'Full Detail' },
  { src: '/images/houston/IMG_3440.JPG', caption: 'Detail Service — Houston, TX', cat: 'Full Detail' },
  { src: '/images/houston/IMG_4084.jpeg', caption: 'Interior Detail — Houston, TX', cat: 'Interior' },
  { src: '/images/houston/IMG_4200.jpeg', caption: 'Detail Service — Houston, TX', cat: 'Full Detail' },
  { src: '/images/houston/IMG_4989.JPG', caption: 'Full Detail — Houston, TX', cat: 'Full Detail' },
  { src: '/images/houston/IMG_2355.JPG', caption: 'Full Detail — Houston, TX', cat: 'Full Detail' },
]

const cats = ['All', 'Full Detail', 'Ceramic Coating', 'Interior', 'Exterior', 'Paint Correction']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.cat === filter)

  return (
    <>
    <Helmet>
      <title>Before & After Detailing Gallery | Houston Cars | LabShine</title>
      <meta name="description" content="Before & after detailing results — Ferraris, Lamborghinis, Rolls Royces & BMWs. Houston's finest mobile auto detailing gallery. Book your detail today." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Before & After Detailing Gallery | LabShine Houston" />
      <meta name="twitter:description" content="Before & after detailing results — Ferraris, Lamborghinis, Rolls Royces & BMWs. Houston's finest mobile auto detailing gallery." />
      <link rel="canonical" href="https://labshineautodetailing.com/gallery" />
      <meta property="og:title" content="Before & After Detailing Gallery | LabShine Houston" />
      <meta property="og:description" content="Real results from real Houston cars. Before and after photos of full details, ceramic coatings, and paint correction." />
      <meta property="og:url" content="https://labshineautodetailing.com/gallery" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
    </Helmet>
    <main className="gallery-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.vetteZR1Porsche})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Our Work</span>
          <h1>Before & After <span className="cyan">Detailing Gallery</span></h1>
          <p>Real results from real vehicles we've detailed across Houston and surrounding cities.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {cats.map(cat => (
              <button
                key={cat}
                className={`filter-btn${filter === cat ? ' active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-img" style={{ backgroundImage: `url(${item.src})` }}>
                  <div className="gallery-overlay">
                    <span className="gallery-caption">{item.caption}</span>
                    <span className="gallery-cat-tag">{item.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox.src} alt={lightbox.caption} className="lightbox-img" />
          <p className="lightbox-caption">{lightbox.caption}</p>
        </div>
      )}

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want Results Like These?</h2>
            <p>Book your mobile detailing appointment today and we'll come to you.</p>
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
