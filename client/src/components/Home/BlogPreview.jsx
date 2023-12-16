// BlogPreview.js
import React from "react";
import './BlogPreview.css'
import homeblog1 from './homediamonds/home-Blog1.png'
import homeblog2 from './homediamonds/home-Blog2.png'
import homeblog3 from './homediamonds/home-Blog3.png'
const BlogPreview = () => {
  return (
    <>
         <h1 className="ourblogs">OUR BLOGS</h1>
        <div className="home-blogs-section">
        <div className="home-blogs-sub-section">
            <div className="card" style={{ width: '18.2rem' }}>
                <img src={homeblog1} className="card-img-top" alt="..." style={{ height: '12rem' , width:"18rem"}}/>
                <div className="card-body">
                <h5 className="card-title">Chuni Stone Pricing Guide</h5>
                <p className="card-text">
                Have you recently acquired an invaluable 
                family heirloom or beautiful gemstone from
                an estate sale and are wondering...
                </p>
                <a href="#" className="btn btn-primary" id="readmore-btn">
                    Read more
                </a>
                    </div>
                </div>
        </div>

         <div className="home-blogs-sub-section">
         <div className="card" style={{ width: '18.2rem' }}>
                <img src={homeblog2} className="card-img-top" alt="..." style={{ height: '12rem' , width:"18rem"}}/>
                <div className="card-body">
                <h5 className="card-title">Emerald Gemstone Price Guide</h5>
                <p className="card-text">
                The stone of Cleopatra, the stunning green Gemstone Price Guide The stone of Cleopatra, the 
                    hue of which resembles ...
                </p>
                <a href="#" className="btn btn-primary" id="readmore-btn">
                   Read more
                </a>
                    </div>
                </div>
         </div>
         <div className="home-blogs-sub-section">
         <div className="card" style={{ width: '18.1rem' }}>
                <img src={homeblog3} className="card-img-top" alt="..." style={{ height: '12rem' , width:"18rem"}}/>
                <div className="card-body">
                <h5 className="card-title">Care and Cleaning </h5>
                <p className="card-text">
                Red coral gemstones,thifd also known as Moonga Care and Cleaning of Red 
                    have an attractive deep red ...
                </p>
                <a href="#" className="btn btn-primary" id="readmore-btn">
                   Read more
                </a>
                    </div>
                </div>
         </div>
    </div>
    </>
    
  );
};

export default BlogPreview;
