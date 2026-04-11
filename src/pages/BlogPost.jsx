import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { getBlogPost } from '../lib/contentful'
import './BlogPost.css'

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields
      if (file?.contentType?.startsWith('image/')) {
        return <img src={`https:${file.url}`} alt={title || ''} className="post-content-img" loading="lazy" />
      }
      return null
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getBlogPost(slug)
      .then(p => {
        if (!p) { setError('Post not found.'); return; }
        setPost(p)
        document.title = `${p.fields.title} | LabShine Blog`
      })
      .catch(() => setError('Could not load this post.'))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <main className="post-page">
      <div className="post-loading"><div className="spinner" /><p>Loading...</p></div>
    </main>
  )

  if (error) return (
    <main className="post-page">
      <div className="post-error">
        <h2>{error}</h2>
        <Link to="/blog" className="btn-primary">← Back to Blog</Link>
      </div>
    </main>
  )

  const { title, featuredImage, publishedDate, category, body, excerpt } = post.fields
  const imgUrl = featuredImage?.fields?.file?.url
  const date = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date(post.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
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

      {imgUrl && (
        <div className="post-featured-img">
          <img src={`https:${imgUrl}`} alt={title} />
        </div>
      )}

      <div className="container post-content-wrap">
        <div className="post-content">
          {body ? documentToReactComponents(body, richTextOptions) : <p>No content available.</p>}
        </div>

        <div className="post-sidebar">
          <div className="sidebar-card">
            <h4>Book a Detail</h4>
            <p>Ready to get your vehicle looking its best? Book online today.</p>
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="btn-primary">
              Book Now
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
  )
}