import React from 'react'
import styles from './form.module.css'
import imageLogo from './assets/img/logo.png'
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="d-flex">
      <section className={`${styles.form_side}`}>
        <div className={`${styles.form_logo}`}>
          <Link to="/">
     
            <img src={blackThinkWiseLogo} alt="" />
          </Link>
        </div>
        <div className={`${styles.form_group}`}>
          <p className={`${styles.form_title}`}>TWC-yə xoş gəlmisiniz!</p>
          <form
            action=""
            className={`${styles.form_input} d-flex direction-column`}
          >
            <label className={`${styles.input_label}`} htmlFor="">
              Ad və Soyad*
            </label>
            <input type="text" placeholder="Ad və soyadınızı daxil edin" />
            <label className={`${styles.input_label}`} htmlFor="">
              Email*
            </label>
            <input type="text" placeholder="Email ünvanınızı daxil edin" />
            <label className={`${styles.input_label}`} htmlFor="">
              Telefon*
            </label>
            <input type="text" placeholder="Telefon nömrənizi qeyd edin" />
            <label className={`${styles.input_label}`} htmlFor="">
              Şifrə*
            </label>
            <input type="text" placeholder="Şifrə təyin edin" />
            <label className={`${styles.password_requirement_text}`} htmlFor="">
              Minimum 8 simvoldan ibarət olmalıdır
            </label>
            <button className={`${styles.form_submit_button}`}>
              Qeydiyyatdan keç
            </button>
            <div className={`${styles.form_question}`}>
              Hesabınız var?
              <Link to="/login" className={`${styles.form_switch_link}`}>
                {' '}
                Daxil ol
              </Link>
            </div>
          </form>
        </div>
      </section>
      <section className={`${styles.image_side} d-flex justify-center`}>
        <img src={imageLogo} alt="" />
      </section>
    </div>
  )
}

export default SignUp
