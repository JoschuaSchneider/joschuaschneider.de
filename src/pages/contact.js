import React, { useRef } from "react"
import { Link, graphql } from "gatsby"

import { useSpring, animated, config } from "react-spring"

import Layout from "../components/layout/index-layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import IOWrapper from "../components/animation/IOWrapper"
import FluidList from "../components/animation/FluidList"

function ContactPage({ data }) {
  const { title, content } = data.contactJson

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
        title="Imprint"
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
            <h4>{title}</h4>
          </div>
          <div
            className="col p-4 content"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
      </div>
    </div>
  )
}

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default ContactPage
