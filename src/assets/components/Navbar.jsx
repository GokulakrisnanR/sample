import React, { useState } from "react";
import axios from "axios";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import SignupDropdown from "./SignupDropdown";
import Modal from "./Modal";
import "./Navbar.css";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "login" or "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedUser, setLoggedUser] = useState(null); // Store logged-in user

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

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8080/api/users");
      const user = res.data.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setLoggedUser(user); // Save user info
        closeModal();

        if (user.role === "ADMIN") {
          alert(`Welcome Admin ${user.name}!`);
          window.location.href = "/admin"; // Admin page
        } else {
          alert(`Welcome ${user.name}!`);
          window.location.href = "/"; // Stay on Home page
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", {
        name,
        email,
        password,
        role: null,
      });
      alert("User registered successfully!");
      closeModal();
    } catch (err) {
      console.error("Registration error:", err);
    }
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
          <FaUserAlt /> 
          {loggedUser ? loggedUser.name : "Sign In"}
          <SignupDropdown openModal={openModal} />
        </div>

        {/* Show Admin badge if admin is logged in */}
        {loggedUser && loggedUser.role === "ADMIN" && (
          <div className="navbar-admin-badge">Admin</div>
        )}
      </div>

      {/* Modal */}
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
