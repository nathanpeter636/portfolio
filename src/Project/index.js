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
import ReactCardFlip from "react-card-flip";

import { ProjectsCardFlipped } from "./ProjectsCardFlipped";

import { ProjectModal } from "./ProjectModal";

const Projects = ({}) => {
  const [showModal, setShowModal] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    five: false,
  });

  const [isFlipped, setIsFlipped] = useState(false);

  const openModal = (e) => {

    if (window.matchMedia("(min-width: 768px)").matches) {
    setShowModal({ ...showModal, [e]: !showModal[e] });
    }
    
  };

  const handleClick = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsFlipped(true);

    } else {
      setIsFlipped(false)
    }
  };

  return  (
    <>


      <ProjectsContainer id="projects">
        <ProjectsH1>Work</ProjectsH1>
        <ProjectsWrapper>
          <div onClick={() => openModal("first")}>
            <ProjectCard {...projectObjOne} />
            <ProjectModal
              showModal={showModal["first"]}
              setShowModal={setShowModal}
              {...projectObjOne}
            />
          </div>

          <div onClick={() => openModal("second")}>
            <ProjectCard {...projectObjTwo} />


            <ProjectModal
              showModal={showModal["second"]}
              setShowModal={setShowModal}
              {...projectObjTwo}
            />
          </div>

          <div onClick={() => openModal("third")}>
            <ProjectCard {...projectObjThree} />
            <ProjectModal
              showModal={showModal["third"]}
              setShowModal={setShowModal}
              {...projectObjThree}
            />
          </div>

          <div onClick={() => openModal("fourth")}>
            <ProjectCard {...projectObjFour} />
            <ProjectModal
              showModal={showModal["fourth"]}
              setShowModal={setShowModal}
              {...projectObjFour}
            />
          </div>

          <div onClick={() => openModal("five")}>
            
          <ProjectModal
              showModal={showModal["five"]}
              setShowModal={setShowModal}
              {...projectObjFive}
            />
           
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="verticle"
            flipSpeedBackToFront="1"
          >
            <div onClick={handleClick}>
              <ProjectCard {...projectObjFive} />
            </div>
            <ProjectsCardFlipped {...projectObjFive} />
           
          </ReactCardFlip>
          </div>

        
        


          
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
