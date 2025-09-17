import React from "react";
import Sidebar from "../assets/components/Sidebar";
import Carousel from "../assets/components/Carousel";
import QuickCard from "../assets/components/QuickCard";
import ProductSlider from "../assets/components/ProductSlider";
import "./Home.css";
import ProductCard from "../assets/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Trijal Fab Blue Anarkali Georgette Women's Stitched Ethnic Gown",
    price: 2499,
    discountedPrice: 955,
    discount: 62,
    image: "/images/p1.avif",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 60000,
    discountedPrice: 55000,
    discount: 8,
    image: "/images/p2.avif",
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 50000,
    discountedPrice: 32000,
    discount: 36,
    image: "/images/p3.avif",
  },
  {
    id: 4,
    name: "Dell Laptop",
    price: 70000,
    discountedPrice: 60000,
    discount: 14,
    image: "/images/p4.avif",
  },
  {
    id: 5,
    name: "Sony Headphones",
    price: 5000,
    discountedPrice: 3500,
    discount: 30,
    image: "/images/p5.avif",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 45000,
    discountedPrice: 40000,
    discount: 11,
    image: "/images/p6.avif",
  },
  {
    id: 7,
    name: "Samsung Galaxy Buds",
    price: 8000,
    discountedPrice: 6000,
    discount: 25,
    image: "/images/p7.avif",
  },
  {
    id: 8,
    name: "Canon DSLR Camera",
    price: 55000,
    discountedPrice: 47000,
    discount: 15,
    image: "/images/p8.avif",
  },
  {
    id: 9,
    name: "Nike Running Shoes",
    price: 7000,
    discountedPrice: 5000,
    discount: 28,
    image: "/images/p1.avif",
  },
  {
    id: 10,
    name: "Levi's Jeans",
    price: 2500,
    discountedPrice: 1800,
    discount: 28,
    image: "/images/p2.avif",
  },
];

const topDeals = [
  {
    id: 11,
    name: "Apple Watch Series 9",
    price: 45000,
    discountedPrice: 40000,
    discount: 11,
    image: "/images/p6.avif",
  },
  {
    id: 12,
    name: "Samsung Galaxy Buds",
    price: 8000,
    discountedPrice: 6000,
    discount: 25,
    image: "/images/p7.avif",
  },
  {
    id: 13,
    name: "Canon DSLR Camera",
    price: 55000,
    discountedPrice: 47000,
    discount: 15,
    image: "/images/p8.avif",
  },
  {
    id: 14,
    name: "Nike Running Shoes",
    price: 7000,
    discountedPrice: 5000,
    discount: 28,
    image: "/images/p1.avif",
  },
  {
    id: 15,
    name: "Levi's Jeans",
    price: 2500,
    discountedPrice: 1800,
    discount: 28,
    image: "/images/p2.avif",
  },
  {
    id: 16,
    name: "Trijal Fab Blue Anarkali Georgette Women's Stitched Ethnic Gown",
    price: 2499,
    discountedPrice: 955,
    discount: 62,
    image: "/images/p1.avif",
  },
  {
    id: 17,
    name: "Samsung Galaxy S23",
    price: 60000,
    discountedPrice: 55000,
    discount: 8,
    image: "/images/p2.avif",
  },
  {
    id: 18,
    name: "OnePlus 12",
    price: 50000,
    discountedPrice: 32000,
    discount: 36,
    image: "/images/p3.avif",
  },
  {
    id: 19,
    name: "Dell Laptop",
    price: 70000,
    discountedPrice: 60000,
    discount: 14,
    image: "/images/p4.avif",
  },
  {
    id: 20,
    name: "Sony Headphones",
    price: 5000,
    discountedPrice: 3500,
    discount: 30,
    image: "/images/p5.avif",
  },
  {
    id: 21,
    name: "Apple Watch Series 9",
    price: 45000,
    discountedPrice: 40000,
    discount: 11,
    image: "/images/p6.avif",
  },
  {
    id: 22,
    name: "Samsung Galaxy Buds",
    price: 8000,
    discountedPrice: 6000,
    discount: 25,
    image: "/images/p7.avif",
  },
  {
    id: 23,
    name: "Canon DSLR Camera",
    price: 55000,
    discountedPrice: 47000,
    discount: 15,
    image: "/images/p8.avif",
  },
  {
    id: 24,
    name: "Nike Running Shoes",
    price: 7000,
    discountedPrice: 5000,
    discount: 28,
    image: "/images/p1.avif",
  },
  {
    id: 25,
    name: "Levi's Jeans",
    price: 2500,
    discountedPrice: 1800,
    discount: 28,
    image: "/images/p2.avif",
  },
];

const Home = () => {
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

        {/* Top Deals Slider */}
        <div className="section-card">
          <h2>Top Deals</h2>
          <ProductSlider products={topDeals} />
        </div>

        {/* Products Grid */}
        <div className="section-card">
          <h2>Products</h2>
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
