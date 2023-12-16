import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import Bootstrap Card component
import StoneidDiamondData from "../Data/RoundDiamondData";
import RadiantDiamondData from "../Data/RadiantDiamondData";
import AsscherDiamondData from "../Data/AsscherDiamondData";
import CushionDiamondData from "../Data/CushionDiamondData";
import EmraldDiamondData from "../Data/EmraldDiamondData";
import HeartDiamondData from "../Data/HeartDiamondData";
import MarquiseDiamondData from "../Data/MarquiseDiamondData";
import OvalDiamondData from "../Data/OvalDiamondData";
import PearDiamondData from "../Data/PearDiamondData";
import PrincessDiamondData from "../Data/PrincessDiamondData";

const DiamondsGrid = ({ selectedShape }) => {
  const navigate = useNavigate()
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const shapeToDataMap = {
    Round: StoneidDiamondData,
    Radiant: RadiantDiamondData,
    Asscher: AsscherDiamondData,
    Cushion: CushionDiamondData,
    Emerald: EmraldDiamondData,
    Heart: HeartDiamondData,
    Marquise: MarquiseDiamondData,
    Oval: OvalDiamondData,
    Pear: PearDiamondData,
    Princess: PrincessDiamondData,
  };

  const data = shapeToDataMap[selectedShape] || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Update the current page when the selected shape changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedShape]);
  return (
    <div className="container">
      {/* Display the current items */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {currentItems.map((item, index) => (
          <div key={index} className="col mb-4">
            <div className="card h-100" onClick={()=>{navigate("/diamondscart")}}>
              <img
                className="card-img-top"
                src={item.imageUrl}
                alt="Diamond image"
              />
              <div className="card-body">
                <h5 className="card-title h5">{item.description}</h5>
                <p className="card-text">Color Grade: {item.colorGrade}</p>
                <p className="card-text">Price: {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ul className="pagination justify-content-center mt-3">
        {[...Array(totalPages)].map((_, index) => (
          <li
            className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
            key={index}
          >
            <button
              className="page-link"
              onClick={() => handlePagination(index + 1)}
              style={{ backgroundColor: "orange" }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiamondsGrid;
