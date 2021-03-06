import React, { useState, useEffect }from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link , useHistory} from 'react-router-dom';
import FormField from '../../../components/FormField';
import { ButtonCadastro, H1Cadastro, PLink, DivFundo, ULCategoria, ImgLoading} from './style';
import img from '../../../assets/img/music1.png';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categorias';
    
function CadastroCategoria(){
    
    const history = useHistory();
    const { handleChange, values} = useForm({
        nome:'',
        descricao:'',
        cor:'',
    });

    //const {handleChange, values, clearForm} =  useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        categoryRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            })
    },[]);
    
    return(
        <PagesDefault>
            
            <DivFundo><H1Cadastro>Cadastro por Categoria: {values.nome} </H1Cadastro>

            
            
            {/*<form onSubmit={ function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                clearForm(valoresIniciais);
            }}>*/}
            <form onSubmit={(event) => {
                event.preventDefault();
                
                alert('Video Cadastrado amigx!!!!');
                
                categoryRepository.create({
                    nome:values.nome,
                    descricao:values.descricao,
                    cor:values.cor,
                })
                .then(() => {
                    console.log('Cadastrou com sucesso!');
                    history.push('/');
                  });
                }
            } 
            >
            
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

                <ButtonCadastro type="submit">
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

            <PLink><Link to="/">Voltar para home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="/cadastro/musica">Voltar para cadastro musicas</Link></PLink>
            
            </DivFundo>
        </PagesDefault>
    )
}

export default CadastroCategoria;