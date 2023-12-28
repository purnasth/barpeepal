import React from "react";
import IntroVideo from "./IntroVideo";
import AboutHome from "./pages/AboutHome";
import RoomsHome from "./pages/RoomsHome";
import ServicesHome from "./pages/ServicesHome";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <IntroVideo />
      <AboutHome />
      <RoomsHome />
      <ServicesHome />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
