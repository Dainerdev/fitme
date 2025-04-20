import React from 'react'
import style from '../../styles/sign/signup.module.css'

function SignUp() {
  return (
    <div className={style.background}>
      <div className={style.container}>      
        <div className={style.content}>
          <form className={style.signupForm}>
            <div>              
              <h1 className={style.info}> Sign <span>Up</span></h1>
            </div>
            <div className={style.inputs}>
              <div className={style.section} id="section1">
                <input className={style.field} type="text" placeholder="Names" />
                <input className={style.field} type="text" placeholder="Last names" />
              </div>
              <div className={style.section} id="section2">
                <input className={style.field} type="email" placeholder="Email" />
                <input className={style.field} type="password" placeholder="Password" />              
              </div>
              <div className={style.section} id="section3">
                <div className={style.inputGroup}>
                  <label htmlFor="birth">Birth Date</label>
                  <input className={style.field} type="text" placeholder="Birth date" id='birth' />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="gender">Gender</label>
                  <select className={style.field} name="gender" id="gender">
                    <option value="select">Seleccione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                  </select>
                </div>
              </div>
              <div className={style.section} id="section4">
                <input className={style.field} type="number" placeholder="Weight (Kg)" />
                <input className={style.field} type="number" placeholder="Height (cm)" />                
              </div>
              <div className={style.section} id="section5">
                <div className={style.inputGroup}>
                  <label htmlFor="goal">Meta</label>
                  <textarea className={style.field} name="goal" id="goal"></textarea>
                </div>
              </div>              
            </div>
            <p className={style.log}>You're already logged? <a href="#">Log In</a></p>
            <div className={style.buttonGroup}>
              <button className={style.logInBtn} type="submit">Sign Up</button>
              <button className={style.cancelBtn} type="submit">Cancel</button>
            </div>
            <p className={style.brand}>Fit<span>.Me</span></p>
          </form>  
        </div>
      </div>        
    </div>
  )
}

export default SignUp