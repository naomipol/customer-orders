import PropTypes from 'prop-types';

export const OrderPropType = {
    id: PropTypes.number.isRequired,
    customer_id: PropTypes.number.isRequired,
    total: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export const CustomerPropType = {
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};


