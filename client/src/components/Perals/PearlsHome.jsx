import { useState, useEffect } from "react";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import CartSidebar from "../CartSideNav";
import "./PearlsHome.css";
import CircularProgress from "@mui/material/CircularProgress";

const PearlsHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [perals, setPearls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
//chandra
  useEffect(() => {
    const fetchPearls = async () => {
      try {
        const response = await fetch('https://sgl-be.onrender.com/getpearls');
        if (response.ok) {
          const data = await response.json();
          setPearls(data);
          setIsLoading(false); // Set loading to false once data is fetched
        } else {
          console.error('Failed to fetch Pearls');
          setIsLoading(false); // Set loading to false in case of an error
        }
      } catch (error) {
        console.error('Error fetching Pearls:', error);
        setIsLoading(false); // Set loading to false in case of an error
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
                    <p className="pearlsname">{item.name}</p>
                    <p className="">{item.price}</p>
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

export default PearlsHome;
