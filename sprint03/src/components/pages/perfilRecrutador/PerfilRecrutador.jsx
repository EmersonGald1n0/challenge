import React from 'react'
import styles from './PerfilRecrutador.module.css'
import { Link } from 'react-router-dom'
import perfilCand from '../../../img/perfilCand.png'

export default function PerfilRecrutador() {

  return (
    <div className={styles.cadastro_container}>
      <h1>Olá, <span>Patricia</span></h1>
      <div>
        <img className={styles.img} src={perfilCand} alt="" />
      </div>
      <Link to="/cadastroVagas">
            <button className={styles.btn1} type="submit">Publicar Vagas</button>
      </Link>
      <Link to="/filtroCandidato">
            <button className={styles.btn1} type="submit">Filtrar Candidatos</button>
      </Link>
      <h3>Dados <span>Empresa</span></h3>
      <br />
      <form action="/pagina-processa-dados-do-form" method="post">
        <div className={styles.empresa}>
          <input type="nome" id="nome" placeholder='Nome da Empresa' />
          <input type="nome" id="nome" placeholder='Nº CNPJ' />
          <input type="nome" id="nome" placeholder='Código da Empresa' />
          <input type="text" placeholder='Descrição do Cargo...'/>
        </div>
        <div className={styles.linha} />
        <div className={styles.processo}>
          <br />
          <br />
          <h1>Processo <span>Seletivo</span></h1>
          <br />
          <br />
          <label forHtml="data">Data da Entrevista: </label>
          <input type="date" name="data" id="data"/>
          <label forHtml="data">Data do Início: </label>
          <input type="date" name="data" id="data"/>
          <label forHtml="data">Data do Término: </label>
          <input type="date" name="data" id="data"/>
          <div className={styles.linha} />
          <div className="wrapper">
            <br />
            <br />
            <h1>Status Processo <span>Seletivo</span></h1>
            <div className={styles.form_group}>
              <input className="radio" name="pessoal" id="radio1" type='radio' checked />
              <label forHtml="radio1">Iniciado</label>
              <input class="radio" name="corp" id="radio2" type='radio' />
              <label forHtml="radio2">Finalizado</label>
            </div>
            <div className={styles.linha} />
          </div>
          <div>
            <br />
            <br />
            <h1>Status <span>Aprovação</span></h1>
            <div className={styles.form_group}>
              <input className="radio" name="pessoal" id="radio1" type='radio' checked />
              <label forHtml="radio1">Aprovado</label>
              <input class="radio" name="corp" id="radio2" type='radio' />
              <label forHtml="radio2">Reprovado</label>
              <br />
              <br />
            </div>
          </div>
          <div>
            <textarea name="desc" placeholder='Descrição do Processo Seletivo…' cols="40" rows="10"></textarea>
          </div>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.button1}>
          <Link to="/">
                <button className={styles.btn} type="submit">Salvar Informações</button>
          </Link>
          <Link to="/cadastroComplementar2">
            <button className={styles.btn1} type="submit">Dados Complementares</button>
          </Link>
        </div>
      </form>
    </div>

  )
}