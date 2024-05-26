import React, { useRef } from "react";

const InputForm = ({ addOrder }) => {

const idRef = useRef();
const priceRef = useRef();
const dishRef = useRef();
const tnoRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

const formData = {
    id : idRef.current.value,
    price : priceRef.current.value,
    dish : dishRef.current.value,
    tableNumber : tnoRef.current.value, 
}


// Get existing orders from localStorage
const existingOrders = JSON.parse(localStorage.getItem("myFormData")) || [];
// Add the new order to the existing orders
const updatedOrders = [...existingOrders, formData];
// Store the updated orders array in localStorage
localStorage.setItem("myFormData", JSON.stringify(updatedOrders));



// console.log("Order added successfully -> " +  formData)
// if we are to log the object with some string message we do it like this by adding in Json.strinify method to the object so that we 
// can see the object content in form of a string else we would just be seeing a string initial message text and an object being logged 
console.log(`Order added successfully -> ${JSON.stringify(formData)}`);

// sending my form data to the add order function in app which calls setorder function that finally appends our order details 
addOrder(formData);

idRef.current.value ="";
priceRef.current.value ="";
dishRef.current.value ="";
tnoRef.current.value="";
    
  };

  return (
    <>
      <form >
        <label htmlFor="uId">Unique Order ID:</label>
        <input type="number" id="uId" required ref={idRef}/>

        <label htmlFor="iPrice">Choose Price:</label>
        <input type="number" id="iPrice" required ref={priceRef}/>

        <label htmlFor="dishName">Choose Dish:</label>
        <input type="text" id="dishName" required ref={dishRef}/>

        <label htmlFor="tableNo">Choose a Table</label>
        <select name="tableNo" id="tableNo" ref={tnoRef}>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>

        <button type="submit" onClick={handleFormSubmit}>
          Add to bill
        </button>
      </form>
    </>
  );
};

export default InputForm;
