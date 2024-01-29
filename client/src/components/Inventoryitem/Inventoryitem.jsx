import React from 'react'
import "./Inventoryitem.css"
import { useNavigate } from 'react-router-dom';
import { FaComments, FaShoppingCart, FaList, FaBox } from "react-icons/fa";


const Adminhome = () => {
    const navigate =useNavigate()
  return (
    <div style={{textAlign:"center",height:"100vh"}}>
        <h1>Admin Dashboard</h1>
        <div>
            <div className='con' style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
                <div className='buti' onClick={()=>navigate("/admingems")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon' >Gems</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Beads</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Dimonds</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Jewelry</h3>
                    </div>
                </div>
                
                
                
            </div>
            <div className='con' style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Austrology Gems</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    
                    <div>
                        <h3 className='fon'>Perals</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    <div style={{textAlign:"center"}}>
                        <h3 className='fon'>Corals</h3>
                    </div>
                </div>
                <div className='buti' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',justifyContent:"center",height:"100px",borderStyle:"solid",alignItems:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                    {/* <div> */}
                        {/* <FaShoppingCart style={{height:"30px",width:"30px"}} /> */}
                    {/* </div> */}
                    <div>
                        <h3 className='fon'>Gems Jewelry</h3>
                    </div>
                </div>
                {/* <div className='but' onClick={()=>navigate("/inventoryitem")} style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}}>
                    <div>
                        <FaShoppingCart style={{height:"30px",width:"30px"}} />
                    </div>
                    <div>
                        <h5>Inventory</h5>
                    </div>
                </div>
                <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                    <div>
                        <FaBox style={{height:"30px",width:"30px"}} />
                    </div>
                    <div>
                        <h5>Orders</h5>
                    </div>
                </div>
                <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                    <div>
                        <FaBox style={{height:"30px",width:"30px"}} />
                    </div>
                    <div>
                        <h5>Orders</h5>
                    </div>
                </div>
                <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                    <div>
                        <FaBox style={{height:"30px",width:"30px"}} />
                    </div>
                    <div>
                        <h5>Orders</h5>
                    </div>
                </div> */}
                {/* <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                    <div>
                        <FaList style={{height:"60px",width:"60px"}} />
                    </div>
                    <div>
                        <h1>Blogs</h1>
                    </div>
                </div>
                <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                    <div>
                        <FaList style={{height:"60px",width:"60px"}} />
                    </div>
                    <div>
                        <h1>Blogs</h1>
                    </div>
                </div> */}
                {/* <div style={{display:'flex',borderStyle:"solid",alignItems:"center"}}>
                    <div>
                        <FaShoppingCart style={{height:"100px",width:"100px"}} />
                    </div>
                    <div>
                        <h1>Inventory</h1>
                    </div>
                </div>
                <div style={{display:'flex',borderStyle:"solid",alignItems:"center"}}>
                    <div>
                        <FaShoppingCart style={{height:"100px",width:"100px"}} />
                    </div>
                    <div>
                        <h1>Inventory</h1>
                    </div>
                </div> */}
            </div>
        </div>
        {/* <div style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
            <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                <div>
                    <FaList style={{height:"30px",width:"30px"}} />
                </div>
                <div>
                    <h1>Blogs</h1>
                </div>
            </div>
            <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                <div>
                    <FaComments style={{height:"30px",width:"30px"}} />
                </div>
                <div>
                    <h1>Inventory</h1>
                </div>
            </div>
            <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                <div>
                    <FaComments style={{height:"30px",width:"30px"}} />
                </div>
                <div>
                    <h3>Inventory</h3>
                </div>
            </div>
            <div style={{display:'flex',borderStyle:"solid",alignItems:"center",padding:"10px"}} className='but'>
                <div>
                    <FaComments style={{height:"30px",width:"30px"}} />
                </div>
                <div>
                    <h1>Inventory</h1>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Adminhome