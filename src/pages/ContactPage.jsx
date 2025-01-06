import React from "react";
import ContactForm from "../components/contactPage/ContactForm";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ContactPage = () => {
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
      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;
