import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PearlsHome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CircularProgress from "@mui/material/CircularProgress";

const PearlsHome = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [pearls, setPearls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPearls = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getpearls");
        if (response.ok) { 
          const data = await response.json();
          setPearls(data);
          setIsLoading(false);
        } else {
          const errorMessage = await response.text();
          console.error(
            `Failed to fetch Pearls. Server response: ${errorMessage}`
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching pearls:", error.message);
        setIsLoading(false);
      }
    };

    fetchPearls();
  }, []);

  const handleViewDetails = (clickedItem) => {
    setSelectedItem(clickedItem);
    sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));
    // Update the route based on your navigation setup
    // For example, assuming "/diamondscart" is the route to navigate to
    // Replace this line with your actual navigation logic
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
              {pearls.map((item, index) => (
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

export default PearlsHome;
