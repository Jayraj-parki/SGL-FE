import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Avatar from "react-avatar";
import { FaUser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup"; // Assuming you have a Signup component
import ForgotPassword from "./Forgotpassword";
import "./Login.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Swal from "sweetalert2";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)
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
    // Handle the signup success data if needed
    console.log("Signup Success Data:", data);

    // Close the signup form
    setShowSignup(false);
  };
  const handleSubmit = async (e) => {
    setLoading(true)
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
      navigate("/")
      // alert("Login Successful")
      await Swal.fire({
        icon: "success",
        title: "Login successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setLoading(false)
      console.error("Error:", error);
      navigate("/login")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Give correct email and Password Details!",
      });
      // alert("error login",error)

      // if (error instanceof TypeError && error.message === "Failed to fetch") {
       
      //   console.error("Network error or failed to fetch:", error);
      //   toast.error("Network error or failed to fetch. Please try again.");
      // } else {
        
      //   if (error.response) {
      //     console.error("Server Response:", error.response.data);
      //     console.error("Status Code:", error.response.status);
      //     console.error("Headers:", error.response.headers);
      //   } else if (error.request) {
      //     alert("No response received. Request:", error.request)
      //     // console.error("No response received. Request:", error.request);
      //   } else {
      //     alert("Error setting up the request:", error.message)
      //     // console.error("Error setting up the request:", error.message);
      //   }

      //   // toast.error("Login failed. Please try again.");
      // }
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

  const useD=JSON.parse(sessionStorage.getItem("userData"))
  const logout=()=>{
    sessionStorage.removeItem("userData");
  }
  

  return (
    useD ? (<div className="container mt-5">
      <h1>Jogined</h1>
    <div className="card mx-auto" style={{ maxWidth: "1200px",margin:"20%" }}>
      <div className="card-body" >
        <div className="text-center mb-3">
          {userData?.profileImage ? (
            <Avatar
              name={useD.username}
              size="100"
              round
              src={userData.profileImage}
            />
          ) : (
            <FaUser size={100} style={{ color: "orange" }} />
          )}
        </div>
        <h2 className="card-title text-center mb-3">
          {useD ? `Welcome, ${useD.username}!` : "Login or Sign Up"}
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
              
              <TextField id="standard-basic" value={useD.email} onChange={handleChange} name="email" style={{textAlign:"start",width:"250px"}} label="Email" variant="standard" />
            </div>
            
            <div className="mb-3">
            <TextField id="standard-basic" style={{textAlign:"start",width:"250px"}} name="password" type="text" value={useD.username} onChange={handleChange} label="Password" variant="standard" />
              
            </div>
            <div className="mb-3">
            <TextField id="standard-basic" style={{textAlign:"start",width:"250px"}} name="password" type="text" value={useD.whatsapp} onChange={handleChange} label="Password" variant="standard" />
              
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              {useD ? "Save" : "Login"}
            </button>
            <button type="submit" className="btn btn-primary btn-block" onClick={logout}>
              Logout
            </button>
          </form>
        )}

        

        
      </div>
    </div>
  </div>) :(
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "1200px",margin:"20%" }}>
        <div className="card-body" >
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
          <h2 className="card-title text-center mb-3">
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
                <TextField id="standard-basic" value={formData.email} onChange={handleChange} name="email" style={{textAlign:"start",width:"250px"}} label="Email" variant="standard" />
              </div>
              
              <div className="mb-3">
              <TextField id="standard-basic" style={{textAlign:"start",width:"250px"}} name="password" type="password" value={formData.password} onChange={handleChange} label="Password" variant="standard" />
              </div>
              <button type="submit" style={{paddingBottom:"30px"}} className="btn btn-primary btn-block">
                {/* {showSignup ? "Sign Up" : "Login"} */}
                {loading? "Please Wait":"Login"}
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
    </div>
    )
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
