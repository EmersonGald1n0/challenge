import React from 'react'
import { DivFiltro } from './../../../style/styled'
import styles from './FiltroCandidato.module.css'
import { Link } from 'react-router-dom'

export default function FiltroCandidato() {

  return (
    <div>
      <DivFiltro>
        <div className={styles.lista}>
          <legend><span>Linguagens</span></legend>
          <input type="checkbox" value={'ReactJS'} 
            name="linguagens"
            id="ling01"
          />
          <label htmlFor="ling01">ReactJS</label>
          <input type="checkbox" name="linguagens" id="ling02" value={'Java'} />
          <label htmlFor="ling02">Java</label>
          <input
            type="checkbox"
            name="linguagens"
            id="ling03"
            value={'Python'}
          />
          <label htmlFor="ling03">Python</label>
          <input type="checkbox" name="linguagens" id="ling04" value={'SQL'} />
          <label htmlFor="ling04">SQL</label>
          <input type="checkbox" name="linguagens" id="ling05" value={'C#'} />
          <label htmlFor="ling05">C#</label>
          <input
            type="checkbox"
            name="linguagens"
            id="ling06"
            value={'JavaScript'}
          />
          <label htmlFor="ling06">JavaScript</label>
          <input
            type="checkbox"
            name="linguagens"
            id="ling07"
            value={'HTML5'}
          />
          <label htmlFor="ling04">HTML5</label>
          <input
            type="checkbox"
            name="lingagues"
            id="ling08"
            value={'Outros'}
          />
          <label htmlFor="ling05">Outros</label>
        </div>
        <br />
        <div className={styles.linha} />
        <div>
          <legend><span>Sexo</span></legend>
          <input type="checkbox" name="genero" id="gen01" value={'Masculino'} />
          <label htmlFor="gen01">Masculino</label>
          <input type="checkbox" name="genero" id="gen02" value={'Feminino'} />
          <label htmlFor="gen02">Feminino</label>
          <input type="checkbox" name="genero" id="gen03" value={'LGBTQIA+'} />
          <label htmlFor="gen03">LGBTQIA+</label>
          <input type="checkbox" name="genero" id="gen04" value={'Outros'} />
          <label htmlFor="gen04">Outros</label>
        </div>
        <br />
        <div className={styles.linha} />
        <div>
          <legend>Pretensão <span>Salarial</span></legend>
          <input type="checkbox" name="salario" id="sal01" value={'1000'} />
          <label htmlFor="sal01">R$1.300,00</label>
          <input type="checkbox" name="salario" id="sal02" value={'2000'} />
          <label htmlFor="sal02">R$2.000,00</label>
          <input type="checkbox" name="salario" id="sal03" value={'3000'} />
          <label htmlFor="sal03">R$3.000,00</label>
          <input type="checkbox" name="salario" id="sal04" value={'4000'} />
          <label htmlFor="sal04">R$4.000,00</label>
          <input type="checkbox" name="salario" id="sal05" value={'8000'} />
          <label htmlFor="sal05">Acima de R$8.000,00</label>
        </div>
        <br />
        <div className={styles.linha} />
        <div>
          <legend>Formação <span>Acadêmica</span></legend>
          <input
            type="checkbox"
            name="formacao"
            id="form01"
            value={'Ensino Médio'}
          />
          <label htmlFor="sal01">Ensino Médio</label>
          <input
            type="checkbox"
            name="formacao"
            id="form02"
            value={'Bacharel'}
          />
          <label htmlFor="sal02">Bacharel</label>
          <input type="checkbox" name="formacao" id="form03" value={'MBA'} />
          <label htmlFor="sal03">MBA</label>
          <input
            type="checkbox"
            name="formacao"
            id="form04"
            value={'Mestrado'}
          />
          <label htmlFor="sal04">Mestrado</label>
          <input type="checkbox" name="formacao" id="form05" value={'Outros'} />
          <label htmlFor="sal05">Outros</label>
        </div>
        <br />
        <br />
        <div className={styles.button1}>
          <button className={styles.btn} type='submit'>Aplicar filtros</button>
        </div>
        <div className={styles.linha} />
        <h1><span>Filtros</span></h1>
        <table>
          <thead>
            <tr>
              <th>Sexo</th>
              <th>Pretensão Salarial</th>
              <th>Formação Acadêmica</th>
              <th>Moradia</th>
              <th>Linguaguens de Interesse</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Masculino</td>
              <td>R$ 12.000</td>
              <td>Mestrado</td>
              <td>Moema - SP</td>
              <td>Java / Python / SQL</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 7.000</td>
              <td>Curso Técnico</td>
              <td>Jabaquara - SP</td>
              <td>Análise de Dados</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>R$ 8.300</td>
              <td>Bacharel</td>
              <td>Leblon - RJ</td>
              <td>Python / React JS</td>
            </tr>
            <tr>
              <td>LGBTQI+</td>
              <td>R$ 5.500</td>
              <td>MBA</td>
              <td>Sete Lagoas - MG</td>
              <td>HTML5 / Javascript</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>R$ 13.500</td>
              <td>MBA & Mestrado</td>
              <td>Nova York - EUA</td>
              <td>Engenharia de Software</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 4.000</td>
              <td>Ensino Técnico</td>
              <td>Sydney - Austrália</td>
              <td>Análise de Infra Estrutura</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>R$ 2.500</td>
              <td>Ensino Médio</td>
              <td>Curitiba - PR</td>
              <td>Help Desk</td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>R$ 3.000</td>
              <td>Ensino Médio</td>
              <td>Cotia - SP</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>LGBTQI+</td>
              <td>R$ 9.000</td>
              <td>Analista de QA</td>
              <td>Vargem Grande - SP</td>
              <td> ORACLE / SQL </td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 6.000</td>
              <td>Ensino Médio</td>
              <td>Rio de Janeiro - RJ</td>
              <td>Node RED / Node JS</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 15.000</td>
              <td>Mestrado</td>
              <td>Florianópolis - SC</td>
              <td>Engenheiro de Dados</td>
            </tr>
            <tr>
              <td>LGBTQI+</td>
              <td>R$ 11.000</td>
              <td>Bacharel</td>
              <td>Maringá - PR</td>
              <td>Java / Javascript</td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>R$ 13.600</td>
              <td>Mba</td>
              <td>Assuncíon - Paraguai</td>
              <td>Cyber Security</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>R$ 3.000</td>
              <td>Ensino Médio</td>
              <td>Michigan - EUA</td>
              <td>Help Desk</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 6.000</td>
              <td>Curso Técnico</td>
              <td>Hong Kong - Japão</td>
              <td>Análise de Redes</td>
            </tr>
            <tr>
              <td>LGBTQI+</td>
              <td>R$ 16.700</td>
              <td>Bacharel & Mba</td>
              <td>Madrid - Espanha</td>
              <td>Metaverso</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>R$ 12.000</td>
              <td>Mestrado</td>
              <td>Vancouver - Canadá</td>
              <td>Scrum Master</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 16.700</td>
              <td>Mestrado</td>
              <td>Barcelona - Espanha</td>
              <td>Product Owner</td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>R$ 8.000</td>
              <td>Curso Técnico</td>
              <td>Amazonas - AM</td>
              <td>PHP / C#</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 4.000</td>
              <td>Colegial Técnico </td>
              <td>São Luis - MA</td>
              <td>C++ / Javascript</td>
            </tr>
            <tr>
              <td>Feminino</td>
              <td>R$ 9.000</td>
              <td>Bacharel</td>
              <td>Porto Alegre - RS</td>
              <td>Swift / Java</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 3.300</td>
              <td>Ensino Médio</td>
              <td>Boa Vista - RR</td>
              <td>Chatbot</td>
            </tr>
            <tr>
              <td>LGBTQI+</td>
              <td>R$ 13.000</td>
              <td>Mestrado</td>
              <td>Porto Velho - RO</td>
              <td>Machine Learning</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>R$ 7.000</td>
              <td>Mba</td>
              <td>Aracajú - SE</td>
              <td>AI / Python</td>
            </tr>
            <tr>
              <td>Outros</td>
              <td>R$ 12.000</td>
              <td>Bacharel & Mba</td>
              <td>Palmas - TO</td>
              <td>Product Owner</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Candidatos</td>
            </tr>
          </tfoot>
        </table>

      
      </DivFiltro>
    </div>
  )
}
