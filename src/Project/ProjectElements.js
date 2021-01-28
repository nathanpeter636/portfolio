import styled from "styled-components";




export const ProjectsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
  }
`;

export const ProjectsWrapper = styled.div`
  
height: 800px;
  max-width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
  grid-gap: 26px;
  /* margin-top: 80px; */



  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 80px 20px;
  }
`;



export const ProjectsCard = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  position: relative;

  overflow: hidden;

  &:hover {
    transform: scale(1.02);

    transition: all 0.2s ease-in-out;

    box-shadow: 0 1px 50px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    /* z-index: 1; */
  }
`;

export const ProjectsIcon = styled.img`

max-width: 100%;
    max-height: 100%;

    object-fit: contain;
`;



export const ProjectInfo = styled.div`

position: absolute;

background-color: white;;
bottom: 0;
text-align: center;
width: 100vw;
cursor: pointer;


`


export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-top: 64px;
  text-align: center;





  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;



