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
              Information Systems, living in Braga, with a passion for
              problem-solving and building software. I specialize in backend
              development with Java and Spring Boot, where I focus on creating
              secure and scalable systems. While backend is my strong suit, I'm
              also capable of handling frontend tasks to deliver end-to-end
              solutions. I adapt quickly to new challenges and technologies,
              always aiming to transform complex problems into practical and
              effective results.
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
