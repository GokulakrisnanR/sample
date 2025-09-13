import React from "react";
import downloadIcon from "../images/logo/downloadappicon2.png";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left">
        <span>India's Leading Online Shopping Destination</span>
      </div>
      <div className="right">   
        <span>Our Blog</span>
        <span>Help Center</span>
        <span>Sell On Snapdeal</span>
        <span>
          <img src={downloadIcon} alt="Download App" className="icon" /> Download App
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
