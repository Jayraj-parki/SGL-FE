import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../Perals/PearlsHome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";

const GemGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [Gems, setGems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getgems");
        if (response.ok) {
          const data = await response.json();
          setGems(data);
          setIsLoading(false);
        } else {
          // Handle non-OK responses
          const errorMessage = await response.text();
          console.error(
            `Failed to fetch Pearls. Server response: ${errorMessage}`
          );
          setIsLoading(false);
        }
      } catch (error) {
        // Handle network errors or JSON parsing errors
        console.error("Error fetching Pearls:", error.message);
        setIsLoading(false);
      }
    };

    fetchGems();
  }, []);

  const handleCardClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setCartSidebarOpen(true);
  };

  const calculateQuantity = (item) => item.quantity || 1;

  const closeCartSidebar = () => {
    setSelectedItem(null);
    setCartSidebarOpen(false);
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
              {Gems.map((item, index) => (
                <div key={index}>
                  <div
                    className={`beads-box ${
                      selectedItem === item ? "selected" : ""
                    }`}
                    onClick={() => handleCardClick(item)}
                  >
                    <img
                      src={`data:image/png;base64,${item.image}`}
                      alt="jewelry"
                      width="50%"
                      height="50%"
                      className="beads-image"
                    />
                    <p className="pearlsname">{item.name}</p>
                    <h4 className="peralsprice">{item.price}</h4>
                    <button className="buy-now-button">View Product</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedItem && (
        <CartSidebar
          isOpen={isCartSidebarOpen}
          onClose={closeCartSidebar}
          selectedItem={selectedItem.name}
          quantity={calculateQuantity(selectedItem)}
          itemData={selectedItem} // Pass itemData here
        />
      )}
    </div>
  );
};

export default GemGrid;
