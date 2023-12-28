import React from "react";
import "./AddCart.css"; // Include your CSS file
import Swal from "sweetalert2";

import cartData from "./Cart.json";

class ShoppingCart extends React.Component {
  state = {
    showPayment: false,
    cartItems: cartData,
  };

  handleProceedToCheckout = () => {
    const totalAmount = this.calculateTotal();
    this.setState({ showPayment: true });
    this.onPaymentSuccess(totalAmount);
  };

  onPaymentSuccess = (totalAmount) => {
    console.log("Payment successful! Total amount:", totalAmount);
  };

  addItem = (itemId) => {
    const updatedCart = this.state.cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    this.setState({ cartItems: updatedCart });
    this.showSuccessMessage("Item added to the cart!");
  };

  decreaseItem = (itemId) => {
    const updatedCart = this.state.cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
        : item
    );
    this.setState({ cartItems: updatedCart });
    this.showSuccessMessage("Quantity decreased!");
  };

  deleteItem = (itemId) => {
    const updatedCart = this.state.cartItems.filter(
      (item) => item.id !== itemId
    );
    this.setState({ cartItems: updatedCart });
    this.showSuccessMessage("Item removed from the cart!");
  };

  showSuccessMessage = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: message,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  calculateTotal = () => {
    return this.state.cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  totalItems = this.state.cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  render() {
    return (
      <div id="shoppingBag" className="container shopping-cart">
        <h2 className="mb-4 text-center">Shopping Cart</h2>

        <div className="cart-items-grid">
          {this.state.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h5 className="cart-item-name">{item.name}</h5>
                <p className="cart-item-category">Category: {item.category}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-actions">
                  <button
                    onClick={() => this.addItem(item.id)}
                    className="btn btn-success"
                  >
                    +
                  </button>
                  <span className="quantity">{item.quantity || 1}</span>
                  <button
                    onClick={() => this.decreaseItem(item.id)}
                    className="btn btn-warning"
                  >
                    -
                  </button>
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    className="btn btn-danger"
                  >
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
            <p className="font-weight-bold">Total Items: {this.totalItems}</p>
            <p className="font-weight-bold">
              Total Cost: ${this.calculateTotal()}
            </p>
            <p>Shipping: Free</p>
            <p>Estimated Tax: ${(this.calculateTotal() * 0.1).toFixed(2)}</p>
          </div>

          <div className="invoice-block">
            <hr />
            <p className="font-weight-bold">
              Grand Total: $
              {(
                parseFloat(this.calculateTotal()) +
                parseFloat(this.calculateTotal()) * 0.1
              ).toFixed(2)}
            </p>
            <button
              className="btn btn-primary btn-block mt-3"
              onClick={() => this.handleProceedToCheckout()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
