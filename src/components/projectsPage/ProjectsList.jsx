import React from "react";
import { Link } from "react-router-dom";
import styles from "./projectsList.module.css";
import project1Image from "../../assets/images/projects/taskly/taskly.png";
import project2Image from "../../assets/images/projects/movieVerse/movieverse.png";
import project3Image from "../../assets/images/projects/healthLink/healthlink.png";
import project4Image from "../../assets/images/projects/parkTub/parktub.jpg";
import project4Image2 from "../../assets/images/projects/parkTub/home2.jpg";

const projects = [
  {
    id: 1,
    title: "Taskly",
    description:
      "Taskly is a comprehensive productivity platform designed to streamline project management, task organization, and team collaboration. With Taskly, users can effortlessly create, assign, and track tasks, ensuring that every project stays on schedule and every team member remains aligned.",
    image: project1Image,
    link: "/projects/1",
  },
  {
    id: 2,
    title: "MovieVerse",
    description:
      "MovieVerse is an intuitive e-commerce platform designed to make buying movies online effortless and enjoyable. With a sleek user interface and a powerful backend, MovieVerse provides a seamless experience for users to explore, filter, and purchase their favorite movies.",
    image: project2Image,
    link: "/projects/2",
  },
  {
    id: 3,
    title: "HealthLink",
    description:
      "HealthLink is an easy-to-use platform that revolutionizes the way medical appointments are scheduled. By providing a seamless online booking system, users can effortlessly select their preferred date and time for appointments, while healthcare providers can optimize their schedules efficiently.",
    image: project3Image,
    link: "/projects/3",
  },
  {
    id: 4,
    title: "ParkTub",
    description:
      "ParkTub is an innovative platform designed to streamline parking management for users of Transportes Urbanos de Braga (TUB). With real-time updates on parking availability, seamless payment options, and personalized bonuses, ParkTub enhances the parking experience for urban mobility users.",
    images: [project4Image, project4Image2],
    link: "/projects/4",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      {projects.map((project) =>
        project.id === 4 ? (
          <div
            key={project.id}
            className={`${styles.projectContent} ${styles.project4Content}`}
          >
            <div className={styles.dualImageContainer}>
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} - View ${index + 1}`}
                  className={`${styles.image} ${styles.project4Image}`}
                />
              ))}
            </div>
            <div className={styles.textContainer}>
              <div className={styles.topPart}>
                <hr className={styles.topLine} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className={styles.bottomPart}>
                <Link to={project.link} className={styles.button}>
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div key={project.id} className={styles.projectContent}>
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.topPart}>
                <hr className={styles.topLine} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className={styles.bottomPart}>
                <Link to={project.link} className={styles.button}>
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Projects;
