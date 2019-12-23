import React, { useState } from 'react';
import './App.css';
import customersJson from './data/customers.json';
import ordersJson from './data/orders.json';

const EditPanel = () => (
  <form>
    <h3>Edit customer</h3>
    <div className="fields">
      <div>
        <label>First name: </label>
        <input type="text" />
      </div>
      <div>
        <label>Last name: </label>
        <input type="text" />
      </div>
    </div>
    <button>Submit</button>
  </form>   
)

const Customer = ({customer}) => (
    <div className="card">
      <div> Name: {customer.firstname} {customer.lastname}</div>
      <div className="age">Age: {customer.age}</div>
      <button>Edit</button>
      <button>Show/Hide Orders</button>
    </div>
)

const CustomerList = ({customers}) => ( 
  <div>
    {
      customers.map(customer => (
        <Customer customer={customer} key={customer.id}/>
      ))
    }
  </div>
)

const Order = ({order}) => (
  <div className="card">
    <div>{order.title}</div>
    <div>{order.items} items</div>
    <div className="total">Total: {order.total}</div>
  </div>
)

const OrdersList = ({orders}) => (
  <div>
  {
    orders.map(order => (
    <Order order={order}  key={order.id}/>
    ))
  }
  </div>
)

const App = () => {
  const [customers, setCustomers] = useState(customersJson);
  const [orders, setOrders] = useState(ordersJson);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Best Sales App :)</h1>
      </header>
      <EditPanel />
      <div className="content">
        <div>
          <h2>Customers</h2>
          <CustomerList customers={customers} />
        </div>
        <div>
          <h2>Orders</h2>
          <OrdersList orders={orders} />
        </div>
      </div>
    </div>
  );
}

export default App;
