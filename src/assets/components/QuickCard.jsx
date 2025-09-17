import React, { useState } from "react";
import "./QuickCard.css";

const QuickCard = () => {
  const [activeTab, setActiveTab] = useState("pincode");
  const [pincode, setPincode] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handlePincodeSubmit = (e) => {
    e.preventDefault();
    alert(`Checking delivery for pincode: ${pincode}`);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you can add real authentication logic
    alert(`Logging in with email: ${loginData.email}`);
  };

  return (
    <div className="quick-card">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "pincode" ? "active" : ""}`}
          onClick={() => setActiveTab("pincode")}
        >
          Your Delivery Pincode
        </div>
        <div
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "pincode" && (
          <form onSubmit={handlePincodeSubmit}>
            <input
              type="text"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <button type="submit">Check</button>
          </form>
        )}

        {activeTab === "login" && (
          <form className="login-tab" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuickCard;
