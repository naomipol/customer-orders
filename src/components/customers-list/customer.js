import React, {useState} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {Order} from "../orders-list";
import {Button} from "../ui-kit/button";
import {CustomerWithOrdersPropType} from "../../proptypes";

export const Customer = ({customer, editCustomer, mix, activeCustomerId}) => {
    const [shown, setDetailsVisibility] = useState(false);
    const ordersLength = customer.orders.length;
    const onEditing = customer.id === activeCustomerId;

    const showIconClasses = classNames('fi', 'fi-left', 'fi-sm', {'fi-show': shown, 'fi-hide': !shown});
    const editIconClasses = classNames('fi', {'fi-edit': !onEditing, 'fi-undo': onEditing});

    return (
        <div className={classNames('customer-card', {[mix]: mix})}>
            <div className="customer-card__header">
                <div className="customer-card__info">
                    <h4 className="customer-card__title"> Name: {customer.firstname} {customer.lastname}</h4>
                    <span className="age">Age: {customer.age}</span>
                </div>

                <div className="customer-card__toolbar">
                    {ordersLength ? (
                        <Button onClick={() => setDetailsVisibility(!shown)}>
                            <i className={showIconClasses}/>
                            Orders ({ordersLength})
                        </Button>
                    ) : null}

                    <Button mix="btn_success" onClick={editCustomer} id={customer.id}>
                        <i className={editIconClasses} />
                    </Button>
                </div>
            </div>

            {shown && (
                <div className="customer-card__body">
                    {customer.orders.map(order => <Order key={order.id} order={order}/>)}
                </div>
            )}
        </div>
    );
};

Customer.defaultProps = {
    mix: ''
};

Customer.propTypes = {
    activeCustomerId: PropTypes.number,
    customer: PropTypes.shape(CustomerWithOrdersPropType).isRequired,
    editCustomer: PropTypes.func.isRequired,
    mix: PropTypes.string.isRequired
};
