import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import Thumbnail22 from '../thumbnails/Thumbnail22.png'
import Thumbnail05 from '../thumbnails/Thumbnail05.png'
import Thumbnail18 from '../thumbnails/Thumbnail18.png'
import Thumbnail31 from '../thumbnails/Thumbnail31.png'

export default function Hero() {
  const textRef = useRef(null)
  const heroRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const [isVisible, setIsVisible] = useState(false)

  // Parallax on mouse move
  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // Entry animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  // Magnetic text effect
  useEffect(() => {
    const el = textRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * 0.05
      const dy = (e.clientY - cy) * 0.05
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const onLeave = () => {
      el.style.transform = 'translate(0, 0)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`} id="home" ref={heroRef}>
      {/* Noise overlay */}
      <div className="hero-noise" />

      {/* Floating decorative thumbnails */}
      <div
        className="hero-floater floater-1"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
      >
        <img
          src={Thumbnail22}
          alt="thumbnail"
        />
      </div>

      <div
        className="hero-floater floater-2"
        style={{ transform: `translate(${-mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      >
        <img
          src={Thumbnail05}
          alt="thumbnail"
        />
      </div>

      <div
        className="hero-floater floater-3"
        style={{ transform: `translate(${mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)` }}
      >
        <img
          src={Thumbnail18}
          alt="thumbnail"
        />
      </div>

      <div
        className="hero-floater floater-4"
        style={{ transform: `translate(${-mousePos.x * 0.9}px, ${-mousePos.y * 0.9}px)` }}
      >
        <img
          src={Thumbnail31}
          alt="thumbnail"
        />
      </div>

      {/* Center content */}
      <div className="hero-content container">
        <div className="hero-tag">
          <span className="tag-dot" />
          YouTube Thumbnail Designer
        </div>

        <h1 className="hero-title" ref={textRef}>
          <span className="title-line">
            <span className="title-word">I Make</span>
          </span>
          <span className="title-line italic-line">
            <span className="title-word italic">Thumbnails</span>
          </span>
          <span className="title-line">
            <span className="title-word">that Earn Clicks</span>
          </span>
        </h1>

        <p className="hero-sub">
          Bold visuals. Magnetic clicks. Thumbnails engineered to stop the scroll
          and turn casual viewers into loyal subscribers.
        </p>

        <div className="hero-actions">
          <a
            href="#work"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#work').scrollIntoView({ behavior: 'smooth' }) }}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://wa.me/918790622884"
            target="_blank"
            className="btn-secondary"
          >
            Message Me
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Thumbnails Made</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">24h</span>
            <span className="stat-label">Delivery Time</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Revisions</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee">
        <div className="marquee-track">
          {Array(6).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <span>Thumbnails</span>
              <span className="marquee-dot">★</span>
              <span>Click-Through Rate</span>
              <span className="marquee-dot">★</span>
              <span>Bold Designs</span>
              <span className="marquee-dot">★</span>
              <span>Viral Content</span>
              <span className="marquee-dot">★</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}