import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import Footer from "./components/common/Footer";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-detail" element={<ProductDetail/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
