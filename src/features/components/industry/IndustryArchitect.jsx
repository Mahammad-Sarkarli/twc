// @ts-nocheck
import React from 'react'
import styles from './industry.module.css'
import IndustryHeaderDash from './IndustryHeaderDash'
import headerImagePng from './assets/img/tikinti-header.png'
const IndustryArchitect = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={'SƏNAYE/TİKİNTİ'} isHeader={true} />
      <section
        className={`${styles.header_image_container} d-flex justify-center`}
      >
        <img src={headerImagePng} alt="" />
      </section>
    </div>
  )
}

export default IndustryArchitect
