import React from 'react'
import styles from './PerfilRecrutador.module.css'

export default function PerfilRecrutador() {
  
  return (
    <div className={styles.cadastro_container}>
      <h1>É NOVO POR AQUI?</h1>
      <h3>Crie uma conta e tenha acesso</h3>
      <h3>a milhares de vagas de empregos</h3>
      <form action="/pagina-processa-dados-do-form" method="post">
        <div>
          <input type="nome" id="nome" placeholder='Digite seu email...' />
        </div>
        <br></br>
        <div className={styles.button1}>
          <button className={styles.btn} type="submit">Candidato</button>
        </div>
        <div className={styles.button2}>
          <button className={styles.btn} type="submit">Recrutador</button>
        </div>
      </form>
    </div>

  )
}