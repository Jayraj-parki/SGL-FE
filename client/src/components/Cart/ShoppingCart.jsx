
import React, { useEffect, useState } from "react";
import "./AddCart.css";
import { useNavigate } from "react-router-dom";



const ShoppingCart = () => {
  const navigate=useNavigate()
  const [showPayment, setShowPayment] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const user= JSON.parse(sessionStorage.getItem("userData"))
        console.log(user)
        const response = await fetch("https://sgl-be.onrender.com/getallcart");
        const data = await response.json();
        const userCartItems = data.cartItems.filter(item => item.userIds === user._id);
        // const data = await response.json();
        const updatedData = userCartItems.map((item) => ({ ...item, quantity: 1 }));
        setCartItems(updatedData);
        navigate(`/head/${totalItems}`)


      } catch (error) {
        console.error("Error fetching data:", error);
        
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Recalculate grandTotal whenever cartItems change
    const totalCost = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    setGrandTotal(parseFloat(totalCost) + parseFloat(totalCost) * 0.1);
  }, [cartItems]);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index] = { ...updatedCart[index], quantity: newQuantity };
    setCartItems(updatedCart);
  };

  const addItem = (index) => {
    const item = cartItems[index];
    if (item) {
      const newQuantity = (item.quantity || 0) + 1;
      updateQuantity(index, newQuantity);
    }
  };

  const decreaseItem = (index) => {
    const item = cartItems[index];
    if (item) {
      const newQuantity = Math.max((item.quantity || 1) - 1, 1);
      updateQuantity(index, newQuantity);
    }
  };

  const deleteItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleProceedToCheckout = () => {
    const userdata = JSON.parse(sessionStorage.getItem("userData"));
    const username=userdata.username
    // console.log(username,"usernamnlnnj")
    const address="need to give"
    // console.log(userdata.username,"username")
    // console.log(userdata,"jnallj")
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    const totalCost = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    const shipping = 0; // Assuming shipping is free based on your code
    const grandTotal = parseFloat(totalCost) + parseFloat(totalCost) * 0.1;
    const date = new Date().toLocaleDateString();
    const status="Initializing"

    const orderDetails = {
      totalItems,
      totalCost,
      shipping,
      grandTotal,
      username,
      date,
      address,
      status
    };
  
    postUserOrder(orderDetails);
  };

  const postUserOrder = async (orderDetails) => {
    try {
      const response = await fetch("https://sgl-be.onrender.com/postuserorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Order placed successfully:", responseData);
        alert("Order successfully")
        // You can handle success, show a confirmation message, or navigate to a success page
      } else {
        console.error("Failed to place order. Server returned:", response.status, response.statusText);
        // Handle the error, show an error message, or take appropriate action
      }
    } catch (error) {
      console.error("Error posting user order:", error);
      // Handle the error, show an error message, or take appropriate action
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div id="shoppingBag" className="container shopping-cart">
      <h2 className="mb-4 text-center">Shopping Cart</h2>

      <div className="cart-items-grid">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
              <img
                src={`data:image/png;base64,${item.image}`}
                alt={item.name}
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div className="cart-item-details">
              <h5 className="cart-item-name">{item.name}</h5>
              <p className="cart-item-category">Category: {item.subtype}</p>
              {/* <p className="cart-item-price">${item.price.toFixed(2)}</p> */}
              <p className="cart-item-price">${item.price}</p>

              <div className="cart-item-actions">
                <button onClick={() => addItem(index)} className="btn btn-success">
                  +
                </button>
                <span className="quantity">{item.quantity || 1}</span>
                <button onClick={() => decreaseItem(index)} className="btn btn-warning">
                  -
                </button>
                <button onClick={() => deleteItem(index)} className="btn btn-danger">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary bg-light p-3 rounded">
        <div className="order-summary">
          <h4 className="text-primary">Order Summary</h4>
          <p className="font-weight-bold">Total Items: {totalItems}</p>
          <p className="font-weight-bold">Total Cost: ${calculateTotal()}</p>
          <p>Shipping: Free</p>
       
        </div>

        <div className="invoice-block">
          <hr />
          <p className="font-weight-bold" style={{ textAlign: "end", paddingRight: "35px" }}>
            Grand Total: ${grandTotal.toFixed(2)}
          </p>
          <div style={{ textAlign: "end" }}>
            <button
              className="btn btn-primary"
              style={{ width: "200px", paddingBottom: "30px" }}
              onClick={() => handleProceedToCheckout()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};



export default ShoppingCart;