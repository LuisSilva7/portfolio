import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.animationBackground}></div>
      <div className={styles.heroContent}>
        <h1>Hi, I'm Luís Silva</h1>
        <p>Information Systems Engineer</p>
        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/luis-silva7/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/LuisSilva7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://luissilva-portfolio.netlify.app/assets/docs/CV_updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaFileAlt />
          </a>
          <a href="mailto:lmpsilva7@gmail.com" className={styles.iconLink}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
