import React from "react";
import ProjectInfo from "../components/projectPage/ProjectInfo";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectPage = () => {
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
      <ProjectInfo />
    </motion.div>
  );
};

export default ProjectPage;
