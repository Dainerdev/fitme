import React from 'react'
import style from '../../styles/sign/signIn.module.css'
import { useNavigate } from 'react-router-dom'

function SignIn() {

  const navigate = useNavigate();

  const cancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className={style.background}>
      <div className={style.container}>      
        <div className={style.content}>
          <form className={style.loginForm}>
            <div>              
              <h1 className={style.info}> Log <span>In</span></h1>
            </div>
            <div className={style.inputs}>
              <input className={style.field} type="text" placeholder="User" />
              <input className={style.field} type="password" placeholder="Password" />
            </div>
            <p className={style.notLog}>You're not logged? <a href="/signup">Sign Up</a></p>
            <div className={style.buttonGroup}>
              <button className={style.logInBtn} type="submit">Sign In</button>
              <button className={style.cancelBtn} onClick={cancel} type="submit">Cancel</button>
            </div>
            <p className={style.brand}>Fit<span>.Me</span></p>
          </form>  
        </div>
      </div>
    </div>
  )
}

export default SignIn;

