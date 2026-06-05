import React from 'react'
import './Footer.css'

const LINKS = {
  Navigate: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    {/*{ label: 'Testimonials', href: '#testimonials' }*/},
  ],
  Connect: [
    { label: 'Instagram', href: '#' },
    { label: 'Upwork', href: '#' },
    { label: 'Fiverr', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
}

const handleNav = (e, href) => {
  e.preventDefault()
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <h2>
                Your viral journey<br />
                <em>starts right here.</em>
              </h2>
              <p>Book a free consultation and get a sample thumbnail.</p>
            </div>
            <div className="footer-cta-actions">
              <a href="https://wa.me/918790622884" className="cta-big-btn">
                Get a Free Sample
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 15L15 3M15 3H7M15 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <span className="cta-note">Usually responds in under 2 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => handleNav(e, '#home')}>
                <span style={{'margin-right':'6px'}}>*</span>Sharath
              </a>
              <p className="footer-tagline">
                Bold thumbnails for creators who are serious about growth.
              </p>
              
            </div>

            {/* Links */}
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group} className="footer-col">
                <h4 className="footer-col-title">{group}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNav(e, link.href)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© 2025 frames. All rights reserved.</p>
            <p className="footer-credit">
              Made with ♥ for YouTube creators
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}