// GemsDisplay.js
import React, { useState } from "react";
import { DiamondFilters } from "./Filters";
import { SideNavbar } from "./SideNavbar";
import DiamondsGrid from "./DiamondsGrid";
import "./Style.css";

const DiamondsDisplay = () => {
  const [selectedShape, setSelectedShape] = useState("Round");
  const handleShapeChange = (shape) => {
    setSelectedShape(shape);
    // Handle the selected shape in the parent component if needed
  };
  return (
    <div className="diamonds-display-container">
      <SideNavbar onShapeChange={handleShapeChange} />
      <div className="diamonds-display-content">
        <DiamondFilters />
        <div className="main-content">
          <DiamondsGrid selectedShape={selectedShape} />
        </div>
      </div>
    </div>
  );
};

export default DiamondsDisplay;
