// AdminTemplate.js

// import { Link } from "react-router-dom";

import AdminSideNav from "./AdminSide";
import "./Admin.css";

const AdminTemplate = () => {
  // Log to console to indicate when AdminTemplate is rendered
  console.log("Rendering AdminTemplate");

  return (
    <div className="admin-container">
      {/* Side Nav */}
      <AdminSideNav />
    </div>
  );
};

// Default welcome message

export default AdminTemplate;
