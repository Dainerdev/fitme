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
              <h1 className={style.info}> Regístrate <span>Ya</span>!</h1>
            </div>
            <div className={style.inputs}>
              <div className={style.section} id="names">
                <div className={style.inputGroup}>
                  <label htmlFor="name">Nombre(s):</label>
                  <input className={style.field} id='name' type="text" placeholder="Nombre(s)" />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="lastNames">Apellido(s):</label>
                  <input className={style.field} id='lastNames' type="text" placeholder="Apellido(s)" />
                </div>
              </div>
              <div className={style.section} id="emails">
                <div className={style.inputGroup}>
                  <label htmlFor="email">Correo electrónico:</label>
                  <input className={style.field} id='email' type="email" placeholder="Correo electrónico" />
                </div>                              
              </div>
              <div className={style.section} id="passwords">
                <div className={style.inputGroup}>
                  <label htmlFor="password">Contraseña:</label>
                  <input className={style.field} id='password' type="password" placeholder="Contraseña" />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="passConf">Confirmar contraseña:</label>
                  <input className={style.field} id='passConf' type="password" placeholder="Confirmar contraseña" />
                </div>
              </div>
              <div className={style.section} id="info">
                <div className={style.inputGroup}>
                  <label htmlFor="birth">Fecha de nacimiento:</label>
                  <input className={style.field} type="date" placeholder="Fecha de nacimiento" id="birth" />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="gender">Género:</label>
                  <select className={style.field} name="gender" id="gender">
                    <option value="select">Seleccione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                  </select>
                </div>
              </div>
              <div className={style.section} id="body">
                <div className={style.inputGroup}>
                  <label htmlFor="weight">Peso (Kg):</label>
                  <input className={style.field} id='weight' type="number" placeholder="Peso (Kg)" />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="height">Altura (cm):</label>
                  <input className={style.field} id='height' type="number" placeholder="Altura (cm)" />                
                </div>
              </div>
              <div className={style.section} id="section5">
                <div className={style.inputGroup}>
                  <label htmlFor="goal">Objetivo:</label>
                  <select className={style.field} name="goal" id="goal">
                    <option value="select">Seleccione</option>
                    <option value="weightLoss">Perder peso</option>
                    <option value="muscleGain">Ganar músculo</option>
                    <option value="maintain">Mantener peso</option>
                  </select>
                </div>
              </div>
              <div className={style.section} id="notes">
                <div className={style.inputGroup}>
                  <label htmlFor="note">Nota:</label>
                  <textarea className={style.field} name="note" id="note" placeholder='Me comprometo conmigo mismo(a)...'></textarea>
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