import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alex Turner',
    role: 'Gaming YouTuber • 280K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
    quote: 'My CTR went from 4.2% to 9.1% after switching to these thumbnails. That\'s literally doubled my views on every video without changing anything else. The best investment I\'ve made for my channel.',
    channel: '@AlexPlaysGames',
    stat: '+116% CTR',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Finance Creator • 95K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=120&h=120&fit=crop&q=80',
    quote: 'I was skeptical at first — how much difference could a thumbnail make? After my first video with a custom design hit 200K views (my previous average was 30K), I became a lifetime client.',
    channel: '@PriyaMoneyTalks',
    stat: '200K views',
  },
  {
    id: 3,
    name: 'Jordan Mills',
    role: 'Tech Reviewer • 540K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80',
    quote: 'Delivery within 24 hours, unlimited revisions, and a designer who actually understands what makes people click. Communication is top-tier. Won\'t work with anyone else for my thumbnails.',
    channel: '@JordanTechReviews',
    stat: '24hr delivery',
  },
  {
    id: 4,
    name: 'Camille Dubois',
    role: 'Travel & Lifestyle • 180K Subscribers',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
    quote: 'Every thumbnail feels custom and thoughtful — not just slapping big text on a photo. My brand looks cohesive now and my audience engagement has been incredible since the redesign.',
    channel: '@CamilleExplores',
    stat: '3× engagement',
  },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9L4.4 12l.7-4L2.2 5.2l4-.6L8 1z"/>
  </svg>
)

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i) => {
    clearInterval(intervalRef.current)
    setActive(i)
  }

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">
            Creators Who<br />
            <em>Trust the Process</em>
          </h2>
          <p className="section-sub">
            Don't take my word for it — here's what YouTube creators are saying.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className={`featured-testimonial ${visible ? 'visible' : ''}`}>
          <div className="featured-quote-mark">"</div>
          <blockquote className="featured-quote">
            {TESTIMONIALS[active].quote}
          </blockquote>
          <div className="featured-author">
            <img
              src={TESTIMONIALS[active].avatar}
              alt={TESTIMONIALS[active].name}
              className="featured-avatar"
            />
            <div className="featured-meta">
              <strong>{TESTIMONIALS[active].name}</strong>
              <span>{TESTIMONIALS[active].role}</span>
              <div className="stars">
                {Array(5).fill(null).map((_, i) => <StarIcon key={i} />)}
              </div>
            </div>
            <div className="featured-stat">
              <span className="stat-badge">{TESTIMONIALS[active].stat}</span>
              <span className="stat-channel">{TESTIMONIALS[active].channel}</span>
            </div>
          </div>

          {/* Progress dots */}
          <div className="testimonial-nav">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`nav-dot ${i === active ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`test-card ${visible ? 'visible' : ''} ${i === active ? 'active' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => goTo(i)}
            >
              <div className="test-stars">
                {Array(5).fill(null).map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="test-quote">"{t.quote.substring(0, 100)}..."</p>
              <div className="test-author">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.channel}</span>
                </div>
                <div className="test-stat-badge">{t.stat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}