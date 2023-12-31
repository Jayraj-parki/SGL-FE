import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./headermain.css";
import logo from "./Nav-images/logo.png";
import profile from "./Nav-images/Frame 75.png";
import SearchBarPopup from "./SearchBarPopup";
import Profile from "../Home/Profile";

const Mainheader = ({ selectedProductType, userData }) => {
  // State for managing the search bar and profile popup
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isProfileBlinking, setIsProfileBlinking] = useState(false);
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Event handler to open the search bar
  const startBlinking = () => {
    setIsProfileBlinking(true);

    // Stop blinking after 3 seconds
    setTimeout(() => {
      setIsProfileBlinking(false);
    }, 3000);
  };

  const openSearchBar = () => {
    setIsSearchBarOpen(true);
  };

  // Event handler to close the search bar
  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
  };

  // Event handler to toggle the profile popup
  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  };

  return (
    <div className="main-nav-section">
      {/* Profile icon with click event to toggle the profile popup */}
      <div className="main-sub-nav" onClick={toggleProfilePopup}>
        <div
          className={`main-sub-nav ${isProfileBlinking ? "blinking" : ""}`}
          onClick={toggleProfilePopup}
        >
          <img src={profile} alt="profile" className="profile" />
        </div>
      </div>

      {/* Popup container for the Profile component */}
      {isProfilePopupOpen && (
        <div
          className="profile-popup"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000, // Adjust z-index as needed
            maxWidth: "300px", // Adjust max-width as needed
          }}
        >
          <Profile
            onClose={() => setIsProfilePopupOpen(false)}
            selectedProductType={selectedProductType}
            userData={userData}
            startBlinking={startBlinking}
          />
        </div>
      )}

      {/* Other menu items (replace with your actual menu items) */}
      <div className="main-sub-nav" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="main-sub-nav" onClick={() => navigate("/aboutus")}>
        About us
      </div>
      <div className="main-sub-nav" onClick={() => navigate("/contact")}>Contact us</div>
      <div className="main-sub-nav">
        <img src={logo} alt="logo" />
      </div>
      <div className="main-sub-nav" onClick={() => navigate("/contact")}>Contact us</div>
      <div className="main-sub-nav" id="head-extra-class">
        <p>
          Search{" "}
          <span onClick={openSearchBar}>
            <FaSearch className="icons" />
          </span>
        </p>
      </div>
      <div className="main-sub-nav" id="head-extra-class">
        <p>
          Blogs{" "}
          <span onClick={() => navigate("/blog")}>
            <FaHeart className="icons" />
          </span>
        </p>
      </div>
      <div className="main-sub-nav" id="head-extra-class">
        <p>
          Wishlist{" "}
          <span onClick={() => navigate("/wishlist")}>
            <FaHeart className="icons" />
          </span>
        </p>
      </div>
      <div
        className="main-sub-nav"
        id="head-extra-class"
        onClick={() => navigate("/cart")}
      >
        <p>
          My cart{" "}
          <span>
            <FaShoppingBag className="icons" />
          </span>
        </p>
      </div>

      {/* Conditionally render SearchBarPopup */}
      {isSearchBarOpen && (
        <SearchBarPopup
          selectedProductType={selectedProductType}
          onClose={closeSearchBar}
        />
      )}
    </div>
  );
};

Mainheader.propTypes = {
  selectedProductType: PropTypes.string.isRequired,
  userData: PropTypes.object, // Adjust the prop type based on your user data structure
};

export default Mainheader;
