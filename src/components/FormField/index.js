import React from 'react';
import PropTypes from 'prop-types';
import {FormeFieldBase, InputField} from './styles';


function FormField({ label, type, name, value, onChange}){
    const fieldId = ` id_${name}`;

    return(
        <FormeFieldBase>
            <label
                htmlFor={fieldId}
            >
                <InputField
                    id={fieldId}
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

FormField.defaultProps ={
    type:'text',
    value: '',
};

FormField.propTypes = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.string, 
    onChange: PropTypes.func.isRequired,
}
export default FormField;