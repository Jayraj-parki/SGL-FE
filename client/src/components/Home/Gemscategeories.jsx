// GemstoneCategories.js
import { useNavigate } from "react-router-dom";
import React from "react";
import './Gemscategeories.css'
// images
import  Gemstones from './homeicons/Gem Stones.png'
import Gemrings from './homeicons/Gem Rings.png'
import Gempendats from './homeicons/Gem Pendats.png';
import Gemtesting from "./homeicons/Gem Testing.png";
import Gemcutting from './homeicons/Gem Cutting.png'


const GemstoneCategories = () => {
    const navigate = useNavigate()
  return (
    <div className="GEMS-CATEGORY">
        <div className="gems-cate-section">
           <div className="gems-headding-sub-section">
                <h1>GEMS 
                    CATEGORY</h1>
           </div>
           <div className="gems-routing-section">
              <div className="gems-cate-sub-section" onClick={()=>{navigate("/gems")}}>
                  <img src={Gemstones} alt="Gemstones"/>
                  <p>Gem Stones</p>
              </div>
              <div className="gems-cate-sub-section" onClick={()=>{navigate("/gems")}}>
                  <img src={Gemrings} alt="Gemrings"/>
                  <p>Gem Rings</p>
              </div>
              <div className="gems-cate-sub-section" onClick={()=>{navigate("/gems")}}>
                  <img src={Gempendats} alt="Gempendats"/>
                  <p>Gem Pendats</p>
              </div>
              <div className="gems-cate-sub-section" onClick={()=>{navigate("/gems")}}>
                  <img src={Gemtesting} alt="Gemtesting"/>
                  <p>Gem Testing </p>
              </div>
              <div className="gems-cate-sub-section" onClick={()=>{navigate("/gems")}}>
                  <img src={Gemcutting} alt="Gemcutting"/>
                  <p>Gem Cutting</p>
              </div>
           </div>
          


        </div>
        
    </div>
  );
};

export default GemstoneCategories;
