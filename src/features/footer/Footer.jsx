// @ts-nocheck
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllFooterLinks } from './footerSlice'
import styles from './footer.module.css'
import RoundedButton from '../toolbox/buttons/RoundedButton'

const Footer = () => {
  const allFooterData = useSelector(selectAllFooterLinks)

  const renderedMenu = allFooterData.map((item) => {
    return (
      <div>
        {
          <div key={item.id}>
            <p
              className={`${styles.margin_bottom_paragraph} ${styles.list_item_header}`}
            >
              {item.header}
            </p>
            {
              <ul>
                {item.headerItems.map((linkItem, index) => {
                  return (
                    <li className={`${styles.list_item_footer}`} key={index}>
                      {linkItem}
                    </li>
                  )
                })}
              </ul>
            }
          </div>
        }
      </div>
    )
  })

  return (
    <div className={styles.footer_height}>
      <div className={styles.upper_content}>
        <div
          className={`d-flex justify-between ${styles.width_footer_links} relative`}
        >
          <h2 className={styles.footer_header}>
            Uğura gedən <br />
            yolda TWC ilə
          </h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="absolute"
            style={{ right: '125px' }}
          />
          <RoundedButton positioned="40px" />
        </div>

        <div
          className={`d-flex justify-between ${styles.margin_top_content} ${styles.width_footer_links}`}
        >
          {renderedMenu}
        </div>
      </div>
      <p className={styles.footer_end}>&copy; 2021 Think Wise Consulting MMC</p>
    </div>
  )
}

export default Footer
