import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from "../ui-kit";
import {isValidForm} from "./utils";
import './styles.css';

const INITIAL_CUSTOMER_STATE = {firstname: '', lastname: ''};

export const EditPanel = ({customer, handler, resetForm}) => {
    const [customerData, setCustomerData] = useState(INITIAL_CUSTOMER_STATE);

    useEffect(() => {
        if (typeof customer.id === 'number') {
            setCustomerData({
                firstname: customer.firstname,
                lastname: customer.lastname
            });
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
                <h3 className="form__title">Edit customer</h3>
                {!customer.id && <p className="form__note">Please select a customer to edit</p>}
            </header>

            <div className="form__body">
                <div className="form__row">
                    <Input
                        value={customerData.firstname}
                        onChange={inputHandler}
                        disabled={disabled}
                        label={'First name: '}
                        name="firstname"/>
                </div>
                <div className="form__row">
                    <Input
                        value={customerData.lastname}
                        onChange={inputHandler}
                        disabled={disabled}
                        label={'Last name: '}
                        name="lastname"/>
                </div>
            </div>

            <Button
                mix="btn_primary btn_md"
                disabled={!isValidForm(customer.id, customerData)}
                onClick={submitHandler}>
                Submit
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