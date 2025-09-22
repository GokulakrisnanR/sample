// src/services/productService.js
import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/products");
    return res.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};
