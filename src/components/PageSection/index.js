import React from 'react'
import './PageSection.css'

function PageSection({ children, title, ...rest }) {
  return (
    <section className="page-section" {...rest}>
      {title && <h2 className="page-section-title">{title}</h2>}
      {children}
    </section>
  )
}

export default PageSection
