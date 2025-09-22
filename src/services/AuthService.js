// src/services/authService.js
import axios from "axios";

// Fetch all users and check login credentials
export const loginUser = async (email, password) => {
  try {
    const res = await axios.get("http://localhost:8080/api/users");
    // normalize email and password
    const user = res.data.find(
      (u) =>
        u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );
    return user || null;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};


// Register a new user
export const registerUser = async (name, email, password) => {
  try {
    const res = await axios.post("http://localhost:8080/api/users", {
      name,
      email,
      password,
      role: null,
    });
    return res.data;
  } catch (err) {
    console.error("Registration error:", err);
    throw err;
  }
};
