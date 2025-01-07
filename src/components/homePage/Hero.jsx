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
            href="https://github.com/YourGithubProfile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YourLinkedInProfile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaFileAlt />
          </a>
          <a href="mailto:your.email@example.com" className={styles.iconLink}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
