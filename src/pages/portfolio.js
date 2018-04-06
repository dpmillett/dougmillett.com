import React, { Component } from 'react'
import Portfolio from '../components/Portfolio'
import { Grid, GridItem } from '../components/Grid'
import portfolioItems, { portfolioCategories } from '../data/portfolio'
import './portfolio.css'

class PortfolioPage extends Component {
  state = {
    filterBy: 'All',
  }

  handleFilterClick = event => {
    this.setState({ filterBy: event.target.textContent })
  }

  render() {
    const { filterBy } = this.state
    const items =
      filterBy !== 'All'
        ? portfolioItems.filter(item => item.category === filterBy)
        : portfolioItems
    return (
      <div className="page page-portfolio">
        <div className="portfolio-filters">
          <button
            className="portfolio-filter"
            onClick={this.handleFilterClick}
            {...filterBy === 'All' && { 'aria-selected': true }}
          >
            All
          </button>
          {portfolioCategories.map((category, index) => (
            <button
              className="portfolio-filter"
              key={index}
              onClick={this.handleFilterClick}
              {...category === filterBy && { 'aria-selected': true }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="portfolio-items">
          <Grid>
            {items.map((item, index) => (
              <GridItem key={index}>
                <Portfolio item={item} />
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}

export default PortfolioPage
