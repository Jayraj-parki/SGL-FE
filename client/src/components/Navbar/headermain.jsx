import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./headermain.css";
import logo from "./Nav-images/logo.png";
import profile from "./Nav-images/Frame 75.png";
import SearchBarPopup from "./SearchBarPopup";


import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Mainheader = ({ selectedProductType,  children }) => {
  // State for managing the search bar and profile popup
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isProfileBlinking, setIsProfileBlinking] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // const userData1 = sessionStorage.getItem("userData");

  // const handleCartClick = () => {
  //   if (!userData1) {
  //     alert("Please login to unlock the website features.");
  //   } else {
  //     navigate("/cart").then(() => {
  //       console.log("Unlocking website features...");
  //       startBlinking(); // or any other function you want to call
  //     });
  //   }
  // };

  const wish=()=>{
    if (!userData1) {
      alert("Please login to unlock the website features.");
    } else {
      navigate("/whishlist").then(() => {
        console.log("Unlocking website features...");
        startBlinking(); // or any other function you want to call
      });
    }
  }

  
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

  const userData1 = sessionStorage.getItem("userData");
//this is to handleCartClick
  const handleCartClick = () => {
    if (!userData1) {
      alert("Please login to unlock the website features.");
    } else {
      navigate("/cart").then(() => {
        console.log("Unlocking website features...");
        startBlinking(); // or any other function you want to call
      });
    }
  };

  return (
    <div className="main-nav-section">
      <div className="main-sub-nav">
        <div
          className={`main-sub-nav ${isProfileBlinking ? "blinking" : ""}`}
          onClick={() => navigate("/login")}
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
      <div className="main-sub-nav" onClick={() => navigate("/contact")}>
        Contact us
      </div>
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
            {/* <FaHeart className="icons" /> */}
          </span>
        </p>
      </div>
      <div className="main-sub-nav" id="head-extra-class" onClick={wish} >
        {/* () => navigate("/wishlist") */}
        {/* <p>
          Wishlist{" "}

          <span onClick={() => navigate("/wishlist")}>
            <FaHeart className="icons" />
          </span>
        </p> */}

        
        <Stack style={{ paddingBottom: "15px" }}>
          <Badge badgeContent={4} color="secondary">
            <FaHeart style={{ height: "20px", width: "20px" }} color="action" />
          </Badge>
        </Stack>
      </div>
      <div
        style={{ paddingTop: "10px" }}
        className="main-sub-nav"
        id="head-extra-class"
        onClick={handleCartClick}
      >
       

        <p>
          <Stack>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Stack>
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
  // userData: PropTypes.object, 
};

export default Mainheader;
