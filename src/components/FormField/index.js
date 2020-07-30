import React from 'react';
import { FormeFieldBase, InputField} from './styles';

function FormField({ label, type, name, value, onChange}){
    return(
        <FormeFieldBase>
            <label>
                <InputField 
                    placeholder={label}
                    type={type}
                    name={name}
                    value={value} 
                    onChange={onChange} 
                />
            </label>
        </FormeFieldBase>
    );
}

export default FormField;