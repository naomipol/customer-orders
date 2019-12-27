import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {Button} from "../ui-kit/button";
import {CustomerPropType} from "../../proptypes";

export const Customer = ({customer}) => {

    const showIconClasses = classNames('fi', 'fi-left', 'fi-sm', 'fi-show');
    const editIconClasses = classNames('fi', 'fi-left', 'fi-edit');

    return (
        <div className='customer-card'>
            <div className="customer-card__header">
                <div className="customer-card__info">
                    <h4 className="customer-card__title"> Name: {customer.firstname} {customer.lastname}</h4>
                    <span className="age">Age: {customer.age}</span>
                </div>

                <div className="customer-card__toolbar">
                    <Button>
                        <i className={showIconClasses}/>
                        Show/Hide Orders
                    </Button>
                    <Button mix="btn_success">
                        <i className={editIconClasses} />
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    );
};


Customer.propTypes = {
    customer: PropTypes.shape(CustomerPropType).isRequired,
};
