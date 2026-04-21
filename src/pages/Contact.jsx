import { Helmet } from 'react-helmet-async'
import './Contact.css'

const contactSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing",
  "telephone": "+18322577574",
  "email": "labshinedetailing@gmail.com",
  "url": "https://labshineautodetailing.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": "Houston, TX and surrounding areas",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ]
}

export default function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact LabShine | Houston Mobile Detailing — (832) 257-7574</title>
      <meta name="description" content="Contact LabShine Auto Detailing for mobile detailing in Houston. Call (832) 257-7574, book online, or send a message. Serving Cypress, Katy, Sugar Land, The Woodlands, and 24+ cities." />
      <link rel="canonical" href="https://labshineautodetailing.com/contact" />
      <meta property="og:title" content="Contact LabShine | Houston Mobile Detailing" />
      <meta property="og:description" content="Get in touch with LabShine Auto Detailing. Call, text, or book online. Houston mobile detailing — we come to you." />
      <meta property="og:url" content="https://labshineautodetailing.com/contact" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
    </Helmet>
    <main className="contact-page">
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Get In Touch</span>
          <h1>Contact <span className="cyan">LabShine</span></h1>
          <p>Houston's mobile detailing team — we come to your home, office, or garage. Book online or reach us directly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>How to Reach Us</h2>
              <p className="contact-intro">
                LabShine serves the entire Greater Houston metro area. We're available 7 days a week, 7AM–7PM. The fastest way to book is through our online scheduler — most appointments are available within 24–48 hours.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">📞</div>
                  <div>
                    <div className="contact-card-label">Phone / Text</div>
                    <a href="tel:8322577574" className="contact-card-value">(832) 257-7574</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">✉️</div>
                  <div>
                    <div className="contact-card-label">Email</div>
                    <a href="mailto:labshinedetailing@gmail.com" className="contact-card-value">labshinedetailing@gmail.com</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">📍</div>
                  <div>
                    <div className="contact-card-label">Service Area</div>
                    <div className="contact-card-value">Houston, TX &amp; 24+ surrounding cities</div>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">🕐</div>
                  <div>
                    <div className="contact-card-label">Hours</div>
                    <div className="contact-card-value">Monday–Sunday, 7AM–7PM</div>
                  </div>
                </div>
              </div>

              <div className="contact-cta-block">
                <h3>Ready to Book?</h3>
                <p>Skip the back-and-forth — book your appointment directly online. Choose your service, pick a time, and we'll confirm within the hour.</p>
                <a
                  href="https://app.squareup.com/appointments/book/labshine"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  Book Online Now
                </a>
              </div>
            </div>

            <div className="contact-areas">
              <h3>Cities We Serve</h3>
              <ul className="city-list">
                {[
                  'Houston','Cypress','Katy','Sugar Land','The Woodlands',
                  'Pearland','Spring','Friendswood','Missouri City','Richmond',
                  'Rosenberg','Stafford','League City','Pasadena','Baytown',
                  'Humble','Tomball','Conroe','Kingwood','Deer Park',
                  'La Porte','Webster','Clear Lake','Galveston'
                ].map(city => (
                  <li key={city}>{city}, TX</li>
                ))}
              </ul>
              <p className="contact-note">Don't see your city? Call us — we likely cover it.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
