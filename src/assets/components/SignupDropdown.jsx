// src/assets/components/SignupDropdown.jsx
import React from "react";
import "./SignupDropdown.css";

const SignupDropdown = ({ openModal, loggedUser, handleLogout }) => {
  return (
    <div className="signup-dropdown" role="menu" aria-label="Account menu">
      <div className="dropdown-links">
        <div className="dropdown-link">Your Account</div>
        <div className="dropdown-link">Your Orders</div>
      </div>

      <div className="dropdown-horizontal-divider" />

      {loggedUser ? (
        // ✅ Logged-in user → show logout button
        <div className="dropdown-logout">
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        // ✅ No user → show login/register buttons
        <div className="dropdown-newuser">
          <div className="new-user-text">If you are a new user</div>
          <button
            className="register-btn"
            onClick={() => openModal("register")}
          >
            Register
          </button>
          <button
            className="login-btn"
            onClick={() => openModal("login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default SignupDropdown;
