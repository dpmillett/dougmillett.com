import React from 'react'
import './Grid.css'

export function Grid({ children }) {
  return <div className="grid">{children}</div>
}

export function GridItem({ children, ...rest }) {
  return (
    <div className="grid-item" {...rest}>
      {children}
    </div>
  )
}
