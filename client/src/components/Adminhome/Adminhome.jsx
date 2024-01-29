import React from 'react'
import "./Adminhome.css"
import { useNavigate } from 'react-router-dom';
import { FaComments, FaShoppingCart, FaList, FaBox } from "react-icons/fa";


const Adminhome = () => {
    const navigate =useNavigate()
  return (
    <div style={{textAlign:"center",height:"100vh"}}>
        <h1>Admin Dashboard</h1>
        <div className='cont1' style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
            <div className='but' onClick={()=>navigate("/admin/inventoryitem")} style={{display:'flex',justifyContent:"center",borderStyle:"solid",alignItems:"center",padding:"2px",backgroundColor:"#F4821F",borderRadius:"6px",border:"none"}}>
                <div>
                    <FaShoppingCart style={{height:"40px",width:"40px"}} />
                </div>
                <div>
                    <h1 className='fontco'>Inventory</h1>
                </div>
            </div>
            <div onClick={()=>navigate("/admin/orders")} style={{display:'flex',justifyContent:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none",alignItems:"center",padding:"2px"}} className='but'>
                <div>
                    <FaBox style={{height:"40px",width:"40px"}} />
                </div>
                <div>
                    <h1 className='fontco'>Orders</h1>
                </div>
            </div>
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
        <div style={{height:"30vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"}}>
            <div onClick={()=>navigate("/admin/blogs")} style={{display:'flex',justifyContent:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none",alignItems:"center",padding:"2px"}} className='but'>
                <div>
                    <FaList style={{height:"40px",width:"40px"}} />
                </div>
                <div>
                    <h1 className='fontco'>Blogs</h1>
                </div>
            </div>
            <div onClick={()=>navigate("/admin/queries")} style={{display:'flex',justifyContent:"center",backgroundColor:"#F4821F",borderRadius:"6px",border:"none",alignItems:"center",padding:"2px"}} className='but'>
                <div>
                    <FaComments style={{height:"40px",width:"40px"}} />
                </div>
                <div>
                    <h1 className='fontco'>Queries</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminhome