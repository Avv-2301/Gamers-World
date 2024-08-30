import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import Footer from "./components/common/Footer";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import AllGames from "./pages/AllGames";
import ContactUs from "./pages/ContactUs";

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
        <Route path="/all-games" element={<AllGames/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
