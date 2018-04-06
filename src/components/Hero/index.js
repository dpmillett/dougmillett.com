import React from 'react'
import img from './hero.jpg'
import './Hero.css'

function Hero({ children }) {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={img} alt="Doug Millett" />
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">{children}</div>
      </div>
    </section>
  )
}

export default Hero
