import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './LeadCapture.css'

const SERVICE_BY_PATH = {
  '/ceramic-coating':     'Ceramic Coating',
  '/pricing':             'Full Detail',
  '/interior-detailing':  'Interior Detail',
  '/paint-correction':    'Paint Correction',
  '/fleet':               'Fleet Services',
  '/services':            'Auto Detailing',
}

const HEADLINE_BY_PATH = {
  '/ceramic-coating':    'Protect your paint — get a ceramic quote',
  '/pricing':            'Not sure which package? We\'ll help.',
  '/interior-detailing': 'Deep clean quote — fast & free',
  '/paint-correction':   'Restore your paint — free estimate',
  '/fleet':              'Fleet pricing — let\'s talk numbers',
}

const SUPPRESS_KEY = 'lc_suppress'
const SUPPRESS_DAYS = 7

function isSuppressed() {
  try {
    const exp = localStorage.getItem(SUPPRESS_KEY)
    if (!exp) return false
    return Date.now() < parseInt(exp, 10)
  } catch { return false }
}

function suppress(days) {
  try {
    localStorage.setItem(SUPPRESS_KEY, Date.now() + days * 86400000)
  } catch {}
}

export default function LeadCapture() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const service = SERVICE_BY_PATH[location.pathname] || 'Auto Detailing'
  const headline = HEADLINE_BY_PATH[location.pathname] || 'Get a free quote in 60 seconds'

  useEffect(() => {
    if (isSuppressed()) return

    let timer
    let scrollFired = false

    const show = () => {
      if (!visible) setVisible(true)
    }

    timer = setTimeout(show, 10000)

    const onScroll = () => {
      if (scrollFired) return
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (pct > 0.5) {
        scrollFired = true
        clearTimeout(timer)
        show()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [location.pathname])

  useEffect(() => {
    setVisible(false)
    setMinimized(false)
    setStatus('idle')
    setName('')
    setPhone('')
  }, [location.pathname])

  const dismiss = () => {
    setVisible(false)
    suppress(SUPPRESS_DAYS)
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service,
          source: `website_popup_${location.pathname.replace(/\//g, '') || 'home'}`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        suppress(30)
        setTimeout(() => setVisible(false), 4000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div className={`lc-wrap${minimized ? ' lc-mini' : ''}`}>
      <div className="lc-card">
        <div className="lc-header">
          <div className="lc-pulse" />
          <span className="lc-tag">Free Quote</span>
          <button className="lc-min" onClick={() => setMinimized(m => !m)} aria-label="Toggle">
            {minimized ? '▲' : '▼'}
          </button>
          <button className="lc-close" onClick={dismiss} aria-label="Close">✕</button>
        </div>

        {!minimized && (
          status === 'success' ? (
            <div className="lc-success">
              <div className="lc-check">✓</div>
              <p>Got it! We'll call you within the hour.</p>
              <span>Check your texts for confirmation.</span>
            </div>
          ) : (
            <>
              <p className="lc-headline">{headline}</p>
              <form className="lc-form" onSubmit={submit}>
                <input
                  className="lc-input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
                <input
                  className="lc-input"
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  autoComplete="tel"
                />
                <button className="lc-btn" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Get My Free Quote →'}
                </button>
                {status === 'error' && <p className="lc-err">Something went wrong — call us at (346) 452-9991</p>}
              </form>
              <p className="lc-fine">No spam. We'll call or text you only about your quote.</p>
            </>
          )
        )}
      </div>
    </div>
  )
}
