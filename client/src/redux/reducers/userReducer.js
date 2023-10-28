// userReducer.js dosyası

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  username: "",
  email: "",
  password: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
