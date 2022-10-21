import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../../img/logo.png'
import login from '../../../img/login.png'



export default function Navbar() {

  return (

    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="ArtLabs" className={styles.img2} />
        </Link>
      </div>

      <div className={styles.teste}>
        <Link to="/login">
          <img className={styles.img1} src={login} alt="ícone de login" />
        </Link>
      </div>

      <div>
      </div>
      <div className={styles.navegacao}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Fazer login</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cadastro">Cadastre-se</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>

    </nav>

  )
}
