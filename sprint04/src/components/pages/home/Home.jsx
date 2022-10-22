import React from "react"
import Carousel from "react-elastic-carousel"
import Item from "./Item"
import "./styles.css"
import home1 from '../../../img/home1.jpg'
import home2 from '../../../img/home2.jpg'
import home3 from '../../../img/home3.jpg'

export default function Home() {
  return (
    <>

      <div className="Home">

        <Carousel>

          <Item><img src={home3} alt="Vagas de Emprego" /> <h1 className='text1'>São + de <span>1.500 Vagas</span> de Emprego Disponíveis</h1>
            <h1 className='text2'>Se Inscreva e faça parte do nosso Time de <span>Colaboradores</span> !!</h1>
          </Item>

          <Item><img src={home2} alt="Vagas de Emprego" /><h1 className='text1'>São <span>Diversas Áreas</span> de Atuação</h1>
            <h1 className='text2'>Participe de nossos <span>Processos Seletivos</span> !!</h1>
          </Item>

          <Item><img src={home1} alt="Vagas de Emprego" /><h1 className='text1'>Ainda não <span>se Inscreveu</span>?</h1>
            <h1 className='text2'>Venha fazer Parte da <span>Nossa História</span> !!</h1>
          </Item>

        </Carousel>

      </div>
    </>
  );
}
