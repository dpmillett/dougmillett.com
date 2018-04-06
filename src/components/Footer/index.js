import React from 'react'
import Container from '../Container'
import './Footer.css'

const socialNavLinks = [
  { title: 'Facebook', path: 'https://facebook.com' },
  { title: 'GitHub', path: 'https://github.com' },
  { title: 'LinkedIn', path: 'https://linkedin.com' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-inner">
          <p className="copyright">&copy; Doug Millett. All Rights Reserved.</p>
          <nav className="footer-nav social-nav">
            {socialNavLinks.map((link, index) => (
              <a href={link.path} className="footer-nav-link social-nav-link">
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
