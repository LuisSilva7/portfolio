import React from "react";
import { Link } from "react-router-dom";
import styles from "./about.module.css";
import aboutImage from "../../assets/images/image.png";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.imageContainer}>
          <img src={aboutImage} alt="About Me" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.topPart}>
            <hr className={styles.topLine} />
            <h2>About Me</h2>
            <p>
              I'm a Master's student in Engineering and Management of
              Information Systems, based in Braga, with a passion for
              problem-solving and software development. My expertise lies in
              backend development, primarily using Java and Spring Boot, paired
              with the capability to manage frontend tasks, allowing me to
              deliver end-to-end solutions. I'm driven by curiosity and the
              excitement of exploring new ideas and technologies.
            </p>
          </div>
          <div className={styles.bottomPart}>
            <Link to="/projects" className={styles.button}>
              GO TO PROJECTS
            </Link>
            <hr className={styles.bottomLine} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
