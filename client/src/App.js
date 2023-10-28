import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductDeletePage from "./pages/ProductDeletePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductUptadePage from "./pages/ProductUptadePage";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<ProductCreatePage />} />
      <Route path="/delete/:productId" element={<ProductDeletePage />} />
      <Route path="/detail/:productId" element={<ProductDetailPage />} />
      <Route path="/update/:productId" element={<ProductUptadePage />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
};

export default App;
