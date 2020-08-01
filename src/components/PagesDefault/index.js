import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'
import img from '../../assets/img/fundo.jpg';

const Main = styled.main`
    background-image: url(${img});
    background-repeat: repeat-y;
    background-size: 100%;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right; 5%;
`;

function PagesDefault({ children }){
    return(
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PagesDefault;