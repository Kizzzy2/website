import { Helmet } from 'react-helmet-async'
import './Blog.css'

// Static blog posts — these live in /public/blog/posts/[slug]/index.html
// Add new entries here whenever MUSE publishes a new post
const STATIC_POSTS = [
  {
    slug: 'ceramic-coating-houston-heat',
    title: "Why Houston's Heat Makes Ceramic Coating a Must",
    excerpt: "Houston summers hit 100°F+ for weeks. UV radiation and humidity destroy unprotected paint fast. Here's why ceramic coating isn't a luxury in Houston — it's maintenance.",
    category: 'Ceramic Coating',
    date: 'January 15, 2026',
    emoji: '🛡️',
    featured: true,
  },
  {
    slug: 'how-to-maintain-ceramic-coating',
    title: 'How to Maintain Your Ceramic Coating (And Make It Last)',
    excerpt: "A ceramic coating is an investment. Here's exactly how to wash, decontaminate, and maintain it to get the full 2–5 years of protection.",
    category: 'Ceramic Coating',
    date: 'January 28, 2026',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'interior-detailing-houston-guide',
    title: 'Interior Detailing in Houston — What a Real Deep Clean Looks Like',
    excerpt: "Houston heat bakes everything into your interior. Here's what a professional interior detail actually covers and why DIY often falls short.",
    category: 'Interior',
    date: 'February 10, 2026',
    emoji: '🚗',
    featured: false,
  },
  {
    slug: 'paint-correction-vs-ceramic-coating',
    title: 'Paint Correction vs Ceramic Coating — Do You Need Both?',
    excerpt: "Most cars need paint correction before ceramic coating. Here's the difference, why order matters, and how to tell if your paint needs correction first.",
    category: 'Paint Protection',
    date: 'February 22, 2026',
    emoji: '🔧',
    featured: false,
  },
  {
    slug: 'best-time-to-detail-houston',
    title: 'The Best Time of Year to Get Your Car Detailed in Houston',
    excerpt: "Timing matters in Houston's climate. Spring before pollen season and fall before humidity drops are peak windows. Here's the full seasonal breakdown.",
    category: 'Maintenance',
    date: 'March 8, 2026',
    emoji: '📅',
    featured: false,
  },
  {
    slug: 'mobile-detailing-vs-detail-shop',
    title: 'Mobile Detailing vs Detail Shop — The Honest Comparison',
    excerpt: "We're biased but we'll be straight with you. Mobile vs shop detailing each has real trade-offs. Here's the full breakdown so you can decide.",
    category: 'Maintenance',
    date: 'March 22, 2026',
    emoji: '🏆',
    featured: false,
  },
]

export default function Blog() {
  const featured = STATIC_POSTS.find(p => p.featured)
  const rest = STATIC_POSTS.filter(p => !p.featured)

  return (
    <>
    <Helmet>
      <title>Auto Detailing Blog | Houston Car Care Tips | LabShine</title>
      <meta name="description" content="Expert auto detailing tips, ceramic coating guides, paint correction advice, and Houston car care news from LabShine's mobile detailing team." />
      <link rel="canonical" href="https://labshineautodetailing.com/blog" />
      <meta property="og:title" content="Auto Detailing Blog | Houston Car Care Tips | LabShine" />
      <meta property="og:description" content="Ceramic coating guides, detailing tips, and Houston car care advice from LabShine's expert team." />
      <meta property="og:url" content="https://labshineautodetailing.com/blog" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
    </Helmet>
    <main className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <span className="section-label">Tips, News & More</span>
          <h1>LabShine Blog</h1>
          <p>Auto detailing tips, ceramic coating guides, and Houston car care advice from our expert mobile detailing team.</p>
        </div>
      </div>

      <div className="container blog-container">
        {featured && (
          <a href={`/blog/posts/${featured.slug}/`} className="featured-post">
            <div className="featured-badge">Featured</div>
            <div className="featured-emoji">{featured.emoji}</div>
            <div className="featured-cat">{featured.category}</div>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="featured-meta">
              <time>{featured.date}</time>
              <span className="read-more">Read Article →</span>
            </div>
          </a>
        )}

        <div className="posts-grid">
          {rest.map(post => (
            <a key={post.slug} href={`/blog/posts/${post.slug}/`} className="post-card">
              <div className="post-emoji">{post.emoji}</div>
              <div className="post-body">
                <span className="post-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <time>{post.date}</time>
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}
