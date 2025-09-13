import React from "react";
import Sidebar from "../assets/components/Sidebar";
import ProductCard from "../assets/components/ProductCard";
import Carousel from "../assets/components/Carousel";
import "./Home.css";

const products = [
  { id: 1, name: "Samsung Galaxy S23", price: 55000 },
  { id: 2, name: "iPhone 15", price: 90000 },
  { id: 3, name: "OnePlus 12", price: 50000 },
  { id: 4, name: "Dell Laptop", price: 70000 },
  { id: 5, name: "Sony Headphones", price: 5000 },
];

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Carousel />
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
