import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/img/logo1.png';
import './Menu.css';
import Button from '../Button/index'

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="ThaisFlix  logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/musica">
                Nova Música
            </Button>
        </nav>
    );
}

export default Menu;