import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "LabShine Auto Detailing — Spring TX",
  "description": "Mobile auto detailing in Spring TX. Full detail, ceramic coating, and paint correction delivered to your driveway. Serving Klein, Champions Forest, Louetta Rd, and Spring Cypress Rd corridors.",
  "url": "https://labshineautodetailing.com/spring-mobile-detailing",
  "telephone": "+13464529991",
  "priceRange": "$$",
  "areaServed": "Spring, TX",
  "address": { "@type": "PostalAddress", "addressLocality": "Spring", "addressRegion": "TX", "postalCode": "77373", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.0799, "longitude": -95.4172 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "19:00" }],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does mobile detailing cost in Spring?", "acceptedAnswer": { "@type": "Answer", "text": "LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Spring. Interior-only starts at $200, ceramic coating from $599. No hidden fees." } },
      { "@type": "Question", "name": "Do you come to my home in Spring?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we come to your home, driveway, or office anywhere in Spring. No drop-off required. We bring all equipment and water." } },
      { "@type": "Question", "name": "How long does a full detail take in Spring?", "acceptedAnswer": { "@type": "Answer", "text": "A full interior and exterior detail typically takes 4–6 hours at your Spring location. Interior-only takes 2–4 hours. Ceramic coating requires 1–2 days." } }
    ]
  }
}

export default function SpringMobileDetailing() {
  return (
    <>
    <Helmet>
      <title>Spring TX Mobile Detailing & Ceramic Coating | LabShine</title>
      <meta name="description" content="Mobile auto detailing in Spring TX. Full detail from $185, ceramic from $599. Serving Klein, Champions Forest, Louetta Rd & Spring Cypress Rd — we come to you." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Spring TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta name="twitter:description" content="Mobile auto detailing in Spring TX. Full detail from $185, ceramic from $599. Serving Klein, Champions Forest, Louetta Rd & Spring Cypress Rd — we come to you." />
      <link rel="canonical" href="https://labshineautodetailing.com/spring-mobile-detailing" />
      <meta property="og:title" content="Spring TX Mobile Detailing & Ceramic Coating | LabShine" />
      <meta property="og:description" content="Mobile detailing in Spring TX — full detail, ceramic coating, paint correction. Serving Klein, Champions Forest, and all of Spring. Book today." />
      <meta property="og:url" content="https://labshineautodetailing.com/spring-mobile-detailing" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <main className="location-page">
      <section className="location-hero">
        <img src="/images/katy/IMG_5337.JPG" alt="Mobile auto detailing in Spring TX — LabShine" className="location-hero-img" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Serving Spring, TX</span>
          <h1>Mobile Auto Detailing in <span className="cyan">Spring TX</span></h1>
          <p>Professional mobile detailing for Spring families and professionals — serving Klein, Champions Forest, and the Louetta Road corridor. We come to your driveway.</p>
          <div className="hero-btns">
            <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book in Spring</a>
            <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-intro">
            <h2>Spring's Mobile Detailing <span className="cyan">Experts</span></h2>
            <p>
              Spring TX is one of the most family-dense communities in the Houston metro, stretching across ZIP codes 77373, 77379, and 77389. From the established neighborhoods along Louetta Road and Spring Cypress Rd to the newer developments near the Klein ISD schools and Champions Forest, LabShine brings professional auto detailing directly to your home or office — no shop visit required. We handle every vehicle type you'll find in Spring driveways: full-size trucks, three-row SUVs, mom's minivan, and the sports car reserved for weekend drives.
            </p>
            <p>
              Spring sits in Harris County where the combination of high humidity, pine pollen, and afternoon thunderstorms creates a punishing environment for unprotected paint. Road grime from Hwy 249 and FM 2920 builds up fast, and hard water spots from Spring's municipal supply etch into clear coats if left untreated. LabShine's ceramic coating packages seal out contaminants, bead off rain, and reduce the daily buildup that turns a clean car dirty within a week.
            </p>
          </div>

          <div className="services-grid location-services">
            {[
              { icon: '🚗', title: 'Full Detail Reset', price: 'From $185', desc: 'Complete interior and exterior detailing at your Spring home or office. Includes clay bar treatment, hand polish, paint sealant, wheel faces, and door jambs — the works.' },
              { icon: '✨', title: 'Interior Detail', price: 'From $200', desc: 'Steam cleaning, carpet and upholstery shampoo, leather conditioning, and odor elimination. Essential for Spring families dealing with kids, sports gear, and long school-run commutes.' },
              { icon: '🛡️', title: 'Ceramic Coating', price: 'From $599', desc: '9H ceramic coating with 2–5 years of protection against Spring\'s relentless pollen, pine sap, and UV exposure. Hydrophobic finish that sheds rain and repels road grime from Hwy 249.' },
              { icon: '🔧', title: 'Paint Correction', price: 'From $350', desc: 'Multi-stage machine polishing to eliminate swirl marks, wash scratches, and water-spot etching. Ideal for Spring\'s dark-colored trucks and SUVs showing years of automated car wash damage.' },
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
            <h2>Why Spring Chooses <span className="cyan">LabShine</span></h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏡</div>
                <h4>We Serve Your Neighborhood</h4>
                <p>From Klein Forest and Champions Forest to the Spring Cypress Rd and Louetta Rd corridors — we cover every Spring zip code including 77373, 77379, and 77389.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">⭐</div>
                <h4>127+ Five-Star Reviews</h4>
                <p>Consistently top-rated by Spring and Greater Houston customers on Google and Facebook who expect a showroom finish every single time.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">🚛</div>
                <h4>We Handle Full-Size Trucks & SUVs</h4>
                <p>Spring driveways are full of F-150s, Tahoes, and Suburbans. We're equipped and experienced with large-format vehicles — no upcharge surprises.</p>
              </div>
              <div className="why-item">
                <div className="why-icon">📅</div>
                <h4>7 Days a Week, 7AM–7PM</h4>
                <p>Weekend slots available for busy Klein ISD families. Book online in under 2 minutes and we'll confirm your Spring appointment the same day.</p>
              </div>
            </div>
          </div>

          <div className="location-faq">
            <h2>Frequently Asked Questions — <span className="cyan">Spring TX</span></h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>How much does mobile detailing cost in Spring?</h3>
                <p>LabShine full detail starts at $250 for sedans and $300 for SUVs/trucks in Spring. Interior-only starts at $200, ceramic coating from $599. No hidden fees — see our <a href="/pricing">full pricing page</a>.</p>
              </div>
              <div className="faq-item">
                <h3>Do you come to my home in Spring?</h3>
                <p>Yes — we come to your home, driveway, or office anywhere in Spring including Klein, Champions Forest, and the Spring Cypress Rd area. No drop-off required. We bring all equipment and water. Book at <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer">labshine-ops.vercel.app/book</a>.</p>
              </div>
              <div className="faq-item">
                <h3>How long does a full detail take in Spring?</h3>
                <p>A full interior and exterior detail typically takes 4–6 hours at your Spring location. Interior-only takes 2–4 hours. <a href="/ceramic-coating">Ceramic coating</a> requires 1–2 days for prep, application, and curing.</p>
              </div>
            </div>
          </div>

          <div className="location-cta">
            <h2>Book Mobile Detailing in <span className="cyan">Spring TX Today</span></h2>
            <p>Serving all of Spring TX including Klein, Champions Forest, Louetta Rd, Spring Cypress Rd, Gleannloch Farms, and Harmony communities. ZIP codes 77373, 77379, and 77389. Also near The Woodlands, Tomball, Humble, and Kingwood.</p>
            <div className="hero-btns">
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
              <a href="tel:3464529991" className="btn-outline">Call or Text</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
