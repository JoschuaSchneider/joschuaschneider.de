import React, { useRef } from "react"
import { graphql } from "gatsby"

import { useSpring, animated } from "react-spring"

import Img from "gatsby-image"
import SEO from "../components/seo"

import IOWrapper from "../components/animation/IOWrapper"
import FluidList from "../components/animation/FluidList"

function IndexPage({ data }) {
  const { aboutme, mystack } = data.indexJson

  const imagePropsRef = useRef()
  const imageProps = useSpring({
    marginTop: 0,
    opacity: 1,
    from: { marginTop: -100, opacity: 0 },
    delay: 300,
    ref: imagePropsRef,
  })

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
        <IOWrapper className="row">
          <div className="col-12 col-lg-auto left-col p-4">
            <h4>{aboutme.title}</h4>
            <div className="row profile-info">
              <animated.div className="col-8 col-lg-12" style={imageProps}>
                <Img
                  className="profile-image"
                  fluid={aboutme.image.childImageSharp.fluid}
                />
              </animated.div>
              <div className="col-4 col-lg-12">
                <a href={`https://twitter.com/${aboutme.twitter}`} className="twitter">
                  @{aboutme.twitter}
                </a>
                <FluidList waitOnRef={imagePropsRef} className="d-flex flex-column mt-2">
                  {aboutme.hashtags.map(tag => (
                    <div className="small text-muted" key={tag.key}>
                      {tag.text}
                    </div>
                  ))}
                </FluidList>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg p-4 content hovered"
            dangerouslySetInnerHTML={{
              __html: aboutme.content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
        <IOWrapper className="row mt-4 mb-4">
          <div className="col-12 col-lg-auto left-col p-4">
            <h4>{mystack.title}</h4>
          </div>
          <div
            className="col-12 col-lg p-4 content hovered"
            dangerouslySetInnerHTML={{
              __html: mystack.content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
        {mystack.categories.map(category => (
          <IOWrapper className="row mb-5" key={category.title}>
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
          </IOWrapper>
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
