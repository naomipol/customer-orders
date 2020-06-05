import React, {useState} from 'react';
import './App.css';
import customersJson from './data/customers.json';
import ordersJson from './data/orders.json';
import classNames from 'classnames';
import {EditPanel} from "./components/edit-panel";
import {OrdersList} from "./components/orders-list";
import {CustomersController} from "./controllers/customers";
import {Button} from "../src/components/ui-kit";
import './index.css' 

const ACTIVE_CUSTOMER_INITIAL_STATE = null;
const EDIT_FORM_DEFAULT_KEY = 'edit_form';

const App = () => {
    const [customers] = useState(customersJson);
    const [orders, setOrder] = useState(ordersJson);
    const [activeCustomer, setActiveCustomer] = useState(ACTIVE_CUSTOMER_INITIAL_STATE);
    const [shown, setDetailsVisibility] = useState(false);
    const [active, setActive] = useState(false)

    const resetActiveCustomerDetails = () => {
        setActiveCustomer(ACTIVE_CUSTOMER_INITIAL_STATE);
        setActive(false)
    };
    const patchCustomers = (newOrder) => {
        const last = orders.length
        const newOrderObj = {
            id: last+1,
            customer_id: activeCustomer,
            total: newOrder.total,
            items: Number(newOrder.items),
            title: newOrder.title
        }
        setOrder([...orders, newOrderObj])
        resetActiveCustomerDetails();
    };

    const editCustomer = ({target}) => {
        setActive(!active)
        const targetId = Number(target.id);
        const customer = customers.find(customer => customer.id === targetId);
        (activeCustomer !== targetId) ? setActiveCustomer(customer.id) : setActiveCustomer(ACTIVE_CUSTOMER_INITIAL_STATE);
        
    };
    const showIconClasses = classNames('fi', 'fi-left', 'fi-sm', {'fi-show': shown, 'fi-hide': !shown});
    
    const helperShowHide = () => shown ? customers : []
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
                                active={active}
                                customer={customers[activeCustomer-1]}
                                setActive={setActive}
                                handler={patchCustomers}
                                resetForm={resetActiveCustomerDetails}
                                key={activeCustomer || EDIT_FORM_DEFAULT_KEY}/>
                        </div>
                    </div>

                    <div className="grid__item grid__item_6">
                        <div className="block">
                            <div style={{marginBottom: 10, justifyContent: 'space-between', display: 'flex', flexDirection: 'row'}}>
                            <h2>Customer</h2>    
                                <Button onClick={()=> setDetailsVisibility(!shown)}>
                                    <i className={showIconClasses}/>
                                    Show/Hide customers
                                </Button>
                            </div>
                            <CustomersController
                                activeCustomerId={activeCustomer}
                                customers={helperShowHide()}
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
