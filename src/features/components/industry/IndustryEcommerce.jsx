// @ts-nocheck
import React from 'react'
import styles from './industry.module.css'
import IndustryHeaderDash from './IndustryHeaderDash'
import headerImagePng from './assets/img/eticaret-header.png'
const IndustryEcommerce = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={"SƏNAYE/E-TİCARƏT"} isHeader={true} />
        <section className={`${styles.header_image_container} d-flex justify-center`}>
          <img src={headerImagePng} alt="" />
      </section>  

    </div>
  )
}

export default IndustryEcommerce
