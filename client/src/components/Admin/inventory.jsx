import { useState } from "react";
import InventoryChart from "./InventoryChart";
import AdminSideNav from "./AdminSide";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./Inventory.css";

const Inventory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: '',
    subtype: '',
    name: '',
    weight: 0,
    shape: '',
    price: 0,
    colour: '', // Changed from 'color'
    value: 0,
    image: null,
  });

  const [imageFile, setImageFile] = useState(null);
  const [inventoryData, setInventoryData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setImageFile(e.target.files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const apiUrl = 'http://localhost:4000/inventorypost';
=======
    const apiUrl = 'https://sgl-be.onrender.com/inventorypost';
>>>>>>> master

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, key === "image" ? imageFile : value);
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const newItem = { ...formData, image: imageFile, id: Date.now() };
        setInventoryData((prevData) => [...prevData, newItem]);

        setFormData({
          type: '',
          subtype: '',
          name: '',
          weight: 0,
          shape: '',
          price: 0,
          colour: '',
          value: 0,
          image: null,
        });

        // Show success message
        await Swal.fire({
          icon: "success",
          title: "Item added successfully!",
          showConfirmButton: false,
          timer: 1500, // Auto close after 1.5 seconds
        });
      } else {
        console.error("Failed to add item:", response.statusText);
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);

      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

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
          timer: 1500, // Auto close after 1.5 seconds
        });
      }
    });
  };

  const renderInput = (label, name) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      {name === "image" ? (
        <input
          type="file"
          accept="image/*"
          className="form-control"
          id={name}
          name={name}
          onChange={handleChange}
          required // Add required attribute
        />
      ) : (
        <input
          type="text"
          className="form-control"
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required // Add required attribute
        />
      )}
    </div>
  );

  return (
    <div>
      {/* Navbar for mobile view */}
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

      {/* Content */}
      <div className="container-fluid mt-3">
        <div className="row">
          <div id="adminSideNav" className="col-md-3 p-0 d-none d-lg-block">
            <AdminSideNav />
          </div>

          <div className="col-md-9">
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

            <div id="uploadForm" className="card p-3 mb-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <h1 className="text-dark mb-4 ps-0">Upload</h1>
                <div style={{ textAlign: "left" }}>
                  <hr
                    style={{
                      color: "orange",
                      borderTop: "2px solid orange",
                      width: "50%",
                      margin: "0",
                    }}
                  />
                </div>
                <h6>Add items to inventory</h6>
                {Object.keys(formData).map((key) => (
                  <div key={key} className="col-lg-6 mb-3">
                    {renderInput(
                      key.charAt(0).toUpperCase() + key.slice(1),
                      key
                    )}
                  </div>
                ))}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary mt-3">
                    Add Item
                  </button>
                </div>
              </form>
            </div>

            <div className="card p-4 mb-4">
              <h2 className="mb-4">Current Inventory</h2>
              <div className="table-responsive">
                <table className="table mt-3">
                  <thead>
                    <tr>
                      {Object.keys(formData).map((key) => (
                        <th key={key}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </th>
                      ))}
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
