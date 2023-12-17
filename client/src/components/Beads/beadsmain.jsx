<<<<<<< HEAD

import React, { useEffect, useState } from 'react';
import './beadsmain.css'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import Beadssub from './beadssubpage';

const ExampleComponent = () => {
  const navigate = useNavigate();
const [beads,setBeads]=useState([])

useEffect(()=>{
  fetchBeads()
},[])

  const fetchBeads = () => {
    fetch('http://localhost:4000/getbeads')
      .then(response => response.json())
      .then(data => setBeads(data))
      .catch(error => console.error('Error fetching beads:', error));
=======
import React, { useEffect, useState } from 'react';
import './beadsmain.css';
import { useNavigate } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";

const ExampleComponent = () => {
  const navigate = useNavigate();
  const [beads, setBeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBeads();
  }, []);

  const fetchBeads = () => {
    setLoading(true);
    fetch('https://sgl-be.onrender.com/getbeads')
      .then(response => response.json())
      .then(data => setBeads(data))
      .catch(error => console.error('Error fetching beads:', error))
      .finally(() => setLoading(false));
>>>>>>> master
  };

  const navigateToSubPage = (itemName) => {
    navigate("/beadssub", { state: { itemName } });
  };

  return (
<<<<<<< HEAD
    
    <div className='beadsmain-con'>
      {beads.map((item, index) => (
        <div key={index} onClick={() => navigateToSubPage(item.name)}>
          <div className='box'>
            {/* <img src={item.imageUrl} alt={item.name} className='beads-image' /> */}
            
=======
    <div className='beadsmain-con'>
      {loading && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <CircularProgress />
          <p>Loading...</p>
        </div>
      )}

      {!loading && beads.map((item, index) => (
        <div key={index} onClick={() => navigateToSubPage(item.name)}>
          <div className='box'>
>>>>>>> master
            <img src={`data:image/png;base64,${item.image}`} alt="gem" />
            <p className='beadsname'>{item.name}</p>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
