import style from '../../styles/sign/signIn.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function SignIn() {

  const navigate = useNavigate();

  const cancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const home = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  // Handle form submission
  // Prevent the default form submission behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  // Simulate a login process
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  // Update the state with the input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  return (
        <div className={style.background}>
          <div className={style.container}>      
            <div className={style.content}>
              <form className={style.loginForm} onSubmit={handleSubmit}>
                <div>              
                  <h1 className={style.info}> Iniciar <span>Sesión</span></h1>
                </div>
                <div className={style.inputs}>
                  <input className={style.field} type="email" name='email' value={form.email} onChange={handleChange} placeholder="Correo electrónico" />
                  <input className={style.field} type="password" name='password' value={form.password} onChange={handleChange} placeholder="Contraseña" />
                </div>
                <div className={style.forgot}>
                  <a href="#">¿Olvidaste la contraseña?</a>
                </div>
                <p className={style.notLog}>No estás registrado? <a href="/signup">Regístrate!</a></p>
                <div className={style.buttonGroup}>
                  <button className={style.logInBtn} onClick={home} type="submit">Iniciar Sesión</button>
                  <button className={style.cancelBtn} onClick={cancel} type="button">Cancelar</button>
                </div>
                <p className={style.brand}>Fit<span>.Me</span></p>
              </form>  
            </div>
          </div>
        </div>
  )
}

export default SignIn;

