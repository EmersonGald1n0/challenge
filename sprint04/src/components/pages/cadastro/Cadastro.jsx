import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";
import login3 from "../../../img/login3.png";

export default function Cadastro() {
  return (
    <div className={styles.cadastro_container}>
      <div className={styles.img}>
        <img className={styles.img1} src={login3} alt="contato" />
      </div>

      <h1>
        Ainda não possui <span>Cadastro</span>?
      </h1>

      <div className={styles.linha} />

      <p>
        Conectando <span>Candidatos</span> e <span>Recrutadores</span> no maior
        Ecossistema de Vagas de <span>Tecnologia</span> do País.
      </p>

      <p>
        Crie sua conta para publicar vagas ou ter acesso a{" "}
        <span>milhares de vagas</span> de empregos.
      </p>

      <div className={styles.linha2} />

      <h3>
        Como gostaria de se <span>cadastrar?</span>
      </h3>

      <form action="/pagina-processa-dados-do-form" method="post">
        <div className={styles.button1}>
          <Link to="/cadastroCandidato">
            <button className={styles.btn} type="submit">
              Candidato
            </button>
          </Link>
        </div>

        <div className={styles.button2}>
          <Link to="/cadastroRecrutador">
            <button className={styles.btn} type="submit">
              Recrutador
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
