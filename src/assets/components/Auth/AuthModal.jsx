import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "register"

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose}>×</button>

        {/* Tabs */}
        <div className="auth-tabs">
          <div
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </div>
          <div
            className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </div>
        </div>

        {/* Content */}
        {activeTab === "login" ? (
          <div className="auth-content">
            <input type="text" placeholder="Email or Mobile Number" />
            <input type="password" placeholder="Password" />
            <button className="auth-btn login-btn">Login</button>
            <div className="auth-footer">
              <span>Or login using OTP</span>
            </div>
          </div>
        ) : (
          <div className="auth-content">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email or Mobile Number" />
            <input type="password" placeholder="Password" />
            <button className="auth-btn register-btn">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
