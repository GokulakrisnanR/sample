// src/assets/components/Navbar.jsx
import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import SignupDropdown from "./SignupDropdown";
import Modal from "./Modal";
import { loginUser, registerUser } from "../../services/AuthService";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";  // ✅ add this

const Navbar = ({ loggedUser, setLoggedUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
    setEmail("");
    setPassword("");
    setName("");
  };

  // ✅ Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      if (user) {
        setLoggedUser(user); // update App.jsx state
        alert(`Welcome ${user.name}! Role: ${user.role || "USER"}`);
        closeModal();

        // Navigate based on role
        if (user.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  // ✅ Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(name, email, password);
      alert("User registered successfully!");
      closeModal();
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  // ✅ Handle Logout
  const handleLogout = () => {
    setLoggedUser(null); // clears App.jsx state
    alert("You have been logged out!");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">Snapdeal</div>

      <div className="navbar-search-container">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search products & brands"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="navbar-icons">
        <div className="navbar-icon cart">
          <FaShoppingCart /> Cart
        </div>

        <div className="navbar-icon signin">
          <FaUserAlt />{" "}
          {loggedUser ? (
            <>
              {loggedUser.name}{" "}
              {loggedUser.role === "ADMIN" && (
                <span className="admin-badge">Admin</span>
              )}
            </>
          ) : (
            "Sign In"
          )}

          {/* Dropdown */}
          <SignupDropdown
            openModal={openModal}
            loggedUser={loggedUser}
            handleLogout={handleLogout}
          />
        </div>
      </div>

      {/* Modal for Login/Register */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalType === "login" ? "Login" : "Register"}
      >
        {modalType === "login" ? (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
