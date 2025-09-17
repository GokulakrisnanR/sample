import React from "react";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-row">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
