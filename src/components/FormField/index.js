import React from 'react';
import PropTypes from 'prop-types';
import {FormeFieldBase, InputField, Label} from './styles';


function FormField({ label, type, name, value, onChange, suggestions}){
    const fieldId = ` id_${name}`;
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';
    const hasValue = value.length;
    const hasSuggestions = Boolean(suggestions.length);

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
                    autoComplete={hasSuggestions ? 'off' : 'on'}
                    list={ hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
                />
                <Label.Text>
                    {label}
                     :
                </Label.Text>
                {
                    hasSuggestions && (
                        <datalist id={`suggestionFor_${fieldId}`}>
                        { 
                            suggestions.map((suggestion) => (
                                <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                                    {suggestion}
                                </option>
                            ))
                        }
                        </datalist>
                    )
                }
                
            </label>
        </FormeFieldBase>
    );
}

FormField.defaultProps ={
    type:'text',
    value: '',
    onChange: () => {},
    suggestions: [],
};

FormField.propTypes = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.string, 
    onChange: PropTypes.func.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.string),
}
export default FormField;