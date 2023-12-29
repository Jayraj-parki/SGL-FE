import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../Perals/PearlsHome.css";
import Beadssidebar from "../Filterssidebar/beadssidebar";
import { useNavigate } from "react-router-dom";

const GemGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
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
              {Gems.map((item, index) => (
                <div key={index}>
                  <div
                    className={`beads-box ${
                      selectedItem === item ? "selected" : ""
                    }`}
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

export default GemGrid;
