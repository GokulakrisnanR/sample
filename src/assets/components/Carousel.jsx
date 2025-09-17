import React, { useState, useEffect } from "react";
import "./Carousel.css";

import banner1 from "../images/banner/banner1.avif";
import banner2 from "../images/banner/banner2.avif";
import banner3 from "../images/banner/banner3.avif";
import banner4 from "../images/banner/banner4.avif";

const banners = [banner1, banner2, banner3, banner4];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      {banners.map((banner, index) => (
        <div key={index} className={index === current ? "slide active" : "slide"}>
          <img src={banner} alt={`banner${index}`} />
        </div>
      ))}

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
