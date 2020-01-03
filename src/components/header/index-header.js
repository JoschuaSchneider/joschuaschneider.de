import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"

import {
  useSpring,
  useTransition,
  useChain,
  animated,
  config,
} from "react-spring"

import "./index-header.scss"

const menuItems = [
  { key: "home", text: "HOME", path: "" },
  { key: "projects", text: "PROJECTS", path: "/projects" },
  { key: "contact", text: "CONTACT", path: "/contact" },
].reverse()

function IndexHeader({ siteTitle, location }) {
  const [hover, setHover] = useState(false)

  const springRef = useRef()
  const headerProps = useSpring({
    opacity: 1,
    top: 0,
    from: { opacity: 0, top: -100 },
    ref: springRef,
  })

  const transitionRef = useRef()
  const transitions = useTransition(menuItems, item => item.key, {
    from: {
      opacity: 0,
      marginRight: 0,
    },
    enter: {
      opacity: 1,
      marginRight: 15,
    },
    trail: 50,
    ref: transitionRef,
  })

  useChain([springRef, transitionRef], [0, 0.3])

  return (
    <animated.header className="index-header" style={headerProps}>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="typo-title"
            onMouseEnter={e => setHover(true)}
            onMouseLeave={e => setHover(false)}
          >
            <div>
              <span className="emph">J</span>oschua
            </div>
            <div>
              <span className="emph">S</span>chneider
            </div>
          </div>
        </Link>
        <nav>
          <ul>
            {transitions
              .map(({ item, key, props }) => (
                <li key={key} style={props} >
                  <Link to={item.path} activeClassName="active">
                    {item.text}
                  </Link>
                </li>
              ))
              .reverse()}
          </ul>
        </nav>
      </div>
    </animated.header>
  )
}

IndexHeader.propTypes = {
  siteTitle: PropTypes.string,
}

IndexHeader.defaultProps = {
  siteTitle: ``,
}

export default IndexHeader
