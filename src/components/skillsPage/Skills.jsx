import React from "react";
import styles from "./skills.module.css";

import bashImage from "../../assets/images/skills/bash.png";
import sqlImage from "../../assets/images/skills/sql.png";
import javascriptImage from "../../assets/images/skills/javascript.png";
import pythonImage from "../../assets/images/skills/python.png";
import javaImage from "../../assets/images/skills/java.png";
import cImage from "../../assets/images/skills/c.png";
import htmlImage from "../../assets/images/skills/html.png";
import cssImage from "../../assets/images/skills/css.png";
import springbootImage from "../../assets/images/skills/springboot.png";
import quarkusImage from "../../assets/images/skills/quarkus.png";
import reactImage from "../../assets/images/skills/react.png";
import vueImage from "../../assets/images/skills/vue.png";
import githubImage from "../../assets/images/skills/github.png";
import dockerImage from "../../assets/images/skills/docker.png";
import netlifyImage from "../../assets/images/skills/netlify.png";
import postmanImage from "../../assets/images/skills/postman.png";
import intellijImage from "../../assets/images/skills/intellij.png";
import vscodeImage from "../../assets/images/skills/vscode.png";

const skillImages = [
  javaImage,
  javascriptImage,
  pythonImage,
  cImage,
  htmlImage,
  cssImage,
  sqlImage,
  bashImage,
  springbootImage,
  quarkusImage,
  reactImage,
  vueImage,
  githubImage,
  postmanImage,
  dockerImage,
  intellijImage,
  vscodeImage,
  netlifyImage,
];

const SkillSet = () => {
  return (
    <section className={styles.skillSetSection}>
      <div className={styles.skillSetContent}>
        <h2 className={styles.title}>Skill Set</h2>
        <p className={styles.introduction}>
          These are the technologies I use to build various projects. I always
          try to improve my knowledge and learn something new with each new
          project.
        </p>
        <div className={styles.iconsGrid}>
          {skillImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Skill ${index + 1}`}
              className={styles.iconImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
