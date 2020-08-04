import React, { useEffect, useState} from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link , useHistory} from 'react-router-dom';
import { H1Cadastro, PLink, DivFundo, ButtonCadastro} from '../categoria/style';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/musicas';
import categoriasRepository from '../../../repositories/categorias';

function CadastroMusica(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);


    const categoryTitles = categorias.map(({ nome }) => nome);

    const { handleChange, values} = useForm({
        titulo: '',
        url: '',
        categorias: '',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            })
    },[]);
    
    return(
        <PagesDefault>
            <DivFundo><H1Cadastro>Cadastro de Musicas</H1Cadastro>

            <form onSubmit={(event) => {
                event.preventDefault();
                
                //alert('Video Cadastrado com sucesso!!!1!');
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                  ].map((variant, idx) => (
                    <alert key={idx} variant={variant}>
                      This is a {variant} alert—check it out!
                    </alert>
                  ));

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.nome === values.categorias;
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                .then(() => {
                    console.log('Cadastrou com sucesso!');
                    history.push('/');
                  });
              }}
            >
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Categoria"
                    name="categorias" 
                    value={values.categorias}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <ButtonCadastro type="submit">
                    CADASTRAR
                </ButtonCadastro>
            </form>


            <PLink><Link to="/cadastro/categoria">Cadastrar Categoria</Link></PLink>
            </DivFundo>
        </PagesDefault>
    )
}

export default CadastroMusica;