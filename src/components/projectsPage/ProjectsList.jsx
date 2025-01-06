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
      "Taskly is an all-in-one productivity platform built to simplify project management, task organization, and team communication. With Taskly, you can easily create projects, assign tasks, and track progress, ensuring teams stay aligned and projects remain on schedule. It also features a built-in chat and comment system, making collaboration seamless and keeping everyone connected in real-time.",
    image: project1Image,
    link: "/projects/1",
  },
  {
    id: 2,
    title: "MovieVerse",
    description:
      "MovieVerse is a user-friendly e-commerce platform designed to make buying movies online simple and enjoyable. With an elegant and intuitive interface, users can seamlessly explore a wide selection of films. The platform includes filtering options to help find movies quickly and efficiently. Backed by a robust system, MovieVerse ensures a smooth and reliable purchasing experience for all users.",
    image: project2Image,
    link: "/projects/2",
  },
  {
    id: 3,
    title: "HealthLink",
    description:
      "Scheduling appointments is easier than ever with HealthLink, a user-friendly platform designed for simplicity and efficiency. With a streamlined online booking system, users can easily choose their preferred date and time. Healthcare providers benefit from tools to manage and optimize their schedules effectively. HealthLink bridges the gap between patients and providers, ensuring an efficient experience for all.",
    image: project3Image,
    link: "/projects/3",
  },
  {
    id: 4,
    title: "ParkTub",
    description:
      "ParkTub is a mobile platform that simplifies parking management for users of Transportes Urbanos de Braga (TUB). Offering real-time updates on parking availability, integrated payment solutions, and personalized rewards, ParkTub elevates the parking experience for urban commuters. With its user-friendly interface, it ensures convenient and efficient parking for a stress-free mobility experience.",
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
