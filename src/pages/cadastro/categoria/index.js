import React, { useState }from 'react';
import PagesDefault from '../../../components/PagesDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:'',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chave: nome, descricao, bla, bli
        setValues({
          ...values,
          [chave]: valor, // nome: 'valor'
        })
      }
    
      function handleChange(infoDoEvento) {
        setValue(
          infoDoEvento.target.getAttribute('name'),
          infoDoEvento.target.value
        );
      }

    return(
        <PagesDefault>
            <h1>Cadastro por Categoria: {values.nome} </h1>

            <form onSubmit={ function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>
            
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome" 
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text" 
                            name="descricao"
                            value={values.descricao} 
                            onChange={handleChange} 
                        />
                    </label>
                </div>

                <FormField
                    label="Cor"
                    type="color"
                    name="cor" 
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>
            
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para a home
            </Link>
        </PagesDefault>
    )
}

export default CadastroCategoria;