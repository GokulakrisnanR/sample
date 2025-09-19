import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header with Title and Close Button */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Main Heading */}
        <div className="modal-heading">
          {title === "Login" ? "Welcome Back!" : "Create Your Account"}
        </div>

        {/* Subheading */}
        <div className="modal-subheading">
          {title === "Login"
            ? "Enter your credentials to login to Snapdeal"
            : "Fill in your details to register on Snapdeal"}
        </div>

        {/* Body content (form will be passed as children) */}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
