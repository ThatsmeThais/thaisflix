import React from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';

function CadastroMusica(){
    return(
        <PagesDefault>
            <h1>Cadastro de Musicas</h1>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PagesDefault>
    )
}

export default CadastroMusica;