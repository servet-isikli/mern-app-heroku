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
  // Diğer eylem türlerini ekleyin
} from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
    case CREATE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload], // Yeni ürünü ekleyin
      };
    case UPDATE_PRODUCT_SUCCESS:
      // Güncellenen ürünü içeren yeni bir ürün listesi oluşturun
      const updatedProducts = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });

      return {
        ...state,
        loading: false,
        products: updatedProducts,
      };
    case DELETE_PRODUCT_SUCCESS:
      // Silinen ürünü içermeyen yeni bir ürün listesi oluşturun
      const filteredProducts = state.products.filter(
        (product) => product._id !== action.payload
      );

      return {
        ...state,
        loading: false,
        products: filteredProducts,
      };
    case FETCH_PRODUCTS_FAILURE:
    case CREATE_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // Diğer eylemlere göre durum güncellemelerini burada ekleyin
    default:
      return state;
  }
};

export default productReducer;
