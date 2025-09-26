import React, { useEffect, useState } from "react";
import Sidebar from "../assets/components/Sidebar";
import Carousel from "../assets/components/Carousel";
import QuickCard from "../assets/components/QuickCard";
import ProductSlider from "../assets/components/ProductSlider";
import ProductCard from "../assets/components/ProductCard";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Helper: filter products by section
  const filterBySection = (section) => {
    return products.filter((p) => p.section === section);
  };

  return (
    <div className="home-container">
      <Sidebar />

      <div className="main-content">
        {/* Carousel + QuickCard */}
        <div className="carousel-quickcard">
          <div className="carousel-wrapper">
            <Carousel />
          </div>
          <div className="quickcard-wrapper">
            <QuickCard />
          </div>
        </div>

        {/* Featured Slider */}
        {filterBySection("featured").length > 0 && (
          <div className="section-card">
            <h2>Featured</h2>
            <ProductSlider products={filterBySection("featured")} />
          </div>
        )}

        {/* Trending Slider */}
        {filterBySection("trending").length > 0 && (
          <div className="section-card">
            <h2>Trending</h2>
            <ProductSlider products={filterBySection("trending")} />
          </div>
        )}

        {/* New Arrivals Slider */}
        {filterBySection("new-arrivals").length > 0 && (
          <div className="section-card">
            <h2>New Arrivals</h2>
            <ProductSlider products={filterBySection("new-arrivals")} />
          </div>
        )}

        {/* Top Deals Slider */}
        {products.some((p) => p.discount >= 20) && (
          <div className="section-card">
            <h2>Top Deals</h2>
            <ProductSlider products={products.filter((p) => p.discount >= 20)} />
          </div>
        )}

        {/* All Products Grid */}
        <div className="section-card">
          <h2>All Products</h2>
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
