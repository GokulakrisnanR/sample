// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import "./App.css";
import Navbar from "./assets/components/Navbar.jsx";
import TopNavbar from "./assets/components/TopNavbar.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import axios from "axios";
import ApiTest from "./ApiTest.jsx";
import Admin from "./pages/Admin.jsx";

const App = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null); // ✅ single source of truth

  // Fetch users (GET)
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch products (GET)
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  // Optional: Function to register new user (POST)
  const registerUser = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8080/api/users", userData);
      console.log("User registered:", res.data);
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  const handleLogout = () => {
  setLoggedUser(null);
  alert("Logged out successfully!");
};


  return (
    <Router>
      <TopNavbar />
      {/* ✅ Pass loggedUser + setLoggedUser into Navbar */}
      <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      
      <Routes>
        <Route path="/apitest" element={<ApiTest />} />

        {/* ✅ Protect admin route */}
<Route
  path="/admin"
  element={
    loggedUser?.role === "ADMIN" ? (
      <Admin handleLogout={handleLogout} loggedUser={loggedUser} />
    ) : (
      <Navigate to="/" replace />
    )
  }
/>


        <Route path="/" element={<Home users={users} products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={<Signup registerUser={registerUser} />}
        />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
