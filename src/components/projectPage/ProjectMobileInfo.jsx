import React from "react";
import styles from "./projectMobileInfo.module.css";
import Carousel from "./Carousel";

const ProjectMobileInfo = ({ project }) => {
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles.projectMobileInfoSection}>
      <div className={styles.carouselContainer}>
        <Carousel images={project.images} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.titleSection}>
          <h2>{project.title}</h2>
          <p className={styles.techText}>{project.techText}</p>
        </div>
        <div className={styles.technologiesSection}>
          <h3>Technologies</h3>
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
        </div>
        <div className={styles.descriptionSection}>
          <h3>Project Background</h3>
          <p>{project.description}</p>
        </div>
        <div className={styles.githubSection}>
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

export default ProjectMobileInfo;
