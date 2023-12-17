import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./GemsGrid.css";

const itemsPerPage = 20;

const GemGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gems, setGems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGems();
  }, []);

  const fetchGems = () => {
    setLoading(true);
    fetch("https://sgl-be.onrender.com/getgems")
      .then((response) => response.json())
      .then((data) => setGems(data))
      .catch((error) => console.error("Error fetching gems:", error))
      .finally(() => setLoading(false));
  };

  const totalPages = Math.ceil(gems.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const data = gems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {loading && (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
          <p>Loading...</p>
        </div>
      )}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "20px" }}></div>
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {data.map((gem, index) => (
              <div key={index} className="col mb-2">
                <div className="card gem-card">
                  <img
                    src={`data:image/png;base64,${gem.image}`}
                    alt={gem.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "12px" }}>
                      {gem.name}
                    </h5>
                    <h5 className="card-title" style={{ fontSize: "12px" }}>
                      {gem.price}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              width: "fit-content", // Set width to fit its content
              margin: "0 auto", // Center the div
            }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="btn"
              disabled={currentPage === 1}
              style={{
                fontSize: "12px",
                padding: "3px 6px",
                backgroundColor: "#FFA500", // Orange color
                color: "#fff",
                border: "1px solid #FFA500",
              }}
            >
              Previous
            </button>
            <span
              style={{ fontSize: "10px", margin: "0 2px", color: "#555" }}
            >{`Showing Page ${currentPage} of ${totalPages}`}</span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="btn"
              disabled={currentPage === totalPages}
              style={{
                fontSize: "12px",
                padding: "3px 6px",
                backgroundColor: "#FFA500", // Orange color
                color: "#fff",
                border: "1px solid #FFA500",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemGrid;
