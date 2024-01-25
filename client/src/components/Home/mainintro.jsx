import './mainintro.css'
import Mainimgmobile from '../../assets/images/mobile-img.png'
import Mainimg from './homediamonds/Main-img.jpeg'
import { useNavigate } from 'react-router-dom'

const Mainintro=(()=>{
    const navigate = useNavigate()
    return(
        <>
            <div className="maininro-section">
                 <div className='maininro-content'>
                    <h1>Since 1996</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    <h2>in the industry</h2>
                    <p>Gemstone industry and its nationwide presence</p>
                    <button onClick={()=>{navigate("/aboutus")}}>Know more About Us</button>
                 </div>
                 <div className='mainintro-img'>
                     <img src={Mainimg} alt='mainimg' className='main-img'/>
                 </div>
            </div>
            <div className='mainintro-section-mobile'>
                    <img src={Mainimgmobile} alt='mainimg' className='main-img-mobile'/>
                    <button onClick={()=>{navigate("/aboutus")}}>Know more About Us</button>
            </div>
        </>
    )
})
export default Mainintro