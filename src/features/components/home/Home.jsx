// @ts-nocheck
import React from 'react'
import styles from './home.module.css'
import { useSelector } from 'react-redux'
// import { selectAllServices } from './homeSlice'

const Home = () => {
  // const allServices = useSelector(selectAllServices)
  // const allServices = useSelector(selectAllServices)
  return (
    <main className={`${styles.main_padding}`}>
      <div className={`${styles.services}`}>
        <div className={`${styles.services_describtion}`}></div>
        <div className={`${styles.services_list_container}`}></div>
      </div>
    </main>
  )
}

export default Home
