import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Beadssidebar from "../../Filterssidebar/beadssidebar";
import CartSidebar from "../../CartSideNav";

const DiamondsHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
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
        console.error("Error fetching Diamonds:", error.message);
        setIsLoading(false);
      }
    };

    fetchDiamonds();
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
    <div className="diamondsgrid-container">
      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {!isLoading && (
        <div className="diamondsgrid-main-con">
          <div className="diamonds-side-nav">
            <Beadssidebar />
          </div>
          <div className="diamonds-map-area">
            <div className="diamondsmain-con">
              {diamonds.map((item, index) => (
                <div key={index}>
                  <div
                    className={`diamonds-box ${
                      selectedItem === item ? "selected" : ""
                    }`}
                    onClick={() => handleCardClick(item)}
                  >
                    <img
                      src={`data:image/png;base64,${item.image}`}
                      alt="diamond"
                      width="50%"
                      height="50%"
                      className="diamonds-image"
                    />
                    <p className="diamondsname">{item.name}</p>
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

export default DiamondsHome;
