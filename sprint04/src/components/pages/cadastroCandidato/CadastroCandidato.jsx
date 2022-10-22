import React, { useState } from "react";
import styles from "./CadastroCandidato.module.css";
import { Link } from "react-router-dom";
import cadcand from "../../../img/cadcand.png";
import axios from "axios";

export default function Cadastro() {
  const [novoCandidato, setNovoCandidato] = useState({
    CPF: "",
    nomeUsuario: "",
    dataNascimento: "",
    estadoCivil: "",
    sexo: "",
    dadosEmail: "",
    telefone: "",
    senha: "",
  });

  const handleInputChange = (e) => {
    setNovoCandidato({ ...novoCandidato, [e.target.name]: e.target.value });
    console.log(novoCandidato);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `http://localhost:8080/EmpregaMais/rest/usuario`,
      headers: {
        "Content-Type": "application/json",
      },
      data: novoCandidato,
    });
    window.location.href = "/perfilCanditado";
  };
  const handleInputDate = (e) => {
    let data = new Date(e.target.value + "T00:00:00");
    data = data.toLocaleDateString("pt-BR");
    console.log(data);
    setNovoCandidato({ ...novoCandidato, dataNascimento: data });
  };

  return (
    <div className={styles.cadastro_container}>
      <div className={styles.img}>
        <img className={styles.img1} src={cadcand} alt="contato" />
      </div>

      <div className={styles.linha} />

      <h1>
        Vamos iniciar o seu cadastro <span>Candidato</span>?
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="nomeUsuarioId"
            name="nomeUsuario"
            placeholder="Nome completo..."
          />
        </div>

        <div>
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
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="cpfId"
            name="cpf"
            placeholder="CPF..."
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            id="sexoId"
            name="sexo"
            type="text"
            placeholder="Sexo..."
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            id="estadoCivilId"
            name="estadoCivil"
            type="text"
            placeholder="Estado civil..."
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="telefoneId"
            name="telefone"
            placeholder="Telefone..."
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="dadosEmailId"
            name="dadosEmail"
            placeholder="Email..."
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="password"
            id="senhaId"
            name="senha"
            placeholder="Senha..."
          />
        </div>

        <div className={styles.button1}>
          <Link to="/perfilCandidato">
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
