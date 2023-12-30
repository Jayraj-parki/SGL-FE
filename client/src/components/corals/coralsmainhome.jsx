import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Perals/PearlsHome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CircularProgress from "@mui/material/CircularProgress";

const Coralmain = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [corals, setCorals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCorals = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getcorals");

        if (response.ok) {
          const data = await response.json();
          setCorals(data);
          setIsLoading(false);
        } else {
          const errorMessage = await response.text();
          console.error(
            `Failed to fetch Corals. Server response: ${errorMessage}`
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching corals:", error.message);
        setIsLoading(false);
      }
    };

    fetchCorals();
  }, []);

  const handleViewDetails = (clickedItem) => {
    setSelectedItem(clickedItem);
    sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));
    navigate("/diamondscart");
  };

  return (
    <div className="pearlshome-container">
      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {!isLoading && (
        <div className="peralshome-main-con">
          <div className="perals-side-nav">
            <Beadssidebar />
          </div>
          <div className="perals-map-area">
            <div className="beadsmain-con">
              {corals.map((item, index) => (
                <div key={index}>
                  <div
                    className={`beads-box ${
                      selectedItem === item ? "selected" : ""
                    }`}
                    onClick={() => handleViewDetails(item)}
                  >
                    <img
                      src={`data:image/png;base64,${item.image}`}
                      alt="jewelry"
                      width="50%"
                      height="50%"
                      className="beads-image"
                    />
                    <p className="pearlsname">{item.name}</p>
                    <h4 className="">{item.price}</h4>
                    <button
                      className="buy-now-button"
                      onClick={() => handleViewDetails(item)}
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coralmain;
