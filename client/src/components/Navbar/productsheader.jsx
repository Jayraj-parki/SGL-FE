// Productheader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./productheader.css";

const Productheader = ({ onSelectProductType }) => {
  const navigate = useNavigate();

  const handleProductClick = (productType) => {
    navigate(`/${productType}`);
    onSelectProductType(productType); // Callback to update the selected product type
  };

  return (
    <div className="product-nav-section">
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("gems")}
      >
        Gems
      </div>
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("beads")}
      >
        Beads
      </div>
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("diamonds")}
      >
        Diamonds
      </div>
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("jewelery")}
      >
        Jewellery
      </div>
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("astrology")}
      >
        Astrology gems
      </div>
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("peralhome")}
      >
        Pearls
      </div>
      <div
        className="product-head-sub-section"
        onClick={() => handleProductClick("corals")}
      >
        Corals
      </div>
    </div>
  );
};
Productheader.propTypes = {
  onSelectProductType: PropTypes.func.isRequired,
};
export default Productheader;
