// /* eslint-disable react/no-unescaped-entities */
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import "./zodiac.css";
// import ariesstones from "../../../assets/zodiacstones/Aries.png";
// import cancerstones from "../../../assets/zodiacstones/cancer.png";
// import capricornstones from "../../../assets/zodiacstones/capricorn.png";
// import geministones from "../../../assets/zodiacstones/gemini.png";
// import aquariusstones from "../../../assets/zodiacstones/Aquarius.png";
// import leostones from "../../../assets/zodiacstones/leo.png";
// import librastones from "../../../assets/zodiacstones/libra.png";
// import piecesstones from "../../../assets/zodiacstones/pisches.png";
// import scorpiostones from "../../../assets/zodiacstones/scorpio.png";
// import taurusstones from "../../../assets/zodiacstones/taurus.png";
// import virgostones from "../../../assets/zodiacstones/virgo.png";

// const zodiacStonesData = [
//   { name: "Aries", image: ariesstones, price: 1000 },
//   { name: "Aquarius", image: aquariusstones, price: 1500 },
//   { name: "Cancer", image: cancerstones, price: 1200 },
//   { name: "Capricorn", image: capricornstones, price: 1800 },
//   { name: "Gemini", image: geministones, price: 1400 },
//   { name: "Leo", image: leostones, price: 2000 },
//   { name: "Libra", image: librastones, price: 1600 },
//   { name: "Pisces", image: piecesstones, price: 2200 },
//   { name: "Scorpio", image: scorpiostones, price: 2500 },
//   { name: "Taurus", image: taurusstones, price: 1900 },
//   { name: "Virgo", image: virgostones, price: 2100 },
// ];

// const Zodiachome = () => {
//   const navigate = useNavigate();
//   const [selectedItem, setSelectedItem] = useState(null);
//   const zodiacImagesRef = useRef(null);
//   const [autoScrollTimer, setAutoScrollTimer] = useState(null);
//   const [isUserActive, setIsUserActive] = useState(true);

//   const handleScroll = (direction) => {
//     const container = zodiacImagesRef.current;
//     const scrollAmount = 200; // Adjust the scroll amount as needed

//     if (direction === "right") {
//       container.scrollLeft += scrollAmount;
//     } else if (direction === "left") {
//       container.scrollLeft -= scrollAmount;
//     }

//     // Reset auto-scroll timer on manual scroll or button click
//     resetAutoScrollTimer();
//   };

//   const resetAutoScrollTimer = () => {
//     // Reset the timer for auto-scroll after 5 seconds
//     clearTimeout(autoScrollTimer);

//     const newTimer = setTimeout(() => {
//       handleAutoScroll();
//     }, 10000);

//     setAutoScrollTimer(newTimer);
//   };

//   const handleAutoScroll = () => {
//     const container = zodiacImagesRef.current;

//     // Animate scroll from left to right
//     const startPosition = container.scrollLeft;
//     const endPosition = container.scrollWidth - container.clientWidth;
//     const step = 5; // Adjust the step for smoothness
//     let currentPosition = startPosition;

//     const scrollInterval = setInterval(() => {
//       currentPosition += step;
//       container.scrollLeft = currentPosition;

//       if (currentPosition >= endPosition || !isUserActive) {
//         clearInterval(scrollInterval);

//         // Scroll back to point 0 after 2 seconds
//         setTimeout(() => {
//           container.scrollLeft = 0;
//         }, 2000);

//         // Reset auto-scroll timer
//         resetAutoScrollTimer();
//       }
//     }, 16); // 60 frames per second
//   };

//   const handleUserActivity = () => {
//     // Set user activity to true and restart auto-scroll timer
//     setIsUserActive(true);
//     resetAutoScrollTimer();
//   };

//   useEffect(() => {
//     // Initialize auto-scroll timer on component mount
//     resetAutoScrollTimer();

//     // Clear auto-scroll timer on component unmount
//     return () => clearTimeout(autoScrollTimer);
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     // Add event listeners for mouse and keyboard events
//     document.addEventListener("mousemove", handleUserActivity);
//     document.addEventListener("keydown", handleUserActivity);

//     // Remove event listeners on component unmount
//     return () => {
//       document.removeEventListener("mousemove", handleUserActivity);
//       document.removeEventListener("keydown", handleUserActivity);
//     };
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps
//   const handleViewDetails = async (clickedItem) => {
//     // Convert the image to base64
//     const base64Image = await getImageAsBase64(clickedItem.image);

//     // Set the base64 image in the clickedItem
//     const updatedItem = { ...clickedItem, image: base64Image };

//     setSelectedItem(updatedItem);

//     // Store selected item data in session storage
//     sessionStorage.setItem("selectedItem", JSON.stringify(updatedItem));
//     localStorage.setItem("selectedItem", JSON.stringify(updatedItem));

//     // Redirect to /diamondscart with selected data
//     navigate("/diamondscart", { state: { selectedItem: updatedItem } });
//   };

//   const getImageAsBase64 = async (imageUrl) => {
//     try {
//       const response = await fetch(imageUrl);
//       const blob = await response.blob();
//       const base64Image = await new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.onerror = reject;
//         reader.readAsDataURL(blob);
//       });
//       return base64Image;
//     } catch (error) {
//       console.error("Error converting image to base64:", error.message);
//       return null; // Handle the error appropriately
//     }
//   };

//   return (
//     <>
//       <div className="zodiacsection">
//         <h1 className="zodiacheading">Zodiac</h1>
//         <div className="zodiacdesc">
//           <p>
//             The zodiac is a belt-shaped region of the sky that extends
//             approximately 8° north and south (as measured in celestial latitude)
//             of the ecliptic, which is the apparent path of the Sun across the
//             celestial sphere over the course of the year. The orbital paths of
//             the Moon and major planets are within the belt of the zodiac.
//             <br />
//             In Western astrology, and formerly astronomy, the zodiac is divided
//             into the following twelve signs: Aries, Taurus, Gemini, Cancer, Leo,
//             Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces.
//             Each occupies 30° of celestial longitude and roughly correspond to
//             the astronomical constellations with the same name. These
//             astrological signs form a celestial coordinate system, or more
//             specifically an ecliptic coordinate system, which takes the ecliptic
//             as the origin of latitude and the Suns position at vernal equinox as
//             the origin of longitude.
//             <br />
//             This division of the ecliptic into zodiacal signs originated with
//             Babylonian astronomy during the 1st millennium BC. Babylonian
//             astronomers divided the ecliptic into 12 equal "signs". Due to the
//             precession of the equinoxes, the time of year the Sun is in a given
//             constellation has changed since Babylonian times, and the point of
//             March equinox has moved from Aries into Pisces. The zodiac was
//             communicated into Greek astronomy by the 2nd century BC, and from
//             there into the Hindu zodiac. In modern astronomy, the ecliptic
//             coordinate system is still used for tracking Solar System objects.
//           </p>
//         </div>

//         <div className="zodiac-scroll-container" ref={zodiacImagesRef}>
//           {zodiacStonesData.map((item, index) => (
//             <div key={index} className="zodiac-card">
//               <img src={item.image} alt={item.name} />
//               <button onClick={() => handleViewDetails(item)}>
//                 View Product
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="scroll-buttons">
//         <button onClick={() => handleScroll("left")}>
//           <FontAwesomeIcon icon={faArrowLeft} />
//         </button>
//         <button onClick={() => handleScroll("right")}>
//           <FontAwesomeIcon icon={faArrowRight} />
//         </button>
//       </div>
//     </>
//   );
// };

// export default Zodiachome;

import React, { useEffect, useState } from "react";
import "../../Perals/PearlsHome.CSS";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

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
        const response = await fetch("https://sgl-be.onrender.com/getjewelry");
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
  const filteredBeads = beads.filter(item => {
    if (selectedOption === 'Ruby') {
      return item.subtype === 'Ruby';
    } else if (selectedOption === 'BlueSapphire') {
      return item.subtype === 'BlueSapphire';
    }
    else if (selectedOption === 'YellowSappire') {
      return item.subtype === 'YellowSappire';
    }
    else if (selectedOption === 'Emrald') {
      return item.subtype === 'Emrald';
    }
    else if (selectedOption === 'Hessonite') {
      return item.subtype === 'Hessonite';
    }
    else if (selectedOption === 'RedCoral') {
      return item.subtype === 'RedCoral';
    }
    else if (selectedOption === 'Mutyam') {
      return item.subtype === 'Mutyam';
    }
    else if (selectedOption === 'SemiPreciousStones') {
      return item.subtype === 'SemiPreciousStones';
    }
    else if (selectedOption === 'Mutyam') {
      return item.subtype === 'Mutyam';
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
        <div className="gemsgrid-main-con">
          <div className="" style={{padding:"60px"}}>
            <div style={{backgroundColor:"#FCE2CB",width:"100%",paddingRight:"40px",paddingTop:"20px",paddingBottom:"20px"}}>
            <div >
              <label style={{paddingRight:"70px"}}>
                <input
                  type="radio"
                  value="Ruby"
                  style={{paddingLeft:"10px"}}
                  checked={selectedOption === 'Ruby'}
                  onChange={handleOptionChange}
                />
                Ruby
              </label>
            </div>
            <div>
              <label style={{paddingRight:"13px"}}>
                <input
                  type="radio"
                  value="BlueSapphire"
                  checked={selectedOption === 'BlueSapphire'}
                  onChange={handleOptionChange}
                  style={{marginRight:"px"}}
                />BlueSapphire
              </label>
            </div>
            <div >
              <label style={{paddingRight:"10px"}}>
                <input
                  type="radio"
                  value="YellowSappire"
                  style={{paddingLeft:"10px"}}
                  checked={selectedOption === 'YellowSappire'}
                  onChange={handleOptionChange}
                />
                YellowSappire
              </label>
            </div>
            <div>
              <label style={{paddingRight:"60px"}}>
                <input
                  type="radio"
                  value="Emrald"
                  checked={selectedOption === 'Emrald'}
                  onChange={handleOptionChange}
                  style={{marginRight:"0px"}}
                />
                Emrald
              </label>
            </div>
            <div>
              <label style={{paddingRight:"40px"}}>
                <input
                  type="radio"
                  value="Hessonite"
                  checked={selectedOption === 'Hessonite'}
                  onChange={handleOptionChange}
                  style={{marginRight:"0px"}}
                />
                Hessonite
              </label>
            </div>
            <div>
              <label style={{paddingRight:"45px"}}>
                <input
                  type="radio"
                  value="RedCoral"
                  checked={selectedOption === 'RedCoral'}
                  onChange={handleOptionChange}
                  style={{marginRight:"0px"}}
                />
                RedCoral
              </label>
            </div>
            <div>
              <label style={{paddingRight:"55px"}}>
                <input
                  type="radio"
                  value="Mutyam"
                  checked={selectedOption === 'Mutyam'}
                  onChange={handleOptionChange}
                  style={{marginRight:"0px"}}
                />
                Mutyam
              </label>
            </div>
            <div>
              <label style={{paddingRight:"55px"}}>
                <input
                  type="radio"
                  value="Mutyam"
                  checked={selectedOption === 'Mutyam'}
                  onChange={handleOptionChange}
                  style={{marginRight:"0px"}}
                />
                Mutyam
              </label>
            </div>
            <div>
              <label style={{paddingLeft:"7px"}}>
                <input
                  type="radio"
                  value="SemiPreciousStones"
                  checked={selectedOption === 'SemiPreciousStones'}
                  onChange={handleOptionChange}
                  style={{marginRight:"7px"}}
                />
                SemiPreciousStones
              </label>
            </div>
            </div>
          </div>
          <div className="perals-map-area">
            <div className="gemsmain-con">
              {currentItems.map((item, index) => (
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
          <div style={{display:'flex',justifyContent:"end"}}>
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