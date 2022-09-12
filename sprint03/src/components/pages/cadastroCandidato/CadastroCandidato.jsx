import React from 'react'
import styles from './CadastroCandidato.module.css'
import { Link } from 'react-router-dom'

export default function Cadastro() {

  return (
    <div className={styles.cadastro_container}>

      <h1>AGORA FALTA POUCO!</h1>
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
          <input type="text" id="mae" placeholder='Digite o nome da sua Mãe...' />
        </div>

        <div>
          <input type="text" id="telefone" placeholder='Digite o seu telefone com DDD...' />
        </div>

        <div>
          <input type="text" id="salario" placeholder='Digite a sua pretensão salarial...' />
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
        <p>*URL temporário no botão, somente para mostrar sua função.</p>

      </form>
    </div>

  )
}