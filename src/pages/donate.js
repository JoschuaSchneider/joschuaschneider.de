import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import IOWrapper from "../components/animation/IOWrapper"

function DonatePage({ data }) {
  const { title, donateLink, content } = data.donateJson

  return (
    <div>
      <SEO
        title={title}
        keywords={[
          `joschuaschneider`,
          `developer`,
          `react`,
          `javascript`,
          `portfolio`,
          `homepage`,
          `donate`
        ]}
      />
      <div className="container">
        <IOWrapper className="row">
          <div
            className="col-12 col-lg p-4 content hovered"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </IOWrapper>
        <IOWrapper className="row">
          <div
            className="col-12 col-lg p-4 content hovered paypal"
          >
            <a href={donateLink}>
              Donate via PayPal
            </a>
          </div>
        </IOWrapper>
      </div>
    </div>
  )
}

export const query = graphql`
  query DonateQuery {
    donateJson {
      title
      donateLink
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default DonatePage
