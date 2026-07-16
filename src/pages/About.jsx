import { Helmet } from 'react-helmet-async'
import './About.css'
import img from '../lib/images'

const stats = [
  { val: '500+', label: 'Vehicles Detailed' },
  { val: '4.9★', label: 'Google Rating' },
  { val: '24', label: 'Cities Served' },
  { val: '5+', label: 'Years Experience' },
]

export default function About() {
  return (
    <>
    <Helmet>
      <title>About LabShine | Houston's Mobile Auto Detailing Experts</title>
      <meta name="description" content="LabShine Auto Detailing — Houston's premier mobile team. 500+ vehicles detailed, 5-star rated. Serving Cypress, Katy & 24+ Houston cities." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About LabShine | Houston's Mobile Detailing Experts" />
      <meta name="twitter:description" content="LabShine Auto Detailing — Houston's premier mobile team. 500+ vehicles detailed, 5-star rated. Serving Cypress, Katy & 24+ Houston cities." />
      <link rel="canonical" href="https://labshineautodetailing.com/about" />
      <meta property="og:title" content="About LabShine | Houston's Mobile Detailing Experts" />
      <meta property="og:description" content="500+ vehicles detailed. 5-star rated. Serving 24+ Houston cities with professional mobile auto detailing." />
      <meta property="og:url" content="https://labshineautodetailing.com/about" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "LabShine Auto Detailing",
        "url": "https://labshineautodetailing.com",
        "logo": "https://labshineautodetailing.com/logo.png",
        "description": "Houston's premier owner-operated mobile auto detailing service. 500+ vehicles detailed, 4.9 stars, serving 24+ cities.",
        "telephone": "+13464529991",
        "email": "labshinedetailingtx@gmail.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        "founder": { "@type": "Person", "name": "Adrian Medina", "jobTitle": "Owner & Lead Detailer" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "sameAs": ["https://www.instagram.com/labshinedetailing", "https://www.facebook.com/labshineautodetailinghtx"]
      })}</script>
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
    </Helmet>
    <main className="about-page">
      <section className="page-hero" style={{ backgroundImage: `url(${img.bmwX6MAbout})` }}>
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">Our Story</span>
          <h1>About <span className="cyan">LabShine</span></h1>
          <p>Houston's premier mobile auto detailing service. We come to you.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-text">
              <span className="section-label">Who We Are</span>
              <h2>Built on Passion for Perfection</h2>
              <p>LabShine Auto Detailing was founded in Houston, TX by Adrian Medina — a car enthusiast who turned his obsession with pristine paint into a professional mobile detailing business.</p>
              <p>After years of detailing high-end vehicles, Adrian built a team that shares the same commitment to quality. Every vehicle we touch receives the same attention to detail, whether it's a daily driver or a six-figure supercar.</p>
              <p>We operate as a fully mobile service — no shop overhead, no waiting rooms, no dropping your car off. We come to your home, your office, or wherever is most convenient for you.</p>
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book with Our Team</a>
            </div>
            <div className="about-images">
              <div className="about-img-main" style={{ backgroundImage: 'url(/images/the-woodlands/IMG_5481.JPG)' }} />
              <div className="about-img-secondary" style={{ backgroundImage: 'url(/images/memorial/IMG_5307.JPG)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Standards</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Precision', desc: 'Every detail matters. We take the time to get it right — no rushing, no cutting corners.' },
              { icon: '📍', title: 'Convenience', desc: 'We come to you. Your home, your office, your schedule. Zero disruption to your day.' },
              { icon: '🏆', title: 'Quality Products', desc: 'We only use professional-grade ceramic coatings, polishes, and cleaning products.' },
              { icon: '🤝', title: 'Honesty', desc: 'Transparent pricing, honest assessments. No upsells you don\'t need.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="meet-team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The People Behind the Work</span>
            <h2>Meet the <span className="cyan">Team</span></h2>
            <p>Owner-operated. Every job is personal.</p>
          </div>

          <div className="team-owner-row">
            <div className="team-owner-photo">
              <img
                src="/images/the-woodlands/IMG_5479.JPG"
                alt="Adrian Medina — Owner and Operator, LabShine Auto Detailing, The Woodlands TX"
                loading="lazy"
              />
            </div>
            <div className="team-owner-bio">
              <span className="team-role">Owner &amp; Operator</span>
              <h3>Adrian Medina</h3>
              <p>Adrian founded LabShine out of a genuine obsession with cars. What started as detailing friends' vehicles turned into Houston's most trusted mobile detailing service — built on showing up on time, doing the work right, and treating every car like it's his own.</p>
              <p>He's on-site for every job or personally trains every technician he sends out. When you book LabShine, you're getting the owner's standards every single time.</p>
              <div className="team-owner-stats">
                <div><strong>500+</strong><span>Vehicles Detailed</span></div>
                <div><strong>5+</strong><span>Years Experience</span></div>
                <div><strong>4.9★</strong><span>Google Rating</span></div>
              </div>
            </div>
          </div>

          <div className="team-crew-row">
            <div className="team-crew-photo">
              <img
                src="/images/the-woodlands/IMG_5481.JPG"
                alt="LabShine Auto Detailing team — Adrian Medina and technician with exotic car lineup, The Woodlands TX"
                loading="lazy"
              />
              <div className="team-crew-caption">
                <strong>The LabShine Team</strong>
                <span>The Woodlands, TX</span>
              </div>
            </div>
            <div className="team-crew-photo">
              <img
                src="/images/the-woodlands/IMG_5483.JPG"
                alt="LabShine mobile detailing — owner Adrian Medina on the job with Ferrari 488 and branded van"
                loading="lazy"
              />
              <div className="team-crew-caption">
                <strong>Always On-Site</strong>
                <span>Mobile across Greater Houston</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Experience the LabShine Difference</h2>
            <p>Book your appointment and see why Houston trusts us with their vehicles.</p>
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
