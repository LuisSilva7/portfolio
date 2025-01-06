import React from "react";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import { motion } from "framer-motion";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animationVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100vw", opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={{
        type: "tween",
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <Hero />
      <About />
    </motion.div>
  );
};

export default HomePage;
