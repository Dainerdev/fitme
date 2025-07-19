import React from 'react'
import style from '../../styles/index/header.module.css'

function Header() {
  return (    
    <nav className={style.navigation}>
      <ul className={style.bar}>
        <li className={style.list}><a href='#fitme' className={`${style.brand} ${style.item}`}>Fit<span>.Me</span></a></li>
        <div className={style.signButtons}>
          <li className={style.list}><a href='/signin' className={`${style.signIn} ${style.item}`}>Iniciar Sesión</a></li>
          <li className={style.list}><a href='/signup' className={`${style.getStarted} ${style.item}`}>Regístrate!</a></li>
        </div>
      </ul>
    </nav>
  )
}

export default Header;