import React from 'react'
import "./Inventoryitem.css"
import { useNavigate } from 'react-router-dom';
import { FaComments, FaShoppingCart, FaList, FaBox } from "react-icons/fa";
import HomeIcon from '@mui/icons-material/Home';


const Adminhome = () => {
    const navigate =useNavigate()
  return (
    <div><HomeIcon onClick={()=>navigate("/admin/adminhome")} style={{height:"40px",width:"40px",margin:"5% 0% 0% 5%"}}/>
    <div style={{textAlign:"center",height:"100vh"}}>
        
        <h1>Admin Dashboard</h1>
        <div>
            <div className='con' style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
                <div className='buti' onClick={()=>navigate("/admin/admingems")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon' >Gems</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/admin/beadss")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Beads</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/admin/diamonds")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Dimonds</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/admin/jewellary")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Jewelry</h3>
                    </div>
                </div>
                
                
                
            </div>
            <div className='con' style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
                <div className='buti' onClick={()=>navigate("/admin/austrology")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Austrology <br/>Gems</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/admin/pearls")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Perals</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/admin/corals")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    <div style={{textAlign:"center"}}>
                        <h3 className='fon'>Corals</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/admin/gemsjewelry")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    <div>
                        <h3 className='fon'>Gems<br/>Jewelry</h3>
                    </div>
                </div>
                
                
                
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Adminhome