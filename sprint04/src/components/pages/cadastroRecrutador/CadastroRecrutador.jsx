import React from "react";
import styles from "./CadastroRecrutador.module.css";
import { Link } from "react-router-dom";
import cadrec2 from "../../../img/cadrec2.png";

export default function Cadastro() {
  return (
    <div className={styles.cadastro_container}>
      <div className={styles.img}>
        <img className={styles.img1} src={cadrec2} alt="contato" />
      </div>

      <div className={styles.linha} />
      <h1>
        {" "}
        Vamos iniciar o seu cadastro <span>Recrutador</span>?
      </h1>

      <form action="/pagina-processa-dados-do-form" method="post">
        <div className="formRight">
          <div>
            <input type="text" id="nome" placeholder="Nome..." />
          </div>
          <div className={styles.teste}>
            <h3 className={styles.teste2}>
              Data de <span>Nascimento</span>
            </h3>
            <input
              type="date"
              id="nascimento"
              placeholder="Data de nascimento..."
            />
          </div>

          <div>
            <input type="text" id="cpf" placeholder="CPF..." />
          </div>

          <div>
            <input type="text" id="empresa" placeholder="Nome da Empresa..." />
          </div>
        </div>

        <div>
          <input type="text" id="cnpj" placeholder="CNPJ..." />
        </div>

        <div>
          <input type="text" id="cargo" placeholder="Seu Cargo..." />
        </div>

        <div>
          <input type="text" id="email" placeholder="Email..." />
        </div>

        <div>
          <input type="password" id="senha" placeholder="Senha..." />
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
