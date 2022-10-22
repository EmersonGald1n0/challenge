import React, { useState } from "react";
import { DivLista } from "./../../../style/styled";
import PropsVisualiza from "../propsVisualiza/PropsVisualiza";

export default function VisualizaVagas() {
  const [visualizaVagas, setVisualizaVagas] = useState([
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
    },

    {
      nomeEmpresa: "Meta",
      cargo: "Desenvolvedor Metaverso",
      cidade: "São Paulo",
      bairro: "Morumbi",
      formato: "Hibrido",
      cargaHoraria: "60 horas",
      salario: "R$ 9.000,00",
      beneficios: "VT, VR, Plano de Saúde, Plano Odontológico",
      obs: "Experiência com Metaverso, NodeJS, MongoDB",
    },

    {
      nomeEmpresa: "Instagram",
      cargo: "Desenvolvedor App",
      cidade: "Rio de Janeiro",
      bairro: "Leblon",
      formato: "Presencial",
      cargaHoraria: "60 horas",
      salario: "R$ 7.300,00",
      beneficios: "Vale Transporte, Vale Refeição, Plano de Saúde",
      obs: "Experiência com ReactNative, Swift, Kotlin",
    },

    {
      nomeEmpresa: "RD",
      cargo: "Desenvolvedor Fullstack",
      formato: "Home Office",
      cargaHoraria: "60 horas",
      salario: "R$ 6.500,00",
      beneficios:
        "Vale Refeição, Plano de Saúde, Plano Odontológico, Auxílio Creche",
      obs: "Experiência com React, Oracle, Java, JavaScript",
    },

    {
      nomeEmpresa: "Netflix",
      cargo: "Engenheiro de Software",
      cidade: "Minas Gerais",
      bairro: "Belo Horizonte",
      formato: "Hibrido",
      cargaHoraria: "70 horas",
      salario: "R$ 15.200,00",
      beneficios:
        "Vale Transporte, Vale Refeição, Plano de Saúde, Plano Odontológico, Auxílio Creche, Auxílio Home Office",
      obs: "Experiência com React, NodeJS, MongoDB",
    },

    {
      nomeEmpresa: "Itau",
      cargo: "Desenvolvedor Back-end",
      cidade: "São Paulo",
      bairro: "Pinheiros",
      formato: "Hibrido",
      cargaHoraria: "60 horas",
      salario: "R$ 8.000,00",
      beneficios:
        "Vale Transporte, Vale Refeição, Plano de Saúde, Plano Odontológico, Auxílio Creche, Auxílio Home Office",
      obs: "Experiência com Java, Oracle, SQL",
    },

    {
      nomeEmpresa: "Magazine Luiza",
      cargo: "Analista de Dados",
      formato: "Home Office",
      cargaHoraria: "60 horas",
      salario: "R$ 12.500,00",
      beneficios: "Vale Transporte, Vale Refeição, Plano de Saúde",
      obs: "Experiência com Python",
    },

    {
      nomeEmpresa: "Mercado Livre",
      cargo: "Scrum Master",
      cidade: "São Paulo",
      bairro: "Campo Belo",
      formato: "Presencial",
      cargaHoraria: "40 horas",
      salario: "R$ 9.500,00",
      beneficios: "Vale Transporte, Vale Refeição, Plano de Saúde",
      obs: "Experiência com Scrum, Kanban, Agile",
    },
  ]);

  const addCadastro = (e) => {
    e.preventDefault();
    setNovoCadastro({
      nomeEmpresa: "",
      cargo: "",
      cidade: "",
      bairro: "",
      formato: "",
      cargaHoraria: "",
      salario: "",
      beneficios: "",
      obs: "",
    });
    setVisualizaVagas([...visualizaVagas, novoCadastro]);
  };

  const [novoCadastro, setNovoCadastro] = useState({
    nomeEmpresa: "",
    cargo: "",
    cidade: "",
    bairro: "",
    formato: "",
    cargaHoraria: "",
    salario: "",
    beneficios: "",
    obs: "",
  });

  const captura = (e) => {
    const { name, value } = e.target;

    if (name === "nomeEmpresa") {
      setNovoCadastro({ ...novoCadastro, nomeEmpresa: value });
    } else if (name === "cargo") {
      setNovoCadastro({ ...novoCadastro, cargo: value });
    } else if (name === "cidade") {
      setNovoCadastro({ ...novoCadastro, cidade: value });
    } else if (name === "bairro") {
      setNovoCadastro({ ...novoCadastro, bairro: value });
    } else if (name === "formato") {
      setNovoCadastro({ ...novoCadastro, formato: value });
    } else if (name === "cargaHoraria") {
      setNovoCadastro({ ...novoCadastro, cargaHoraria: value });
    } else if (name === "salario") {
      setNovoCadastro({ ...novoCadastro, salario: value });
    } else if (name === "beneficios") {
      setNovoCadastro({ ...novoCadastro, beneficios: value });
    } else if (name === "obs") {
      setNovoCadastro({ ...novoCadastro, obs: value });
    }
  };

  return (
    <DivLista>
      {visualizaVagas.map((vag, i) => (
        <PropsVisualiza
          key={i}
          nomeEmpresa={vag.nomeEmpresa}
          cargo={vag.cargo}
          cidade={vag.cidade}
          bairro={vag.bairro}
          formato={vag.formato}
          cargaHoraria={vag.cargaHoraria}
          salario={vag.salario}
          beneficios={vag.beneficios}
          obs={vag.obs}
        />
      ))}
    </DivLista>
  );
}
