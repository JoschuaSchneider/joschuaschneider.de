import React from "react"

import { graphql } from "gatsby"

import Img from 'gatsby-image'
import SEO from "../components/seo"

function NotFoundPage({ data }) {
  return (
    <>
      <SEO title="404 Not found" />
      <div className="container not-found">
        <h3>404 | ARCHIVES INCOMPLETE</h3>
        <div className="row">
          <div className="col-12">
            <img src="/archives_incomplete.gif" alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
