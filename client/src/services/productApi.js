import axios from "axios";

const API_URL = "/api/products";

const getProducts = () => {
  return axios
    .get(API_URL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

const createProduct = (productData) => {
  return axios
    .post(API_URL, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error creating product:", error);
      throw error;
    });
};

const updateProduct = (productId, productData) => {
  return axios
    .put(`${API_URL}/${productId}`, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating product:", error);
      throw error;
    });
};

const deleteProduct = (productId) => {
  return axios
    .delete(`${API_URL}/${productId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error deleting product:", error);
      throw error;
    });
};

export { getProducts, createProduct, updateProduct, deleteProduct };
