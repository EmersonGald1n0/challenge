import React from 'react'
import { Link } from 'react-router-dom'
import serv1 from '../../../img/serv1.jpg'
import serv2 from '../../../img/serv2.jpg'
import serv3 from '../../../img/serv3.jpg'
import serv4 from '../../../img/serv4.jpg'
import serv5 from '../../../img/serv5.jpg'
import serv6 from '../../../img/serv6.jpg'
import styles from './Servicos.module.css'


export default function Servicos() {

  return (

    <div className={styles.container}>

      <div className={styles.servicos}>

        <h1 className={styles.title1}>CONHEÇA ALGUMAS DAS <span className={styles.span}>ÁREAS DE ATUAÇÃO</span> DISPONÍVEIS...</h1>
        <div className={styles.linha} />

        <div className={styles.bloco1}>
          <figcaption>

            <img className={styles.serv1} src={serv1} alt="Machine Learning" />
            <p className={styles.text1}><span className={styles.span}>#</span>Desenvolvimento em IA & <span className={styles.span}>Machine Learning</span>
            </p>

          </figcaption>
        </div>

        <div className={styles.bloco2}>
          <figcaption>

            <img className={styles.serv2} src={serv2} alt="Analista de Negócios" />
            <p className={styles.text2}><span className={styles.span}>#</span>Analista de Negócios e <span className={styles.span}>Gestão de Processos</span></p>

          </figcaption>
        </div>

        <div className={styles.bloco3}>
          <figcaption>

            <img className={styles.serv3} src={serv3} alt="Manutenção em Infra-Estrutura" />
            <p className={styles.text3}><span className={styles.span}>#</span>Manutenção e Aperfeiçoamento em <span className={styles.span}>Infra-Estrutura</span></p>

          </figcaption>
        </div>

        <div className={styles.bloco4}>
          <figcaption>

            <img className={styles.serv4} src={serv4} alt="Desenvolvimento de Sistemas" />
            <p className={styles.text4}><span className={styles.span}>#</span>Analista e Desenvolvimento de <span className={styles.span}>Soluções em CLOUD</span></p>

          </figcaption>
        </div>

        <div className={styles.bloco5}>
          <figcaption>

            <img className={styles.serv5} src={serv5} alt="Refinamento de Dados" />
            <p className={styles.text5}><span className={styles.span}>#</span>Refinamento de Dados e <span className={styles.span}>Desenvolvimento de Softwares</span></p>

          </figcaption>
        </div>

        <div className={styles.bloco6}>
          <figcaption>

            <img className={styles.serv6} src={serv6} alt="Creative Labs, Pesquisas de Mercado" />
            <p className={styles.text6}><span className={styles.span}>#</span>Creative Labs, Pesquisas de Mercado e <span className={styles.span}>Brainstorming</span></p>

          </figcaption>
        </div>
        <div className={styles.linha2} />

        <h1 className={styles.title2}>ENTRE OUTRAS <span className={styles.span}>OPORTUNIDADES INCRÍVEIS</span> PARA VOCÊ!!!</h1>

        <div className={styles.button1}>
          <Link to="/cadastro">
            <button className={styles.btn1} type="submit">INSCREVA-SE JÁ!!!</button>
          </Link>
        </div>
      </div>
    </div>

  )
}