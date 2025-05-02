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
              <h1 className={style.info}> Iniciar <span>Sesión</span></h1>
            </div>
            <div className={style.inputs}>
              <input className={style.field} type="email" placeholder="Correo electrónico" />
              <input className={style.field} type="password" placeholder="Contraseña" />
            </div>
            <p className={style.notLog}>No estás registrado? <a href="/signup">Regístrate!</a></p>
            <div className={style.buttonGroup}>
              <button className={style.logInBtn} type="submit">Iniciar Sesión</button>
              <button className={style.cancelBtn} onClick={cancel} type="submit">Cancelar</button>
            </div>
            <p className={style.brand}>Fit<span>.Me</span></p>
          </form>  
        </div>
      </div>
    </div>
  )
}

export default SignIn;

