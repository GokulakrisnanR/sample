import React from "react";
import "./SignupDropdown.css";

const SignupDropdown = ({ openModal }) => {
  return (
    <div className="signup-dropdown" role="menu" aria-label="Account menu">
      <div className="dropdown-links">
        <div className="dropdown-link">Your Account</div>
        <div className="dropdown-link">Your Orders</div>
      </div>

      <div className="dropdown-horizontal-divider" />

      <div className="dropdown-newuser">
        <div className="new-user-text">If you are a new user</div>
        <button className="register-btn" onClick={() => openModal("register")}>
          Register
        </button>
        <button className="login-btn" onClick={() => openModal("login")}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default SignupDropdown;
