import React, { useState }from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { ButtonCadastro, H1Cadastro, PLink, DivFundo} from './style';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:'',
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chave: nome, descricao, bla, bli
        setValues({
          ...values,
          [chave]: valor, // nome: 'valor'
        });
      }
    
      function handleChange(infoDoEvento) {
        setValue(
          infoDoEvento.target.getAttribute('name'),
          infoDoEvento.target.value
        );
      }

    return(
        <PagesDefault>
            
            <DivFundo><H1Cadastro>Cadastro por Categoria: {values.nome} </H1Cadastro>

            <form onSubmit={ function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>
            
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome" 
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao" 
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor" 
                    value={values.cor}
                    onChange={handleChange}
                />

                <ButtonCadastro>
                    CADASTRAR
                </ButtonCadastro>
            </form>
            
            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <PLink><Link to="/">Voltar para home</Link></PLink>
            
            </DivFundo>
        </PagesDefault>
    )
}

export default CadastroCategoria;