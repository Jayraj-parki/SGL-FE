import { useState, useEffect } from "react";
import "./coralsmainhome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CartSidebar from "../CartSideNav";

const Coralmain = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [corals, setCorals] = useState([]);

  useEffect(() => {
    // Fetch corals data when the component mounts changes made
    fetchCorals();
  }, []);

  const fetchCorals = () => {
    fetch('http://localhost:4000/getcorals')
      .then(response => response.json())
      .then(data => setCorals(data))
      .catch(error => console.error('Error fetching corals:', error));
  };

  const handleCardClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setCartSidebarOpen(true);
  };

  const calculateQuantity = (item) => {
    // Assuming each item has a 'quantity' property, use that for dynamic quantity
    return item.quantity || 1; // Default to 1 if quantity is not specified
  };

  return (
    <div className="corals-main">
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
      )}
    </div>
  );
};

export default Coralmain;
