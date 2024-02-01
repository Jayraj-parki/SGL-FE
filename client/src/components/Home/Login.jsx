import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Avatar from "react-avatar";
import { FaUser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup"; 
import ForgotPassword from "./Forgotpassword";
import "./Login.css";


const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showSignup, setShowSignup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSignupSuccess = (data) => {
    
    console.log("Signup Success Data:", data);

    
    setShowSignup(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sgl-be.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      const responseData = await response.json();

      
      setUserData(responseData.user);

     
      sessionStorage.setItem("userData", JSON.stringify(responseData.user));

      
      onLogin(responseData.user);

      
      alert("Login Successful")
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
      alert("error login",error)

      if (error instanceof TypeError && error.message === "Failed to fetch") {
       
        console.error("Network error or failed to fetch:", error);
        toast.error("Network error or failed to fetch. Please try again.");
      } else {
        
        if (error.response) {
          console.error("Server Response:", error.response.data);
          console.error("Status Code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          alert("No response received. Request:", error.request)
          // console.error("No response received. Request:", error.request);
        } else {
          alert("Error setting up the request:", error.message)
          // console.error("Error setting up the request:", error.message);
        }

        // toast.error("Login failed. Please try again.");
      }
    }
  };

  const handleToggleForms = () => {
    setShowSignup(!showSignup);
    setShowForgotPassword(false);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setShowSignup(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    onLogout();
    navigate("/")
    alert("Logout successful");
  };
  

  

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="card-body">
          <div className="text-center mb-3">
            {userData?.profileImage ? (
              <Avatar
                name={userData.username}
                size="100"
                round
                src={userData.profileImage}
              />
            ) : (
              <FaUser size={100} style={{ color: "orange" }} />
            )}
          </div>
          <h2 className="card-title text-center mb-4">
            {userData ? `Welcome, ${userData.username}!` : "Login or Sign Up"}
          </h2>

          {showSignup || showForgotPassword ? (
            showForgotPassword ? (
              <ForgotPassword />
            ) : (
              <Signup onSignupSuccess={handleSignupSuccess} />
            )
          ) : (
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary btn-block">
                {showSignup ? "Sign Up" : "Login"}
              </button>
            </form>
          )}

          {!showForgotPassword && (
            <div className="d-grid mx-auto" style={{ width: "80%" }}>
              <button
                type="button"
                className={`btn btn-secondary  mt-3 ${
                  showSignup ? "btn-back" : "btn-create"
                }`}
                onClick={handleToggleForms}
              >
                {showSignup ? "Back to Login" : "Create an Account"}
              </button>
            </div>
          )}

          {!showSignup && !showForgotPassword && (
            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-link"
                onClick={handleForgotPasswordClick}
              >
                Forgot Password?
              </button>
            </div>
          )}
        </div>
      </div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
