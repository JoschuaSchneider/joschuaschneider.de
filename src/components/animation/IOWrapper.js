import React from "react"

import "intersection-observer"

import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

export default function IOWrapper({ className = "", children, ...otherProps }) {
  const [ref, inView] = useInView()

  const props = useSpring({
    opacity: inView ? 1 : 0,
    from: {
      opacity: 0,
    },
    delay: 150,
  })

  return (
    <animated.div
      ref={ref}
      className={`io-wrapper ${className}`}
      {...otherProps}
      style={props}
    >
      {children}
    </animated.div>
  )
}
