import "./jewelryMain.css";
import { useNavigate } from "react-router-dom";
import goldJewelry from "./Data/gold";
import silverJewelry from "./Data/silver";
import panchadhatuJewelry from "./Data/panchadhathu";
import coralJewelry from "./Data/coral";
import beadsJewelry from "./Data/beads"; // Make sure to import beadsJewelry
<<<<<<< HEAD

=======
import CircularProgress from "@mui/material/CircularProgress";
>>>>>>> master
import JewelrySidebar from "./jewelrySidebar";
import { useEffect, useState } from "react";

const JewelryMain = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
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


=======
  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state

  useEffect(() => {
    fetchJewelry();
  }, []);

  const fetchJewelry = () => {
    fetch('https://sgl-be.onrender.com/getjewellary')
      .then(response => response.json())
      .then(data => {
        setJewelry(data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching jewelry:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  };

>>>>>>> master
  const sampleData = [
    ...goldJewelry,
    ...silverJewelry,
    ...panchadhatuJewelry,
    ...coralJewelry,
    ...beadsJewelry,
  ];

<<<<<<< HEAD
  
=======
>>>>>>> master
  const navigateToSubPage = (itemName) => {
    navigate("/Jewelrysub", { state: { itemName } });
  };

  return (
    <div className="Jewelrymain-con">
<<<<<<< HEAD
   
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

      
=======
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
                  <img src={`data:image/png;base64,${item.image}`} alt="jewellary" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
>>>>>>> master
    </div>
  );
};

export default JewelryMain;
