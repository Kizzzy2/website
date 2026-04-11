import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Ceramic Coating', href: '/#ceramic' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Areas', href: '/#areas' },
  { label: 'Fleet', href: '/#fleet' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="LabShine Auto Detailing" />
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className={location.pathname === link.href ? 'active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener" className="nav-book-btn">
              Book Now
            </a>
          </li>
          <li>
            <a href="tel:3464529991" className="nav-phone">
              📞 (346) 452-9991
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}