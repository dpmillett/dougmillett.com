import React from 'react'
import Link from 'gatsby-link'
import Container from '../Container'
import './Header.css'

const navLinks = [
  { path: '/about', title: 'About' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/resume', title: 'Resume' },
  { path: '/contact', title: 'Contact' },
]

const Header = () => (
  <header className="site-header">
    <Container>
      <div className="site-header-inner">
        <h1 className="site-title">
          <Link to="/" className="site-title-link">
            Doug Millett
          </Link>
        </h1>
        <nav className="site-nav">
          {navLinks.map((link, index) => (
            <Link
              to={link.path}
              className="site-nav-link"
              activeClassName="is-active"
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </Container>
  </header>
)

export default Header
