import React from 'react'
import home1 from '../../../img/home1.jpg'
import home2 from '../../../img/home2.jpg'
import home3 from '../../../img/home3.jpg'
import styles from './Home.module.css'



export default function Home() {

  return (

    <section className={styles.home_container}>
      <h1 className={styles.text1}>São + de 1.500 vagas de emprego disponíveis</h1>
      <figcaption>
        <img className={styles.home3} src={home3} alt="" />
        <h1> Se inscreva e faça parte do nosso time de colaboradores</h1>
      </figcaption>
      <h1>São diversas áreas de atuação</h1>
      <figcaption>
        <img className={styles.home2} src={home2} alt="" />
        <h1>Participe de nossos processos seletivos</h1>
      </figcaption>
      <h1>Ainda não se inscreveu?</h1>
      <figcaption>
        <img className={styles.home1} src={home1} alt="" />
        <h1>Venha fazer parte da nossa história</h1>
      </figcaption>
    </section>

  )
}