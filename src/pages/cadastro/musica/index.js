import React from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import { H1Cadastro, PLink, DivFundo} from '../categoria/style';

function CadastroMusica(){
    return(
        <PagesDefault>
            <DivFundo><H1Cadastro>Cadastro de Musicas</H1Cadastro>
            
            <PLink><Link to="/cadastro/categoria">Cadastrar Categoria</Link></PLink>
            </DivFundo>
        </PagesDefault>
    )
}

export default CadastroMusica;