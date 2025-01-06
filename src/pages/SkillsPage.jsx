import React from "react";
import Skills from "../components/skillsPage/Skills";
import { motion } from "framer-motion";
import { useEffect } from "react";

const SkillsPage = () => {
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
      <Skills />
    </motion.div>
  );
};

export default SkillsPage;
