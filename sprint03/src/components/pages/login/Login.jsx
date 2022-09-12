import React from 'react'
import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div className={styles.login}>

      <h1>BEM VINDO</h1>
      <h2>Acesse o seu perfil</h2>

      <form action="/pagina-processa-dados-do-form" method="post">

        <div>
          <input className={styles.email} type="email" id="email" placeholder='Digite seu login...' />
        </div>

        <div>
          <input className={styles.nome} type="text" id="nome" placeholder='Digite a sua senha...' />
        </div>

        <div>
          <Link to="/perfilCandidato">
            <button className={styles.btn} type="submit">Entrar</button>
          </Link>
        </div>
        <p>*URL temporário no botão, somente para mostrar sua função.</p>
        <div>
          <Link to="/senha">
            <p className={styles.teste}>Esqueceu sua senha?</p>
          </Link>
        </div>

      </form>
    </div>

  )
}