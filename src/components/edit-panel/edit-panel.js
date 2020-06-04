import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from "../ui-kit";
import {isValidForm} from "./utils";
import './styles.css';

const INITIAL_CUSTOMER_STATE = {title: '', items: '', total: ''};

export const EditPanel = ({customer, handler, resetForm, order}) => {
    const [customerData, setCustomerData] = useState(INITIAL_CUSTOMER_STATE);
    useEffect(() => {
        if (typeof customer.id === 'number') {
            setCustomerData({});
        }
    }, [customer]);
    const inputHandler = ({target}) => setCustomerData({...customerData, [target.name]: target.value});
    const submitHandler = e => {
        e.preventDefault();
        handler({...customer, ...customerData});
    };
    const disabled = !customer.id;
    return (
        <form className="form">
            <header className="form__header">
                <h3 className="form__title">New Order</h3>
                {!customer.id && <p className="form__note">Please select a customer to edit</p>}
            </header>

            <div className="form__body">
                <div className="form__row">
                    <Input
                        value={customerData.firstname}
                        onChange={inputHandler}
                        disabled={disabled}
                        label={'Title: '}
                        name="title"/>
                </div>
                <div className="form__row">
                    <Input
                        value={customerData.lastname}
                        onChange={inputHandler}
                        disabled={disabled}
                        label={'items: '}
                        name="items"/>
                </div>
                <div className="form__row">
                    <Input
                        value={customerData.lastname}
                        onChange={inputHandler}
                        disabled={disabled}
                        label={'total: '}
                        name="total"/>
                </div>
            </div>
            <Button
                mix="btn_primary btn_md"
                disabled={!isValidForm(customer.id, customerData)}
                onClick={submitHandler}>
                Add new order
            </Button>

            {customer.id && (
                <Button
                    mix="btn_md btn_undo"
                    onClick={resetForm}>
                    Undo <i className="fi fi-undo fi-right"/>
                </Button>
            )}
        </form>
    );
};

EditPanel.defaultProps = {
    customer: {}
};

EditPanel.propTypes = {
    customer: PropTypes.shape({
        id: PropTypes.number.required,
        firstname: PropTypes.string.required,
        lastname: PropTypes.string.required,
        age: PropTypes.number.required
    }),
    handler: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
};