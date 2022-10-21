import React, { useState } from 'react'
import styles from './CadastroCandidato.module.css'
import { Link } from 'react-router-dom'
import cadcand from '../../../img/cadcand.png'
import axios from 'axios'

export default function Cadastro() {
  const [novoCandidato, setNovoCandidato] = useState({
    CPF: "",
    nomeUsuario: "",
    dataNascimento: "",
    estadoCivil: "",
    sexo: "",
    dadosEmail: "",
    telefone: "",
    senha: ""
  })

  const handleInputChange = e => {
    setNovoCandidato({ ...novoCandidato, [e.target.name]: e.target.value })
    console.log(novoCandidato)
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `http://localhost:8080/EmpregaMais/rest/usuario`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: novoCandidato,
    });
    window.location.href = '/perfilCanditado';
  }
  const handleInputDate = e => {
    let data = new Date(e.target.value + 'T00:00:00');
    data = data.toLocaleDateString('pt-BR');
    console.log(data);
    setNovoCandidato({ ...novoCandidato, dataNascimento: data });
  }

  return (
    <div className={styles.cadastro_container}>
      <div className={styles.img}>
        <img className={styles.img1} src={cadcand} alt="contato" />
      </div>

      <h3>
        Preencha os dados abaixo e finalize o seu cadastro como Candidato...
      </h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="nomeUsuarioId"
            name="nomeUsuario"
            placeholder="Digite o seu nome completo..."
            
          />
        </div>

        <div>
          <input
            onChange={handleInputDate}
            type="text"
            id="dataNascimentoId"
            name="dataNascimento"
            placeholder="Digite a sua data de nascimento..."
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="cpfId"
            name="cpf"
            placeholder="Digite o seu CPF..."
            
          />
        </div>

        <div>
          {/* <select id="sexoId" name="sexo" onChange={handleInputChange}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outros</option>
          </select> */}
          <input
            onChange={handleInputChange}
            id="sexoId"
            name="sexo"
            type="text"
            placeholder="Digite o seu sexo biológico..."
            
          />
        </div>

        {/* <div>
          <input type="text" id="civil" placeholder='Digite o seu estado civil...' />
        </div> */}

        {/* <div>
          <input type="text" id="telefoneId" name="telefone" placeholder='Digite o seu telefone...' />
        </div> */}

        <div>
          {/* <select
            id="estadoCivilId"
            name="estadoCivil"
            onChange={handleInputChange}
          >
            <option value="S">Solteiro(a)</option>
            <option value="C">Casado(a)</option>
            <option value="D">Divorciado(a)</option>
            <option value="V">Viúvo(a)</option>
          </select> */}
          <input
            onChange={handleInputChange}
            id="estadoCivilId"
            name="estadoCivil"
            type="text"
            placeholder="Digite o seu estado civil..."
            
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="telefoneId"
            name="telefone"
            placeholder="Digite o seu telefone..."
            
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="dadosEmailId"
            name="dadosEmail"
            placeholder="Digite o seu email..."
            
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="password"
            id="senhaId"
            name="senha"
            placeholder="Digite a sua senha..."
            
          />
        </div>

        <div className={styles.button1}>
          {/* <Link to="/perfilCandidato"> */}
          <button className={styles.btn} type="submit">
            Cadastrar
          </button>
          <button className={styles.btn} type="reset">
            Limpar
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  )
}
