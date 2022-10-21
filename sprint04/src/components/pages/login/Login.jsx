import React, { useState, useEffect} from 'react'
import styles from './LinkButton.module.css'
import { Link, useParams } from 'react-router-dom'
import login2 from '../../../img/login2.png'
import styled from 'styled-components'
import{FaLocationArrow, FaRegTimesCircle} from 'react-icons/fa'


export default function Login() {
  
  function msg() {
    alert("Login realizado com sucesso!")
  }

  let {id} = useParams()

    const [login, setLogin] = useState({
        email:id,
        senha:"",
    })

    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e =>{
        setLogin({...login, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()

        fetch(`http://localhost:8080/EmpregaMais/rest/cursos/${id ? id : ""}`,{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(login)
        }).then(()=>{
            window.location = "/"
        })
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/EmpregaMais/rest/cursos/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then(data=>{
                setLogin(data)
            })
        }
    },[id])

  return (
    <div className={styles.login}>

        <div className={styles.img}>
          <img className={styles.img1} src={login2} alt="contato"  />
        </div>
      
      <h1>BEM VINDO</h1>
      <h2>Acesse o seu perfil</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <input className={styles.email} type="email" id="email" placeholder='Digite seu login...' value={login.email} 
          onChange={handleChange} />
        </div>

        <div>
          <input className={styles.nome} type="text" id="senha" placeholder='Digite a sua senha...' value={login.setLogin}
          onChange={handleChange} />
        </div>

        <div>
          <Link to="/perfilCandidato">
            <button className={styles.btn} type="submit">Entrar</button>
          </Link>
          <Link to="/senha">
            <p className={styles.teste}>Esqueceu sua senha?</p>
          </Link>
        </div>
      </form>
    </div>

  )
}