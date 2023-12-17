import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Razorpay from "razorpay";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Payment = ({ cartItems, totalAmount, onPaymentSuccess }) => {
  const [stripe, setStripe] = React.useState(null);
  const [razorpay, setRazorpay] = React.useState(null);

  React.useEffect(() => {
    const initializeStripe = async () => {
      try {
        setStripe(await loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY"));
      } catch (error) {
        console.error("Error initializing Stripe:", error);
        showErrorMessage("Failed to initialize payment gateway.");
      }
    };

    initializeStripe();

    // Initialize Razorpay
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Your Company Name",
      description: "Payment for your order",
      order_id: "order_xyz", // Replace with your actual order ID
      handler: (response) => {
        console.log(response);
        response.razorpay_payment_id
          ? onPaymentSuccess(totalAmount)
          : showErrorMessage("Payment failed. Please try again.");
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "1234567890",
      },
      theme: {
        color: "#F37254",
      },
    };

    setRazorpay(new Razorpay(options));
  }, [cartItems, totalAmount, onPaymentSuccess]);

  const handleCardPayment = async () => {
    if (stripe) {
      try {
        const session = await stripe.redirectToPayment({
          lineItems: cartItems.map((item) => ({
            price: item.price * 100,
            quantity: item.quantity || 1,
          })),
          mode: "payment",
          successUrl: "YOUR_SUCCESS_URL",
          cancelUrl: "YOUR_CANCEL_URL",
        });

        session.error
          ? showErrorMessage(session.error.message)
          : console.error("Error:", session.error);
      } catch (error) {
        console.error("Error:", error);
        showErrorMessage("An error occurred during payment.");
      }
    } else {
      console.error("Stripe instance not initialized");
      showErrorMessage(
        "Stripe instance not initialized. Please try again later."
      );
    }
  };

  const handleRazorpayPayment = () => {
    razorpay
      ? razorpay.open()
      : showErrorMessage(
          "Razorpay instance not initialized. Please try again later."
        );
  };

  const showErrorMessage = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: message,
    });
  };

  return (
    <div className="checkout-container">
      <h2 className="mb-4 text-center">Payment</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity || 1}
            </li>
          ))}
        </ul>
        <p className="total-amount">Total Amount: ${totalAmount}</p>
      </div>

      <div className="payment-options">
        <button className="btn btn-primary" onClick={handleCardPayment}>
          Pay with Card
        </button>
        <button className="btn btn-primary" onClick={handleRazorpayPayment}>
          Pay with Razorpay (UPI, etc.)
        </button>
      </div>
    </div>
  );
};

Payment.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalAmount: PropTypes.string.isRequired,
  onPaymentSuccess: PropTypes.func.isRequired,
};

export default Payment;
