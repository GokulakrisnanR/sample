import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductSlider.css";

const ProductSlider = ({ products }) => {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5); // number of visible slides

  // Update visibleCount based on container width
  useEffect(() => {
    const updateVisibleCount = () => {
      const containerWidth = sliderRef.current?.offsetWidth || 1000;
      const cardWidth = 215; // 200px card + 15px gap
      const count = Math.floor(containerWidth / cardWidth);
      setVisibleCount(count);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.ceil(products.length / visibleCount) - 1;

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="product-slider-container">
      <div
        className="product-slider"
        ref={sliderRef}
        style={{
          transform: `translateX(-${slideIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {products.map((product) => (
          <div className="product-slide" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="slider-arrow left" onClick={handlePrev}>
        &#8249;
      </div>
      <div className="slider-arrow right" onClick={handleNext}>
        &#8250;
      </div>
    </div>
  );
};

export default ProductSlider;
