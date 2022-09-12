import React from 'react'
import styles from './Contact.module.css'
export default function Contact() {

  return (
    <div className={styles.contact_container}>

      <div>
        <h1 className={styles.text1}>CONTATO</h1>

        <p>Envie suas dúvidas ou sugestões em um dos nosso canais de atendimento.</p>

        <p>contato@emprega+.com.br</p>

        <p>Telefone: 0800 080 080</p>

        <p>Nosso horário de atendimento é de segunda a sexta-feira das 8:00 às 18:00 hrs.</p>

        <form action="">
          <div>
            <input type="text" placeholder=" Digite seu nome..." />
          </div>

          <div>
            <input type="text" placeholder=" Digite seu email..." />
          </div>

          <div>
            <input type="text" placeholder=" Digite o assunto..." />
          </div>

          <div>
            <textarea name="" id="" cols="30" rows="7" placeholder="Descreva sua dúvida..."></textarea>
          </div>

          <div>
            <button className={styles.btn} type="submit">Enviar</button>
          </div>

        </form>
      </div>

    </div>

  )
}