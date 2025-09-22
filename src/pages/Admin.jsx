import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../assets/components/AdminSidebar";

const Admin = ({ handleLogout }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeSection, setActiveSection] = useState("users");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [userForm, setUserForm] = useState({ name: "", email: "", role: "USER" });
  const [productForm, setProductForm] = useState({ name: "", description: "", price: "" });
  const [newUserForm, setNewUserForm] = useState({ name: "", email: "", role: "USER", password: "" });
  const [newProductForm, setNewProductForm] = useState({ name: "", description: "", price: "" });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  // Delete User
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      fetchUsers();
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      fetchProducts();
    }
  };

  // Edit user
  const editUser = (user) => {
    setEditingUserId(user.id);
    setUserForm({ name: user.name, email: user.email, role: user.role || "USER" });
  };

  const saveUser = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/users/${id}`, userForm);
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // Edit product
  const editProduct = (product) => {
    setEditingProductId(product.id);
    setProductForm({ name: product.name, description: product.description, price: product.price });
  };

  const saveProduct = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/products/${id}`, productForm);
      setEditingProductId(null);
      fetchProducts();
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  // Add new user
  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", newUserForm);
      setNewUserForm({ name: "", email: "", role: "USER", password: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // Add new product
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products", newProductForm);
      setNewProductForm({ name: "", description: "", price: "" });
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar
        handleLogout={handleLogout}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Admin Dashboard</h1>

        {/* Users Section */}
        {activeSection === "users" && (
          <section style={{ marginTop: "20px" }}>
            <h2>All Users</h2>

            {/* Add New User Form */}
            <form onSubmit={addUser} style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Name"
                value={newUserForm.name}
                onChange={(e) => setNewUserForm({ ...newUserForm, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newUserForm.email}
                onChange={(e) => setNewUserForm({ ...newUserForm, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={newUserForm.password}
                onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                required
              />
              <select
                value={newUserForm.role}
                onChange={(e) => setNewUserForm({ ...newUserForm, role: e.target.value })}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
              <button type="submit">Add User</button>
            </form>

            <table border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {editingUserId === user.id ? (
                        <input
                          value={userForm.name}
                          onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td>
                      {editingUserId === user.id ? (
                        <input
                          value={userForm.email}
                          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td>
                      {editingUserId === user.id ? (
                        <select
                          value={userForm.role}
                          onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                        >
                          <option value="USER">USER</option>
                          <option value="ADMIN">ADMIN</option>
                        </select>
                      ) : (
                        user.role || "USER"
                      )}
                    </td>
                    <td>
                      {editingUserId === user.id ? (
                        <button onClick={() => saveUser(user.id)}>Save</button>
                      ) : (
                        <>
                          <button onClick={() => editUser(user)}>Edit</button>
                          <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Products Section */}
        {activeSection === "products" && (
          <section style={{ marginTop: "20px" }}>
            <h2>All Products</h2>

            {/* Add New Product Form */}
            <form onSubmit={addProduct} style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Name"
                value={newProductForm.name}
                onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={newProductForm.description}
                onChange={(e) =>
                  setNewProductForm({ ...newProductForm, description: e.target.value })
                }
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newProductForm.price}
                onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
                required
              />
              <button type="submit">Add Product</button>
            </form>

            <table border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      {editingProductId === product.id ? (
                        <input
                          value={productForm.name}
                          onChange={(e) =>
                            setProductForm({ ...productForm, name: e.target.value })
                          }
                        />
                      ) : (
                        product.name
                      )}
                    </td>
                    <td>
                      {editingProductId === product.id ? (
                        <input
                          value={productForm.description}
                          onChange={(e) =>
                            setProductForm({ ...productForm, description: e.target.value })
                          }
                        />
                      ) : (
                        product.description
                      )}
                    </td>
                    <td>
                      {editingProductId === product.id ? (
                        <input
                          type="number"
                          value={productForm.price}
                          onChange={(e) =>
                            setProductForm({ ...productForm, price: e.target.value })
                          }
                        />
                      ) : (
                        `₹${product.price}`
                      )}
                    </td>
                    <td>
                      {editingProductId === product.id ? (
                        <button onClick={() => saveProduct(product.id)}>Save</button>
                      ) : (
                        <>
                          <button onClick={() => editProduct(product)}>Edit</button>
                          <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  );
};

export default Admin;
