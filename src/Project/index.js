import {useState} from "react";

import styled from "styled-components";

import Icon1 from "../images/Aucklandbanner.png"
import Icon2 from "../images/CryptoTashNZbanner.png"
import Icon3 from "../images/first.svg"
import Icon4 from "../images/first.svg"
import Icon5 from "../images/first.svg"
import Icon6 from "../images/first.svg"
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectInfo
} from "./ProjectElements"
import { ProjectModal } from "./ProjectModal";




const Projects = ({toggleDialog}) => {


const [showModal, setShowModal] = useState(false)

const openModal = () => {


  setShowModal(!showModal)

  console.log('clicked')
  
}


  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1></ProjectsH1>

      <ProjectsWrapper>
        <ProjectsCard onClick={openModal} >

          <ProjectModal showModal={showModal} setShowModal={setShowModal} />

          <ProjectsIcon src={Icon1} />
          <ProjectInfo>
          <ProjectsH2> Auckland Tourism App </ProjectsH2>
          <ProjectsP> Check it out , shits crazy, corona virus</ProjectsP>
          </ProjectInfo>

          
          
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectInfo>
          <ProjectsH2> CryptoTash NZ </ProjectsH2>
          <ProjectsP> Check it out , shits crazy, corona virus</ProjectsP>
          </ProjectInfo>
          <ProjectsIcon src={Icon2} />
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectInfo>
          <ProjectsH2> Trove MarketPlace</ProjectsH2>
          <ProjectsP> Check it out , shits crazy, corona virus</ProjectsP>
          </ProjectInfo>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectInfo>
          <ProjectsH2> Instagram Clone </ProjectsH2>
          <ProjectsP> Check it out , shits crazy, corona virus</ProjectsP>
          </ProjectInfo>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon5} />
          <ProjectInfo>
          <ProjectsH2> Food Ordering App </ProjectsH2>
          <ProjectsP> Check it out , shits crazy, corona virus</ProjectsP>
          </ProjectInfo>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon6} />
          <ProjectInfo>
          <ProjectsH2> MERN Stack App </ProjectsH2>
          <ProjectsP> Check it out , shits crazy, corona virus</ProjectsP>
          </ProjectInfo>
        </ProjectsCard>

        
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
