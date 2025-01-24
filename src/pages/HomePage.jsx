import React from "react";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default HomePage;
