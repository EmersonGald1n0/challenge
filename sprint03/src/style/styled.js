import styled from 'styled-components'

export const DivLista = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 95vh;
  background-color: #99FCD6;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Trebuchet MS';
`

export const DivCadastro = styled.div`
  background-color: rgba(0, 0, 0, 0.40);
  color: #fff;
  border: 1px solid #333;
  box-shadow: 5px 5px 5px #333;
  padding: 20px;
  text-align: center;
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
    width: 50%;
    padding: 5px;
    margin-top: 10px;
  }
  
  button {
    margin-top: 10px;
    background-color: #525252;
    color: #FFF;
    font-weight: bold;
    padding: 10px 15px;
    transition: 0.5s;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #084EDC;
  }
`