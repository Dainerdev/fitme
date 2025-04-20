import React from 'react'
import image from '../../assets/img/woman-3057294_1280.jpg';
import style from '../../styles/index/info.module.css'

function Info() {
  return (
    <div className={style.content}>
      <div className={style.contentImage}>
        <img className={style.img} src={image} alt="" />
        <div className={style.contentInfo}>
          <h1>Welcome to Fit<span>.Me</span>!</h1>
          <p>Get fit with us! We provide the best way to monitor your progress, workout plans, nutrition plans and more to help you get fit.</p>
          <input type="button" className={style.startBtn} value="Get Started" />
        </div>
      </div>
    </div>
  )
}

export default Info;