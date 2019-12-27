import React from 'react';
import {Customer} from "./customer";
import PropTypes from "prop-types";
import {CustomerWithOrdersPropType} from "../../proptypes";
import './styles.css';


export const CustomerList = ({customers, editCustomer, activeCustomerId}) => (
    <div>
        {customers.map(customer => (
            <Customer
                key={customer.id}
                customer={customer}
                editCustomer={editCustomer}
                activeCustomerId={activeCustomerId}
            />
        ))}
    </div>
);

CustomerList.propTypes = {
    activeCustomerId: PropTypes.number,
    customers: PropTypes.arrayOf(PropTypes.shape(CustomerWithOrdersPropType)).isRequired,
    editCustomer: PropTypes.func.isRequired
};
