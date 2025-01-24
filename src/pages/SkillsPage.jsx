import React from "react";
import Skills from "../components/skillsPage/Skills";
import { useEffect } from "react";

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Skills />
    </>
  );
};

export default SkillsPage;
