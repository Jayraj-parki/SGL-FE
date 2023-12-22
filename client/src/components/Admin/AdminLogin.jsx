import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const AdminLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const isValid = phoneRegex.test(phoneNumber);

    if (isValid) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000);
      setOtp(Array.from(String(generatedOtp), Number)); // Convert OTP to an array
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (/^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5 && value !== "") {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/admin/inventory");
  };

  return (
    <div className="login-form-card">
      <div className="image-box">
        <div className="image-container"></div>
      </div>
      <div className="login-form-container">
        <div className="login-form-container smart-card">
          <h1 style={{ color: "#FFA500" }}>Admin Login</h1>
          {/* Conditional rendering based on whether OTP is sent or not */}
          {!otp.every((digit) => digit !== "") ? (
            <form onSubmit={handleSendOtp}>
              <label>
                Phone Number:
                {/* Input for entering phone number */}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  // Styling for the input based on validation
                  style={{
                    border: isPhoneNumberValid
                      ? "1px solid #ccc"
                      : "1px solid red",
                    borderRadius: "5px",
                    padding: "8px",
                  }}
                />
              </label>
              {/* Button to send OTP */}
              <button
                type="submit"
                style={{ background: "#FFA500", color: "#fff" }}
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="otp-container">
                <label>
                  OTP:
                  <div className="otp-inputs">
                    {/* Map through OTP digits and create input boxes */}
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        required
                      />
                    ))}
                  </div>
                </label>
              </div>
              {/* Button to submit OTP and login */}
              <button
                type="submit"
                style={{ background: "#FFA500", color: "#fff" }}
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the component
export default AdminLoginForm;
