import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const categories = [
  {
    title: "Speakers",
    subcategories: [
      {
        heading: "Home Audio Systems",
        items: ["Home Audio Systems", "Bluetooth Speakers", "2.0 Speakers"],
      },
      {
        heading: "Headphone & Earphones",
        items: ["Bluetooth Headphone", "Earphones", "True Wireless Earbuds"],
      },
      {
        heading: "Audio & Video",
        items: ["Projectors", "Audio & Video Accessories"],
      },
      {
        heading: "TVs & Appliances",
        items: ["LED TVs", "Smart TVs", "Refrigerators", "Washing Machines"],
      },
      {
        heading: "Cameras",
        items: ["DSLR Cameras", "Mirrorless Cameras", "Action Cameras", "Drones"],
      },
    ],
  },
  {
    title: "Footwear",
    subcategories: [
      {
        heading: "Sports Shoes",
        items: ["Casual Shoes", "Slippers & Flip Flops", "Sandals & Floaters"],
      },
    ],
  },
  {
    title: "Clothing",
    subcategories: [
      {
        heading: "Men's Wear",
        items: ["T-Shirts", "Shirts", "Jeans", "Trousers"],
      },
    ],
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="sidebar">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="category"
          onMouseEnter={() => !isMobile && setActiveIndex(index)}
          onMouseLeave={() => !isMobile && setActiveIndex(null)}
        >
          <div
            className="category-title"
            onClick={() => handleCategoryClick(index)}
          >
            {cat.title}
            {isMobile && (
              <span style={{ float: "right" }}>
                {activeIndex === index ? "−" : "+"}
              </span>
            )}
          </div>

          {activeIndex === index && (
            <div className="subcategory-popup">
              {cat.subcategories.map((sub, subIndex) => (
                <div className="subcategory-column" key={subIndex}>
                  <div className="subcategory-heading">{sub.heading}</div>
                  {sub.items.map((item, i) => (
                    <div className="subcategory-item" key={i}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
