import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FaEdit, FaTrash} from 'react-icons/fa'

export default function API() {
  const [candidatos, setCandidatos] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/EmpregaMais/rest/estado')
      .then(resp => {
        return resp.json()
      })
      .then(resp => {
        setCandidatos(resp)
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })

      const handleDelete =(id)=>{
        fetch(`http://localhost:8080/EmpregaMais/rest/estado${id}`,{
            method:"post"
        }).then(()=>{
            window.location = "/"
        }).catch((error)=>{
            console.log(error)
        })
    }

    
  }, [])

  return (
  <div>
    <h1>Lista de Estados</h1>
    <Link to="/incluir">Inserir Estado</Link>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sigla</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {candidatos.map(candidato => (
          <tr key={candidato.codigo}>
            <td>{candidato.nome}</td>
            <td>{candidato.sigla}</td>
            <td>
              <Link to={`/incluir/${candidato.codigo}`}>
                <FaEdit />
              </Link>
              <button onClick={handleDelete.bind(this, candidato.codigo)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
