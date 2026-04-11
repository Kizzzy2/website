import { Link } from 'react-router-dom'
import './Footer.css'
import img from '../lib/images'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <img src={img.logo} alt="LabShine Auto Detailing" className="footer-logo" />
          </Link>
          <p className="footer-tagline">"Your Vehicle. Elevated."</p>
          <div className="footer-contact">
            <a href="tel:3464529991">📞 (346) 452-9991</a>
            <a href="mailto:info@labshineautodetailing.com">✉ info@labshineautodetailing.com</a>
            <span>📍 Houston, TX (Mobile — We Come to You)</span>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">All Services</Link></li>
            <li><Link to="/ceramic-coating">Ceramic Coating</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/fleet">Fleet Detailing</Link></li>
            <li><a href="https://app.squareup.com/appointments/book/labshine" target="_blank" rel="noopener">Book Appointment</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/areas">Service Areas</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Areas */}
        <div className="footer-col">
          <h4>Top Areas</h4>
          <ul>
            {['Houston','Cypress','Katy','Sugar Land','The Woodlands','Pearland','Spring','Friendswood'].map(city => (
              <li key={city}><Link to="/areas">{city}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} LabShine Auto Detailing. All rights reserved.</span>
          <span>Houston's Mobile Detailing Experts</span>
        </div>
      </div>
    </footer>
  )
}
