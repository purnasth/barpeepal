import React from "react";
import IntroVideo from "./IntroVideo";
import AboutHome from "./pages/AboutHome";
import RoomsHome from "./pages/RoomsHome";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <IntroVideo />
      <AboutHome />
      <RoomsHome />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
