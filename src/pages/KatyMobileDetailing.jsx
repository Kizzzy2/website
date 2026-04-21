import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Katy TX",
  "description": "Mobile auto detailing in Katy TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving all of Katy including Cinco Ranch, Grand Lakes, and Mason Creek.",
  "url": "https://labshineautodetailing.com/katy-mobile-detailing",
  "telephone": "+18322577574",
  "areaServed": "Katy, TX"
}

export default function KatyMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Mobile Auto Detailing Katy TX | Ceramic Coating | LabShine</title>
      <meta name="description" content="Professional mobile auto detailing in Katy TX. Full detail from $199, ceramic coating from $500, interior detail from $175. LabShine comes to your Katy driveway — serving Cinco Ranch, Grand Lakes & all of Katy." />
      <link rel="canonical" href="https://labshineautodetailing.com/katy-mobile-detailing" />
      <meta property="og:title" content="Mobile Auto Detailing Katy TX | LabShine" />
      <meta property="og:description" content="Mobile detailing in Katy TX — full detail, ceramic coating, paint correction. Serving Cinco Ranch, Grand Lakes, and all of Katy. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/katy-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Katy, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Katy TX</span></h1>
          <p>Full detail, ceramic coating, and paint correction delivered to your Katy driveway. Serving Cinco Ranch, Grand Lakes, Mason Creek, and all of Katy.</p>
          <div className="hero-btns">
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book in Katy</a>
            <a href="tel:8322577574" className="btn-outline">Call (832) 257-7574</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Katy's Mobile Detailing <span className="cyan">Specialists</span></h2>
            <p>
              Katy has established itself as one of the fastest-growing and most affluent suburbs in the Houston metro. From the sprawling estates in Cinco Ranch to the newer developments around Katy Mills, the vehicles here deserve professional care — and LabShine delivers it directly to your door.
            </p>
            <p>
              Katy summers are intense. UV exposure, heat, and humidity combine to degrade paint faster than most car owners realize. Our ceramic coating packages create a durable hydrophobic barrier that protects your paint from I-10 road debris, hard water spots from Katy's water supply, and the relentless Texas sun.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $199', desc: 'Complete interior and exterior detailing done in your Katy driveway or garage. Clay bar, hand polish, paint sealant, and engine bay cleaning.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $175', desc: 'Steam cleaning, carpet shampoo, leather conditioning, and odor elimination. Essential for Katy families with kids, pets, and daily commutes on I-10.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $500', desc: '9H ceramic coating with 2–5 years of protection. Handles Katy\'s summer heat, UV exposure, and hard water like nothing else on the market.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Remove swirl marks, scratches, and water spot etching. Restores the factory paint depth on any vehicle — luxury, exotic, or daily driver.' },
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
            <h2>Why Katy Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏠</div>
                <h4>We Come to Katy</h4>
                <p>No driving to a shop on I-10. We set up at your home, garage, or office anywhere in Katy — including Cinco Ranch, Grand Lakes, and Firethorne.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated across Google and Facebook by Katy and Greater Houston customers who expect perfection.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🎯</div>
                <h4>One Car at a Time</h4>
                <p>Your vehicle gets the detailer's full attention — not rushed through a production line. Every panel checked, every surface done right.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week</h4>
                <p>Monday through Sunday, 7AM–7PM. Weekend appointments available for Katy's busy families and professionals.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Katy TX Today</span></h2>
            <p>Serving all of Katy including Cinco Ranch, Grand Lakes, Mason Creek, Nottingham Country, Firethorne, Cross Creek Ranch, and I-10 corridor businesses. Book in 2 minutes online.</p>
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
