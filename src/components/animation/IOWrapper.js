import React from "react"

import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

export default function IOWrapper({ className = "", children }) {
  const [ref, inView] = useInView()

  const props = useSpring({
    opacity: inView ? 1 : 0,
    from: {
      opacity: 0,
    },
    delay: 200
  })

  return (
    <animated.div ref={ref} className={`io-wrapper ${className}`} style={props}>
      {children}
    </animated.div>
  )
}
