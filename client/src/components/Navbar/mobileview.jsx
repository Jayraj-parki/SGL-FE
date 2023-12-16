import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import './mobileview.css';
import grid from './Nav-images/Line 37.png';
import serch from './Nav-images/mobile-serch.png';
import wishlist from './Nav-images/mobile-wishlist.png';
import bag from './Nav-images/mobile-bag.png';
import logo from './Nav-images/logo.png';

const Navmobile = () => {
   const navigate = useNavigate()
     
    const [isMobileSubVisible, setMobileSubVisible] = useState(false);

    const toggleMobileSubVisibility = () => {
        setMobileSubVisible(!isMobileSubVisible);
    };

    return (
        <>
            <div className="navmobile-maincon">
                <div className='gridview-con' onClick={toggleMobileSubVisibility}>
                    <img src={grid} alt='grid'/>
                </div>
                <div className='mobile-logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='mobile-sub-con' >
                    <img src={serch} alt='search'/>
                    <img src={wishlist} alt='wishlist'/>
                    <img src={bag} alt='bag'/>
                </div>
            </div>
            <div className='mobile-sub' style={{ display: isMobileSubVisible ? 'block' : 'none' }}>
               
                    <ol>
                       <li onClick={()=>{navigate("/gems")}}>Gems</li>
                       <li  onClick={()=>{navigate("/beads")}}>Beads</li>
                       <li  onClick={()=>{navigate("/diamonds")}}>Diamonds</li>
                       <li  onClick={()=>{navigate("/jewelery")}}>Jewellery</li>
                       <li  onClick={()=>{navigate("/astrology")}}>Astrology Gems</li>
                       <li  onClick={()=>{navigate("/peralhome")}}>Perals</li>
                       <li  onClick={()=>{navigate("/corals")}}>Corals</li>
                       <li  onClick={()=>{navigate("/")}}>Home</li>
                       <li  onClick={()=>{navigate("/aboutus")}}>About us</li>
                       <li  onClick={()=>{navigate("/")}}>Contact us</li>
                    </ol>
            
                
            </div>
        </>
    );
};

export default Navmobile;


// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import './mobileview.css';
// import grid from './Nav-images/gridview.jpeg';
// import serch from './Nav-images/mobile-serch.png';
// import wishlist from './Nav-images/mobile-wishlist.png';
// import bag from './Nav-images/mobile-bag.png';
// import logo from './Nav-images/logo.png';

// const Navmobile = () => {
//     const navigate = useNavigate();
//     const [isMobileSubVisible, setMobileSubVisible] = useState(false);

//     const toggleMobileSubVisibility = () => {
//         setMobileSubVisible(!isMobileSubVisible);
//     };

//     const handleNavigation = (path) => {
//         navigate(path);
//         setMobileSubVisible(false); // Close the mobile-sub container after navigation
//     };

//     return (
//         <>
//             <div className="navmobile-maincon">
//                 <div className='gridview-con' onClick={toggleMobileSubVisibility}>
//                     <img src={grid} alt='grid'/>
//                 </div>
//                 <div className='mobile-logo'>
//                     <img src={logo} alt='logo'/>
//                 </div>
//                 <div className='mobile-sub-con' >
//                     <img src={serch} alt='search'/>
//                     <img src={wishlist} alt='wishlist'/>
//                     <img src={bag} alt='bag'/>
//                 </div>
//             </div>
//             <div className='mobile-sub' style={{ display: isMobileSubVisible ? 'block' : 'none' }}>
//                 <ol>
//                     <li onClick={() => handleNavigation("/gems")}>Gems</li>
//                     <li onClick={() => handleNavigation("/beads")}>Beads</li>
//                     <li onClick={() => handleNavigation("/diamonds")}>Diamonds</li>
//                     <li onClick={() => handleNavigation("/jewelery")}>Jewellery</li>
//                     <li onClick={() => handleNavigation("/astrology")}>Astrology Gems</li>
//                     <li onClick={() => handleNavigation("/peralhome")}>Perals</li>
//                     <li onClick={() => handleNavigation("/corals")}>Corals</li>
//                     <li onClick={() => handleNavigation("/")}>Home</li>
//                     <li onClick={() => handleNavigation("/aboutus")}>About us</li>
//                     <li onClick={() => handleNavigation("/")}>Contact us</li>
//                 </ol>
//             </div>
//         </>
//     );
// };

// export default Navmobile;
