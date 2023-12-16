import React from "react";
import { FaComments, FaShoppingCart, FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSideNav = () => {
  const navigationItems = [
    {
      path: "/admin",
      name: "Inventory",
      icon: <FaShoppingCart />,
    },
    {
      path: "/admin/blogs",
      name: "Blogs",
      icon: <FaList />,
    },
    {
      path: "/admin/orders",
      name: "Orders",
      icon: <FaComments />,
    },
  ];

  return (
    <div className="container">
      <div
        style={{
          width: "200px",
          backgroundColor: "#FFA500", // Orange color
        }}
        className="AdminSideNav"
      >
        <div className="top_section">
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavLink
                to={item.path}
                className="link"
                style={{
                  textAlign: "center",
                  textDecoration: "none", 
                  color: "#fff", 
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem", 
                  marginBottom: "0", 
                  border: "1px solid black",
                  padding: "25px", 
                }}
              >
                <div className="icon" style={{ marginRight: "10px" }}>
                  {item.icon}
                </div>
                <div>{item.name}</div>
              </NavLink>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSideNav;
