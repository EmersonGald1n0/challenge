import React from 'react'
import styles from './CadastroRecrutador.module.css'
import { Link } from 'react-router-dom'

export default function Cadastro() {

  return (
    <div className={styles.cadastro_container}>

      <h1>AGORA FALTA POUCO!</h1>
      <h3> Preencha os dados abaixo e finalize o seu cadastro como Recrutador...</h3>

      <form action="/pagina-processa-dados-do-form" method="post">

        <div>
          <input text="text" id="nome" placeholder='Digite o seu nome...' />
        </div>

        <div>
          <input text="text" id="nascimento" placeholder='Digite a sua data de nascimento...' />
        </div>

        <div>
          <input text="text" id="cpf" placeholder='Digite o seu CPF...' />
        </div>

        <div>
          <input text="text" id="empresa" placeholder='Digite o nome da empresa...' />
        </div>

        <div>
          <input text="text" id="cnpj" placeholder='Digite o CNPJ...' />
        </div>

        <div>
          <input text="text" id="cargo" placeholder='Digite o seu cargo...' />
        </div>

        <div>
          <input text="text" id="email" placeholder='Digite o seu email...' />
        </div>

        <div>
          <input type="text" id="senha" placeholder='Digite a sua senha...' />
        </div>

        <div className={styles.button1}>
          <Link to="/perfilRecrutador">
            <button className={styles.btn} type="submit">Cadastrar</button>
          </Link>
        </div>
        <p>*URL temporário no botão, somente para mostrar sua função.</p>
      </form>
    </div>

  )
}