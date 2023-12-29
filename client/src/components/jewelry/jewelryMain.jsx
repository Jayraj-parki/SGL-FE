import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import { useNavigate } from "react-router-dom";

const JewelryMain = () => {
  const navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch(
          "https://sgl-be.onrender.com/getjewellary"
        );
        if (response.ok) {
          const data = await response.json();
          setJewelry(data);
          setIsLoading(false);
        } else {
          const errorMessage = await response.text();
          console.error(
            `Failed to fetch Jewelry. Server response: ${errorMessage}`
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching Jewelry:", error.message);
        setIsLoading(false);
      }
    };

    fetchJewelry();
  }, []);

  const handleViewDetails = (clickedItem) => {
    try {
      sessionStorage.removeItem("selectedItem");
      setSelectedItem(clickedItem);
      sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));
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
              {jewelry.map((item, index) => (
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

export default JewelryMain;
