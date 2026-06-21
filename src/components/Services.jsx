import React, { useEffect, useRef, useState } from 'react'
import './Services.css'

const SERVICES = [
  {
    id: '01',
    title: 'YouTube Thumbnail Design',
    desc: 'High-converting thumbnails crafted to maximize click-through rates. Each design is A/B-ready and fully custom to your channel\'s identity.',
    features: ['Custom illustration or photography', 'CTR-optimized composition', 'Font & color psychology', 'Multiple variants per thumbnail'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 10.5l7 3.5-7 3.5V10.5z" fill="currentColor"/>
      </svg>
    ),
  },
  /*{
    id: '02',
    title: 'Channel Branding Package',
    desc: 'Consistent visual identity across your channel. Thumbnails, banners, watermarks, and end screens — all unified.',
    features: ['Custom brand palette & fonts', 'Template system', 'Banner + avatar design', 'Thumbnail style guide'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 14c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },*/
  {
    id: '02',
    title: 'Bulk Thumbnail Packs',
    desc: 'Planning ahead? Get a pack of thumbnails at a discounted rate. Perfect for creators with consistent upload schedules.',
    features: ['5, 10, or 20 thumbnail packs', 'Best value pricing', 'Priority delivery', 'Dedicated revision rounds'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10V8a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="17" r="2" fill="currentColor"/>
      </svg>
    ),
  },
]

const PROMISES = [
  {
    icon: '⚡',
    label: '24-Hour Delivery',
    desc: 'Your thumbnail lands in your inbox within 24 hours.',
  },
  {
    icon: '🔄',
    label: 'Unlimited Revisions',
    desc: 'Not happy? I\'ll keep refining until it\'s exactly what you envisioned.',
  },
  {
    icon: '🎯',
    label: 'CTR-Focused',
    desc: 'Every design decision is made to maximize your click-through rate.',
  },
  {
    icon: '💬',
    label: '24/7 Communication',
    desc: 'Always reachable. Brief me in the morning, see drafts by evening.',
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">
            What I Do<br />
            <em>Exceptionally Well</em>
          </h2>
          <p className="section-sub">
            Every service is built around one thing: growing your channel.
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <div
              className={`service-card ${visible ? 'visible' : ''}`}
              key={svc.id}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="svc-top">
                <div className="svc-icon">{svc.icon}</div>
                <span className="svc-num">{svc.id}</span>
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <ul className="svc-features">
                {svc.features.map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

        {/* Freelancer Promises */}
        <div className={`promises-section ${visible ? 'visible' : ''}`}>
          <div className="promises-header">
            <h3 className="promises-title">My Freelancer Promises</h3>
            <p>Every project comes with these guarantees</p>
          </div>
          <div className="promises-grid">
            {PROMISES.map((p, i) => (
              <div
                className={`promise-card ${visible ? 'visible' : ''}`}
                key={p.label}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <span className="promise-icon">{p.icon}</span>
                <div>
                  <strong className="promise-label">{p.label}</strong>
                  <p className="promise-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`services-banner ${visible ? 'visible' : ''}`}>
          <div className="banner-left">
            <h3>Ready to make your thumbnails click-worthy?</h3>
            <p>Get a free sample thumbnail. No commitment required.</p>
          </div>
          <a href="https://wa.me/918790622884" target="_blank" className="banner-btn">
            Get Free Sample
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}