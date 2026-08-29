import React, { useState, useEffect, useRef } from 'react'
import './Work.css'
import Thumbnail01 from '../thumbnails/Thumbnail01.png'
import Thumbnail02 from '../thumbnails/Thumbnail02.png'
import Thumbnail03 from '../thumbnails/Thumbnail03.jpg'
import Thumbnail04 from '../thumbnails/Thumbnail04.png'
import Thumbnail05 from '../thumbnails/Thumbnail05.png'
import Thumbnail06 from '../thumbnails/Thumbnail06.png'
import Thumbnail07 from '../thumbnails/Thumbnail07.png'
import Thumbnail08 from '../thumbnails/Thumbnail08.png'
import Thumbnail09 from '../thumbnails/Thumbnail09.png'
import Thumbnail10 from '../thumbnails/Thumbnail10.png'
import Thumbnail11 from '../thumbnails/Thumbnail11.png'
import Thumbnail12 from '../thumbnails/Thumbnail12.png'
import Thumbnail13 from '../thumbnails/Thumbnail13.png'
import Thumbnail14 from '../thumbnails/Thumbnail14.png'
import Thumbnail15 from '../thumbnails/Thumbnail15.png'
import Thumbnail16 from '../thumbnails/Thumbnail16.png'
import Thumbnail17 from '../thumbnails/Thumbnail17.png'
import Thumbnail18 from '../thumbnails/Thumbnail18.png'
import Thumbnail19 from '../thumbnails/Thumbnail19.png'
import Thumbnail20 from '../thumbnails/Thumbnail20.png'
import Thumbnail21 from '../thumbnails/Thumbnail21.png'
import Thumbnail22 from '../thumbnails/Thumbnail22.png'
import Thumbnail23 from '../thumbnails/Thumbnail23.png'
import Thumbnail24 from '../thumbnails/Thumbnail24.png'
import Thumbnail25 from '../thumbnails/Thumbnail25.png'
import Thumbnail26 from '../thumbnails/Thumbnail26.png'
import Thumbnail27 from '../thumbnails/Thumbnail27.png'
import Thumbnail28 from '../thumbnails/Thumbnail28.png'
import Thumbnail29 from '../thumbnails/Thumbnail29.png'
import Thumbnail30 from '../thumbnails/Thumbnail30.png'
import Thumbnail31 from '../thumbnails/Thumbnail31.png'
import Thumbnail32 from '../thumbnails/Thumbnail32.png'
import Thumbnail33 from '../thumbnails/Thumbnail33.png'
import Thumbnail34 from '../thumbnails/Thumbnail34.png'
import Thumbnail35 from '../thumbnails/Thumbnail35.png'

const NICHES = ['Gaming', 'Tech', 'Finance', 'Other']

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
    niche: 'Other',
    img: Thumbnail06,
  },
  {
    id: 7,
    niche: 'Gaming',
    img: Thumbnail07,
  },
  {
    id: 8,
    niche: 'Other',
    img: Thumbnail08,
  },
  {
    id: 9,
    niche: 'Other',
    img: Thumbnail09,
  },
  {
    id: 10,
    niche: 'Tech',
    img: Thumbnail10,
  },
  {
    id: 11,
    niche: 'Tech',
    img: Thumbnail11,
  },
  {
    id: 12,
    niche: 'Tech',
    img: Thumbnail12,
  },
  {
    id: 13,
    niche: 'Finance',
    img: Thumbnail13,
  },
  {
    id: 14,
    niche: 'Tech',
    img: Thumbnail14,
  },
  {
    id: 15,
    niche: 'Other',
    img: Thumbnail15,
  },
  {
    id: 16,
    niche: 'Tech',
    img: Thumbnail16,
  },
  {
    id: 17,
    niche: 'Other',
    img: Thumbnail17,
  },
  {
    id: 18,
    niche: 'Tech',
    img: Thumbnail18,
  },
  {
    id: 19,
    niche: 'Finance',
    img: Thumbnail19,
  },
  {
    id: 20,
    niche: 'Finance',
    img: Thumbnail20,
  },
  {
    id: 21,
    niche: 'Tech',
    img: Thumbnail21,
  },
  {
    id: 22,
    niche: 'Other',
    img: Thumbnail22,
  },
  {
    id: 23,
    niche: 'Finance',
    img: Thumbnail23,
  },
  {
    id: 24,
    niche: 'Other',
    img: Thumbnail24,
  },
  {
    id: 25,
    niche: 'Gaming',
    img: Thumbnail25,
  },
  {
    id: 26,
    niche: 'Finance',
    img: Thumbnail26,
  },
  {
    id: 27,
    niche: 'Finance',
    img: Thumbnail27,
  },
  {
    id: 28,
    niche: 'Tech',
    img: Thumbnail28,
  },
  {
    id: 29,
    niche: 'Tech',
    img: Thumbnail29,
  },
  {
    id: 30,
    niche: 'Other',
    img: Thumbnail30,
  },
  {
    id: 31,
    niche: 'Finance',
    img: Thumbnail31,
  },
  {
    id: 32,
    niche: 'Other',
    img: Thumbnail32,
  },
  {
    id: 33,
    niche: 'Other',
    img: Thumbnail33,
  },
  {
    id: 34,
    niche: 'Other',
    img: Thumbnail34,
  },
  {
    id: 35,
    niche: 'Finance',
    img: Thumbnail35,
  },
]

export default function Work() {
  const [activeNiche, setActiveNiche] = useState('Gaming')
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  const filtered = THUMBNAILS.filter(
  t => t.niche === activeNiche
  )

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