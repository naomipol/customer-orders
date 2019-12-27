import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {noop} from "../noop";
import './styles.css';

export const Button = (
    {
        children,
        onClick,
        disabled,
        mix,
        type,
        id
    }
) => {
    const btnClasses = classNames('btn', {[mix]: mix});
    const idProp = id ? {id} : {};
    return (
        <button
            className={btnClasses}
            {...{
                disabled,
                onClick,
                type,
                ...idProp
            }}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    onClick: noop,
    type: 'button',
    disabled: false,
    mix: '',
    id: ''
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    mix: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

