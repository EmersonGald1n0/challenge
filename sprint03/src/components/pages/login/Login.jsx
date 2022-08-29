import React, { useState} from 'react'

export default function Login() {

  const login = {

    backgroundColor: '#f5f5f5'
  }

  return (
    <div style={login}>
      <h1>BEM VINDO</h1>

      <h2>Acesse seu perfil</h2>
      <br></br>

      <form action="/pagina-processa-dados-do-form" method="post">
    <div>
        <label for="mail">Digite seu email: </label>
        <input type="email" id="mail" />
    </div>
    <br></br>

    <div>
        <label for="name">Digite sua senha: </label>
        <input type="text" id="name" />
    </div>

    <div class="button">
        <button type="submit">Entrar</button>
    </div>
</form>

    </div>

  )
}