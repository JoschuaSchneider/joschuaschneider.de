import React, { useRef } from "react"

import { useTransition, useChain, animated } from "react-spring"

export default function FluidList({
  waitOnRef = null,
  waitRatio = [0, 0.5],
  className = "",
  children,
}) {
  const transitionsRef = useRef()
  const transitions = useTransition(children, child => child.key, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    trail: 50,
    ref: transitionsRef,
  })

  useChain(waitOnRef ? [waitOnRef, transitionsRef] : [transitionsRef], waitOnRef ? waitRatio : undefined)

  return (
    <ul
      className={`fluid-list ${className}`}
      style={{ listStyle: "none", margin: 0, padding: 0 }}
    >
      {transitions.map(({ item, key, props }) => (
        <animated.li key={key} style={props}>
          {item}
        </animated.li>
      ))}
    </ul>
  )
}
