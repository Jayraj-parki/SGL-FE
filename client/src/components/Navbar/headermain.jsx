import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./headermain.css";
import logo from "./Nav-images/logo.png";
import profile from "./Nav-images/Frame 75.png";
import wishlist from "./Nav-images/Frame 77.png";
import mybag from "./Nav-images/Frame 78.png";
import SearchBarPopup from "./SearchBarPopup";
import PropTypes from "prop-types";

const Mainheader = ({ selectedProductType }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const openSearchBar = () => {
    setIsSearchBarOpen(true);
  };
  const navigate = useNavigate();

  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
  };
  return (
    <>
      <div className="main-nav-section">
        <div className="main-sub-nav" onClick={() => navigate("/")}>
          <img src={profile} alt="profile" className="profile" />
        </div>
        <div className="main-sub-nav" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="main-sub-nav" onClick={() => navigate("/aboutus")}>
          About us
        </div>
        <div className="main-sub-nav">Contact us</div>
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
            Wishlist{" "}
            <span onClick={() => navigate("/wishlist")}>
              <FaHeart className="icons" />
            </span>
          </p>
        </div>
        <div
          className="main-sub-nav"
          id="head-extra-class"
          onClick={() => navigate("/catrcontainer")}
        >
          <p>
            My bag{" "}
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
    </>
  );
};
Mainheader.propTypes = {
  selectedProductType: PropTypes.string.isRequired,
};
export default Mainheader;
