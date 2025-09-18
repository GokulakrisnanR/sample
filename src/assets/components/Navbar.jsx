import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import SignupDropdown from "./SignupDropdown";
import Modal from "./Modal";
import "./Navbar.css";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "login" or "register"

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Snapdeal</div>

      {/* Search */}
      <div className="navbar-search-container">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search products & brands"
        />
        <button className="search-button">Search</button>
      </div>

      {/* Right icons */}
      <div className="navbar-icons">
        <div className="navbar-icon cart">
          <FaShoppingCart /> Cart
        </div>

        <div className="navbar-icon signin">
          <FaUserAlt /> Sign In
          <SignupDropdown openModal={openModal} />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalType === "login" ? "Login" : "Register"}
      >
        {modalType === "login" ? (
          <form>
            <input
              type="email"
              placeholder="Email"
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "#d1203c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        ) : (
          <form>
            <input
              type="text"
              placeholder="Full Name"
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Navbar;
