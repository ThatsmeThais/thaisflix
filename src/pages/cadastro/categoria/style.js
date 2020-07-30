import styled from 'styled-components';

export const ButtonCadastro = styled.button`
    color: var(--primary);
    background-color: rgb(220,220,220,0.1); 
    border: 1px solid var(--primary) ;
    width: 100px;
    height: 30px;
    border-radius: 4px;
    font-size: 75%;
    font-weight: 500;
    margin-left: 20px;
    margin-top: 20px;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export const H1Cadastro = styled.h1`
    padding-left: 20px;
    font-size: 30px;
    font-weight: 500;
`;

export const PLink = styled.p`
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: normal;
`;
