import React, { useState, useEffect } from "react";
import IntroVideo from "./IntroVideo";
import AboutHome from "./pages/AboutHome";
import RoomsHome from "./pages/RoomsHome";
import ServicesHome from "./pages/ServicesHome";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import WhatsApp from "./WhatsApp";
import Messenger from "./Messenger";
import ParallaxExample from "./ParallaxExample";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed
      const scrollThreshold = 500;

      if (window.scrollY > scrollThreshold) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <IntroVideo />
      <AboutHome />
      <RoomsHome />
      <ServicesHome />
      <Testimonials />
      <Footer />
      {showIcons && <WhatsApp />}
      {showIcons && <Messenger />}
    </>
  );
};

export default Home;
