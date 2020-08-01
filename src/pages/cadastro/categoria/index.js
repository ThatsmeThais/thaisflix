import React, { useState, useEffect }from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { ButtonCadastro, H1Cadastro, PLink, DivFundo, ULCategoria} from './style';

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

      useEffect(() => {
        if(window.location.href.includes('localhost')) {
          const URL = window.location.hostname.includes('localhost') 
            ?'http://localhost:8080/categorias'
            :'https://thaisflix.herokuapp.com/categorias'; 
          fetch(URL)
           .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Não foi possível pegar os dados');
           })
        }    
      }, []);

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
            
            {categorias.length === 0 &&(
                <div>
                    Carregando...
                </div>)
            }
            

            <ULCategoria>
                <p>ITENS JÁ CADASTRADOS:</p>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}   |   {categoria.descricao}
                        </li>
                    )
                })}
            </ULCategoria>

            <PLink><Link to="/">Voltar para home</Link></PLink>
            
            </DivFundo>
        </PagesDefault>
    )
}

export default CadastroCategoria;