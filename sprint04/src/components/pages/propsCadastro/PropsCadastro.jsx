import React from 'react';
import { DivCadastro } from './../../../style/styled';
export default function PropsCadastro(props) {
  return (
    <DivCadastro>
      <p>{props.nome}</p>
      <p>{props.cargo}</p>
      <p>{props.cidade}</p>
      <p>{props.bairro}</p>
      <p>{props.formato}</p>
      <p>{props.carga}</p>
      <p>{props.salario}</p>
      <p>{props.beneficios}</p>
      <p>{props.obs}</p>
    </DivCadastro>
  );
}




