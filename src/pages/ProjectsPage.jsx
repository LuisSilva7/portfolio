import React from "react";
import ProjectsList from "../components/projectsPage/ProjectsList";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProjectsList />
    </>
  );
};

export default ProjectsPage;
