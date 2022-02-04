// @ts-nocheck
import React, { useState } from 'react'
import icon from './svg/arrow.svg'

const RoundedButton = ({ positioned }) => {
  const [animation1, setAnimation] = useState('')
  const [animation2, setAnimation2] = useState('')

  const enableAnimation = () => {
    setAnimation('animated-css-able-1')
    setAnimation2('animated-css-able-2')
  }

  const disableAnimation = () => {
    setAnimation('')
    setAnimation2('')
  }

  return (
    <button
      className="rounded relative"
      style={{ top: positioned }}
      onMouseEnter={enableAnimation}
      onMouseLeave={disableAnimation}
    >
      <img
        src={icon}
        alt="rounded button inside arrow right icon"
        className={`opacity-1 ${animation1}`}
      />

      <img
        src={icon}
        alt="rounded button inside arrow right icon"
        className={`opacity-0 ${animation2}`}
      />
    </button>
  )
}

export default RoundedButton
