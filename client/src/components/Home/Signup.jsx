import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "./Signup.css";

const Signup = ({ onSignupSuccess }) => {
  const navigate = useNavigate();
  

    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    whatsapp: "",
    imageBase64: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) => ({ ...prevData, imageBase64: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log user-entered data
      console.log("User Entered Data:", formData);

      console.log("Submitting form...");

      const response = await fetch("https://sgl-be.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("API Response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error Data:", errorData);
        throw new Error(errorData.message || "Unknown error");
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);

      sessionStorage.setItem("user", JSON.stringify(responseData.user));
      sessionStorage.setItem("accessToken", responseData.accessToken);
      sessionStorage.setItem("requestToken", responseData.requestToken);

      console.log("Profile Data:", responseData);

      
      // toast.success("Signup successful");
       alert("Signup successful")

      
      onSignupSuccess(false);

    
      navigate("/login");
    } catch (error) {
      alert(`Error: ${error.message || "Unknown error"}`)
      console.error("Error:", error);
      toast.error(`Error: ${error.message || "Unknown error"}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="whatsapp" className="form-label">
            Whatsapp
          </label>
          <input
            type="text"
            id="whatsapp"
            className="form-control"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Enter your Whatsapp number"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            className="form-control"
            name="profileImage"
            onChange={handleImageChange}
          />
        </div>
        {formData.imageUrl && (
          <div className="mb-3">
            <img
              src={formData.imageUrl}
              alt="Profile Preview"
              className="img-thumbnail"
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary  btn-signup">
          Signup
        </button>
      </form>
    </div>
  );
};

Signup.propTypes = {
  onSignupSuccess: PropTypes.func.isRequired,
};

export default Signup;

 

