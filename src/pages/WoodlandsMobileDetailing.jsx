import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — The Woodlands TX",
  "description": "Mobile auto detailing in The Woodlands TX. Full detail, ceramic coating, and paint correction. Serving Panther Creek, Carlton Woods, Hughes Landing, and all of The Woodlands.",
  "url": "https://labshineautodetailing.com/woodlands-mobile-detailing",
  "telephone": "+18322577574",
  "areaServed": "The Woodlands, TX"
}

export default function WoodlandsMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing The Woodlands TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Professional mobile auto detailing in The Woodlands TX. Full detail from $199, ceramic coating from $500. Serving Carlton Woods, Panther Creek, Hughes Landing — we come to your home." />
      <link rel="canonical" href="https://labshineautodetailing.com/woodlands-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing The Woodlands TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in The Woodlands TX. Full detail, ceramic coating, paint correction. Serving Carlton Woods, Panther Creek, and all of The Woodlands." />
      <meta property="og:url" content="https://labshineautodetailing.com/woodlands-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving The Woodlands, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">The Woodlands TX</span></h1>
          <p>Premium mobile detailing for The Woodlands' most discerning vehicle owners. Full detail, ceramic coating, and paint correction at your home or office.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book in The Woodlands</a>
            <a href="tel:8322577574" className="btn-outline">Call (832) 257-7574</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>The Woodlands' Mobile Detailing <span className="cyan">Specialists</span></h2>
            <p>
              The Woodlands represents some of the finest living in Greater Houston — and the vehicles match. From the gated estates in Carlton Woods to the executive homes along Lake Woodlands Drive, the cars here demand professional-level care. LabShine brings certified detailing directly to your property, no matter where you are in The Woodlands township.
            </p>
            <p>
              The tree canopy that makes The Woodlands beautiful also means consistent pollen, sap, and bird dropping exposure that can etch paint permanently if left untreated. Our paint correction and ceramic coating services address existing damage and then lock in protection against future environmental contamination — keeping your vehicle looking as refined as your neighborhood.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $199', desc: 'Complete interior + exterior detailing at your Woodlands home. Includes clay bar, hand polish, paint sealant, and engine bay. Done in your driveway while you work.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $175', desc: 'Full steam clean, carpet shampoo, leather conditioning. Essential after Woodlands family life — Country Club drives, school runs, and weekend trips to Lake Conroe.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $500', desc: '9H ceramic coating resistant to the sap, pollen, and UV that The Woodlands\' tree canopy produces year-round. 2–5 years of protection.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Remove bird dropping etching, tree sap hazing, and swirl marks. Critical in The Woodlands where organic contamination is constant.' },
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-price">{s.price}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="location-why">
            <h2>Why The Woodlands Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🌲</div>
                <h4>Woodlands-Experienced</h4>
                <p>We understand The Woodlands' unique detailing challenges — tree sap, pollen, and organic contamination require specialized treatment we're well-practiced in.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>5-Star Rated</h4>
                <p>127+ five-star reviews. Woodlands clients recommend us to neighbors because they know the results speak for themselves.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🏆</div>
                <h4>Exotic & Luxury Expertise</h4>
                <p>We regularly work on Porsches, BMWs, Mercedes, Range Rovers, and exotics. Your high-value vehicle gets the care it requires.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Available Monday through Sunday, 7AM–7PM. Book while you're at Market Street or working from your home office on Research Forest.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">The Woodlands</span></h2>
            <p>Serving Carlton Woods, Panther Creek, Indian Springs, Grogan's Mill, Cochran's Crossing, Sterling Ridge, Hughes Landing, and all of The Woodlands. Book online today.</p>
            <div className="hero-btns">
              <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book Online</a>
              <a href="tel:8322577574" className="btn-outline">Call or Text</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
