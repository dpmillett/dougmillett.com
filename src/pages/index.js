import React from 'react'
import Link from 'gatsby-link'
import PageSection from '../components/PageSection'
import Button from '../components/Button'
import './index.css'

const IndexPage = () => (
  <div className="page page-home">
    <PageSection title="Who I Am">
      <p>Info about Doug Millett</p>
      <p>
        <Button>More About Me</Button>
      </p>
    </PageSection>
    <PageSection title="How I Work">
      <p>Info about how doug works</p>
    </PageSection>
  </div>
)

export default IndexPage
