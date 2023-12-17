import { useState, useEffect } from "react";
import "./coralsmainhome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CartSidebar from "../CartSideNav";
import CircularProgress from "@mui/material/CircularProgress";

const Coralmain = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [corals, setCorals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch corals data when the component mounts
    fetchCorals();
  }, []);

  const fetchCorals = () => {
    fetch('https://sgl-be.onrender.com/getcorals')
      .then(response => response.json())
      .then(data => {
        setCorals(data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching corals:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  };

  const handleCardClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setCartSidebarOpen(true);
  };

  const calculateQuantity = (item) => {
    return item.quantity || 1;
  };

  return (
    <div className="corals-main">
      {isLoading && (
        <div className="loading-container">
          <div className="loading-content">
            <CircularProgress />
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          <div className="coralsidenav">
            <Beadssidebar />
          </div>
          <div className="corals-con">
            {corals.map((item, index) => (
              <div key={index} onClick={() => handleCardClick(item)}>
                <div className={`box ${selectedItem === item ? "selected" : ""}`}>
                  <img
                    src={`data:image/png;base64,${item.image}`}
                    alt="coral"
                    width="50%"
                    height="50%"
                    className="corals-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedItem && (
            <CartSidebar
              isOpen={isCartSidebarOpen}
              onClose={() => {
                setSelectedItem(null);
                setCartSidebarOpen(false);
              }}
              selectedItem={selectedItem.name}
              quantity={calculateQuantity(selectedItem)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Coralmain;
