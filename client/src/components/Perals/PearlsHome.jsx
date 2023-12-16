import { useState, useEffect } from "react";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CartSidebar from "../CartSideNav";
import "./PearlsHome.css";

const PearlsHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [perals, setPearls] = useState([]);

  useEffect(() => {
    const fetchPearls = async () => {
      try {
        const response = await fetch('http://localhost:4000/getpearls');
        if (response.ok) {
          const data = await response.json();
          setPearls(data);
        } else {
          console.error('Failed to fetch Pearls');
        }
      } catch (error) {
        console.error('Error fetching Pearls:', error);
      }
    };

    fetchPearls();
  }, []);

  const handleCardClick = (clickedItem) => {
    setSelectedItem(clickedItem);
    setCartSidebarOpen(true);
  };

  const calculateQuantity = (item) => item.quantity || 1;

  return (
    <>
      <div className="peralshome-main-con">
        <div className="perals-side-nav">
          <Beadssidebar />
        </div>
        <div className="perals-map-area">
          <div className="beadsmain-con">
            {perals.map((item, index) => (
              <div key={index} onClick={() => handleCardClick(item)}>
                <div
                  className={`beads-box ${selectedItem === item ? "selected" : ""}`}
                >
                  <img
                    src={`data:image/png;base64,${item.image}`}
                    alt="jewelry"
                    width="50%"
                    height="50%"
                    className="beads-image"
                  />
                  <p className="beadsname">{item.name}</p>
                  <p className="beadsname">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
  );
};

export default PearlsHome;
