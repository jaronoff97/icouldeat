import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import FilterBox from '../components/FilterBox'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    this.state = {
        minRating: 0, 
        cuisines:posts.reduce((acc, r)=>acc.concat(r.node.frontmatter.cuisine.split(',')),[])
    };
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    var cuisines = posts.reduce((acc, r)=>acc.concat(r.node.frontmatter.cuisine.split(',')),[])

    var onRatingChange = (data) => {
      this.setState(prevState => ({
            ...prevState,
            minRating: data
      }))
    }

    var onCuisineChange = (data) => {
      this.setState(prevState => ({
            ...prevState,
            cuisines: data
      }))
    }

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <FilterBox 
          onChange={onRatingChange} 
          cuisines={cuisines} 
          currentCuisines={this.state.cuisines}
          onCuisineChange={onCuisineChange}/>
        {posts.map(({ node }) => {
          if(!this.state.cuisines.some(r=> node.frontmatter.cuisine.split(',').includes(r))) {
            return
          }
          if (this.state.minRating>parseInt(node.frontmatter.rating)) {
            return
          }
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <img src={ require('.'+node.fields.slug+'picture.jpg') } />
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            cuisine
            rating
          }
        }
      }
    }
  }
`
