import React from 'react';
import PropTypes from 'prop-types';
import {FormeFieldBase, InputField, Label} from './styles';


function FormField({ label, type, name, value, onChange}){
    const fieldId = ` id_${name}`;
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';
    const hasValue = value.length;

    return(
        <FormeFieldBase className="bgimg">
            <label
                htmlFor={fieldId}
            >
                <InputField
                    as={tag}
                    id={fieldId}
                    type={type}
                    name={name}
                    value={value} 
                    hasValue = {hasValue}
                    onChange={onChange} 
                    required
                />
                <Label.Text>
                    {label}
                     :
                </Label.Text>
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