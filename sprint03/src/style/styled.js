import styled from 'styled-components'

export const DivLista = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 95vh;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Trebuchet MS';
`

export const DivCadastro = styled.div`
  font-weight: bold;
  color: #fff;
  background-color: #525252;
  border-radius: 50px;
  border: 1px solid #333;
  box-shadow: 5px 5px 5px #084EDC;
  padding: 20px;
  text-align: left;
  width: 400px;
  height: 300px;
  margin: 10px;
`

export const DivTitle = styled.div`
  text-align: center;
  font-size: 1em;
`

export const DivForm = styled.div`
  label {
    color: #FFF;
  }
  input {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
  }
  
  button {
    margin-top: 10px;
    background-color: #525252;
    color: #FFF;
    font-weight: bold;
    padding: 12px 40px;
    transition: 0.5s;
    cursor: pointer;
    justify-content: center;
    border-radius: 15px;
  }
  
  button:hover {
    background-color: #084EDC;
  }
`