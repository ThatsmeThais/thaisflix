import React from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PagesDefault>
            <h1>Cadastro por Categoria</h1>
            <Link to="/">
                Ir para a home
            </Link>
        </PagesDefault>
    )
}

export default CadastroCategoria;