import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.animationBackground}></div>
      <div className={styles.heroContent}>
        <h1>Hi, I'm Luís Silva</h1>
        <p>An enthusiastic developer that enjoys building software</p>
      </div>
    </div>
  );
};

export default Hero;
