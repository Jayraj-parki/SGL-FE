import React from "react";
import "./AddCart.css";
import Swal from "sweetalert2";
import cartData from "./Cart.json";
import Payment from "./Payment";

class ShoppingCart extends React.Component {
  state = {
    showPayment: false,
    cartItems: cartData,
  };

  handleProceedToCheckout = () => {
    const totalAmount = this.calculateTotal();
    this.setState({ showPayment: true });
    this.onPaymentSuccess(totalAmount);
    // Navigate to the `/payment` page
    window.location.href = `/payment?totalAmount=${totalAmount}`;
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
      <div className="container shopping-cart">
        <h2 className="mb-4 text-center">Shopping Cart</h2>

        <div className="row">
          <div className="col-md-9">
            <div
              className="scroll-container row row-cols-1 row-cols-md-3"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              {this.state.cartItems.map((item) => (
                <div className="col mb-4" key={item.id}>
                  <div className="card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top img-fluid rounded"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Category: {item.category}</p>
                      <p className="card-text">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      <p className="card-text">
                        Quantity: {item.quantity || 1}
                      </p>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Item Actions"
                      >
                        <button
                          onClick={() => this.addItem(item.id)}
                          className="btn btn-success"
                        >
                          +
                        </button>
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
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="cart-summary bg-light p-3 rounded fixed-top-right shadow-lg"
              style={{ zIndex: 1, opacity: 0.95 }}
            >
              <h4 className="text-primary">Order Summary</h4>
              <p className="font-weight-bold">Total Items: {this.totalItems}</p>
              <p className="font-weight-bold">
                Total Cost: ${this.calculateTotal()}
              </p>
              <p>Shipping: Free</p>
              <p>Estimated Tax: ${(this.calculateTotal() * 0.1).toFixed(2)}</p>
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

        {this.state.showPayment && (
          <Payment
            cartItems={this.state.cartItems}
            onPaymentSuccess={this.onPaymentSuccess}
          />
        )}
      </div>
    );
  }
}

export default ShoppingCart;
