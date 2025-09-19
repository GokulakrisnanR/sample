import React, { useState } from "react";
import { registerUser } from "../api/api";

const AuthModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      alert("User registered successfully ✅");
      console.log(response.data);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error registering user ❌");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">
          Login / Sign Up on Snapdeal
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Please provide your Email and Password to Login / Sign Up on Snapdeal
        </p>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500 hover:underline w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
