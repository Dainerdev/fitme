import React from 'react'
import style from '../../styles/sign/signup.module.css'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate();

  const cancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className={style.background}>
      <div className={style.container}>      
        <div className={style.content}>
          <form className={style.signupForm}>
            <div>              
              <h1 className={style.info}> Regístrate <span>Ya</span></h1>
            </div>
            <div className={style.inputs}>
              <div className={style.section} id="section1">
                <input className={style.field} type="text" placeholder="Nombre(s)" />
                <input className={style.field} type="text" placeholder="Apellido(s)" />
              </div>
              <div className={style.section} id="section2">
                <input className={style.field} type="email" placeholder="Correo electrónico" />
                              
              </div>
              <div className={style.section} id="section3">
                <input className={style.field} type="password" placeholder="Contraseña" />
                <input className={style.field} type="password" placeholder="Confirmar contraseña" />
              </div>
              <div className={style.section} id="section4">
                <div className={style.inputGroup}>
                  <label htmlFor="birth">Fecha de nacimiento</label>
                  <input className={style.field} type="date" placeholder="Fecha de nacimiento" id="birth" />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="gender">Género</label>
                  <select className={style.field} name="gender" id="gender">
                    <option value="select">Seleccione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                  </select>
                </div>
              </div>
              <div className={style.section} id="section4">
                <input className={style.field} type="number" placeholder="Peso (Kg)" />
                <input className={style.field} type="number" placeholder="Altura (cm)" />                
              </div>
              <div className={style.section} id="section5">
                <div className={style.inputGroup}>
                  <label htmlFor="goal">Objetivo</label>
                  <textarea className={style.field} name="goal" id="goal" placeholder='Describe tu objetivo.'></textarea>
                </div>
              </div>              
            </div>
            <p className={style.log}>Ya estás registrado? <a href="/signin">Inicia Sesión</a></p>
            <div className={style.buttonGroup}>
              <button className={style.logInBtn} type="submit">Regístrate</button>
              <button className={style.cancelBtn} onClick={cancel} type="submit">Cancelar</button>
            </div>
            <p className={style.brand}>Fit<span>.Me</span></p>
          </form>  
        </div>
      </div>        
    </div>
  )
}

export default SignUp