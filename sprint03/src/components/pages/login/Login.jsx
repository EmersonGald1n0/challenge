import React from 'react'
import styles from './LinkButton.module.css'

export default function Login() {

  return (
    <div className={styles.login}>
      <h1>BEM VINDO</h1>

      <h2>Acesse o seu perfil</h2>
      <br></br>

      <form action="/pagina-processa-dados-do-form" method="post">
        <div>
          <input type="email" id="mail" placeholder='Digite seu login...' />
        </div>
        <br></br>

        <div>
          <input type="text" id="name" placeholder='Digite a sua senha...' />
        </div>

        <br></br>
        <div>
          <button className={styles.btn} type="submit">Entrar</button>
        </div>
      </form>

    </div>

  )
}