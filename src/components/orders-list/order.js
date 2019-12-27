import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {OrderPropType} from "../../proptypes";

export const Order = ({order, mix}) => (
    <div className={classNames('card order-details', {[mix]: mix})}>
        <h4 className="order-details__title order-details__item">{order.title}</h4>
        <div className="order-details__item">{order.items} items</div>
        <div className="order-details__item total">Total: {order.total}</div>
    </div>
);

Order.defaultProps = {
  mix: ''
};

Order.propTypes = {
    order: PropTypes.shape(OrderPropType),
    mix: PropTypes.string.isRequired
};