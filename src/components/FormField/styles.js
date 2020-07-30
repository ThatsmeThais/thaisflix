import styled from 'styled-components';


export const FormeFieldBase = styled.form`
  color: var(--white);
  padding: 10px;
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const InputField = styled.input`
  border-radius: 4px;
  width: 50%;
  height: 30px;
  background-color: rgb(220,220,220,0.1);
  border: 1px solid var(--white);
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: var(--primary);

  ::placeholder {
    color: var(--primary);
    font-size: 15px;
  }
  &:focus, &:active, &:hover,&:-webkit-autofill{
    -webkit-box-shadow: 0 0 0px 1000px #161616 inset;
    -webkit-text-fill-color: #ebdd78;
    font-size: 15px;
  }
`;
