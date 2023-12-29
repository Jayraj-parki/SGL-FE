import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Beadssidebar from "../../Filterssidebar/beadssidebar";
import { useNavigate } from "react-router-dom";

const DiamondsHome = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [diamonds, setDiamonds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiamonds = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getdiamonds");
        if (response.ok) {
          const data = await response.json();
          setDiamonds(data);
          setIsLoading(false);
        } else {
          const errorMessage = await response.text();
          console.error(
            `Failed to fetch Diamonds. Server response: ${errorMessage}`
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching diamonds:", error.message);
        setIsLoading(false);
      }
    };

    fetchDiamonds();
  }, []);

  const handleViewDetails = (clickedItem) => {
    try {
      // Clear existing item from sessionStorage
      sessionStorage.removeItem("selectedItem");
      setSelectedItem(clickedItem);
      sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));
      // Redirect to the "/diamondscart" route
      navigate("/diamondscart");
    } catch (error) {
      console.error("Error storing item:", error.message);
    }
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
              {diamonds.map((item, index) => (
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
                    <h4 className="item-price">{item.price}</h4>
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

export default DiamondsHome;
