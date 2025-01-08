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

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { image: javaImage, name: "Java", description: "OOP Language" },
      {
        image: javascriptImage,
        name: "JavaScript",
        description: "Web Development",
      },
      { image: pythonImage, name: "Python", description: "AI & Scripting" },
      { image: cImage, name: "C", description: "Low-Level Coding" },
      { image: htmlImage, name: "HTML", description: "Web Structure" },
      { image: cssImage, name: "CSS", description: "Web Styling" },
      { image: sqlImage, name: "SQL", description: "Database Queries" },
      { image: bashImage, name: "Bash", description: "Shell Scripting" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        image: springbootImage,
        name: "Spring Boot",
        description: "Java Framework",
      },
      { image: quarkusImage, name: "Quarkus", description: "Cloud Native" },
      { image: reactImage, name: "React", description: "Frontend Library" },
      { image: vueImage, name: "Vue", description: "Lightweight Framework" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { image: githubImage, name: "GitHub", description: "Version Control" },
      { image: postmanImage, name: "Postman", description: "API Testing" },
      { image: dockerImage, name: "Docker", description: "Containerization" },
      { image: intellijImage, name: "IntelliJ IDEA", description: "Java IDE" },
      { image: vscodeImage, name: "VS Code", description: "Code Editor" },
      { image: netlifyImage, name: "Netlify", description: "Hosting Platform" },
    ],
  },
];

const SkillSet = () => {
  return (
    <section className={styles.skillSetSection}>
      <div className={styles.skillSetContent}>
        <h2 className={styles.title}>Skill Set</h2>
        <p className={styles.introduction}>
          Here are the technologies and tools I use to create diverse projects.
          I always try to improve my knowledge and learn something new with each
          project.
        </p>
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillCard}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className={styles.skillImage}
                  />
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <p className={styles.skillDescription}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;
