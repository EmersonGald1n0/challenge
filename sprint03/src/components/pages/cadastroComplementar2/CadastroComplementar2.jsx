import React from 'react'
import styles from './CadastroComplementar2.module.css'
import { Link } from 'react-router-dom'
import foto_user from '../../../img/foto_user.png'

export default function CadastroComplementar() {

  return (
    <div className={styles.cadastro_container}>
      <h1>EMAIL</h1>
      <form action="/pagina-processa-dados-do-form" method="post">
          <div className="wrapper">
            <h1>Tipo de Email...</h1>
            <div className="form-group">
              <input className="radio" name="pessoal" id="radio1" type='radio' checked />
              <label forHtml="radio1">Pessoal</label>
            </div>
            <div className="form-group">
              <input class="radio" name="corp" id="radio2" type='radio' />
              <label forHtml="radio2">Corporativo</label>
            </div>
          </div>
          <div className={styles.processo}>
            <div className="wrapper">
              <h1>Status do Email...</h1>
              <div className="form-group">
                <input className="radio" name="ativo" id="radio1" type='radio' checked />
                <label forHtml="radio1">Ativo</label>
              </div>
              <div className="form-group">
                <input class="radio" name="inativo" id="radio2" type='radio' />
                <label forHtml="radio2">Inativo</label>
              </div>
              <div className="wrapper">
                <h1>TELEFONE</h1>
                <div className="form-group">
                  <input className="radio" name="pessoal" id="radio1" type='radio' checked />
                  <label forHtml="radio1">Pessoal</label>
                </div>
                <div className="form-group">
                  <input class="radio" name="comercial" id="radio2" type='radio' />
                  <label forHtml="radio2">Comercial</label>
                </div>
              </div>
              <div className="wrapper">
                <h1>Status do Telefone...</h1>
                <div className="form-group">
                  <input className="radio" name="pessoal" id="radio1" type='radio' checked />
                  <label forHtml="radio1">Ativo</label>
                </div>
                <div className="form-group">
                  <input class="radio" name="comercial" id="radio2" type='radio' />
                  <label forHtml="radio2">Inativo</label>
                </div>
                <div>
                  <h1>ENDEREÇO</h1>
                  <input type="nome" id="nome" placeholder='Nome do Endereço...' />
                  <input type = "text" placeholder = "Nº Endereço…" />
                  <input type = "text" placeholder = "Nº CEP…" />
                  <input type = "text" placeholder = "Complemento…" />
                  <input type = "text" placeholder = "Ponto de Referência…" />
                  <input type = "text" placeholder = "Bairro…" />
                  <input type = "text" placeholder = "Zona do Bairro…" />
                  <input type = "text" placeholder = "Cidade…" />
                  <input type = "text" placeholder = "Código IBGE…" />
                  <input type = "text" placeholder = "Nº DDD…" />
                  <input type = "text" placeholder = "Estado…" />
                  <input type = "text" placeholder = "Sigla do Estado…" />
                </div>
              </div>
          </div>
        </div>

        <div className={styles.button1}>
          <Link to="/">
            <button className={styles.btn} type="submit">Salvar Informações</button>
          </Link>
          <Link to="/perfilRecrutador">
            <button className={styles.btn} type="submit">Voltar para o perfil</button>
          </Link>
        </div>
      </form>
    </div>

  )
}