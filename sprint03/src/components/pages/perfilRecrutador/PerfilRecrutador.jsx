import React from 'react'
import styles from './PerfilRecrutador.module.css'
import { Link } from 'react-router-dom'
import foto_user from '../../../img/foto_user.png'

export default function PerfilRecrutador() {

  return (
    <div className={styles.cadastro_container}>

      <h1>Bem-Vindo <span>RECRUTADOR</span></h1>
      <div className={styles.foto_user}>
        <figcaption>
          <img className={styles.foto_user} src={foto_user} alt="Foto Usuário" />
        </figcaption>
      </div>
      <h3>Confira se os seus dados estão corretos e tenha acesso a milhares de candidatos…</h3>

      <form action="/pagina-processa-dados-do-form" method="post">
        <p className={styles.sinal}>Aqui ficará salvo as informações do perfil do recrutador após realizar o cadastro.
        </p>
        <p className={styles.sinal}>
          Todas as informações preenchidas no cadastro ajudarão no compartilhamento por vagas de emprego.
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