import './productheader.css'
import {useNavigate } from 'react-router-dom'

const Productheader =(()=>{
    const navigate = useNavigate()
    return(
        <>
            <div className='product-nav-section'>
                <div className='product-head-sub-section' onClick={()=>{navigate("/gems")}}>
                    Gems
                </div>
                <div className='product-head-sub-section' onClick={()=>{navigate('./beads')}}>
                    Beads
                </div>
                <div className='product-head-sub-section' onClick={()=>{navigate("/diamonds")}}>
                 Diamonds
                </div>
                <div className='product-head-sub-section' onClick={()=>{navigate("/jewelery")}}>
                Jewellery
                </div>
                <div className='product-head-sub-section' onClick={()=>{navigate("/astrology")}}>
                Astrology gems
                </div>
                <div className='product-head-sub-section' onClick={()=>{navigate('/peralhome')}}>
                 Pearls
                </div>
                <div className='product-head-sub-section' onClick={()=>{navigate('/corals')}}>
                Corals
                </div>


            </div>  
        </>
    )
})
export default Productheader