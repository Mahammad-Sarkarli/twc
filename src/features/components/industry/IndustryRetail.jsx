// @ts-nocheck
import React from 'react'
import styles from './industry.module.css'
import IndustryHeaderDash from './IndustryHeaderDash'
import headerImagePng from './assets/img/retail-header.png'
const IndustryRetail = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={"SƏNAYE/RETAIL"} isHeader={true} />
              <section className={`${styles.header_image_container} d-flex justify-center`}>
        <img src={headerImagePng} className="header-img-industry" alt="asjdhasidjlas"  />
      </section>  
    </div>
  )
}

export default IndustryRetail
