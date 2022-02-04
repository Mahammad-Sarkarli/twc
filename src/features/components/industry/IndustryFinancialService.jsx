/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react'
import styles from './industry.module.css'
import IndustryHeaderDash from './IndustryHeaderDash'
import headerImagePng from './assets/img/maliyyeservisleri-header.png'
const IndustryFinancialService = () => {
  return (
    <div>
      <IndustryHeaderDash
        headerText={'SƏNAYE/MALİYYƏ SERVİSLƏRİ'}
        isHeader={true}
      />
              <section className={`${styles.header_image_container} d-flex justify-center`}>
          <img src={headerImagePng} alt="" />
      </section>  
    </div>
  )
}

export default IndustryFinancialService
