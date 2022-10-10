import React, { useState } from 'react'
import { DivLista } from './../../../style/styled'
import FormVagas from '../formVagas/FormVagas';
import PropsCadastro from '../propsCadastro/PropsCadastro';

export default function CadastroVagas() {
  const [cadastroVagas, setCadastroVagas] = useState([
    {
      nomeEmpresa: "ArtLabs",
      cargo: "Desenvolvedor Front-end",
      cidade: "São Paulo",
      bairro: "Capão Redondo",
      formato: "Presencial",
      cargaHoraria: "40 horas",
      salario: "R$ 3.000,00",
      beneficios: "Vale Transporte, Vale Refeição, Plano de Saúde",
      obs: "Experiência com React, NodeJS, MongoDB",
    }
  ]);

  const addCadastro = (e) => {
    e.preventDefault();
    setNovoCadastro({nomeEmpresa:"", cargo:"", cidade:"", bairro:"", formato:"", cargaHoraria:"", salario:"", beneficios:"", obs:""})
    setCadastroVagas([...cadastroVagas, novoCadastro]);
  }

  const [novoCadastro, setNovoCadastro] = useState({nomeEmpresa:"", cargo:"", cidade:"", bairro:"", formato:"", cargaHoraria:"", salario:"", beneficios:"", obs:""});

  const captura = (e) => {
    const {name, value} = e.target;

    if(name === "nomeEmpresa") {
      setNovoCadastro({...novoCadastro, nomeEmpresa: value});
    } else if(name === "cargo") {
      setNovoCadastro({...novoCadastro, cargo: value});
    } else if (name === "cidade") {
      setNovoCadastro({...novoCadastro, cidade: value});
    } else if (name === "bairro") {
      setNovoCadastro({...novoCadastro, bairro: value});
    } else if (name === "formato") {
      setNovoCadastro({...novoCadastro, formato: value});
    } else if (name === "cargaHoraria") {
      setNovoCadastro({...novoCadastro, cargaHoraria: value});
    } else if (name === "salario") {
      setNovoCadastro({...novoCadastro, salario: value});
    } else if (name === "beneficios") {
      setNovoCadastro({...novoCadastro, beneficios: value});
    } else if (name === "obs") {
      setNovoCadastro({...novoCadastro, obs: value});
    }
  }

  return (
    <DivLista>
      <FormVagas
        funcaoAddCadastro={addCadastro}
        novoCadastro={novoCadastro}
        funcaoCaptura={captura}
      />
      {cadastroVagas.map((cad, i) => (
        <PropsCadastro
          key={i}
          nome = {cad.nome}
          idade = {cad.idade}
          raca = {cad.raca}
          tamanho = {cad.tamanho}
          dono = {cad.dono}
          tel = {cad.tel}
          foto = {cad.foto}
          obs = {cad.obs}
        />
      ))}
    </DivLista>
  );

}
