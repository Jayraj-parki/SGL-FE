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

  
  const startBlinking = () => {
    setIsProfileBlinking(true);

    
    setTimeout(() => {
      setIsProfileBlinking(false);
    }, 3000);
  };

  const openSearchBar = () => {
    setIsSearchBarOpen(true);
  };

  
  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
  };

 
  return (
    <div className="main-nav-section">
     
      <div className="main-sub-nav" >
        <div
          className={`main-sub-nav ${isProfileBlinking ? "blinking" : ""}`}
          onClick={()=>navigate("/login")}
        >
          <img src={profile} alt="profile" className="profile" />
        </div>
      </div>

      
     
     
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
