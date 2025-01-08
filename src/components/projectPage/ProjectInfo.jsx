import React from "react";
import styles from "./projectInfo.module.css";
import Carousel from "./Carousel";

const ProjectInfo = ({ project }) => {
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles.projectInfoSection}>
      <div
        className={`${styles.carouselContainer} ${
          project.id === 4 ? styles.noBackground : ""
        }`}
      >
        {project.id === 4 ? (
          <div className={styles.imageGrid}>
            {project.images.map((img, index) => (
              <div key={index} className={styles.imageFrame}>
                <img
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <Carousel images={project.images} />
        )}
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.leftSection}>
          <hr className={styles.topLine} />
          <h2>{project.title}</h2>
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
          <div className={styles.buttonsContainer}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              VIEW CODE
            </a>
            {project.id === 3 && (
              <a
                href="https://healthh-linkk.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                LIVE DEMO
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
