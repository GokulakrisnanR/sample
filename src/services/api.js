import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getCart = async (userId) => {
  const response = await axios.get(`${BASE_URL}/carts/user/${userId}`);
  return response.data;
};

// Add more API calls like createOrder, addProduct, login, etc.
