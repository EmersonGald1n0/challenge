import React from "react";
import styles from "./CadastroComplementar2.module.css";
import { Link } from "react-router-dom";

export default function CadastroComplementar() {
  return (
    <div className={styles.cadastro_container}>
      <h1>Email</h1>
      <form action="/pagina-processa-dados-do-form" method="post">
        <div className="wrapper">
          <p>
            Tipo de <span>Email...</span>
          </p>
          <div className={styles.form_group}>
            <input
              className="radio"
              name="pessoal"
              id="radio1"
              type="radio"
              checked
            />
            <label forHtml="radio1">Pessoal</label>
          </div>
          <div className={styles.form_group}>
            <input class="radio" name="corp" id="radio2" type="radio" />
            <label className={styles.space} forHtml="radio2">
              Corporativo
            </label>
          </div>
        </div>
        <div className={styles.processo}>
          <div className="wrapper">
            <p>
              Status do <span>Email...</span>
            </p>
            <div className={styles.form_group}>
              <input
                className="radio"
                name="ativo"
                id="radio1"
                type="radio"
                checked
              />
              <label forHtml="radio1">Ativo</label>
            </div>
            <div className={styles.form_group}>
              <input class="radio" name="inativo" id="radio2" type="radio" />
              <label forHtml="radio2">Inativo</label>
            </div>
            <div className={styles.linha} />
            <div className="wrapper">
              <h1>Telefone</h1>
              <div className={styles.form_group}>
                <p>
                  Tipo de <span>Telefone...</span>
                </p>
                <input
                  className="radio"
                  name="pessoal"
                  id="radio1"
                  type="radio"
                  checked
                />
                <label forHtml="radio1">Pessoal</label>
              </div>
              <div className={styles.form_group}>
                <input
                  class="radio"
                  name="comercial"
                  id="radio2"
                  type="radio"
                />
                <label className={styles.space} forHtml="radio2">
                  Comercial
                </label>
              </div>
            </div>
            <div className="wrapper">
              <p>
                Status do <span>Telefone...</span>
              </p>
              <div className={styles.form_group}>
                <input
                  className="radio"
                  name="pessoal"
                  id="radio1"
                  type="radio"
                  checked
                />
                <label forHtml="radio1">Ativo</label>
              </div>
              <div className={styles.form_group}>
                <input
                  class="radio"
                  name="comercial"
                  id="radio2"
                  type="radio"
                />
                <label forHtml="radio2">Inativo</label>
              </div>
              <div className={styles.linha} />
              <div className={styles.dados}>
                <h1>Endere??o</h1>
                <div>
                  <input type="text" id="nome" placeholder="Endere??o..." />
                  <input type="text" placeholder="N?? Endere??o???" />
                  <input type="text" placeholder="N?? CEP???" />
                  <input type="text" placeholder="Complemento???" />
                  <input type="text" placeholder="Ponto de Refer??ncia???" />
                </div>
                <div className={styles.linha} />
                <div>
                  <h1>Bairro</h1>
                  <input type="text" placeholder="Bairro???" />
                  <input type="text" placeholder="Zona do Bairro???" />
                </div>
                <div className={styles.linha} />
                <div>
                  <h1>Cidade</h1>
                  <input type="text" placeholder="Cidade???" />
                  <input type="text" placeholder="C??digo IBGE???" />
                  <input type="text" placeholder="N?? DDD???" />
                  <input type="text" placeholder="Estado???" />
                  <input type="text" placeholder="Sigla do Estado???" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button1}>
          <Link to="/perfilRecrutador">
            <button className={styles.btn1} type="submit">
              Cadastrar
            </button>
          </Link>
          <button className={styles.btn} type="reset">
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}
