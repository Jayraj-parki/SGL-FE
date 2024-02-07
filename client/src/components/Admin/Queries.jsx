import AdminSideNav from "./AdminSide"
import { FaSignOutAlt } from "react-icons/fa";
import './Queries.css'
import { useState,useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const Queries=(()=>{
    const [products, setProducts] = useState([]);
    const navigate=useNavigate()
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            setError('Error fetching data');
          }
        };
    
        fetchData();
      }, []);

    return(
        <>  
           {/* <AdminSideNav/> */}
           <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ marginTop: 0 }}
            >
                {/* <div
                className="container"
                style={{ marginRight: "auto", display:'flex',justifyContent:"space-between"}}
                >
                <HomeIcon onClick={()=>navigate("/admin/adminhome")} style={{height:"40px",width:"40px",cursor:"pointer",margin:"5% 0% 0% 5%"}}/>

                <h1
                    className="admin-dashboard ms-4 ms-sm-3 mx-auto"
                    style={{ maxWidth: "fit-content" }}
                >
                    Admin Dashboard
                </h1> */}
                {/* <div
                    onClick={() => {
                    navigate("/adminlogin");
                    }}
                    className="logout-button ms-auto"
                >
                    <span className="d-none d-sm-inline">Logout </span>
                    <FaSignOutAlt style={{ marginLeft: "8px", fontSize: "1rem" }} />
                </div> */}
                {/* </div> */}
                <div >
                <HomeIcon onClick={()=>navigate("/admin/adminhome")} style={{height:"40px",width:"40px",cursor:"pointer",margin:"5% 0% 0% 5%"}}/>
                
                {/* <h1 style={{textAlign:"center"}}>Admin Dashboard</h1> */}
                </div>
                <h1 style={{padding:"0px 35% 0% 35%"}}>Admin Dashboard</h1>
            </nav>
            <div className="queries-con">
                 <h1>Queries</h1>
                 <div className="queries-sub-con">
                 {error && <p>{error}</p>}
                    <ul>
                        {products.map((product) => (
                        <li style={{textAlign:"start"}} key={product.id}>{product.title}</li>
                        // Render other product information as needed
                        ))}
                    </ul>
                 </div>
            </div> 
        </>
    )
})
export default Queries