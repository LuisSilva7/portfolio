import React from "react";
import { Link } from "react-router-dom";
import styles from "./projectsList.module.css";
import project1Image from "../../assets/images/projects/taskly/taskly.png";
import project2Image from "../../assets/images/projects/movieVerse/movieverse.png";
import project3Image from "../../assets/images/projects/healthLink/healthlink.png";
import project4Image from "../../assets/images/projects/parkTub/home.jpg";

const projects = [
  {
    id: 1,
    title: "Taskly",
    description:
      "Taskly is a platform designed to streamline project management and team communication. It allows users to create projects, assign tasks, and track progress while offering a built-in chat system for real-time collaboration.",
    images: [project1Image],
    link: "/projects/1",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "VueJS"],
  },
  {
    id: 2,
    title: "MovieVerse",
    description:
      "MovieVerse is an e-commerce platform designed for online movie shopping. It provides a simple interface with filtering options to browse a large collection of films and includes a secure payment system for purchases.",
    images: [project2Image],
    link: "/projects/2",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
  },
  {
    id: 3,
    title: "HealthLink",
    description:
      "HealthLink makes scheduling appointments simple and efficient. With an intuitive booking system, users can select their preferred date and time, while healthcare providers can effectively manage their schedules.",
    images: [project3Image],
    link: "/projects/3",
    technologies: ["React"],
  },
  {
    id: 4,
    title: "ParkTub",
    description:
      "ParkTub is a mobile platform designed to simplify parking for users of Transportes Urbanos de Braga (TUB). It provides real-time parking availability updates and integrated payments offering an efficient parking experience.",
    images: [project4Image],
    link: "/projects/4",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectContent}>
          <div className={styles.topContainer}>
            <div className={styles.imageContainer}>
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} - View ${index + 1}`}
                  className={styles.image}
                />
              ))}
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.topPart}>
              <hr className={styles.topLine} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.technologiesContainer}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.technologyTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.bottomPart}>
              <Link to={project.link} className={styles.button}>
                VIEW PROJECT
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
