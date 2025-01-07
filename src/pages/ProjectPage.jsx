import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProjectInfo from "../components/projectPage/ProjectInfo";
import taskly1 from "../assets/images/projects/taskly/taskly.png";
import taskly2 from "../assets/images/projects/taskly/dashboard.png";
import taskly3 from "../assets/images/projects/taskly/projects.png";
import movieVerse1 from "../assets/images/projects/movieVerse/movieverse.png";
import movieVerse2 from "../assets/images/projects/movieVerse/movies.png";
import movieVerse3 from "../assets/images/projects/movieVerse/cart.png";
import healthLink1 from "../assets/images/projects/healthLink/healthlink.png";
import healthLink2 from "../assets/images/projects/healthLink/about.png";
import healthLink3 from "../assets/images/projects/healthLink/appointments.png";
import parkTub1 from "../assets/images/projects/parkTub/parktub.jpg";
import parkTub2 from "../assets/images/projects/parkTub/home2.jpg";
import parkTub3 from "../assets/images/projects/parkTub/bonus.jpg";
import java from "../assets/images/skills/java.png";
import springboot from "../assets/images/skills/springboot.png";
import postgresql from "../assets/images/skills/postgresql.png";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css.png";
import vue from "../assets/images/skills/vue.png";
import docker from "../assets/images/skills/docker.png";
import mysql from "../assets/images/skills/mysql.png";
import react from "../assets/images/skills/react.png";
import netlify from "../assets/images/skills/netlify.png";
import mapsapi from "../assets/images/skills/mapsapi.png";
import stripe from "../assets/images/skills/stripe.png";
import kafka from "../assets/images/skills/kafka.png";
import niop from "../assets/images/skills/niop.png";
import parkTub4 from "../assets/images/projects/parkTub/home5.png";
import parkTub5 from "../assets/images/projects/parkTub/home6.png";
import parkTub6 from "../assets/images/projects/parkTub/home7.png";

const projectData = {
  1: {
    id: 1,
    title: "Taskly",
    images: [taskly1, taskly2, taskly3],
    technologies: [
      { name: "Java", image: java },
      { name: "Springboot", image: springboot },
      { name: "PostgreSQL", image: postgresql },
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "Vue", image: vue },
      { name: "Docker", image: docker },
    ],
    points: [
      "Built using Java, Spring Boot, and PostgreSQL for a secure and efficient backend, incorporating JWT for authentication and WebSockets for real-time communication.",
      "Developed a responsive frontend using Vue.js, HTML, and CSS to ensure a user-friendly experience.",
      "Utilized Docker to containerize the frontend and backend, streamlining deployment and introducing CI/CD concepts.",
    ],
    description:
      "Taskly was built using Java, Spring Boot, and PostgreSQL for a secure and efficient backend, where JWT was implemented for secure authentication and WebSockets for real-time chat functionality. I also used Vue.js, HTML, and CSS to create a responsive and user-friendly frontend. Docker was used to containerize the frontend and backend, facilitating deployment and introducing CI/CD concepts. This project provided hands-on experience in integrating these technologies to build scalable and modern web applications.",
    github: "https://github.com/LuisSilva7/taskly-project",
  },
  2: {
    id: 2,
    title: "MovieVerse",
    images: [movieVerse1, movieVerse2, movieVerse3],
    technologies: [
      { name: "Java", image: java },
      { name: "Springboot", image: springboot },
      { name: "Stripe", image: stripe },
      { name: "MySQL", image: mysql },
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "React", image: react },
      { name: "Docker", image: docker },
    ],
    points: [
      "Built using Java, Spring Boot, and MySQL for backend processes, integrating Stripe for secure payment processing and JWT for robust user authentication.",
      "Developed the frontend with React, HTML, and CSS, utilizing React's component-based architecture for modular and efficient development.",
      "Used Docker to containerize the application, streamlining deployment and enabling scalability, providing hands-on experience in building secure and scalable full-stack applications.",
    ],
    description:
      "MovieVerse's backend was built using Java, Spring Boot, and MySQL, with Stripe integrated for secure payment processing and JWT implemented for robust user authentication. The frontend was developed using React, HTML, and CSS, leveraging React's component-based architecture for efficient and modular development. Docker was utilized to containerize the application components, streamlining deployment and enabling scalability. This project provided valuable experience in combining these technologies to build a secure, scalable, and functional full-stack application.",
    github: "https://github.com/LuisSilva7/movieVerse-project",
  },
  3: {
    id: 3,
    title: "HealthLink",
    images: [healthLink1, healthLink2, healthLink3],
    technologies: [
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "React", image: react },
      { name: "Docker", image: docker },
      { name: "Netlify", image: netlify },
    ],
    points: [
      "Developed using React, HTML, and CSS, with LocalStorage implemented for session data management and secure user information storage.",
      "Focused on learning React's core concepts by creating a responsive interface for scheduling and managing medical appointments.",
      "Deployed the platform using Netlify, providing a straightforward and efficient hosting solution.",
    ],
    description:
      "HealthLink's was built using React, HTML, and CSS, with LocalStorage implemented for managing session data and securely storing user information. The project was developed as an introduction to React and its core concepts, focusing on creating a responsive interface for scheduling and managing medical appointments. The platform was deployed using Netlify, offering a simple and efficient hosting solution. This project provided foundational experience in building and deploying React-based applications.",
    github: "https://github.com/LuisSilva7/healthLink-project",
  },
  4: {
    id: 4,
    title: "ParkTub",
    images: [parkTub4, parkTub5, parkTub6],
    technologies: [
      { name: "Java", image: java },
      { name: "Springboot", image: springboot },
      { name: "Stripe", image: stripe },
      { name: "Kafka", image: kafka },
      { name: "Niop", image: niop },
      { name: "MySQL", image: mysql },
      { name: "Html", image: html },
      { name: "Css", image: css },
      { name: "React", image: react },
      { name: "MapsApi", image: mapsapi },
      { name: "Docker", image: docker },
    ],
    points: [
      "Developed using a microservices architecture with a backend built in Java, Spring Boot, and MySQL, incorporating Stripe for payment processing and Kafka and SSE for real-time updates.",
      "Leveraged the NIoP solution from Neadvance for automatic license plate recognition, enabling real-time parking availability, and integrated the Google Maps API for location visualization and navigation.",
      "Created a responsive frontend using React, HTML, and CSS, gaining experience in integrating real-time and location-based technologies.",
    ],
    description:
      "ParkTub is a mobile application developed using a microservices architecture. Its backend was built with Java, Spring Boot, and MySQL, with Stripe integrated for secure payment processing and Kafka and SSE enabling real-time updates. The project also utilized the NIoP solution from Neadvance for automatic license plate recognition through a camera system, providing real-time parking availability. The frontend was developed with React, HTML, and CSS, ensuring responsiveness, and the Google Maps API was integrated for location visualization and navigation. This project offered valuable experience in microservices architecture and the integration of real-time and location-based technologies.",
    github: "https://github.com/LuisSilva7/parkTub-project",
  },
};

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <ProjectInfo project={project} />
    </>
  );
};

export default ProjectPage;
