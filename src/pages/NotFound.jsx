import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | LabShine Auto Detailing</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Page not found. Return to LabShine Auto Detailing — Houston's premier mobile detailing service." />
      </Helmet>
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        color: 'var(--text)',
      }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--cyan)', margin: 0, lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '16px 0 12px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: 400, marginBottom: 32 }}>
          This page doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" style={{
            background: 'var(--cyan)',
            color: '#000',
            padding: '12px 28px',
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: 'none',
          }}>Go Home</Link>
          <Link to="/pricing" style={{
            border: '1px solid var(--cyan)',
            color: 'var(--cyan)',
            padding: '12px 28px',
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: 'none',
          }}>View Pricing</Link>
        </div>
      </div>
    </>
  )
}
