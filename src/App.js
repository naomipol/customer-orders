import React, {useState} from 'react';
import './App.css';
import customersJson from './data/customers.json';
import ordersJson from './data/orders.json';
import {EditPanel} from "./components/edit-panel";
import {OrdersList} from "./components/orders-list";
import {CustomerList} from "./components/customers-list";

const App = () => {
    const [customers, setCustomers] = useState(customersJson);
    const [orders, setOrders] = useState(ordersJson);

    return (
        <div className="app">
            <header className="header">
                <h1 className="title">Best Sales App</h1>
            </header>

            <div className="content">
                <div className="grid">
                    <div className="grid__item grid__item_12">
                        <div className="block edit-panel">
                            <EditPanel/>
                        </div>
                    </div>

                    <div className="grid__item grid__item_6">
                        <div className="block">
                            <h2>Customers</h2>
                            <CustomerList customers={customers}/>
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
