import './shopbyme.css'
import { useNavigate } from 'react-router-dom'
// images
import Round from './homediamonds/Round.png'
import Pear from './homediamonds/Frame 65.png'
import Princess from './homediamonds/Frame 66.png'
import Marquise from './homediamonds/Frame 67.png'
import Oval from './homediamonds/Frame 68.png'
import Radiant from './homediamonds/Frame 69.png'
import Emerald from './homediamonds/Frame 70.png'
import Heart from './homediamonds/Frame 71.png'
import Cushion from './homediamonds/Frame 73.png'
import Asscher from './homediamonds/Frame 74.png'

const Shopbyme = (()=>{
   const navigate = useNavigate()
    return(
        <>
                 <h1 className='diamonds-heading'>Diamonds</h1>
            <div className="shopbyme-section">
               
                <div className="sbm-heading-section">
                      <h1>SHOP BY
                      SHAPE</h1>
                </div>
                <div className="sbm-routing-section"  >
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}} > 
                         <img src={Round} alt="Round"/>
                         <p>Round</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Pear} alt="Pear"/>
                         <p>Pear</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Princess} alt="Princess"/>
                         <p>Princess</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Marquise} alt="Oval"/>
                         <p>Marquise</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Oval} alt=""/>
                         <p>Oval</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Radiant} alt="Radiant"/>
                         <p>Radiant</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Emerald} alt="Emerald"/>
                         <p>Emerald</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Heart} alt="Heart"/>
                         <p>Heart</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Cushion} alt="Cushion"/>
                         <p>Cushion</p>
                      </div>
                      <div className="sbm-sub-section" onClick={()=>{navigate("/gems")}}> 
                         <img src={Asscher} alt="Asscher"/>
                         <p>Asscher</p>
                      </div>
                </div>
            </div>
        </>
    )
})
export default Shopbyme