import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import style from './Footer.module.css'


export default function Footer() {

  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
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
      <p className={style.FaFacebook}>
        &copy; Copyright 2022 - Todos os direitos reservados - Desenvolvido por <span>Art Labs Soluções
          Digitais</span>
      </p>
    </footer>

  )
}