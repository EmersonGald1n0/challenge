import React from 'react'

export default function Cadastro() {
  const cadastro = {
    backgroundColor: '#f5f5f5'
  }

  return (
    <div style={cadastro}>
      <h1>É NOVO POR AQUI?</h1>

      <h3>Crie uma conta e tenha acesso</h3>
      <h3>a milhares vagas de emprego</h3>

      <br></br>

      <form action="/pagina-processa-dados-do-form" method="post">
    <div>
        <label for="mail">Digite seu email: </label>
        <input type="email" id="mail" />

    </div>
    <div class="button">
        <button type="submit">Entrar</button>
    </div>
</form>

    </div>

  )
}