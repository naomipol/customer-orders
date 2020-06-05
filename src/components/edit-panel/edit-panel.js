import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from "../ui-kit";
import {isValidForm} from "./utils";
import './styles.css';

const INITIAL_CUSTOMER_STATE = {title: '', items: '', total: ''};

export const EditPanel = ({customer, handler, resetForm, active, setActive}) => {
    const [customerData, setCustomerData] = useState(INITIAL_CUSTOMER_STATE);
    const inputHandler = ({target}) => setCustomerData({...customerData, [target.name]: target.value});
    const submitHandler = e => {
        e.preventDefault();
        setActive(false)
        handler({...customerData});
        setCustomerData(INITIAL_CUSTOMER_STATE);
    };
    return (
        <form className="form">
            <header className="form__header">
                <h3 className="form__title">New Order</h3>
                    {active && <p className="form__note">New order for: {`${customer.firstname} ${customer.lastname}`}</p>}
            </header>

            <div className="form__body">
                <div className="form__row">
                    <Input
                        value={customerData.title}
                        onChange={inputHandler}
                        disabled={!active}
                        label={'Title: '}
                        name="title"/>
                </div>
                <div className="form__row">
                    <Input
                        value={customerData.items}
                        onChange={inputHandler}
                        disabled={!active}
                        label={'items: '}
                        name="items"/>
                </div>
                <div className="form__row">
                    <Input
                        value={customerData.total}
                        onChange={inputHandler}
                        disabled={!active}
                        label={'total: '}
                        name="total"/>
                </div>
            </div>
            <Button
                mix="btn_primary btn_md"
                disabled={!isValidForm(active, customerData)}
                onClick={submitHandler}>
                Add new order
            </Button>

            {active && (
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