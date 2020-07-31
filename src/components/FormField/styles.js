import styled from 'styled-components';


export const FormeFieldBase = styled.div`
  color: var(--white);
  padding: 10px;
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 10px;
  }
`;

export const InputField = styled.input`
  display:block;
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
