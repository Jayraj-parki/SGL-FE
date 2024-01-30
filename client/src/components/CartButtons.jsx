import { useEffect, useState } from "react";
import "./CartButton.css";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const AddCart = ({ onAddToCart, onQuantityChange,isCartOpen }) => {
  console.log(isCartOpen)
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
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
    onQuantityChange(cartQuantity + 1); 
  };

  const decrementCart = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      animateButton();
      onQuantityChange(cartQuantity - 1); 
    }
  };

  // const handleAddToCart = () => {
   
  //   onAddToCart(cartQuantity);
  //   Swal.fire({
  //     icon: "success",
  //     title: "Added to Cart!",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // };

  const handleAddToCart = () => {
    // Check if user data is available in session storage
    if (userData) {
      onAddToCart(cartQuantity);
      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Handle the case where user is not found in session storage
      Swal.fire({
        icon: "error",
        title: "Login First",
        text: "Unable to add item to cart. Please login first ",
      });

      // Redirect to the login page
      window.location.href = "/login";
    }
  };


  const animateButton = () => {
   
    const buttonElement = document.getElementById("add-to-cart-button");

    if (buttonElement) {
      buttonElement.style.backgroundColor = "#FF6347"; 
      setTimeout(() => {
        buttonElement.style.backgroundColor = "#FFA500"; 
      }, 300); 
    }
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
    // transition: "background-color 0.3s, transform 0.3s", // Add smooth transitions
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
        style={{
          backgroundColor: "#FFC777",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div className="text-wrapper-40 m-1 d-flex justify-content-between align-items-center">
          <button
            style={{
              ...wishlistButtonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={addToWishlist}
          >
            <i className="fas fa-heart"></i> Wishlist
          </button>
          <button
            style={{
              ...buttonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={handleAddToCart}
          >
            <i className="fas fa-cart-plus"></i> Add{" "}
            <span
              className="badge bg-secondary mx-1"
              style={{ fontSize: "0.8rem" }}
            >
              {cartQuantity}
            </span>
          </button>
          <button
            style={{
              ...buttonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={incrementCart}
          >
            <i className="fas fa-plus"></i>
          </button>
          <button
            style={{
              ...buttonStyle,
              margin: "0.2rem 0",
              padding: "0.3rem 0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={decrementCart}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};


AddCart.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  isCartOpen:PropTypes.func.isRequired
};

export default AddCart;
