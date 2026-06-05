import React, { useState, useEffect, useRef } from 'react'
import './Work.css'
import Thumbnail01 from '../thumbnails/Thumbnail01.png'
import Thumbnail05 from '../thumbnails/Thumbnail05.png'
import Thumbnail06 from '../thumbnails/Thumbnail06.png'
import Thumbnail09 from '../thumbnails/Thumbnail09.png'
import Thumbnail02 from '../thumbnails/Thumbnail02.png'
import Thumbnail03 from '../thumbnails/Thumbnail03.jpg'
import Thumbnail04 from '../thumbnails/Thumbnail04.png'
import Thumbnail07 from '../thumbnails/Thumbnail07.png'
import Thumbnail08 from '../thumbnails/Thumbnail08.png'
import Thumbnail10 from '../thumbnails/Thumbnail10.png'

const NICHES = ['All', 'Gaming', 'Tech', 'Finance']

const THUMBNAILS = [
  {
    id: 1,
    niche: 'Finance',
    img: Thumbnail01,
  },
  {
    id: 2,
    niche: 'Finance',
    img: Thumbnail02,
  },
  {
    id: 3,
    niche: 'Gaming',
    img: Thumbnail03,
  },
  {
    id: 4,
    niche: 'Gaming',
    img: Thumbnail04,
  },
  {
    id: 5,
    niche: 'Gaming',
    img: Thumbnail05,
  },
  {
    id: 6,
    niche: 'Tech',
    img: Thumbnail06,
  },
  {
    id: 7,
    niche: 'Tech',
    img: Thumbnail07,
  },
  {
    id: 8,
    niche: 'Tech',
    img: Thumbnail08,
  },
  {
    id: 9,
    niche: 'Tech',
    img: Thumbnail10,
  },
]

export default function Work() {
  const [activeNiche, setActiveNiche] = useState('All')
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const filtered = activeNiche === 'All'
    ? THUMBNAILS
    : THUMBNAILS.filter(t => t.niche === activeNiche)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="work" id="work" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-eyebrow">My Work</span>
          <h2 className="section-title">
            Thumbnails That<br />
            <em>Stop the Scroll</em>
          </h2>
          <p className="section-sub">
            Crafted for every niche each thumbnail is designed with one goal:
            to get clicked.
          </p>
        </div>

        {/* Filter Pills */}
        <div className={`filter-row ${visible ? 'visible' : ''}`}>
          {NICHES.map((niche) => (
            <button
              key={niche}
              className={`filter-pill ${activeNiche === niche ? 'active' : ''}`}
              onClick={() => setActiveNiche(niche)}
            >
              {niche}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="thumbnails-grid">
          {filtered.map((item, i) => (
            <div
              className={`thumb-card ${visible ? 'visible' : ''}`}
              key={item.id}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="thumb-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="thumb-overlay">
                  <div className="thumb-niche-badge">{item.niche}</div>
                  <div className="thumb-play">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 5.5l7 4.5-7 4.5V5.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/*<div className="thumb-info">
                <span className="thumb-niche">{item.niche}</span>
                <p className="thumb-title">{item.title}</p>
              </div>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}