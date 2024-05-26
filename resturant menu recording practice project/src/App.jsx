import React, { useState } from 'react'
import Tables from './components/Tables'
import InputForm from './components/InputForm'

const App = () => {

  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (orderId) => {
    // Filter out the order to be deleted
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);

    // Update local storage (optional, see note below)
    localStorage.setItem("myFormData", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <InputForm addOrder={addOrder} />
      <Tables orders={orders} removeOrder={removeOrder}/>
    </div>
  )
}

export default App