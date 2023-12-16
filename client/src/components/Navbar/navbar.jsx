import './navbar.css'

import Mainheader from "./headermain"
import Productheader from "./productsheader"
import Navmobile from './mobileview'

const Navbar=(()=>{
    return(
        <>
            <div className='desk-head'>
             <Mainheader/>
            </div>
            <div className='mobile-head'>
                <Navmobile/>
            </div>
          
            <div className='hrline'></div>
            <div className='desk-product'> 
             <Productheader/> 
            </div>
              
        </>
    )
})
export default Navbar