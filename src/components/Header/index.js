import React from 'react'
import Link from 'gatsby-link'
import Container from '../Container'

const Header = () => (
  <header className="site-header">
    <Container>
      <h1 className="site-title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          Doug Millett
        </Link>
      </h1>
    </Container>
  </header>
)

export default Header
