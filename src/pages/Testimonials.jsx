import { Helmet } from 'react-helmet-async'
import './Testimonials.css'

const reviews = [
  {
    name: 'Marcus T.',
    location: 'Cypress, TX',
    rating: 5,
    date: 'March 2026',
    vehicle: 'Lamborghini Urus',
    text: 'LabShine did an incredible job on my Urus. Full detail plus ceramic coating — the paint looks better than when I picked it up from the dealer. Adrian came to my house in Cypress, super professional, explained every step. Worth every penny.',
  },
  {
    name: 'Jennifer R.',
    location: 'River Oaks, Houston',
    rating: 5,
    date: 'February 2026',
    vehicle: 'Range Rover Autobiography',
    text: 'I have been using LabShine for 8 months now on my Range Rover. The results are consistently perfect. I appreciate that they come to me — I work from home and having them show up, do the work, and leave without disrupting my day is exactly what I need. Highly recommend.',
  },
  {
    name: 'David K.',
    location: 'The Woodlands, TX',
    rating: 5,
    date: 'February 2026',
    vehicle: 'Porsche 911 GT3',
    text: 'Best detailing I have ever had on any of my cars. The paint correction on my GT3 removed swirls I thought were permanent. The finish is absolutely flawless. The attention to detail (no pun intended) is remarkable. Will not use anyone else.',
  },
  {
    name: 'Ashley M.',
    location: 'Katy, TX',
    rating: 5,
    date: 'January 2026',
    vehicle: 'Tesla Model Y',
    text: 'Booked an interior detail after my dog absolutely destroyed the back seat. The result was unreal — it looked completely brand new. The steam cleaning got out stains I thought were permanent. Fast, professional, and incredibly thorough. Booking again for sure.',
  },
  {
    name: 'Roberto L.',
    location: 'Sugar Land, TX',
    rating: 5,
    date: 'January 2026',
    vehicle: 'BMW M4 Competition',
    text: 'LabShine did ceramic coating on my M4 and the hydrophobic effect is insane. Water sheets right off. More importantly, the prep work before application was meticulous — clay bar, paint correction, everything done right. This is not a quick spray-and-wipe operation. These guys are serious.',
  },
  {
    name: 'Christine H.',
    location: 'Memorial, Houston',
    rating: 5,
    date: 'December 2025',
    vehicle: 'Mercedes GLS 580',
    text: 'I found LabShine through Instagram and they did not disappoint. Full detail on my GLS in my driveway while I worked inside. When I came out to check the car I literally gasped. Every surface, every crack, every detail — immaculate. My husband was equally impressed.',
  },
  {
    name: 'Tyler W.',
    location: 'Pearland, TX',
    rating: 5,
    date: 'December 2025',
    vehicle: 'F-150 Raptor',
    text: 'Had my Raptor detailed after a camping trip — mud everywhere, inside and out. LabShine came to me in Pearland and completely transformed it. Looks like it just came off the lot. The exterior was spotless and the interior smelled fresh. Super easy to book, great communication throughout.',
  },
  {
    name: 'Samantha N.',
    location: 'Energy Corridor, Houston',
    rating: 5,
    date: 'November 2025',
    vehicle: 'Cadillac Escalade',
    text: 'Absolutely outstanding service. I have a white Escalade and the exterior shine after their treatment is something I never thought possible. They used a foam cannon, clay bar, then multiple polish stages. The whole process took about 5 hours and was worth every minute of watching. Incredible work.',
  },
  {
    name: 'Michael B.',
    location: 'Friendswood, TX',
    rating: 5,
    date: 'November 2025',
    vehicle: 'Ferrari California T',
    text: 'I was nervous trusting anyone with my Ferrari, but LabShine came highly recommended by a friend at the country club. They treated the car like it was their own — careful, precise, and knowledgeable about exotic paint. The result was stunning. This is the only detailing team I will ever call.',
  },
  {
    name: 'Karen P.',
    location: 'Tanglewood, Houston',
    rating: 5,
    date: 'October 2025',
    vehicle: 'Lexus LX 600',
    text: 'I have tried three other detailing companies in Houston and none of them come close to LabShine. The difference is the thoroughness — they spend the time to get every single surface right. My LX looked factory-new when they were done. Booked my third appointment already.',
  },
  {
    name: 'James F.',
    location: 'Spring, TX',
    rating: 5,
    date: 'October 2025',
    vehicle: 'Dodge Ram 1500 TRX',
    text: 'Got a full detail and paint sealant on my TRX. These guys know what they are doing — they spotted a few rock chips I had not noticed and touched them up as a courtesy. The truck has never looked this good. Will be doing this monthly going forward.',
  },
  {
    name: 'Lisa C.',
    location: 'Clear Lake, Houston',
    rating: 5,
    date: 'September 2025',
    vehicle: 'Audi Q8',
    text: 'Convenient, professional, and genuinely excellent work. I booked online, they confirmed within an hour, showed up exactly on time, and delivered results that exceeded my expectations. The ceramic coating they applied has already made washing my Q8 so much easier — water just rolls right off.',
  },
]

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LabShine Auto Detailing",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "127",
    "bestRating": "5"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "datePublished": r.date,
    "reviewBody": r.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating,
      "bestRating": "5"
    }
  }))
}

export default function Testimonials() {
  return (
    <>
    <Helmet>
      <title>Customer Reviews | 5-Star Houston Mobile Detailing | LabShine</title>
      <meta name="description" content="Read LabShine's 127+ five-star reviews from Houston customers. Real reviews from Cypress, Katy, The Woodlands, Sugar Land, River Oaks, and more. See why Houston trusts us with their luxury vehicles." />
      <link rel="canonical" href="https://labshineautodetailing.com/testimonials" />
      <meta property="og:title" content="Customer Reviews | 5-Star Houston Detailing | LabShine" />
      <meta property="og:description" content="127+ five-star reviews. See what Houston customers say about LabShine's mobile detailing, ceramic coating, and paint correction services." />
      <meta property="og:url" content="https://labshineautodetailing.com/testimonials" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
    </Helmet>
    <main className="testimonials-page">
      <section className="page-hero testimonials-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <span className="hero-badge">What Clients Say</span>
          <h1>127+ <span className="cyan">Five-Star</span> Reviews</h1>
          <p>Real Houston customers. Real results. See why we're the #1-rated mobile detailing team across Greater Houston.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rating-summary">
            <div className="rating-big">5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-count">127 reviews · Google · Facebook</div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <article key={i} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                    <div>
                      <div className="reviewer-name">{review.name}</div>
                      <div className="reviewer-location">{review.location}</div>
                    </div>
                  </div>
                  <div className="review-stars">{'★'.repeat(review.rating)}</div>
                </div>
                <div className="review-vehicle">{review.vehicle}</div>
                <blockquote className="review-text">"{review.text}"</blockquote>
                <div className="review-date">{review.date}</div>
              </article>
            ))}
          </div>

          <div className="cta-section">
            <h2>Ready for <span className="cyan">Results Like These?</span></h2>
            <p>Join 127+ satisfied Houston customers. Book your detail today — we come to you.</p>
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">Book Your Detail</a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
