import "./jewelryMain.css";
import { useNavigate } from "react-router-dom";
import goldJewelry from "./Data/gold";
import silverJewelry from "./Data/silver";
import panchadhatuJewelry from "./Data/panchadhathu";
import coralJewelry from "./Data/coral";
import beadsJewelry from "./Data/beads"; // Make sure to import beadsJewelry

import JewelrySidebar from "./jewelrySidebar";
import { useEffect, useState } from "react";

const JewelryMain = () => {
  const navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]); // Corrected state variable name

  useEffect(() => {
    fetchJewelry(); // Corrected function name
  }, []);

  const fetchJewelry = () => {
    fetch('http://localhost:4000/getjewellary') // Corrected endpoint
      .then(response => response.json())
      .then(data => setJewelry(data))
      .catch(error => console.error('Error fetching jewelry:', error));
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
   
      <div className="sidebar-container">
        <JewelrySidebar />
      </div>
   
      <div className="main-content-container">
        {jewelry.map((item, index) => (
          <div key={index} onClick={() => navigateToSubPage(item.name)}>
            <div className="box">
             
              <img src={`data:image/png;base64,${item.image}`} alt="jewellary"/>
              <p >{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default JewelryMain;
