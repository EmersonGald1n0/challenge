import React from 'react'
import { DivForm } from './../../../style/styled';

export default function FormVagas(props) {
  return (


    <DivForm>
        <div>
            <form method="post" onSubmit={props.funcaoAddCadastro}>
                <div>
                    <input type="text" name="nome" placeholder='Nome da Empresa...' value={props.novoCadastro.nome} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="cargo" placeholder='Cargo...' value={props.novoCadastro.cargo} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="cidade" placeholder='Cidade...' value={props.novoCadastro.cidade} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="bairro" placeholder='Bairro...' value={props.novoCadastro.bairro} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="formato" placeholder='Formato de Trabalho...' value={props.novoCadastro.formato} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="carga" placeholder='Carga Horária...' value={props.novoCadastro.carga} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="salario" placeholder='Salário...' value={props.novoCadastro.salario} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="beneficios" placeholder='Benefícios...' value={props.novoCadastro.beneficios} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <input type="text" name="obs" placeholder='Observações...' value={props.novoCadastro.obs} onChange={props.funcaoCaptura} />
                </div>
                <div>
                    <button type="submit">Publicar Vaga</button>
                </div>
            </form>
        </div>
    </DivForm>
  )
}