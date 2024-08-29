import React from "react";
import HomeSlider from "../components/Home/HomeSlider";
import HomeStatics from "../components/Home/HomeStatics";
import HomeProducts from "../components/Home/HomeProducts";
import HomeTestimonial from "../components/Home/HomeTestimonial";

const Home = () => {
  return (
    <div>
        <HomeSlider/>
        <HomeProducts/>
        <HomeStatics/>
        <HomeTestimonial/>
    </div>
  );
};

export default Home;
