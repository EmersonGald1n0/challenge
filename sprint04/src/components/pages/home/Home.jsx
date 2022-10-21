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

          <Item><img src={home3} alt="Vagas de Emprego" /> <h1 className='text1'>São + de <span>1.500 vagas</span> de emprego disponíveis</h1>
            <h1 className='text2'>Se inscreva e faça parte do nosso time de <span>colaboradores</span></h1>
          </Item>

          <Item><img src={home2} alt="Vagas de Emprego" /><h1 className='text1'>São <span>diversas áreas</span> de atuação</h1>
            <h1 className='text2'>Participe de nossos <span>processos seletivos</span></h1>
          </Item>

          <Item><img src={home1} alt="Vagas de Emprego" /><h1 className='text1'>Ainda não <span>se inscreveu</span>?</h1>
            <h1 className='text2'>Venha fazer parte da <span>nossa história</span></h1>
          </Item>

        </Carousel>

      </div>
    </>
  );
}











































// import React from 'react'
// import home1 from '../../../img/home1.jpg'
// import home2 from '../../../img/home2.jpg'
// import home3 from '../../../img/home3.jpg'
// import styles from './Home.module.css'



// export default function Home() {

//   return (

//     <section className={styles.home_container}>
//       <h1 className={styles.text1}>São + de 1.500 vagas de emprego disponíveis</h1>
//       <figcaption>
//         <img className={styles.home3} src={home3} alt="" />
//         <h1> Se inscreva e faça parte do nosso time de colaboradores</h1>
//       </figcaption>
//       <h1>São diversas áreas de atuação</h1>
//       <figcaption>
//         <img className={styles.home2} src={home2} alt="" />
//         <h1>Participe de nossos processos seletivos</h1>
//       </figcaption>
//       <h1>Ainda não se inscreveu?</h1>
//       <figcaption>
//         <img className={styles.home1} src={home1} alt="" />
//         <h1>Venha fazer parte da nossa história</h1>
//       </figcaption>
//     </section>

//   )
// }