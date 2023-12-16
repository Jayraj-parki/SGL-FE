import { useState } from "react";
import "./AddCart.css";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const AddCart = ({ onAddToCart }) => {
  const addToWishlist = () => {
    // Add your logic for adding to the wishlist here
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [cartQuantity, setCartQuantity] = useState(1);

  const incrementCart = () => {
    setCartQuantity(cartQuantity + 1);
    animateButton();
  };

  const decrementCart = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      animateButton();
    }
  };

  const handleAddToCart = () => {
    // Trigger the callback to show the cart overlay
    onAddToCart(cartQuantity);
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const animateButton = () => {
    // Add animation or color change for button on increment/decrement
    // Example: You can use CSS classes or inline styles to change the color
  };

  const buttonStyle = {
    backgroundColor: "#FFA500", // Orange
    color: "#FFFFFF", // Text color
    padding: "0.5rem 1rem", // Improved padding for better accessibility
    borderRadius: "0.25rem", // Add border radius for rounded corners
    border: "none", // Remove border
    marginRight: "0.5rem", // Adjust as needed
    cursor: "pointer", // Change cursor on hover
    fontSize: "1rem", // Font size for better readability
    transition: "background-color 0.3s, transform 0.3s", // Add smooth transitions
    display: "inline-flex", // Ensures constant button size regardless of content
    alignItems: "center", // Center content vertically
  };

  const wishlistButtonStyle = {
    backgroundColor: "#FFD700", // Gold
    color: "#FFFFFF", // Text color
    padding: "0.5rem 1rem", // Improved padding for better accessibility
    borderRadius: "0.25rem", // Add border radius for rounded corners
    border: "none", // Remove border
    marginRight: "0.5rem", // Adjust as needed
    cursor: "pointer", // Change cursor on hover
    fontSize: "1rem", // Font size for better readability
    transition: "background-color 0.3s, transform 0.3s", // Add smooth transitions
    display: "inline-flex", // Ensures constant button size regardless of content
    alignItems: "center", // Center content vertically
  };

  // Add hover effects
  buttonStyle[":hover"] = {
    backgroundColor: "#FF8000", // Lighter Orange on hover
    transform: "scale(1.05)", // Scale up on hover
  };

  wishlistButtonStyle[":hover"] = {
    backgroundColor: "#FFEC8B", // Lighter Gold on hover
    transform: "scale(1.05)", // Scale up on hover
  };

  return (
    <div className="container mt-3">
      <div
        className="p-3 add-cart-container"
        style={{ backgroundColor: "#FFC777", display: "flex" }}
      >
        <div className="text-wrapper-40 m-1 d-flex justify-content-between align-items-center">
          <button style={wishlistButtonStyle} onClick={addToWishlist}>
            <i className="fas fa-heart"></i> Wishlist
          </button>
          <button style={buttonStyle} onClick={handleAddToCart}>
            <i className="fas fa-cart-plus"></i> Add{" "}
            <span
              className="badge bg-secondary mx-1"
              style={{ fontSize: "0.8rem" }}
            >
              {cartQuantity}
            </span>
          </button>
          <button style={buttonStyle} onClick={incrementCart}>
            <i className="fas fa-plus"></i>
          </button>
          <button style={buttonStyle} onClick={decrementCart}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

// Define PropTypes for the component
AddCart.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default AddCart;
