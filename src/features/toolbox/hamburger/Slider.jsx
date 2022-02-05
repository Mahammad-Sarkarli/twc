// @ts-nocheck
import React from 'react'
import styles from './hamburger.module.css'
import { useSelector } from 'react-redux'
import { selectFooterLinkById } from './../../footer/footerSlice'
import icon from './assets/img/menu-x-icon.svg'
import sliderTwc from './../../components/common/assets/svg/navigation-slider.svg'
import RoundedButton from './../buttons/RoundedButton'

const Slider = ({ classData, handleSliderClick, conditionView }) => {
  const contactData = useSelector((state) => selectFooterLinkById(state, 'id4'))


  return (
    <div
      className={`slider ${conditionView ? conditionView : classData}`}
      style={{ overflowY: 'hidden', position: 'fixed!important', top: '0' }}
    >
      <img
        src={icon}
        alt="slider-menu icon"
        className={`qodef-valiance-svg-close ${styles.right}`}
        onClick={handleSliderClick}
      />
      <img
        src={sliderTwc}
        alt="think wise company slider navigation svg logo"
        width="1200px"
        style={{
          transform: 'rotate(90deg)',
          position: 'absolute',
          left: '-275px',
          top: '150px',
        }}
      />

      <p className={`text-upper text-white ${styles.slider_paragraph}`}>
        BİZNESİNİZİ TWC İLƏ YÜKSƏLDİN
      </p>
      <h2 className={`${styles.header_text}`}>Think Wise Consulting</h2>
      <p className={`${styles.twc_difference}`}>
        Peşəkar komandamızla TWC sizə uğurlu biznesinizi qurmağa <br /> və
        inkişaf etdirməyə imkan verir.
      </p>

      <RoundedButton />

      <div
        className="absolute"
        style={{
          bottom: '75px',
        }}
      >
        <h2 className={`${styles.list_item_slider_header}`}>
          {contactData.header}
        </h2>
        <ul>
          {contactData.headerItems.map((item, index) => {
            return (
              <li className={`${styles.list_item_slider}`} key={index}>
                <a
                  href={
                    index === 0
                      ? 'mailto:info@thinkwise.az'
                      : index === 1
                      ? 'tel:+994 50 447 10 90'
                      : 'tel:+994 12 488 68 19'
                  }
                  className="text-decoration-none text-white"
                >
                  {item}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Slider
