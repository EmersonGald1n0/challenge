import React from 'react'
import styles from './Contact.module.css'
export default function Contact() {

  return (
    <div className={styles.contact_container}>
      <div>
        <h1>Contatos</h1>
        <br />
        <p>Envie suas dúvidas ou sugestões em um dos nosso canais de atendimento.</p>
        <p>Email: contato@emprega+.com.br</p>
        <p>Telefone: 0800 080 080</p>
        <p>Nosso horário de atendimento é de segunda a sexta-feira das 8:00 às 18:00 hrs.</p>
        <br></br>
        <form action="">
          <div>
            <input type="text" placeholder="Digite seu nome..." />
          </div>
          <br></br>
          <div>
            <input type="text" placeholder="Digite seu email..." />
          </div>
          <br></br>
          <div>
            <input type="text" placeholder="Digite o assunto..." />
          </div>
          <br></br>
          <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Descreva sua dúvida..."></textarea>
          </div>
          <br></br>
          <div>
            <button className={styles.btn} type="submit">Enviar</button>
          </div>
        </form>
      </div>

    </div>

  )
}