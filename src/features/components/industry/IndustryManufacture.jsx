// @ts-nocheck
import React from 'react'
import styles from './industry.module.css'
import IndustryHeaderDash from './IndustryHeaderDash'
import headerImagePng from './assets/img/istehsalat-header.png'
const IndustryManufacture = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={'SƏNAYE/İSTEHSALAT'} isHeader={true} />
              <section className={`${styles.header_image_container} d-flex justify-center`}>
         <img src={headerImagePng} className="header-img-industry" alt="asjdhasidjlas"  />
      </section>  
    </div>
  )
}

export default IndustryManufacture
