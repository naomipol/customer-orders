import React from 'react';
import {noop} from "../noop";
import PropTypes from 'prop-types';
import './styles.css';

export const Input = (
    {
        placeholder,
        label,
        type,
        value,
        onChange,
        onBlur,
        disabled,
        name
    }
) => {
    return (
        <label className="input">
            {label && (
                <span className="input__label">{label}</span>
            )}
            <input
                name={name}
                type={type}
                className="input__field"
                value={value}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}/>
        </label>
    );
};

Input.defaultProps = {
    placeholder: '',
    label: '',
    value: '',
    type: 'text',
    onChange: noop,
    onBlur: noop,
    disabled: false,
    name: '',
    mix: ''
};

Input.propTypes = {
    label: PropTypes.node,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    mix: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool
};