import React from 'react'
import styles from './CadastroCandidato.module.css'
import { Link } from 'react-router-dom'
import cadcand from '../../../img/cadcand.png'

export default function Cadastro() {

  return (
    <div className={styles.cadastro_container}>

        <div className={styles.img}>
          <img className={styles.img1} src={cadcand} alt="contato"  />
        </div>
      
      <h3>Preencha os dados abaixo e finalize o seu cadastro como Candidato...</h3>

      <form action="/pagina-processa-dados-do-form" method="post">

        <div>
          <input type="text" id="nome" placeholder='Digite o seu nome...' />
        </div>

        <div>
          <input type="text" id="nascimento" placeholder='Digite a sua data de nascimento...' />
        </div>

        <div>
          <input type="text" id="cpf" placeholder='Digite o seu CPF...' />
        </div>

        <div>
          <input type="text" id="sexo" placeholder='Digite o seu sexo...' />
        </div>

        <div>
          <input type="text" id="civil" placeholder='Digite o seu estado civil...' />
        </div>


        <div>
          <input type="text" id="telefone" placeholder='Digite o seu telefone...' />
        </div>

        <div>
          <input type="text" id="email" placeholder='Digite o seu email...' />
        </div>

        <div>
          <input type="text" id="senha" placeholder='Digite a sua senha...' />
        </div>

        <div className={styles.button1}>
          <Link to="/perfilCandidato">
            <button className={styles.btn} type="submit">Cadastrar</button>
          </Link>
        </div>
      </form>
    </div>

  )
}