import React, { useState, useEffect } from "react";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CartSidebar from "../CartSideNav";
import "./PearlsHome.css";
import CircularProgress from "@mui/material/CircularProgress";

const PearlsHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
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

    fetchPearls();
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
              {pearls.map((item, index) => (
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
                    <p className="">{item.price}</p>
                    <button className="buy-now-button">Buy Now</button>
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

export default PearlsHome;
