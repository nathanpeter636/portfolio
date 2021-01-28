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
  const [showModal, setShowModal] = useState({ first: false, second: false, third: false, fourth: false, five: false,});

 

  const openModal = (e) => {
    setShowModal({ ...showModal, [e]: !showModal[e] });
 };

 

  return (
    <>
      <ProjectsContainer id="projects">

        <ProjectsH1>Work</ProjectsH1>
        <ProjectsWrapper>
          
        <div onClick={() => openModal('first')}>
        <ProjectCard {...projectObjOne} />
        <ProjectModal
          showModal={showModal['first']}
          setShowModal={setShowModal}
          {...projectObjOne}
        />
        </div>

        <div onClick={() => openModal('second')}>
        <ProjectCard {...projectObjTwo} />
        <ProjectModal
          showModal={showModal['second']}
          setShowModal={setShowModal}
          {...projectObjTwo}
        />
        </div>

        <div onClick={() => openModal('third')}>
        <ProjectCard {...projectObjThree} />
        <ProjectModal
          showModal={showModal['third']}
          setShowModal={setShowModal}
          {...projectObjThree}
        />
        </div>

        <div onClick={() => openModal('fourth')}>
        <ProjectCard {...projectObjFour} />
        <ProjectModal
          showModal={showModal['fourth']}
          setShowModal={setShowModal}
          {...projectObjFour}
        />
        </div>

        <div onClick={() => openModal('five')}>
        <ProjectCard {...projectObjFive} />
        <ProjectModal
          showModal={showModal['five']}
          setShowModal={setShowModal}
          {...projectObjFive}
        />
        </div>

        

          
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

{
  /* <ProjectModal showModal={showModal} setShowModal={setShowModal} {...projectObjOne}  /> */
}
