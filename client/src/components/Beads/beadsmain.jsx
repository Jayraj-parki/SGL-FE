import React, { useEffect, useState } from "react";
import "../Perals/PearlsHome.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Beadssidebar from "../Filterssidebar/beadssidebar";

const Beadsmain = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [beads, setBeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBeads = async () => {
      try {
        const response = await fetch("https://sgl-be.onrender.com/getbeads");
        if (response.ok) {
          const data = await response.json();
          setBeads(data);
          setIsLoading(false);
        } else {
          const errorMessage = await response.text();
          console.error(
            `Failed to fetch beads. Server response: ${errorMessage}`
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching Pearls:", error.message);
        setIsLoading(false);
      }
    };

    fetchBeads();
  }, []);

  const handleViewDetails = (clickedItem) => {
    // Set the selected item in the component state
    setSelectedItem(clickedItem);

    // Store selected item data in session storage, including the image
    sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));

    // Redirect to the "/diamondscart" route
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
              {beads.map((item, index) => (
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
                    <button className="buy-now-button">View Product</button>
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

export default Beadsmain;
