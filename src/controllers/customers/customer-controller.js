import React from 'react';
import PropTypes from 'prop-types';
import {CustomerList} from "../../components/customers-list";
import {CustomerPropType} from "../../proptypes";

export const CustomersController = ({customers, orders, editCustomer, activeCustomerId}) => {
    const prepareData = customers.map(customer => ({
        ...customer,
        orders: orders.filter(order => order.customer_id === customer.id)
    }));

    return (
        <CustomerList customers={prepareData} editCustomer={editCustomer} activeCustomerId={activeCustomerId} />
    );
};

CustomersController.propTypes = {
    activeCustomerId: PropTypes.number,
    editCustomer: PropTypes.func.isRequired,
    customers: PropTypes.arrayOf(PropTypes.shape(CustomerPropType)).isRequired
};

