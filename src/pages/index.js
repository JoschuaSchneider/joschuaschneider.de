import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import SEO from "../components/seo"

function IndexPage({ data }) {
  const { aboutme, mystack } = data.indexJson

  return (
    <div>
      <SEO
        title="Home"
        keywords={[
          `joschuaschneider`,
          `developer`,
          `react`,
          `javascript`,
          `portfolio`,
          `homepage`,
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-auto left-col p-4">
            <h4>{aboutme.title}</h4>
            <div className="row profile-info">
              <div className="col-8 col-lg-12">
                <Img
                  className="profile-image"
                  fluid={aboutme.image.childImageSharp.fluid}
                />
              </div>
              <div className="col-4 col-lg-12">
                <a href={`https://twitter.com/${aboutme.twitter}`} className="twitter">
                  @{aboutme.twitter}
                </a>
                <div className="d-flex flex-column mt-2">
                  {aboutme.hashtags.map(tag => (
                    <div className="small text-muted" key={tag.key}>
                      {tag.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg p-4 content hovered"
            dangerouslySetInnerHTML={{
              __html: aboutme.content.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-12 col-lg-auto left-col p-4">
            <h4>{mystack.title}</h4>
          </div>
          <div
            className="col-12 col-lg p-4 content hovered"
            dangerouslySetInnerHTML={{
              __html: mystack.content.childMarkdownRemark.html,
            }}
          />
        </div>
        {mystack.categories.map(category => (
          <div className="row mb-5 mt-5" key={category.title}>
            <div className="col-12 col-lg-auto left-col p-4 text-muted">
              <h6>{category.title}</h6>
            </div>
            <div className="col-12 col-lg content brand-list">
              {category.brands.map(brand => (
                <div className="brand">
                  <Img fixed={brand.image.childImageSharp.fixed} />
                  <code>{brand.name}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    indexJson {
      title
      aboutme {
        title
        twitter
        image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hashtags {
          key
          text
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      mystack {
        title
        categories {
          title
          brands {
            name
            image {
              childImageSharp {
                fixed(height: 70) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default IndexPage
