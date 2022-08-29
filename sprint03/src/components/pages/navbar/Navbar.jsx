import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../../img/logo.png'




export default function Navbar() {

  return (
    <nav class={styles.navbar}>

      <Link to="/">
        <img src={logo} alt="ArtLabs" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/about">Quem Somos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact">Contatos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/login">Fazer login</Link>
        </li>
        <li className={styles.item}>
          <Link to="/cadastro">Cadastre-se</Link>
        </li>
        <li className={styles.item}>
          <Link to="/servicos">Serviços</Link>
        </li>
      </ul>

    </nav>

  )
}
