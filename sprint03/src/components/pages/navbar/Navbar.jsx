import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../../img/logo.png'




export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.img}>
          <img className={styles.img1} src={logo} alt="ArtLabs" />
        </div>
      </Link>
      <div className={styles.navegacao}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">Quem Somos</Link>
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
          <li className={styles.item}>
            <Link to="/cadastroCandidato">C-Candidato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cadastroRecrutador">C-Recrutador</Link>
          </li>
          <li className={styles.item}>
            <Link to="/perfilCandidato">P-Can</Link>
          </li>
          <li className={styles.item}>
            <Link to="/perfilRecrutador">P-Rec</Link>
          </li>
          <li className={styles.item}>
            <Link to="/senha">Senha</Link>
          </li>
        </ul>
      </div>

    </nav>

  )
}
