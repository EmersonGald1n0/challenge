import React from 'react'

export default function Contact() {
  const contact = {
    backgroundColor: '#f5f5f5'
  }

  return (
    <div style={contact}>
      <div>
        <h1>Contatos</h1>
        <p>Envie suas dúvidas ou sugestões em um dos nosso canais de atendimento.</p>
        <p>Email: contato@emprega+.com.br</p>
        <p>Telefone: 0800 080 080</p>
        <p>Nosso horário de atendimento é de segunda a sexta-feira das 8:00 às 18:00 hrs.</p>
        <br></br>
        <form action="">
          <div>
            <label htmlFor="">Digite seu nome: </label>
            <input type="text" placeholder="Nome" />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Digite seu email: </label>
            <input type="text" placeholder="Email" />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Digite o assunto: </label>
            <input type="text" placeholder="Digite o assunto..." />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Descreva: </label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Descreva sua dúvida..."></textarea>
          </div>
          <br></br>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

    </div>

  )
}