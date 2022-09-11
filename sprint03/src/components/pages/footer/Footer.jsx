import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'


export default function Footer() {

  return (
    <div className={styles.rodape}>
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className={styles.copyright}>
          &copy; Copyright 2022 - Todos os direitos reservados - Desenvolvido por <span className={styles.copyright}>Art Labs Soluções
            Digitais</span>
        </p>
      </footer>
    </div>

  )
}