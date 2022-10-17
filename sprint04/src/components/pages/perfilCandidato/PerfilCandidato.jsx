import React from 'react'
import styles from './PerfilCandidato.module.css'
import { Link } from 'react-router-dom'
import perfilRec from '../../../img/perfilRec.png'

export default function PerfilCandidato() {

  return (
    <div className={styles.cadastro_container}>
      <h1>Olá, <span>Fábio</span></h1>
      <div>
        <img className={styles.img} src={perfilRec} alt="foto de perfil" />
      </div>
      <Link to="/visualizaVagas">
            <button className={styles.btn1} type="submit">Vagas de Emprego</button>
      </Link>
      <form action="/pagina-processa-dados-do-form" method="post">
        <div>
          <h3>Dados <span>Candidato</span></h3>
          <br />
          <input type = "text" placeholder = "Nome da Mãe…" />
          <input type = "text" placeholder = "Pretensão Salarial…" />
        </div>
        <div className={styles.linha}></div>
        <div className="wrapper">
          <h3>Status da <span>Escolaridade</span></h3>
          <br />
          <div className={styles.form_group}>
            <input className="radio" name="fundamental" id="radio1" type='radio' checked />
            <label forHtml="radio1">Fundamental</label>
          </div>
          <div className={styles.form_group}>
            <input className="radio" name="medio" id="radio2" type='radio' />
            <label forHtml="radio2">Médio</label>
          </div>
          <div className={styles.form_group}>
            <input className="radio" name="superior" id="radio2" type='radio' />
            <label forHtml="radio3">Superior</label>
            <br />
          </div>
          <div>
            <input type = "text" placeholder = "Nome da Instituição…" />
            <input type = "text" placeholder = "Nome da Graduação…" />
          </div>
          <div className={styles.linha}></div>
          <div className="wrapper">
            <h3>Tipo de <span>Curso</span></h3>
            <br />
            <div className={styles.form_group}>
              <input className="radio" name="presencial" id="radio1" type='radio' checked />
              <label forHtml="radio1">Presencial</label>
            </div>
            <div className={styles.form_group}>
              <input className="radio" name="hibrido" id="radio2" type='radio' />
              <label forHtml="radio2">Híbrido</label>
            </div>
            <div className={styles.form_group}>
              <input className="radio" name="online" id="radio2" type='radio' />
              <label forHtml="radio3">Online</label>
            </div>
            <div className={styles.linha}></div>
          </div>
          <div className="wrapper">
            <h3>Status do <span>Curso</span></h3>
            <br />
            <div className={styles.form_group}>
              <input className="radio" name="completo" id="radio1" type='radio' checked />
              <label forHtml="radio1">Completo</label>
            </div>
            <div className={styles.form_group}>
              <input className="radio" name="incompleto" id="radio2" type='radio' />
              <label forHtml="radio2">Incompleto</label>
              <br />
            </div>
          </div>
          <div>
            
            <textarea name="" id="" cols="30" rows="10" placeholder='Descrição Atividade ExtraCurricular…'></textarea>
          </div>
          <div className={styles.processo}>
            <br />
            <br />
            <label forHtml="data">Data do Início: </label>
            <input type="date" name="data" id="data"/>
            <label forHtml="data">Data do Término: </label>
            <input type="date" name="data" id="data"/>
          </div>
          <div className={styles.linha}></div>
          <div>
            <h3><span>Cursos</span></h3>
            <br />
            <input type = "text" placeholder = "Nome do Curso…" />
            <input type = "text" placeholder = "Sigla do Curso…" />
            <input type = "text" placeholder = "Código do Curso…" />
          </div>
          <div className={styles.processo}>
            <br />
            <br />
            <label forHtml="data">Data do Início: </label>
            <input type="date" name="data" id="data"/>
            <label forHtml="data">Data do Término: </label>
            <input type="date" name="data" id="data"/>
          </div>
          <div className={styles.linha}></div>
          <div className="wrapper">
            <h3>Status do <span>Curso</span></h3>
            <br />
            <div className={styles.form_group}>
              <input className="radio" name="completo" id="radio1" type='radio' checked />
              <label forHtml="radio1">Completo</label>
            </div>
            <div className={styles.form_group}>
              <input className="radio" name="incompleto" id="radio2" type='radio' />
              <label forHtml="radio2">Incompleto</label>
              <br />
            </div>
            <div>
              <h3><span>Habilidades</span></h3>
              <br />
              <input type = "text" placeholder = "Nome da Habilidade…" />
              <input type = "text" placeholder = "Descrição da Habilidade…" />
              <br />
              <br />
            </div>
            <div className={styles.processo}>
              <br />
              <label forHtml="data">Data do Início: </label>
              <input type="date" name="data" id="data"/>
              <label forHtml="data">Data do Término: </label>
              <input type="date" name="data" id="data"/>
            </div>
            <div className={styles.linha}></div>
            <div>
              <h3>Área de <span>Atuação</span></h3>
              <br />
              <input type = "text" placeholder = "Nome da Empresa…" />
              <input type = "text" placeholder = "Nome da Área de Atuação…" />
              <input type = "text" placeholder = "Descrição do Cargo…" />
              <input type = "text" placeholder = "Descrição dos Benefícios…"/>
              <input type = "text" placeholder = "Carga Horária…" />
            </div>
            <div className={styles.linha}></div>
            <div className="wrapper">
              <h3>Tipo de <span>Experiência</span></h3>
              <br />
              <div className={styles.form_group}>
                <input className="radio" name="formal" id="radio1" type='radio' checked />
                <label forHtml="radio1">Formal</label>
              </div>
              <div className={styles.form_group}>
                <input className="radio" name="informal" id="radio2" type='radio' />
                <label forHtml="radio2">Informal</label>
              </div>
              <div className={styles.form_group}>
                <input className="radio" name="estagio" id="radio2" type='radio' />
                <label forHtml="radio2">Estágio</label>
              </div>
              <br />
            </div>
            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder='Descrição da Experiência…'></textarea>
              <br /> 
            </div>
            <div className={styles.processo}>
              <label forHtml="data">Data do Início: </label>
              <input type="date" name="data" id="data"/>
              <label forHtml="data">Data do Término: </label>
              <input type="date" name="data" id="data"/>
            </div>
            <div className={styles.linha}></div>
          </div>
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