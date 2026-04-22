import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import img from '../lib/images'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/areas', label: 'Areas' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src={img.logo} alt="LabShine Auto Detailing" className="logo-img" />
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-link${location.pathname === l.href ? ' active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.squareup.com/appointments/book/labshine"
            target="_blank"
            rel="noopener"
            className="btn-primary nav-book"
          >
            Book Now
          </a>
          <a href="tel:3464529991" className="nav-phone">
            📞 (346) 452-9991
          </a>
        </nav>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
