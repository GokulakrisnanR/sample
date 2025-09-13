import React from "react";
import "./Navbar.css";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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

      {/* Right Icons */}
      <div className="navbar-icons">
        <div className="icon">
          Sign In <FaUserAlt />
        </div>
        <div className="icon">
          Cart <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
