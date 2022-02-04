/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react'
import styles from './about.module.css'

import AboutHeaderDash from './AboutHeaderDash'
import aboutmain from './assets/img/aboutheader.png'

const About = () => {
  return (
    <div>
      <AboutHeaderDash img={aboutmain} />
    </div>
  )
}

export default About
