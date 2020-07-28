import React from 'react';
import Logo from '../../assets/img/logoAmarelo.png';
import './Menu.css';
import Button from '../Button/index'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="ThaisFlix  logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Video Novo
            </Button>
        </nav>
    );
}

export default Menu;