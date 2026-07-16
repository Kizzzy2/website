import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BLOG_POSTS from '../data/blogPosts'
import './Blog.css'

export default function Blog() {
  const featured = BLOG_POSTS.find(p => p.featured)
  const rest = BLOG_POSTS.filter(p => !p.featured)

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Auto Detailing Blog | Houston Car Care Tips | LabShine" />
      <meta name="twitter:description" content="Expert auto detailing tips, ceramic coating guides, paint correction advice, and Houston car care news from LabShine's mobile detailing team." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "LabShine Auto Detailing Blog",
        "description": "Expert auto detailing tips, ceramic coating guides, paint correction advice, and Houston car care news.",
        "url": "https://labshineautodetailing.com/blog",
        "publisher": { "@type": "Organization", "name": "LabShine Auto Detailing", "url": "https://labshineautodetailing.com" },
        "inLanguage": "en-US"
      })}</script>
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
          <Link to={`/blog/${featured.slug}`} className="featured-post">
            <div className="featured-badge">Featured</div>
            <div className="featured-emoji">{featured.emoji}</div>
            <div className="featured-cat">{featured.category}</div>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="featured-meta">
              <time>{featured.date}</time>
              <span className="read-more">Read Article →</span>
            </div>
          </Link>
        )}

        <div className="posts-grid">
          {rest.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card">
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
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}
