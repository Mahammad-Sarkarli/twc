import React from "react";
import styles from "./form.module.css";
import imageLogo from "./assets/img/logo.png";
import blackThinkWiseLogo from "./../common/assets/svg/navigation-black-logo.svg";

const SignUp = () => {
  return (
    <div className='d-flex'>
      <section className={`${styles.form_side}`}>
        <div className={`${styles.form_logo}`}>
          <img src={blackThinkWiseLogo} alt='' />
        </div>
        <div className={`${styles.form_group}`}>
          <p className={`${styles.form_title}`}>TWC-yə xoş gəlmisiniz!</p>
          <form
            action=''
            className={`${styles.form_input} d-flex direction-column`}
          >
            <label className={`${styles.input_label}`} htmlFor=''>
              Email*
            </label>
            <input type='text' placeholder='Email ünvanınızı daxil edin' />

            <label className={`${styles.input_label}`} htmlFor=''>
              Şifrə*
            </label>
            <input type='text' placeholder='Şifrə təyin edin' />

            <div className={`${styles.login_features} d-flex justify-between`}>
              <div className={`${styles.checkbox_input} d-flex align-center`}>
                <input type='checkbox' />
                <p className={`${styles.checkbox_label}`}>Məni xatırla</p>
              </div>
              <p className={`${styles.forgetten_password_link}`}>
                Şifrəni unutdun?
              </p>
            </div>

            <button className={`${styles.form_submit_button}`}>Daxil ol</button>
            <div className={`${styles.form_question}`}>
              Hesabınız yoxdur? 
              <span className={`${styles.form_switch_link}`}>
                &nbsp; Qeydiyyatdan keç
              </span>
            </div>
          </form>
        </div>
      </section>
      <section className={`${styles.image_side} d-flex justify-center`}>
        <img src={imageLogo} alt='' />
      </section>
    </div>
  );
};

export default SignUp;
