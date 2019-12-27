import React from 'react';
import {Customer} from "./customer";
import PropTypes from "prop-types";
import {CustomerPropType} from "../../proptypes";
import './styles.css';


export const CustomerList = ({customers}) => (
    <div>
        {customers.map(customer => (
            <Customer
                key={customer.id}
                customer={customer}
            />
        ))}
    </div>
);

CustomerList.propTypes = {
    customers: PropTypes.arrayOf(PropTypes.shape(CustomerPropType)).isRequired,
};
