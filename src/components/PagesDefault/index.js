import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, {css} from 'styled-components'
import img from '../../assets/img/fundo.jpg';

const Main = styled.main`
    background-image: url(${img});
    background-repeat: repeat-y;
    background-size: 100%;
    color: var(--white);
    flex: 1;
    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `}
`;


function PagesDefault({ children, paddingAll}){
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