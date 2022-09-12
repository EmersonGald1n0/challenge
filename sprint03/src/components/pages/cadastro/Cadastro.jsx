import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cadastro.module.css'

export default function Cadastro() {

  return (
    <div className={styles.cadastro_container}>

      <h1>É NOVO POR AQUI?</h1>

      <h3>Crie uma conta e tenha acesso</h3>
      <h3>a milhares de vagas de empregos</h3>

      <br />

      <h3>Como gostaria de se <span>cadastrar?</span></h3>

      <form action="/pagina-processa-dados-do-form" method="post">


        <div className={styles.button1}>
          <Link to="/cadastroCandidato">
            <button className={styles.btn} type="submit">Candidato</button>
          </Link>
        </div>

        <div className={styles.button2}>
          <Link to="/cadastroRecrutador">
            <button className={styles.btn} type="submit">Recrutador</button>
          </Link>
        </div>
      </form>
    </div>

  )
}