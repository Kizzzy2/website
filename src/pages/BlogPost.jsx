import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import BLOG_POSTS from '../data/blogPosts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) return (
    <main className="post-page">
      <div className="post-error">
        <h2>Post not found.</h2>
        <Link to="/blog" className="btn-primary">← Back to Blog</Link>
      </div>
    </main>
  )

  const { title, category, date, excerpt, body } = post

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt || title,
    "datePublished": date,
    "dateModified": date,
    "author": { "@type": "Organization", "name": "LabShine Auto Detailing", "url": "https://labshineautodetailing.com" },
    "publisher": {
      "@type": "Organization",
      "name": "LabShine Auto Detailing",
      "url": "https://labshineautodetailing.com",
      "logo": { "@type": "ImageObject", "url": "https://labshineautodetailing.com/logo.png" }
    },
    "url": `https://labshineautodetailing.com/blog/${slug}`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://labshineautodetailing.com/blog/${slug}` },
    "image": "https://labshineautodetailing.com/og-image.webp",
    "articleSection": category || "Auto Detailing",
    "keywords": `auto detailing Houston, car detailing, ${category || 'detailing tips'}`
  }

  return (
    <>
    <Helmet>
      <title>{title} | LabShine Auto Detailing Blog</title>
      <meta name="description" content={excerpt ? excerpt.substring(0, 155) : `${title} — Expert auto detailing insights from LabShine, Houston's premier mobile detailing service.`} />
      <link rel="canonical" href={`https://labshineautodetailing.com/blog/${slug}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt || title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://labshineautodetailing.com/blog/${slug}`} />
      <meta property="og:image" content="https://labshineautodetailing.com/og-image.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt ? excerpt.substring(0, 155) : title} />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    </Helmet>
    <main className="post-page">
      <div className="post-header">
        <div className="container">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          {category && <span className="post-category">{category}</span>}
          <h1>{title}</h1>
          {excerpt && <p className="post-excerpt-header">{excerpt}</p>}
          <div className="post-meta-header">
            <time>{date}</time>
            <span>LabShine Auto Detailing</span>
          </div>
        </div>
      </div>

      <div className="container post-content-wrap">
        <div className="post-content" dangerouslySetInnerHTML={{ __html: body }} />

        <div className="post-sidebar">
          <div className="sidebar-card">
            <h4>Book a Detail</h4>
            <p>Ready to get your vehicle looking its best? Book online today.</p>
            <a href="tel:3464529991" className="btn-primary">
              (346) 452-9991
            </a>
          </div>
          <div className="sidebar-card">
            <h4>Call Us</h4>
            <p>Questions? Our team is ready to help.</p>
            <a href="tel:3464529991" className="btn-outline">
              (346) 452-9991
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
