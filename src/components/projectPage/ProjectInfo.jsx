import React from "react";
import styles from "./projectInfo.module.css";
import Carousel from "./Carousel";

const ProjectInfo = ({ project }) => {
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles.projectInfoSection}>
      <div className={styles.carouselContainer}>
        <Carousel images={project.images} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.leftSection}>
          <hr className={styles.topLine} />
          <h2>{project.title} - Background</h2>
          <ul className={styles.bulletPoints}>
            {project.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={styles.rightSection}>
          <hr className={styles.topLine} />
          <h2>Tech Stack</h2>
          <ul className={styles.technologiesList}>
            {project.technologies.map((tech) => (
              <li key={tech.name}>
                <img
                  src={tech.image}
                  alt={tech.name}
                  className={styles.techImage}
                />
              </li>
            ))}
          </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewCodeButton}
          >
            VIEW CODE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
