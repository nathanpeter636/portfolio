


import {
 
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectInfo,
} from "./ProjectElements";

export const ProjectCard = ({ topLine, headline, img }) => {





  
  return (

   


   
          <ProjectsCard >
            <ProjectsIcon src={img}/>
      
            <ProjectInfo>
              <ProjectsH2> {topLine} </ProjectsH2>
              <ProjectsP> {headline} </ProjectsP>
            </ProjectInfo>
          </ProjectsCard>
         
     
  );
};


export default ProjectCard