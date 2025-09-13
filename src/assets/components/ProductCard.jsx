import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="https://via.placeholder.com/150" alt={product.name} />
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">₹{product.price}</div>
    </div>
  );
};

export default ProductCard;
