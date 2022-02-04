// @ts-nocheck
import React from 'react'
import styles from './industry.module.css'
import IndustryHeaderDash from './IndustryHeaderDash'
import headerImagePng from './assets/img/tme-header.png'
const IndustryTechMediaAndFun = () => {
  return (
    <div>
      {' '}
       <IndustryHeaderDash headerText={"SƏNAYE/TEXNOLOGİYA, MEDİA VƏ ƏYLƏNCƏ"} isHeader={true} />
               <section className={`${styles.header_image_container} d-flex justify-center`}>
        <img src={headerImagePng} className="header-img-industry" alt="asjdhasidjlas"  />
      </section>  
    </div>
  )
}

export default IndustryTechMediaAndFun
