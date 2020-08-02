import React, { useState, useEffect }from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import { ButtonCadastro, H1Cadastro, PLink, DivFundo, ULCategoria, ImgLoading} from './style';
import img from '../../../assets/img/music1.png';
import useForm from '../../../hooks/useForm';

    
    function CadastroCategoria(){
    
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:'',
    };

    const {handleChange, values, clearForm} =  useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);
    

      useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
          ? 'http://localhost:8080/categorias'
          : 'https://thaisflix.herokuapp.com/categorias';
        fetch(URL_TOP)
          .then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json();
            setCategorias([
              ...resposta,
            ]);
        });
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
                clearForm(valoresIniciais);
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
            
            
            

            <ULCategoria>
                <p>ITENS JÁ CADASTRADOS:</p>
                {categorias.length === 0 &&(
                <ImgLoading src={img}>
                </ImgLoading>)
            }
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