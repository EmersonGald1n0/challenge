import React from 'react'
import styles from './Usuario.module.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cadcand from '../../../img/cadcand.png'

export default function Cadastro() {
  let { id } = useParams()

  const [novo, setNovo] = useState({
    ID_USUARIO: id,
    NR_CPF: '',
    NM_USUARIO: '',
    DT_NASCIMENTO: '',
    DS_ESTADO_CIVIL: '',
    DS_SEXO: '',
    DS_SENHA: ''
  })

  let metodo = 'post'
  if (id) {
    metodo = 'put'
  }

  const handleChange = e => {
    setNovo({
      ...novo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch(`http://localhost:8080/EmpregaMais/rest/usuario/${id ? id : ''}`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json'
      },
      //Converte o objeto em json
      body: JSON.stringify(novo)
    }).then(() => {
      window.location = '/'
    })
  }

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/EmpregaMais/rest/usuario/${id}`)
        .then(resp => {
          return resp.json()
        })
        .then(data => {
          setNovo(data)
        })
    }
  }, [id])

  return (
    <div className={styles.cadastro_container}>
      <div className={styles.img}>
        <img className={styles.img1} src={cadcand} alt="contato" />
      </div>

      <h3>
        Preencha os dados abaixo e finalize o seu cadastro como Candidato...
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="ID_USUARIO"
          value={novo.ID_USUARIO}
          placeholder="ID Usuário..."
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="text"
          name="NR_CPF"
          value={novo.NR_CPF}
          placeholder="CPF..."
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="text"
          name="NM_USUARIO"
          value={novo.NM_USUARIO}
          placeholder="Nome..."
          onChange={handleChange}
          step="0.01"
        />{' '}
        <br />
        <input
          type="text"
          name="DT_NASCIMENTO"
          value={novo.DT_NASCIMENTO}
          placeholder="Data de Nascimento..."
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="text"
          name="DS_ESTADO_CIVIL"
          value={novo.DS_ESTADO_CIVIL}
          placeholder="Estado Civil..."
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="text"
          name="DS_SEXO"
          value={novo.DS_SEXO}
          placeholder="Sexo..."
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="text"
          name="DS_SENHA"
          value={novo.DS_SENHA}
          placeholder="Senha..."
          onChange={handleChange}
        />{' '}
        <br />
        <div className={styles.button1}>
          <Link>
            <button onClick={handleSubmit} className={styles.btn} type="submit">
              Cadastrar
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
