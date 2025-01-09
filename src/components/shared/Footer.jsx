import React from "react";
import styles from "./footer.module.css";
import logoImage from "../../assets/images/LS-logo.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import cv from "../../assets/docs/CV_updated.pdf";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/luis-silva7/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/LuisSilva7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaGithub />
          </a>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaFileAlt />
          </a>
          <a href="mailto:luismpsilva07@gmail.com" className={styles.icon}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
