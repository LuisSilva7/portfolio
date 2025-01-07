import React, { useRef, useEffect, useState } from "react";
import styles from "./projectMobileInfo.module.css";
import Carousel from "./Carousel";

const ProjectMobileInfo = ({ project }) => {
  const [dimensions, setDimensions] = useState({
    width: "100%",
    height: "auto",
  });

  useEffect(() => {
    const updateSize = () => {
      const width = document.querySelector(
        `.${styles.leftSection}`
      ).offsetWidth;
      const height = width * 2; // Mantém a proporção 1:2 (550x1100)
      setDimensions({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles.projectMobileInfoSection}>
      <div
        className={styles.leftSection}
        style={{ height: `${dimensions.height}px` }}
      >
        <Carousel images={project.images} className={styles.carousel} />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.backgroundSection}>
          <h2>{project.title} - Background</h2>
          <p>{project.description}</p>
        </div>
        <div className={styles.techStackSection}>
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
        </div>
      </div>
    </section>
  );
};

export default ProjectMobileInfo;
