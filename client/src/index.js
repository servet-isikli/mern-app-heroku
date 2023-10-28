import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { ProductProvider } from "./contexts/ProductContext";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { CategoryListProvider } from "./contexts/CategoryListContext";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <ProductProvider>
          {/* <CategoryListProvider> */}
          <BrowserRouter>
            <Navbar />
            <App />
          </BrowserRouter>
          {/* </CategoryListProvider> */}
        </ProductProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
