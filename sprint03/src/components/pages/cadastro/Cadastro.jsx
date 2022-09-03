import React from 'react'
import styles from './Cadastro.module.css'

export default function Cadastro() {
  return (
    <div className={styles.cadastro_container}>
      <h1>É NOVO POR AQUI?</h1>
      <h3>Crie uma conta e tenha acesso</h3>
      <h3>a milhares vagas de emprego</h3>
      <br></br>
      <form action="/pagina-processa-dados-do-form" method="get">
        <div>
          <label for="mail">Digite seu email: </label>
          <input type="email" id="mail" placeholder='Email' />
        </div>
        <br></br>
        <div class="button">
          <button className={styles.btn} type="submit">Entrar</button>
        </div>
      </form>
    </div>

  )
}