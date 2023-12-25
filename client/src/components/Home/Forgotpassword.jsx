import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Define a function to handle the back to login action
  const handleBackToLogin = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Add logic to handle the forgot password request
      // For example, send a password reset email to the user's email address

      // Simulate updating the password on the server, replace this with your actual logic
      const response = await fetch("/api/reset-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      // Display a success message using toastify
      toast.success("Password reset successful!");

      // Redirect to login page after successful password reset
      window.location.href = "/login";
    } catch (error) {
      console.error("Error:", error);
      toast.error("Password reset failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5 m-auto" style={{ maxWidth: "20rem" }}>
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your new password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Reset Password
            </button>
          </form>
          {/* Add a link to go back to login */}
          <Link to="/login" onClick={handleBackToLogin}>
            Back to Login
          </Link>
        </div>
      </div>
      {/* Toastify container for displaying notifications */}
      <ToastContainer
        position={
          window.location.hash.includes("/login")
            ? "bottom-right"
            : "bottom-left"
        }
        autoClose={3000}
      />
    </div>
  );
};

export default ForgotPassword;
