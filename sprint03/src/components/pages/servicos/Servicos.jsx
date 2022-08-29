import React from 'react'
import serv1 from '../../../img/serv1.jpg'
import serv2 from '../../../img/serv2.jpg'
import serv3 from '../../../img/serv3.jpg'
import serv4 from '../../../img/serv4.jpg'
import serv5 from '../../../img/serv5.jpg'
import serv6 from '../../../img/serv6.jpg'

export default function Servicos() {
  const servicos = {
    backgroundColor: '#f5f5f5'
  }

  return (
    <div style={servicos}>
      <h1>Conheça algumas das áreas de atuação com vagas disponíveis</h1>
      <figcaption>
        <img src={serv1} alt=""/>
        <p>Desenvolvimento em IA & Machine Learning</p>
      </figcaption>
      <div>
        <figcaption>
          <img src={serv2} alt="" />
          <p>Analista de Negócios e Gestão de Processos</p>
        </figcaption>
      </div>
      <div>
        <figcaption>
          <img src={serv3} alt="" />
          <p>Manutenção e Aperfeiçoamento em Infra-Estrutura</p>
        </figcaption>
      </div>
      <div>
        <figcaption>
          <img src={serv4} alt="" />
          <p>Desenvolvimento de Soluções em Cloud</p>
        </figcaption>
      </div>
      <div>
        <figcaption>
          <img src={serv5} alt="" />
          <p>Refinamento de Dados e Desenvolvimento de Softwares</p>
        </figcaption>
      </div>
      <div>
        <figcaption>
          <img src={serv6} alt="" />
          <p>Creative Labs, Pesquisa de Mercado & Brainstorming</p>
        </figcaption>
      </div>
      <h1>Não perca tempo, realize o seu cadastro e tenha acesso a oportunidades de emprego
        incríveis!!!</h1>
    </div>


  )
}