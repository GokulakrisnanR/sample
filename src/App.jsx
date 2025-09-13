import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import "./App.css";
import Navbar from "./assets/components/Navbar.jsx";
import TopNavbar from "./assets/components/TopNavbar.jsx";

const App = () => {
  return (
 
    <Router>
         <TopNavbar/>
         <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
