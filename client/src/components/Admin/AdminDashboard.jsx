// AdminTemplate.jsx
import React, { useEffect } from "react";
import { Outlet, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Inventory from "./Inventory";
import Blogs from "./Blogs";
import Orders from "./Orders";
import Queries from "./Queries";

const AdminTemplate = () => {
  const navigate = useNavigate();
  const isLoggedIn = true; // Replace with your authentication logic

  useEffect(() => {
    // If the user is not logged in, redirect to /admin-login
    if (!isLoggedIn) {
      navigate("/admin-login");
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
              // Redirect to /admin-login if not logged in
              <Navigate to="/admin-login" />
            )
          }
        >
          <Route path="inventory" element={<Inventory />}/>
          <Route path="blogs" element={<Blogs />} />
          <Route path="orders" element={<Orders />} />
          <Route path="queries" element={<Queries/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default AdminTemplate;
