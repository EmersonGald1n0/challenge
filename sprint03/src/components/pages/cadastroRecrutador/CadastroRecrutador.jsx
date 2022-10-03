import React from 'react'
import styles from './CadastroRecrutador.module.css'
import { Link } from 'react-router-dom'
import cadrec2 from '../../../img/cadrec2.png' 

export default function Cadastro() {

  return (
    
    <div className={styles.cadastro_container}>

        <div className={styles.img}>
          <img className={styles.img1} src={cadrec2} alt="contato"  />
        </div>
      <h3> Preencha os dados abaixo e finalize o seu cadastro como Recrutador...</h3>

      <form action="/pagina-processa-dados-do-form" method="post">

        <div className="formRight">
          <div>
            <input type="text" id="nome" placeholder='Digite o seu nome...' />
          </div>
          <div className={styles.teste}>
            <h4 className={styles.teste2}>Data de Nascimento</h4>
            <input type="date" id="nascimento" placeholder='Digite a sua data de nascimento...' />
          </div>

          <div>
            <input type="text" id="cpf" placeholder='Digite o seu CPF...' />
          </div>
        

          <div>
            <input type="text" id="empresa" placeholder='Digite o nome da empresa...' />
          </div>
        </div>

        <div>
          <input type="text" id="cnpj" placeholder='Digite o CNPJ...' />
        </div>

        <div>
          <input type="text" id="cargo" placeholder='Digite o seu cargo...' />
        </div>

        <div>
          <input type="text" id="email" placeholder='Digite o seu email...' />
        </div>

        <div>
          <input type="text" id="senha" placeholder='Digite a sua senha...' />
        </div>

        <div className={styles.button1}>
          <Link to="/perfilRecrutador">
            <button className={styles.btn} type="submit">Cadastrar</button>
          </Link>
        </div>
      </form>
    </div>

  )
}