import React, {useState} from 'react';
import './App.css';
import customersJson from './data/customers.json';
import ordersJson from './data/orders.json';
import {EditPanel} from "./components/edit-panel";
import {OrdersList} from "./components/orders-list";
import {CustomersController} from "./controllers/customers";


const ACTIVE_CUSTOMER_INITIAL_STATE = {};
const EDIT_FORM_DEFAULT_KEY = 'edit_form';

const App = () => {
    const [customers, setCustomers] = useState(customersJson);
    const [orders] = useState(ordersJson);
    const [activeCustomer, setActiveCustomer] = useState(ACTIVE_CUSTOMER_INITIAL_STATE);

    const resetActiveCustomerDetails = () => {
        setActiveCustomer(ACTIVE_CUSTOMER_INITIAL_STATE);
    };

    const patchCustomers = (updatedCustomer) => {
        const patchedCustomers = customers.map(user => user.id === updatedCustomer.id ? updatedCustomer : user);
        setCustomers(patchedCustomers);

        resetActiveCustomerDetails();
    };

    const editCustomer = ({target}) => {
        const targetId = Number(target.id);
        const customer = activeCustomer.id !== targetId && customers.find(customer => customer.id === targetId);

        setActiveCustomer(customer || ACTIVE_CUSTOMER_INITIAL_STATE);
    };

    return (
        <div className="app">
            <header className="header">
                <h1 className="title">Best Sales App :)</h1>
            </header>

            <div className="content">
                <div className="grid">
                    <div className="grid__item grid__item_12">
                        <div className="block edit-panel">
                            <EditPanel
                                customer={activeCustomer}
                                handler={patchCustomers}
                                resetForm={resetActiveCustomerDetails}
                                key={activeCustomer.id || EDIT_FORM_DEFAULT_KEY}/>
                        </div>
                    </div>

                    <div className="grid__item grid__item_6">
                        <div className="block">
                            <h2>Customers</h2>

                            <CustomersController
                                activeCustomerId={activeCustomer.id}
                                customers={customers}
                                orders={orders}
                                editCustomer={editCustomer}
                            />
                        </div>
                    </div>

                    <div className="grid__item grid__item_6">
                        <div className="block">
                            <h2>Orders</h2>
                            <OrdersList orders={orders}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
