// userActions.js dosyası

import axios from "axios";
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
} from "./actionTypes";

const API_URL = "/api/users"; // Kullanıcı işlemleri için API URL'si

// Kullanıcı Girişi
const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData,
});

const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (userData) => (dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post(`${API_URL}/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch(loginUserSuccess(response.data));
    })
    .catch((error) => {
      dispatch(loginUserFailure(error));
    });
};

// Kullanıcı Kaydı
const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST,
});

const registerUserSuccess = (userData) => ({
  type: REGISTER_USER_SUCCESS,
  payload: userData,
});

const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const registerUser = (userData) => (dispatch) => {
  dispatch(registerUserRequest());
  axios
    .post(`${API_URL}/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch(registerUserSuccess(response.data));
    })
    .catch((error) => {
      dispatch(registerUserFailure(error));
    });
};

// Kullanıcı Çıkışı
const logoutUserRequest = () => ({
  type: LOGOUT_USER_REQUEST,
});

const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

const logoutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload: error,
});

export const logoutUser = () => (dispatch) => {
  dispatch(logoutUserRequest());
  axios
    .post(`${API_URL}/logout`)
    .then(() => {
      dispatch(logoutUserSuccess());
    })
    .catch((error) => {
      dispatch(logoutUserFailure(error));
    });
};
