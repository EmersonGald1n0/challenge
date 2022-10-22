import React from 'react'
import quem_somos from '../../../img/quem_somos.jpg'
import styles from './About.module.css'

export default function About() {

  return (
    <div className={styles.about}>

      <div className={styles.container}>

        <div>
          <img className={styles.quem_somos} src={quem_somos} alt="imagem da IBM" />
        </div>
        

        <div className={styles.text}>

          <h1>QUEM SOMOS</h1>
          <div className={styles.linha} />
          <p>A <span>Emprega+</span> em parceria com a <span>IBM, </span>
            multinacional presente em centenas de países,
            pioneira no desenvolvimento de tecnologias digitais, como o consagrado <span>Watson</span> que é
            referência na aplicação de conceitos de Inteligência Artificial e de Machine Learning,
            oferece Consultorias Corporativas Especializadas em promover o crescimento e integração
            digital em centenas de companhias.
          </p>

          <p>Agora <span>abre oportunidades</span> para você que deseja ser um profissional da área de
            Tecnologia.
          </p>

          <p>Inscreva-se e <span>participe dos nossos processos seletivos</span>, tenha a possibilidade de fazer
            parte do nosso time de colaboradores que é referência mundial no segmento de soluções
            tecnológicas.
          </p >

        </div>
      </div >
    </div >
  )


}