// src/redux/reducers/index.js
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
});

export default rootReducer;
