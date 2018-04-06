import React from 'react'
import './Portfolio.css'

function Portfolio({ item }) {
  return (
    <div className="portfolio-item">
      <div>{item.name}</div>
    </div>
  )
}

export default Portfolio
