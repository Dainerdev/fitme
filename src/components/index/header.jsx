import React from 'react'
import style from '../../styles/index/header.module.css'

function Header() {
  return (    
    <nav>
      <ul>
        <li><a href='#fitme' className={style.brand}>Fit<span>.Me</span></a></li>
        <div className={style.signButtons}>
          <li><a href='/signin' className={style.signIn}>Iniciar Sesión</a></li>
          <li><a href='/signup' className={style.getStarted}>Regístrate!</a></li> 
        </div>
      </ul>
    </nav>
  )
}

export default Header;