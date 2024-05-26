import React from "react";

const Tables = ({ orders, removeOrder }) => {
  return (
    <>
      <h1>Orders</h1>

      {/* Loop through tables */}
      {["Table 1", "Table 2", "Table 3"].map((tableName) => (
        <div key={tableName}>
          <h2>{tableName}</h2>

          {/* List of orders with delete button */}
          <ul>
            {orders.filter((order) => order.tableNumber === tableName).map(
              (filteredOrder) => (
                <li key={filteredOrder.id}>
                  <span>
                    {/* Display order details */}
                    Order ID: {filteredOrder.id} - Dish: {filteredOrder.dish} - Price: {filteredOrder.price}
                  </span>
                  <button onClick={() => removeOrder(filteredOrder.id)}>
                    Delete
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Tables;