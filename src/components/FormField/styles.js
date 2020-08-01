import styled, {css} from 'styled-components';

export const FormeFieldBase = styled.div`
  color: var(--white);
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  textarea {
    min-height: 150px;
    max-width: 100%;
    padding-top:10px;
  }
  input[type="color"] {
    padding-left: 50px;
  }
  
`;

export const Label = styled.label``;

Label.Text = styled.span`
  color: var(--primary);
  height: 30px;
  position: absolute; 
  top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

export const InputField = styled.input`
  display:block;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  background-color: rgb(220,220,220,0.1);
  border: 1px solid var(--white);
  padding-left: 10px;
  padding-right: 10px;
  color: var(--primary);

  &:focus, &:active, &:hover,&:-webkit-autofill{
    -webkit-box-shadow: 0 0 0px 1000px #161616 inset;
    -webkit-text-fill-color: var(--primary);
    font-size: 15px;
    border-bottom: 3px solid var(--white);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-4px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
    }
  }
`;
