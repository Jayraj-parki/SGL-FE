// ExploreSection.js
import React from "react";
import './Exploresection.css'
// images
import Earings from './homeicons/Earings.png'
import Nosepin from './homeicons/Nosepin.png'
import Mangalsutra from './homeicons/Mangalsutra.png'
import Pendants from './homeicons/Pendants.png'
import Bracelet from './homeicons/Bracelet.png'
import Bangle from './homeicons/Bangle.png'
import RingsBands from './homeicons/Rings&Bands.png'
import { useNavigate } from 'react-router-dom'


const ExploreSection = () => {
   const navigate = useNavigate()
  return (
    <>
      <div className="explore-section">
          <div className="explore-heading-sub-section">
             <h1>EXPLORE                              
                THE AWESOME</h1>
          </div>
          <div className="explore-routing-section">
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={Earings} alt="Earings"/>
                   <p>Earings</p>
                </div>
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={Nosepin} alt="Nosepin"/>
                   <p>Nosepin</p>
                </div>
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={Mangalsutra} alt="Mangalsutra"/>
                   <p>Mangalsutra</p>
                </div>
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={Pendants} alt="Pendants"/>
                   <p>Pendants</p>
                </div>
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={Bracelet} alt="Bracelet"/>
                   <p>Bracelet</p>
                </div>
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={Bangle} alt="Bangle"/>
                   <p>Bangle</p>
                </div>
                <div className="explore-sub-section" onClick={()=>{navigate("/jewelery")}}>
                   <img src={RingsBands} alt="Rings & Bands"/>
                   <p>RingsBands</p>
                </div>

          </div> 
      </div>
    </>
  );
};

export default ExploreSection;