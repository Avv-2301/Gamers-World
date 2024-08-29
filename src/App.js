import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import Footer from "./components/common/Footer";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-detail" element={<ProductDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
