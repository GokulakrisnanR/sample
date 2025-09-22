import React from "react";
import "./AdminSidebar.css";

const AdminSidebar = ({ handleLogout, activeSection, setActiveSection }) => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Menu</h2>
      <ul>
        <li
          className={activeSection === "users" ? "active" : ""}
          onClick={() => setActiveSection("users")}
        >
          Users
        </li>
        <li
          className={activeSection === "products" ? "active" : ""}
          onClick={() => setActiveSection("products")}
        >
          Products
        </li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
