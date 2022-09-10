import React from 'react'
import quem_somos from '../../../img/quem_somos.jpg'
import styles from './About.module.css'

export default function About() {
 
  return (
    <div className={styles.about}>

      <div className={styles.container}>
        <div>
          <img className={styles.quem_somos} src={quem_somos} alt="" />
        </div>
        
          {/* <h1>Quem Somos</h1> */}
        

        <div className={styles.text}>
          <p>A Emprega+ em parceria com a IBM, multinacional presente em centenas de países,
            pioneira no desenvolvimento de tecnologias digitais, como o consagrado Watson que é
            referência na aplicação de conceitos de Inteligência Artificial e de Machine Learning,
            oferece Consultorias Corporativas Especializadas em promover o crescimento e integração
            digital em centenas de companhias.
            <br />
            <br />
            Agora abre oportunidades para você que deseja ser um profissional da área de
            Tecnologia.
            <br />
            <br />
            Inscreva - se e participe dos nossos processos seletivos, tenha a possibilidade de fazer
            parte do nosso time de colaboradores que é referência mundial no segmento de soluções
            tecnológicas.
            </p >
          </div>
      </div >


    </div >

  )


}