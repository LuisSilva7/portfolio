import React from "react";
import { useParams } from "react-router-dom";
import styles from "./projectInfo.module.css";
import Carousel from "./Carousel";
import taskly1 from "../../assets/images/projects/taskly/taskly.png";
import taskly2 from "../../assets/images/projects/taskly/dashboard.png";
import taskly3 from "../../assets/images/projects/taskly/projects.png";
import movieVerse1 from "../../assets/images/projects/movieVerse/movieverse.png";
import movieVerse2 from "../../assets/images/projects/movieVerse/movies.png";
import movieVerse3 from "../../assets/images/projects/movieVerse/cart.png";
import healthLink1 from "../../assets/images/projects/healthLink/healthlink.png";
import healthLink2 from "../../assets/images/projects/healthLink/about.png";
import healthLink3 from "../../assets/images/projects/healthLink/appointments.png";
import parkTub1 from "../../assets/images/projects/parkTub/parktub.jpg";
import parkTub2 from "../../assets/images/projects/parkTub/home2.jpg";
import parkTub3 from "../../assets/images/projects/parkTub/bonus.jpg";
import java from "../../assets/images/skills/java.png";
import springboot from "../../assets/images/skills/springboot.png";
import postgresql from "../../assets/images/skills/postgresql.png";
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import vue from "../../assets/images/skills/vue.png";
import docker from "../../assets/images/skills/docker.png";
import mysql from "../../assets/images/skills/mysql.png";
import react from "../../assets/images/skills/react.png";
import netlify from "../../assets/images/skills/netlify.png";

const projectData = {
  1: {
    title: "Taskly",
    images: [taskly1, taskly2, taskly3],
    techText:
      "Taskly leverages Java, Spring Boot, and PostgreSQL for secure and efficient backend development. The frontend is powered by Vue.js, HTML, and CSS for a responsive and user-friendly interface. JWT provides secure authentication, and WebSockets enable real-time chat functionality.",
    technologies: [
      { name: "Java", image: java },
      {
        name: "Springboot",
        image: springboot,
      },
      {
        name: "PostgreSQL",
        image: postgresql,
      },
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "Vue", image: vue },
      { name: "Docker", image: docker },
    ],
    description:
      "Taskly is a productivity platform that transforms the way teams manage projects. It allows users to create and assign tasks within projects and includes a comment section for collaborative task discussions. The platform also features a real-time global chat for seamless team communication. The dashboard provides a comprehensive overview of ongoing projects, deadlines, and team performance metrics. Designed for both individuals and teams, Taskly simplifies complex workflows while maintaining flexibility and ease of use.",
    github: "https://github.com/LuisSilva7/taskly-project",
  },
  2: {
    title: "MovieVerse",
    images: [movieVerse1, movieVerse2, movieVerse3],
    techText:
      "The platform uses Java, Spring Boot, and MySQL to handle backend processes and data management. The frontend is built with React, HTML, and CSS for a dynamic and visually appealing experience. JWT ensures user authentication, and Stripe handles secure payment integration.",
    technologies: [
      { name: "Java", image: java },
      {
        name: "Springboot",
        image: springboot,
      },
      { name: "MySQL", image: mysql },
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "React", image: react },
      { name: "Docker", image: docker },
    ],
    description:
      "MovieVerse is an e-commerce platform designed for seamless online movie shopping. Users are welcomed with a homepage showcasing popular and highly-rated movies. Advanced filtering options allow users to browse by genre, price, or popularity. Each movie has a detailed page with descriptions, ratings, and related recommendations. A shopping cart and secure checkout enhance the user experience. Pagination ensures efficient browsing of large movie collections. MovieVerse combines a clean, intuitive design with robust features to deliver a premium shopping experience.",
    github: "https://github.com/LuisSilva7/movieVerse-project",
  },
  3: {
    title: "HealthLink",
    images: [healthLink1, healthLink2, healthLink3],
    techText:
      "HealthLink employs React for its interactive frontend, with HTML and CSS ensuring a mobile-responsive design. LocalStorage is used for managing session data and storing user information securely.",
    technologies: [
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "React", image: react },
      { name: "Docker", image: docker },
      { name: "Netlify", image: netlify },
    ],
    description:
      "HealthLink revolutionizes medical appointment scheduling by providing a simple and intuitive platform. Users can browse available appointments and book their desired slots effortlessly. The platform includes a profile section for users to manage their bookings and explore available medical services. Healthcare providers benefit from optimized scheduling and improved coordination. The responsive design ensures that users can access the platform seamlessly across devices, enhancing both patient and provider experiences.",
    github: "https://github.com/LuisSilva7/healthLink-project",
  },
  4: {
    title: "ParkTub",
    images: [parkTub1, parkTub2, parkTub3],
    techText:
      "ParkTub integrates Java, Spring Boot, and MySQL for backend functionality. The frontend leverages React, HTML, and CSS for responsiveness. Kafka and SSE deliver real-time updates, while Google Maps API assists with location services. Stripe ensures secure payment handling.",
    technologies: [
      { name: "Java", image: java },
      {
        name: "Springboot",
        image: springboot,
      },
      { name: "MySQL", image: mysql },
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "React", image: react },
      { name: "Docker", image: docker },
    ],
    description:
      "ParkTub simplifies urban parking management by providing real-time updates on parking availability and seamless payment options. The platform enables users to manage parking sessions, track payments, and redeem bonuses with ease. Features like dynamic parking lot updates via Kafka and SSE ensure users always have accurate information. The integration with Google Maps offers visualized parking spots and directions, enhancing usability. Designed with a mobile-first approach, ParkTub ensures a convenient experience for urban commuters.",
    github: "https://github.com/LuisSilva7/parkTub-project",
  },
};

const ProjectInfo = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <p>Project not found</p>;
  }

  const isMobileLayout = id === "4";
  const isSideBySideLayout = id === "1" || id === "2" || id === "3";

  return (
    <section
      className={`${styles.projectInfoSection} ${
        isMobileLayout ? styles.mobileLayout : ""
      } ${isSideBySideLayout ? styles.sideBySideLayout : ""}`}
    >
      <div className={styles.carouselContainer}>
        <Carousel images={project.images} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.leftSection}>
          <hr className={styles.topLine} />
          <h2>{project.title}</h2>
          <p className={styles.technologiesTitle}>{project.techText}</p>
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
        <div className={styles.rightSection}>
          <hr className={styles.topLine} />
          <h2>Project Background</h2>
          <p>{project.description}</p>
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
