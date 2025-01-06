import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.animationBackground}></div>
      <div className={styles.heroContent}>
        <h1>I'm Luís Silva and I enjoy building software</h1>
      </div>
    </div>
  );
};

export default Hero;
