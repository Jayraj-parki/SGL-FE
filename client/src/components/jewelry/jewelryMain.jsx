import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import JewelrySidebar from "./jewelrySidebar";
import goldJewelry from "./Data/gold";
import silverJewelry from "./Data/silver";
import panchadhatuJewelry from "./Data/panchadhathu";
import coralJewelry from "./Data/coral";
import beadsJewelry from "./Data/beads";

import "./jewelryMain.css";

const JewelryMain = () => {
  const navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJewelry();
  }, []);

  const fetchJewelry = async () => {
    try {
      const response = await fetch("https://sgl-be.onrender.com/getjewelry");
      const data = await response.json();
      setJewelry(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jewelry:", error);
      setIsLoading(false);
    }
  };

  const sampleData = [
    ...goldJewelry,
    ...silverJewelry,
    ...panchadhatuJewelry,
    ...coralJewelry,
    ...beadsJewelry,
  ];

  const navigateToSubPage = (itemName) => {
    navigate("/Jewelrysub", { state: { itemName } });
  };

  return (
    <div className="Jewelrymain-con">
      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="sidebar-container">
            <JewelrySidebar />
          </div>

          <div className="main-content-container">
            {jewelry.map((item, index) => (
              <div key={index} onClick={() => navigateToSubPage(item.name)}>
                <div className="box">
                  <img
                    src={`data:image/png;base64,${item.image}`}
                    alt="jewellery"
                  />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default JewelryMain;