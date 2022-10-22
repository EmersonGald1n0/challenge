import React from 'react'
import styles from './Senha.module.css'
import { Link } from 'react-router-dom'
import redefinir from '../../../img/redefinir.png' 


export default function Cadastro() {

  return (
    <div className={styles.cadastro_container}>

        <div className={styles.img}>
          <img className={styles.img1} src={redefinir} alt="contato"  />
        </div>
      
      <h1>Aqui você irá <span>redefinir a sua Senha...</span></h1>

      <form action="/pagina-processa-dados-do-form" method="post">

        <div>
          <input type="text" id="nome" placeholder='Email...' />
        </div>

        <div>
          <input type="password" id="nome" placeholder='Nova Senha...' />
        </div>

        <div>
          <input type="password" id="nome" placeholder='Repetir Nova Senha...' />
        </div>

        <div>
          <input type="text" id="nome" placeholder='Dica para Senha...' />
        </div>

        <div className={styles.button1}>
          <Link to="/perfilCandidato">
            <button className={styles.btn} type="submit">Alterar Senha</button>
          </Link>
        </div>
      </form>
    </div>

  )
}