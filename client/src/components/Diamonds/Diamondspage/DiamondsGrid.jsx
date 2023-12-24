import React, { useEffect, useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress";

const DiamondsGrid = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiamonds = async () => {
      try {
        const response = await fetch('https://sgl-be.onrender.com/getdiamonds');
        const data = await response.json();
        setDiamonds(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error, "Display error message");
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchDiamonds();
  }, []); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {loading ? (
        <>
          <CircularProgress />
          <p>Loading...</p>
        </>
      ) : (
        diamonds.map((ele, ind) => (
          <div key={ind}>
            <div>
              <img src={`data:image/png;base64,${ele.image}`} alt="diamond" width="50%" height="50%" />
            </div>
            <p>Name: {ele.name}</p>
            <p>Price : {ele.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DiamondsGrid;
