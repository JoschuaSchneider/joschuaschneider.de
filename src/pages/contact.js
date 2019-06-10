import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import IOWrapper from "../components/animation/IOWrapper"

function ContactPage({ data }) {
  const { title, content } = data.contactJson

  return (
    <div>
      <SEO
        title="Contact"
        keywords={[
          `joschuaschneider`,
          `developer`,
          `react`,
          `javascript`,
          `portfolio`,
          `homepage`,
          `contact`
        ]}
      />
      <div className="container">
        <IOWrapper className="row">
          <div className="col-12 col-lg-auto left-col p-4">
            <h4>{title}</h4>
          </div>
          <div
            className="col-12 col-lg p-4 content hovered"
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
