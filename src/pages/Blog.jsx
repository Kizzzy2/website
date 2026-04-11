import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getBlogPosts } from '../lib/contentful'
import './Blog.css'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.title = 'Blog | LabShine Auto Detailing Houston'
    getBlogPosts()
      .then(setPosts)
      .catch(() => setError('Could not load posts. Please try again later.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <span className="section-label">Tips, News & More</span>
          <h1>LabShine Blog</h1>
          <p>Auto detailing tips, ceramic coating guides, and industry news from Houston's mobile detailing experts.</p>
        </div>
      </div>

      <div className="container blog-container">
        {loading && (
          <div className="blog-loading">
            <div className="spinner" />
            <p>Loading posts...</p>
          </div>
        )}

        {error && <div className="blog-error">{error}</div>}

        {!loading && !error && posts.length === 0 && (
          <div className="blog-empty">
            <h3>No posts yet</h3>
            <p>Check back soon — we'll be posting detailing tips and updates here.</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="posts-grid">
            {posts.map(post => {
              const { title, slug, excerpt, featuredImage, publishedDate, category } = post.fields
              const imgUrl = featuredImage?.fields?.file?.url
              const date = publishedDate
                ? new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                : new Date(post.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

              return (
                <article key={post.sys.id} className="post-card">
                  {imgUrl && (
                    <Link to={`/blog/${slug}`} className="post-img-wrap">
                      <img src={`https:${imgUrl}`} alt={title} loading="lazy" />
                    </Link>
                  )}
                  <div className="post-body">
                    {category && <span className="post-category">{category}</span>}
                    <h2><Link to={`/blog/${slug}`}>{title}</Link></h2>
                    {excerpt && <p className="post-excerpt">{excerpt}</p>}
                    <div className="post-meta">
                      <time>{date}</time>
                      <Link to={`/blog/${slug}`} className="read-more">Read More →</Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}