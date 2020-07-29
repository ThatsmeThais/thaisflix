import React from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PagesDefault>
            <h1>Cadastro por Categoria</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input type="text"/>
                </label>

                <button>
                    Cadastrar
                </button>
            </form>
            
            <Link to="/">
                Ir para a home
            </Link>
        </PagesDefault>
    )
}

export default CadastroCategoria;