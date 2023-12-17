import "./jewelryMain.css";
import { useNavigate } from "react-router-dom";
import goldJewelry from "./Data/gold";
import silverJewelry from "./Data/silver";
import panchadhatuJewelry from "./Data/panchadhathu";
import coralJewelry from "./Data/coral";
import beadsJewelry from "./Data/beads"; // Make sure to import beadsJewelry
import CircularProgress from "@mui/material/CircularProgress";
import JewelrySidebar from "./jewelrySidebar";
import { useEffect, useState } from "react";

const JewelryMain = () => {
  const navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state

  useEffect(() => {
    fetchJewelry();
  }, []);

  const fetchJewelry = () => {
    fetch("https://sgl-be.onrender.com/getjewellary")
      .then((response) => response.json())
      .then((data) => {
        setJewelry(data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching jewelry:", error);
        setIsLoading(false); // Set loading to false in case of an error
      });
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
                    alt="jewellary"
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
