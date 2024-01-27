// import React, { useEffect, useState } from "react";
// import "../Perals/PearlsHome.css";
// import { useNavigate } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";
// import Beadssidebar from "../Filterssidebar/beadssidebar";

// const GemGrid = () => {
//   const navigate = useNavigate();
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [beads, setBeads] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchBeads = async () => {
//       try {
//         const response = await fetch("https://sgl-be.onrender.com/getgems");
//         if (response.ok) {
//           const data = await response.json();
//           setBeads(data);
//           setIsLoading(false);
//         } else {
//           const errorMessage = await response.text();
//           console.error(
//             `Failed to fetch beads. Server response: ${errorMessage}`
//           );
//           setIsLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching Pearls:", error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchBeads();
//   }, []);

//   const handleViewDetails = (clickedItem) => {
//     // Set the selected item in the component state
//     setSelectedItem(clickedItem);

//     // Store selected item data in session storage, including the image
//     sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));

//     // Redirect to the "/diamondscart" route
//     navigate("/diamondscart");
//   };

//   return (
//     <div className="pearlshome-container">
//       {isLoading && (
//         <div className="loading-container">
//           <CircularProgress />
//         </div>
//       )}

//       {!isLoading && (
//         <div  className="gemsgrid-main-con">
          
//           <div className="perals-map-area">
//             <div className="gemsmain-con">
//               {beads.map((item, index) => (
//                 <div key={index}>
//                   <div
//                     className={`beads-box ${
//                       selectedItem === item ? "selected" : ""
//                     }`}
//                     onClick={() => handleViewDetails(item)}
//                   >
//                     <img
//                       src={`data:image/png;base64,${item.image}`}
//                       alt="jewelry"
//                       width="50%"
//                       height="50%"
//                       className="beads-image"
//                     />
//                     <p className="pearlsname">{item.name}</p>
//                     <h4 className="">{item.price}</h4>
//                     <button className="buy-now-button">View Product</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GemGrid;

// import React, { useEffect, useState } from "react";
// import "../Perals/PearlsHome.css";
// import { useNavigate } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";
// // import Beadssidebar from "../Filterssidebar/beadssidebar";

// const ITEMS_PER_PAGE = 10;

// const GemGrid = () => {
//   const navigate = useNavigate();
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [beads, setBeads] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   useEffect(() => {
//     const fetchBeads = async () => {
//       try {
//         const response = await fetch("https://sgl-be.onrender.com/getgems");
//         if (response.ok) {
//           const data = await response.json();
//           setBeads(data);
//           setIsLoading(false);
//         } else {
//           const errorMessage = await response.text();
//           console.error(
//             `Failed to fetch beads. Server response: ${errorMessage}`
//           );
//           setIsLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching Pearls:", error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchBeads();
//   }, []);

//   const handleViewDetails = (clickedItem) => {
//     setSelectedItem(clickedItem);
//     sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));
//     navigate("/diamondscart");
//   };

//   const totalPages = Math.ceil(beads.length / ITEMS_PER_PAGE);

//   const paginate = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const goToFirstPage = () => setCurrentPage(1);
//   const goToLastPage = () => setCurrentPage(totalPages);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = beads.slice(indexOfFirstItem, indexOfLastItem);

//   // const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="pearlshome-container">
//       {isLoading && (
//         <div className="loading-container">
//           <CircularProgress />
//         </div>
//       )}

//       {!isLoading && (
//         <div className="gemsgrid-main-con">
//           <div className="" style={{margin:"60px"}}>
//             {/* <Gemssidebar /> */}
//             <div>
//             <label>
//               <input
//                 type="radio"
//                 value="Precious"
//                 checked={selectedOption === 'Precious'}
//                 onChange={handleOptionChange}
//               />
//               Red
//             </label>
//             </div>
//             <div>
//             <label>
//               <input
//                 type="radio"
//                 value="blue"
//                 checked={selectedOption === 'blue'}
//                 onChange={handleOptionChange}
//               />
//               Blue
//             </label>
//             </div>

//           </div>
//           <div className="perals-map-area">
//             <div className="gemsmain-con">
//               {currentItems.map((item, index) => (
//                 <div key={index}>
//                   <div
//                     className={`beads-box ${
//                       selectedItem === item ? "selected" : ""
//                     }`}
//                     onClick={() => handleViewDetails(item)}
//                   >
//                     <img
//                       src={`data:image/png;base64,${item.image}`}
//                       alt="jewelry"
//                       width="50%"
//                       height="50%"
//                       className="beads-image"
//                     />
//                     <p className="pearlsname">{item.name}</p>
//                     <h4 className="">{item.price}</h4>
//                     <button className="buy-now-button">View Product</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* {beads.length > ITEMS_PER_PAGE && (
//             <div className="pagination">
//               {[...Array(Math.ceil(beads.length / ITEMS_PER_PAGE)).keys()].map(
//                 (pageNumber) => (
//                   <span
//                     key={pageNumber + 1}
//                     onClick={() => paginate(pageNumber + 1)}
//                     className={
//                       pageNumber + 1 === currentPage ? "active" : ""
//                     }
//                   >
//                     {pageNumber + 1}
//                   </span>
//                 )
//               )}
//             </div>
//           )} */}
//           {beads.length > ITEMS_PER_PAGE && (
//             <div className="pagination">
//               <span onClick={goToFirstPage}>First</span>
//               {[...Array(totalPages).keys()].map((pageNumber) => (
//                 <span
//                   key={pageNumber + 1}
//                   onClick={() => paginate(pageNumber + 1)}
//                   className={pageNumber + 1 === currentPage ? "active" : ""}
//                 >
//                   {pageNumber + 1}
//                 </span>
//               ))}
//               <span onClick={goToLastPage}>Last</span>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GemGrid;



import React, { useEffect, useState } from "react";
import "../Perals/PearlsHome.css";
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
        const response = await fetch("https://sgl-be.onrender.com/getgems");
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
        <div className="gemsgrid-main-con">
          <div className="" style={{padding:"60px"}}>
            <div style={{backgroundColor:"#FCE2CB",width:"80%",paddingRight:"20px"}}>
            <div >
              <label style={{paddingRight:"30px"}}>
                <input
                  type="radio"
                  value="Precious"
                  style={{paddingLeft:"10px"}}
                  checked={selectedOption === 'Precious'}
                  onChange={handleOptionChange}
                />
                Precious
              </label>
            </div>
            <div>
              <label style={{paddingLeft:"9px"}}>
                <input
                  type="radio"
                  value="Semi-precious"
                  checked={selectedOption === 'Semi-precious'}
                  onChange={handleOptionChange}
                  style={{marginRight:"10px"}}
                />
                SemiPrecious
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
                    <p>{item. dimenensions}</p>
                    {console.log(item.dimenensions,'hgfdfgkjrdhhfj')}
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

