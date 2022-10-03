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
      
      <h3>Aqui você irá <span>redefinir a sua Senha...</span></h3>

      <form action="/pagina-processa-dados-do-form" method="post">

        <div>
          <input type="nome" id="nome" placeholder='Digite o seu login...' />
        </div>

        <div>
          <input type="nome" id="nome" placeholder='Digite a sua senha...' />
        </div>

        <div>
          <input type="nome" id="nome" placeholder='Digite novamente a sua senha...' />
        </div>

        <div>
          <input type="nome" id="nome" placeholder='Digite alguma dica de senha...' />
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