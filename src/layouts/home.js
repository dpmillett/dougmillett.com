import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Footer from '../components/Footer'
import './home.css'

const TemplateWrapper = ({ children }) => (
  <div className="site site-home">
    <Helmet
      title="Doug Millett"
      meta={[
        {
          name: 'description',
          content: 'Doug Millett, Digital Product Manager',
        },
      ]}
    />
    <Header />
    <Hero>
      <h1>Doug Millett</h1>
      <h2>Product Manager</h2>
    </Hero>
    <main className="site-main">
      <Container>{children()}</Container>
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
