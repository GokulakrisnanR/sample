import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Name */}
      <div className="product-name">{product.name}</div>

      {/* Ratings */}
      <div className="product-rating">
        ★★★★☆ <span className="rating-count">(120)</span>
      </div>

      {/* Price Section */}
      <div className="product-price-section">
        <span className="discounted-price">₹{product.discountedPrice}</span>
        <span className="original-price">₹{product.price}</span>
        <span className="discount">{product.discount}% OFF</span>
      </div>
    </div>
  );
};

export default ProductCard;
