import React, { useState } from "react";
import InventoryChart from "./InventoryChart";
import AdminSideNav from "./AdminSide";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import UploadForm from "./UploadForm";
import "./Inventory.css";

const Inventory = () => {
  const navigate = useNavigate();

  // State for managing inventory data
  const [inventoryData, setInventoryData] = useState([]);

  // Function to handle item upload
  const handleUpload = (newItem) => {
    setInventoryData((prevData) => [...prevData, newItem]);
  };

  // Function to handle item deletion
  const handleInventoryItem = (itemId) => {
    // Show confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // If the user confirms, delete the item
        setInventoryData((prevData) =>
          prevData.filter((item) => item.id !== itemId)
        );

        // Show success message
        await Swal.fire({
          icon: "success",
          title: "Item deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      {/* Navigation bar for smaller screens */}
      <nav className="navbar navbar-light bg-light d-lg-none">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <h1 className="admin-dashboard text-center mb-4">Admin Dashboard</h1>
          <AdminSideNav />
          <div
            onClick={() => {
              navigate("/admin-login");
            }}
            className="logout-button"
          >
            Logout <FaSignOutAlt style={{ marginLeft: "8px" }} />
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container-fluid mt-3">
        <div className="row">
          {/* Admin side navigation for larger screens */}
          <div id="adminSideNav" className="col-md-3 p-0 d-none d-lg-block">
            <AdminSideNav />
          </div>

          <div className="col-md-9">
            {/* Logout button for larger screens */}
            <div className="mb-1 d-none d-lg-block">
              <div
                onClick={() => {
                  navigate("/admin-login");
                }}
                className="logout-button"
              >
                Logout <FaSignOutAlt style={{ marginLeft: "8px" }} />
              </div>
            </div>

            {/* Upload form */}
            <UploadForm onUpload={handleUpload} />

            {/* Current Inventory */}
            <div className="card p-4 mb-4">
              <h2 className="mb-4">Current Inventory</h2>
              <div className="table-responsive">
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Subtype</th>
                      <th>Name</th>
                      <th>Weight</th>
                      <th>Shape</th>
                      <th>Price</th>
                      <th>Colour</th>
                      <th>Value</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {inventoryData.map((item) => (
                      <tr key={item.id}>
                        {Object.keys(item).map((key) => (
                          <td key={key}>
                            {key === "image" ? (
                              <img
                                src={URL.createObjectURL(item[key])}
                                alt="item"
                                style={{
                                  maxWidth: "50px",
                                  maxHeight: "50px",
                                }}
                              />
                            ) : (
                              item[key]
                            )}
                          </td>
                        ))}
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleInventoryItem(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inventory Chart */}
            <div className="card p-4 mb-4">
              <h2 className="mb-4">Inventory Chart</h2>
              <InventoryChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
