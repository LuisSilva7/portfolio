import React from "react";
import { useParams } from "react-router-dom";
import styles from "./projectInfo.module.css";
import Carousel from "./Carousel";

const projectData = {
  1: {
    title: "Taskly",
    images: [
      "/src/assets/images/projects/taskly/taskly.png",
      "/src/assets/images/projects/taskly/dashboard.png",
      "/src/assets/images/projects/taskly/projects.png",
    ],
    techText:
      "Taskly leverages Java, Spring Boot, and PostgreSQL for secure and efficient backend development. The frontend is powered by Vue.js, HTML, and CSS for a responsive and user-friendly interface. JWT provides secure authentication, and WebSockets enable real-time chat functionality.",
    technologies: [
      { name: "Java", image: "/src/assets/images/skills/java.png" },
      { name: "Springboot", image: "/src/assets/images/skills/springboot.png" },
      { name: "PostgreSQL", image: "/src/assets/images/skills/postgresql.png" },
      { name: "Html", image: "/src/assets/images/skills/html.png" },
      { name: "Css", image: "/src/assets/images/skills/css.png" },
      { name: "Vue", image: "/src/assets/images/skills/vue.png" },
      { name: "Docker", image: "/src/assets/images/skills/docker.png" },
    ],
    description:
      "Taskly is a productivity platform that transforms the way teams manage projects. It allows users to create and assign tasks within projects and includes a comment section for collaborative task discussions. The platform also features a real-time global chat for seamless team communication. The dashboard provides a comprehensive overview of ongoing projects, deadlines, and team performance metrics. Designed for both individuals and teams, Taskly simplifies complex workflows while maintaining flexibility and ease of use.",
    github: "https://github.com/LuisSilva7/taskly-project",
  },
  2: {
    title: "MovieVerse",
    images: [
      "/src/assets/images/projects/movieVerse/movieverse.png",
      "/src/assets/images/projects/movieVerse/movies.png",
      "/src/assets/images/projects/movieVerse/cart.png",
    ],
    techText:
      "The platform uses Java, Spring Boot, and MySQL to handle backend processes and data management. The frontend is built with React, HTML, and CSS for a dynamic and visually appealing experience. JWT ensures user authentication, and Stripe handles secure payment integration.",
    technologies: [
      { name: "Java", image: "/src/assets/images/skills/java.png" },
      { name: "Springboot", image: "/src/assets/images/skills/springboot.png" },
      { name: "MySQL", image: "/src/assets/images/skills/mysql.png" },
      { name: "Html", image: "/src/assets/images/skills/html.png" },
      { name: "Css", image: "/src/assets/images/skills/css.png" },
      { name: "React", image: "/src/assets/images/skills/react.png" },
      { name: "Docker", image: "/src/assets/images/skills/docker.png" },
    ],
    description:
      "MovieVerse is an e-commerce platform designed for seamless online movie shopping. Users are welcomed with a homepage showcasing popular and highly-rated movies. Advanced filtering options allow users to browse by genre, price, or popularity. Each movie has a detailed page with descriptions, ratings, and related recommendations. A shopping cart and secure checkout enhance the user experience. Pagination ensures efficient browsing of large movie collections. MovieVerse combines a clean, intuitive design with robust features to deliver a premium shopping experience.",
    github: "https://github.com/LuisSilva7/movieVerse-project",
  },
  3: {
    title: "HealthLink",
    images: [
      "/src/assets/images/projects/healthLink/healthLink.png",
      "/src/assets/images/projects/healthLink/about.png",
      "/src/assets/images/projects/healthLink/appointments.png",
    ],
    techText:
      "HealthLink employs React for its interactive frontend, with HTML and CSS ensuring a mobile-responsive design. LocalStorage is used for managing session data and storing user information securely.",
    technologies: [
      { name: "Html", image: "/src/assets/images/skills/html.png" },
      { name: "Css", image: "/src/assets/images/skills/css.png" },
      { name: "React", image: "/src/assets/images/skills/react.png" },
      { name: "Docker", image: "/src/assets/images/skills/docker.png" },
      { name: "Netlify", image: "/src/assets/images/skills/netlify.png" },
    ],
    description:
      "HealthLink revolutionizes medical appointment scheduling by providing a simple and intuitive platform. Users can browse available appointments and book their desired slots effortlessly. The platform includes a profile section for users to manage their bookings and explore available medical services. Healthcare providers benefit from optimized scheduling and improved coordination. The responsive design ensures that users can access the platform seamlessly across devices, enhancing both patient and provider experiences.",
    github: "https://github.com/LuisSilva7/healthLink-project",
  },
  4: {
    title: "ParkTub",
    images: [
      "/src/assets/images/projects/parkTub/parkTub.jpg",
      "/src/assets/images/projects/parkTub/home2.jpg",
      "/src/assets/images/projects/parkTub/bonus.jpg",
    ],
    techText:
      "ParkTub integrates Java, Spring Boot, and MySQL for backend functionality. The frontend leverages React, HTML, and CSS for responsiveness. Kafka and SSE deliver real-time updates, while Google Maps API assists with location services. Stripe ensures secure payment handling.",
    technologies: [
      { name: "Java", image: "/src/assets/images/skills/java.png" },
      { name: "Springboot", image: "/src/assets/images/skills/springboot.png" },
      { name: "MySQL", image: "/src/assets/images/skills/mysql.png" },
      { name: "Html", image: "/src/assets/images/skills/html.png" },
      { name: "Css", image: "/src/assets/images/skills/css.png" },
      { name: "React", image: "/src/assets/images/skills/react.png" },
      { name: "Docker", image: "/src/assets/images/skills/docker.png" },
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
