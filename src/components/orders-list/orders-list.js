import React from 'react';
import PropTypes from 'prop-types';
import {Order} from "./order";
import {OrderPropType} from "../../proptypes";
import './styles.css';

export const OrdersList = ({orders}) => (
    <div>
        {orders.map(order => (
            <Order order={order} key={order.id}/>
        ))}
    </div>
);

OrdersList.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape(OrderPropType))
};
