import React, { useState } from 'react'
import styles from './form.module.css'
import imageLogo from './assets/img/logo.png'
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const [error,setError]= useState('')

  const canSubmit = [fullName,email,password,number].every(Boolean) ; 

  const validateEmail= (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

  const handleEmail = (paramsEmail) => {
      if(!validateEmail(email)) {
          setError('please set valid email!')
      }else {
        setEmail(paramsEmail)
      }
  }




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
            <label className={`${styles.input_label}`} htmlFor="fullname">
              Ad və Soyad*
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Ad və soyadınızı daxil edin"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label className={`${styles.input_label}`} htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              placeholder="Email ünvanınızı daxil edin"
              required
              name="email"
              id="email"
              value={email}
              autoComplete={email}
              onChange={(e) => handleEmail(e.target.value)}

            />
            <label className={`${styles.input_label}`} htmlFor="number">
              Telefon*
            </label>
            <input
              type="text"
              placeholder="Telefon nömrənizi qeyd edin"
              name="number"
              id="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label className={`${styles.input_label}`} htmlFor="password">
              Şifrə*
            </label>
            <input
              type="password"
              placeholder="Şifrə təyin edin"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className={`${styles.password_requirement_text}`}
              htmlFor="password"
            >
              Minimum 8 simvoldan ibarət olmalıdır
            </label>
            <button disabled={!canSubmit} className={`${styles.form_submit_button}`}>
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
