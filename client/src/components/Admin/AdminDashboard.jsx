// AdminTemplate.jsx
import React, { useEffect } from "react";
import { Outlet, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Inventory from "./InventoryMain";
import Blogs from "./Blogs";
import Orders from "./Orders";

const AdminTemplate = () => {
  const navigate = useNavigate();
  const isLoggedIn = true; // Replace with your authentication logic

  useEffect(() => {
    // If the user is not logged in, redirect to /adminlogin
    if (!isLoggedIn) {
      navigate("/adminlogin");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="admin-container">
      {/* Handle unauthorized access */}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Outlet />
            ) : (
              // Redirect to /adminlogin if not logged in
              <Navigate to="/adminlogin" />
            )
          }
        >
          <Route path="inventory" element={<Inventory />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminTemplate;
