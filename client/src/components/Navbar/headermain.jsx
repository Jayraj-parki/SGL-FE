import { useNavigate } from 'react-router-dom'

import './headermain.css'
import logo from './Nav-images/logo.png'
import profile from './Nav-images/Frame 75.png'
import search from './Nav-images/Frame 76.png'
import wishlist from './Nav-images/Frame 77.png'
import mybag from './Nav-images/Frame 78.png'

const Mainheader =(()=>{
    const navigate = useNavigate()
    return(
        <>
             <div className="main-nav-section">
                 <div className="main-sub-nav" onClick={()=>{navigate("/")}}> 
                     <img src={profile} alt="profile" className='profile'/>
                 </div>
                  <div className="main-sub-nav"  onClick={()=>{navigate("/")}}>
                      Home
                 </div>
                  <div className="main-sub-nav"  onClick={()=>{navigate("/aboutus")}}> 
                      About us
                 </div>
                 <div className="main-sub-nav" > 
                      Contact us
                 </div>
                 <div className="main-sub-nav"> 
                      <img src={logo} alt='logo'/>
                 </div>
                 <div className="main-sub-nav" id='head-extra-class'> 
                        <p>Search <span> <img src={search} alt="profile" className='icons'/></span></p>
                 </div>
                 <div className="main-sub-nav" id='head-extra-class'> 
                        <p>Wishlist <span> <img src={wishlist} alt="profile" className='icons'/></span></p>
                 </div>
                 <div className="main-sub-nav" id='head-extra-class' onClick={()=>{navigate('/catrcontainer')}}> 
                        <p>My bag <span> <img src={mybag} alt="profile" className='icons'/></span></p>
                 </div>
                 

             </div>
        </>
    )
})
export default Mainheader