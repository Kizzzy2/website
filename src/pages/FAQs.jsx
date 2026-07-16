import { Helmet } from 'react-helmet-async'
import './LocationPage.css'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does mobile auto detailing cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LabShine pricing starts at $125 for a Maintenance Wash & Wax (sedan), $185 for a Full Detail Reset, $325 for a Premium Show Detail, and $599+ for ceramic coating. SUV and truck pricing is slightly higher. All prices are transparent with no hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Do you come to my home or office?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — LabShine is 100% mobile. We bring all equipment, water, and supplies to your home, driveway, office, or garage anywhere in Greater Houston. No drop-off required."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve the entire Greater Houston metro area including River Oaks, Memorial, The Woodlands, Katy, Sugar Land, Cypress, Pearland, Spring, Friendswood, League City, Clear Lake, Kingwood, Conroe, Humble, and 24+ more neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a full detail take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Maintenance Wash & Wax takes 1–2 hours. A Full Detail Reset takes 4–6 hours. A Premium Show Detail takes 8–12 hours. Ceramic coating takes 1–3 days depending on the tier."
      }
    },
    {
      "@type": "Question",
      "name": "What ceramic coating options do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer three ceramic tiers: 2-Year Pro Ceramic starting at $599, 5-Year Premium Ceramic (Gtechniq/SystemX) starting at $1,099, and 9-Year Crystal-Tier Ceramic (Crystal Serum Ultra or SystemX Diamond) starting at $2,499 with a manufacturer warranty."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept all major credit cards, debit cards, Apple Pay, Google Pay, Zelle, and cash. A deposit is required at booking to hold your appointment slot."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be home during the detail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — you do not need to be present. You just need to provide access to your vehicle and a water source. Most customers leave keys and return to a freshly detailed car."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book online at labshine-ops.vercel.app/book, call or text (346) 452-9991, or use the quote form on our pricing page. We confirm most appointments within the hour."
      }
    },
  ]
}

const faqs = [
  { q: 'How much does mobile auto detailing cost in Houston?', a: 'LabShine pricing starts at $125 for a Maintenance Wash & Wax (sedan), $185 for a Full Detail Reset, $325 for a Premium Show Detail, and $599+ for ceramic coating. All prices are transparent — no hidden fees.' },
  { q: 'Do you come to my home or office?', a: 'Yes — LabShine is 100% mobile. We bring all equipment, water, and supplies to your home, driveway, office, or garage anywhere in Greater Houston. No drop-off required.' },
  { q: 'What areas do you serve?', a: 'We serve all of Greater Houston: River Oaks, Memorial, The Woodlands, Katy, Sugar Land, Cypress, Pearland, Spring, Friendswood, League City, Clear Lake, Kingwood, Conroe, Humble & 24+ more.' },
  { q: 'How long does a full detail take?', a: 'Maintenance Wash & Wax: 1–2 hrs. Full Detail Reset: 4–6 hrs. Premium Show Detail: 8–12 hrs. Ceramic coating: 1–3 days depending on tier.' },
  { q: 'What ceramic coating options do you offer?', a: '2-Year Pro from $599 · 5-Year Premium (Gtechniq/SystemX) from $1,099 · 9-Year Crystal-Tier (Crystal Serum Ultra or SystemX Diamond) from $2,499 with manufacturer warranty.' },
  { q: 'What payment methods do you accept?', a: 'All major credit/debit cards, Apple Pay, Google Pay, Zelle, and cash. A deposit is required at booking to secure your slot.' },
  { q: 'Do I need to be home during the detail?', a: 'No — you just need to provide vehicle access and a water source. Most customers leave keys and come back to a freshly detailed car.' },
  { q: 'How do I book an appointment?', a: 'Book online at labshine-ops.vercel.app/book, call/text (346) 452-9991, or fill out our quote form at labshineautodetailing.com/pricing. We confirm most appointments within the hour.' },
]

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>Mobile Detailing FAQs Houston | LabShine Auto Detailing</title>
        <meta name="description" content="Common questions about LabShine mobile detailing Houston. Pricing from $125, service areas, ceramic coating options, payment methods & more." />
        <link rel="canonical" href="https://labshineautodetailing.com/faqs" />
        <meta property="og:title" content="Mobile Detailing FAQs Houston | LabShine Auto Detailing" />
        <meta property="og:description" content="Answers to common questions about LabShine mobile auto detailing in Houston — pricing, service areas, ceramic coating options, and more." />
        <meta property="og:url" content="https://labshineautodetailing.com/faqs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <main className="location-page">
        <section className="location-hero" style={{ background: 'linear-gradient(135deg, #050d14 0%, #001a28 60%, #0a0a0a 100%)' }}>
          <div className="page-hero-overlay" />
          <div className="container">
            <span className="hero-badge">Questions Answered</span>
            <h1>Mobile Detailing <span className="cyan">FAQs</span></h1>
            <p>Everything you need to know about LabShine mobile auto detailing in Houston.</p>
            <div className="hero-btns">
              <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Now</a>
              <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <div className="location-faq">
                <div className="faq-list">
                  {faqs.map((item, i) => (
                    <div key={i} className="faq-item">
                      <h3>{item.q}</h3>
                      <p style={{ color: 'var(--gray)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 60, textAlign: 'center' }}>
                <h2>Still have questions?</h2>
                <p style={{ color: 'var(--gray)', marginBottom: 24 }}>Call or text us — we respond fast.</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary">Book Online</a>
                  <a href="tel:3464529991" className="btn-outline">Call (346) 452-9991</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
