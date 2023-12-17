import { useState, useEffect } from "react";
import "./coralsmainhome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CartSidebar from "../CartSideNav";
<<<<<<< HEAD
=======
import CircularProgress from "@mui/material/CircularProgress";
>>>>>>> master

const Coralmain = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [corals, setCorals] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    // Fetch corals data when the component mounts changes made
=======
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch corals data when the component mounts
>>>>>>> master
    fetchCorals();
  }, []);

  const fetchCorals = () => {
<<<<<<< HEAD
    fetch('http://localhost:4000/getcorals')
      .then(response => response.json())
      .then(data => setCorals(data))
      .catch(error => console.error('Error fetching corals:', error));
=======
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
>>>>>>> master
  };

  const handleCardClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setCartSidebarOpen(true);
  };

  const calculateQuantity = (item) => {
<<<<<<< HEAD
    // Assuming each item has a 'quantity' property, use that for dynamic quantity
    return item.quantity || 1; // Default to 1 if quantity is not specified
=======
    return item.quantity || 1;
>>>>>>> master
  };

  return (
    <div className="corals-main">
<<<<<<< HEAD
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
              <p >{item.price}</p>
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
=======
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
>>>>>>> master
      )}
    </div>
  );
};

export default Coralmain;
