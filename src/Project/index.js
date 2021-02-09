import { useState } from "react";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectInfo,
  ProjectFlipped,
  FlipBack,
} from "./ProjectElements";

import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
  projectObjFive,
  finalObj,
} from "./ProjectData";

import ProjectCard from "./ProjectCard";

import { ProjectModal } from "./ProjectModal";

const Projects = ({}) => {
  const [showModal, setShowModal] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    five: false,
  });

  // const [isFlipped, setIsFlipped] = useState(false);

  const openModal = (e) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setShowModal({ ...showModal, [e]: !showModal[e] });
    }
  };

  // const handleClick = () => {
  //   if (window.matchMedia("(max-width: 768px)").matches) {
  //     setIsFlipped(true);
  //     console.log(ckucj)

  //   }
  // };

  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>Work</ProjectsH1>
        <ProjectsWrapper>
          <div onClick={() => openModal("first")}>
            <ProjectModal
              showModal={showModal["first"]}
              setShowModal={setShowModal}
              {...projectObjOne}
            />

            <ProjectCard {...projectObjOne} />
          </div>

          <div onClick={() => openModal("second")}>
            <ProjectModal
              showModal={showModal["second"]}
              setShowModal={setShowModal}
              {...projectObjTwo}
            />

            <ProjectCard {...projectObjTwo} />
          </div>

          <div onClick={() => openModal("third")}>
            <ProjectModal
              showModal={showModal["third"]}
              setShowModal={setShowModal}
              {...projectObjThree}
            />

            <ProjectCard {...projectObjThree} />
          </div>

          <div onClick={() => openModal("four")}>
            <ProjectModal
              showModal={showModal["four"]}
              setShowModal={setShowModal}
              {...projectObjFour}
            />

            <ProjectCard {...projectObjFour} />
          </div>

          <div onClick={() => openModal("five")}>
            <ProjectModal
              showModal={showModal["five"]}
              setShowModal={setShowModal}
              {...projectObjFive}
            />

            <ProjectCard {...projectObjFive} />
          </div>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
