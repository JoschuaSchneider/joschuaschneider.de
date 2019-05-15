import React from "react"

import { Link } from 'gatsby'

import SEO from "../components/seo"

function NotFoundPage({ data }) {
  return (
    <>
      <SEO title="404 Not found" />
      <div className="container not-found">
        <h3>404 | ARCHIVES INCOMPLETE</h3>
        <p>Try going <Link to="/">back to the home page.</Link></p>
        <div className="row">
          <div className="col-12">
            <img src="/archives_incomplete.gif" width="100%" alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
