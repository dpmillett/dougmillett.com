import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="site">
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
