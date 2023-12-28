import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = ({ user, handleLogout, onClose }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId;

    const resetSessionTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setError("Session timeout. Please log in again.");
        handleLogout();
        toast.warn("Session timeout. You have been logged out.");
      }, 30 * 60 * 1000); // 30 minutes
    };

    const handleEvents = () => {
      resetSessionTimeout();
    };

    document.addEventListener("mousemove", handleEvents);
    document.addEventListener("keypress", handleEvents);
    document.addEventListener("focus", handleEvents);

    resetSessionTimeout();

    return () => {
      document.removeEventListener("mousemove", handleEvents);
      document.removeEventListener("keypress", handleEvents);
      document.removeEventListener("focus", handleEvents);
      clearTimeout(timeoutId);
    };
  }, [handleLogout]);

  const handleClose = () => {
    // Call the onClose prop to close the modal
    onClose();
  };

  if (!user || !user.username) {
    return (
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-light text-danger">
            <h5 className="modal-title text-danger">Profile</h5>
            {/* Close button in the header */}
          </div>
          <div className="modal-body p-4">
            {error ? (
              <p>{error}</p>
            ) : (
              <>
                <p>Please log in to view your profile.</p>
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => toast.info("Redirecting to login page...")}
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
            {/* Close button in the modal body */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-light text-danger">
          <h5 className="modal-title text-danger">Profile</h5>
          {/* Close button in the header */}
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body p-4">
          <div className="text-center">
            <img
              src={user.profileImage || "default-profile-image.jpg"}
              alt="Profile"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "150px", height: "150px" }}
            />
            <h4 className="text-dark">{user.username}</h4>
            <p className="text-muted">{user.email}</p>
          </div>
          {/* Close button in the modal body */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    profileImage: PropTypes.string,
  }),
  handleLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  user: null,
  handleLogout: () => {},
  onClose: () => {},
};

export default Profile;
