import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaEdit, FaTrash} from 'react-icons/fa'

const DivLista = styled.div`
  width: 70%; margin: auto; font-family: Arial;
  a{text-decoration: none; padding: 10px 15px; margin-bottom: 20px;
    background-color: yellowgreen; color: white; display: inline-block;
  }
  table {width: 100%; margin: auto;}
  thead tr {background-color: darkblue; color: white;}
  thead tr th{padding: 10px;}

  tbody tr:nth-child(2n+2){background-color: #ccc;}
  tbody tr td{background-color: none; margin-bottom: 5px; color: blue;}
  tbody tr td button{color: red; background-color: none; border: none;}

  tfoot tr td{text-align: center; background-color: #333; color:white;}

`
export default function ListaCandidatos() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/EmpregaMais/rest/usuario").then((resp)=>{
        return resp.json();
      }).then((resp) => {
        setUsuarios(resp);
      }).catch((error) => {
        console.log(error)})
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/EmpregaMais/rest/usuario/${id}`,{
      method: "delete"
    }).then(() => {
      window.location = "/"
    }).catch((error) => {
    console.log(error)
    })
  }

    return (
      <DivLista>
        <h1>Lista Usuários</h1>

        <Link to= "/incluir" >Inserir Usuário</Link>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data Nascimento</th>
              <th>CPF</th>
              <th>Sexo</th>
              <th>Estado Civil</th>
              <th>Senha</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.codigo}>
                <td>{usuario.nome}</td>
                <td>{usuario.nascimento}</td>
                <td>R$ {usuario.cpf}</td>
                <td>{usuario.sexo}</td>
                <td>{usuario.civil}</td>
                <td>{usuario.senha}</td>
                <td>
                <Link to={`/editar/${usuario.codigo}`}><FaEdit/></Link>
                <button onClick={handleDelete.bind(this, usuario.codigo)}><FaTrash/>/</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
            <td colSpan="7">Lista de Usuários</td>
          </tr>
          </tfoot>
        </table>
      </DivLista>
    );
  };

