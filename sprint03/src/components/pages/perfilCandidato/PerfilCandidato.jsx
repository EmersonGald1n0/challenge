import React from 'react'
import styles from './PerfilCandidato.module.css'
import { Link } from 'react-router-dom'
import foto_user from '../../../img/foto_user.png'

export default function PerfilCandidato() {

  return (
    <div className={styles.cadastro_container}>

      <h1>Bem-Vindo <span>CANDIDATO</span></h1>
      <div className={styles.foto_user}>
        <figcaption>
          <img className={styles.foto_user} src={foto_user} alt="Foto Usuário" />
        </figcaption>
      </div>
      <h3>Confira se os seus dados estão corretos e participe dos nossos processos seletivos…</h3>
      <form action="/pagina-processa-dados-do-form" method="post">
        <p className={styles.sinal}>Aqui ficará salvo as informações do perfil do candidato após realizar o cadastro.
        </p>
        <p className={styles.sinal}>
          Todas as informações preenchidas no cadastro ajudarão na busca por vagas de emprego.
        </p>

        <div className={styles.button1}>
          <Link to="/">
            <button className={styles.btn} type="submit">Voltar para HOME</button>
          </Link>
        </div>

      </form>
    </div>

  )
}