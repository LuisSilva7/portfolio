import React from "react";
import ProjectInfo from "../components/projectPage/ProjectInfo";
import { useEffect } from "react";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProjectInfo />
    </>
  );
};

export default ProjectPage;
