import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "./actionTypes";

const API_URL = "/api/products";

// Ürünleri Getir
const fetchProductsRequest = () => {
  return { type: FETCH_PRODUCTS_REQUEST };
};

const fetchProductsSuccess = (products) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

const fetchProductsFailure = (error) => {
  return { type: FETCH_PRODUCTS_FAILURE, error: error };
};
// Ürün oku
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

// Ürün Oluştur
const createProductRequest = () => {
  return { type: CREATE_PRODUCT_REQUEST };
};

const createProductSuccess = (product) => {
  return { type: CREATE_PRODUCT_SUCCESS, payload: product };
};

const createProductFailure = (error) => {
  return { type: CREATE_PRODUCT_FAILURE, error: error };
};

export const createProduct = (productData) => {
  return (dispatch) => {
    dispatch(createProductRequest());
    axios
      .post(API_URL, productData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch(createProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createProductFailure(error));
      });
  };
};

// Ürün Güncelle
const updateProductRequest = () => {
  return { type: UPDATE_PRODUCT_REQUEST };
};

const updateProductSuccess = (product) => {
  return { type: UPDATE_PRODUCT_SUCCESS, payload: product };
};

const updateProductFailure = (error) => {
  return { type: UPDATE_PRODUCT_FAILURE, error: error };
};

export const updateProduct = (productId, productData) => {
  return (dispatch) => {
    dispatch(updateProductRequest());
    axios
      .put(`${API_URL}/${productId}`, productData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch(updateProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateProductFailure(error));
      });
  };
};

// Ürün Sil
const deleteProductRequest = () => {
  return { type: DELETE_PRODUCT_REQUEST };
};

const deleteProductSuccess = () => {
  return { type: DELETE_PRODUCT_SUCCESS };
};

const deleteProductFailure = (error) => {
  return { type: DELETE_PRODUCT_FAILURE, error: error };
};

export const deleteProduct = (productId) => {
  return (dispatch) => {
    dispatch(deleteProductRequest());
    axios
      .delete(`${API_URL}/${productId}`)
      .then(() => {
        dispatch(deleteProductSuccess());
      })
      .catch((error) => {
        dispatch(deleteProductFailure(error));
      });
  };
};
