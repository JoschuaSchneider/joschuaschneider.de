import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { useTransition, animated } from "react-spring"

import Header from "../header/index-header"
import "./index-layout.scss"

function IndexLayout({ location, children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const transitions = useTransition(children, null, {
    from: {
      opacity: 0,
      transform: "translate3d(0,-300px,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0,300px,0)",
    },
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <div className="index-layout">
        {transitions.map(({ item, key, props }) => (
          <animated.main className="main" key={key} style={props}>
            {item}
          </animated.main>
        ))}
        <footer className="container text-muted small">
          <p>Copyright © {new Date().getFullYear()} Joschua Schneider</p>
          <p>
            Source available at my{" "}
            <a href="https://github.com/JoschuaSchneider/joschuaschneider.de">
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
