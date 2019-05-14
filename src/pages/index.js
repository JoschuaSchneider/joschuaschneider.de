import React, { useRef } from "react"
import { Link, graphql } from "gatsby"

import { useSpring, animated, config } from "react-spring"

import Layout from "../components/layout/index-layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import IOWrapper from "../components/animation/IOWrapper"
import FluidList from "../components/animation/FluidList"

function IndexPage({ data }) {
  const { title, aboutme, mystack } = data.indexJson

  console.log(mystack)

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
          <div className="col-auto left-col p-4 text-right">
            <h4>{aboutme.title}</h4>
            <animated.div style={imageProps}>
              <Img
                className="profile-image"
                fluid={aboutme.image.childImageSharp.fluid}
              />
            </animated.div>
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
          <div
            className="col p-4 pb-5 content"
            dangerouslySetInnerHTML={{
              __html: aboutme.content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
        <IOWrapper className="row mt-4 mb-4">
          <div className="col-auto left-col p-4 text-right">
            <h4>{mystack.title}</h4>
          </div>
          <div
            className="col p-4 content"
            dangerouslySetInnerHTML={{
              __html: mystack.content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
        {mystack.categories.map(category => (
          <IOWrapper className="row mb-5">
            <div className="col-auto left-col p-4 text-right text-muted">
              <h6>{category.title}</h6>
            </div>
            <div className="col content brand-list">
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
