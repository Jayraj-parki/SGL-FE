import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 10;

const GemGrid = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [beads, setBeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
    setSelectedItem(clickedItem);
    sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));
    navigate("/diamondscart");
  };

  const addToCart = async (item) => {
    try {
      // Assuming `item` has the correct structure with productId and quantity
      await axios.post("http://localhost:4000/addToCart", { productId: item.productId, quantity: 1 });
  
      // Optionally, you can handle success or update the UI
      console.log("Item added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };
  

  const totalPages = Math.ceil(beads.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  // Filter gemstones based on selected option
  const filteredBeads = beads.filter((item) => {
    if (selectedOption === 'Precious') {
      return item.subtype === 'Precious';
    } else if (selectedOption === 'Semi-precious') {
      return item.subtype === 'Semi-precious';
    } else {
      return true; // Show all if no option is selected
    }
  });

  const currentItems = filteredBeads.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="pearlshome-container">
      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {!isLoading && (
        <div className="remaincont">
          <div className="perals-map-area">
            <div className="gemsmain-con">
              {currentItems.map((item, index) => (
                <div key={index}>
                  <div
                    className={`beads-box ${
                      selectedItem === item ? "selected" : ""
                    }`}
                  >
                    <img
                      onClick={() => handleViewDetails(item)}
                      src={`data:image/png;base64,${item.image}`}
                      alt="jewelry"
                      width="50%"
                      height="50%"
                      className="beads-image"
                    />
                    <p className="pearlsname">{item.name}</p>
                    <h4 className="">{item.price}</h4>
                    <button
                      onClick={() => handleViewDetails(item)}
                      className="buy-now-button"
                    >
                      View Product
                    </button>
                    <button onClick={() => addToCart(item)}>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            {filteredBeads.length > ITEMS_PER_PAGE && (
              <div className="pagination">
                <span onClick={goToFirstPage}>First</span>
                {[...Array(totalPages).keys()].map((pageNumber) => (
                  <span
                    key={pageNumber + 1}
                    onClick={() => paginate(pageNumber + 1)}
                    className={pageNumber + 1 === currentPage ? "active" : ""}
                  >
                    {pageNumber + 1}
                  </span>
                ))}
                <span onClick={goToLastPage}>Last</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GemGrid;
