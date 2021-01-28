import React from "react";

import { MdClose } from "react-icons/md";

import styled from "styled-components";

import { projectObjOne, projectObjTwo, projectObjThree } from "./ProjectData";


const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  background: rgba(0, 0, 0, 0.45);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: auto;
  z-index: 40;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: cover;
  background-color: white;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
    text-align: center;
    padding: 10px;

  }
  button {
    padding: 10px 24px;
    background: #141414;
    border-radius: 50px;
    background: #01bf71;
    border: none;
    margin: 10px;
    font-size: 20px;
    width: 100px;

  }

  a {
    text-decoration: none;
    color: black;
  }

  h1 {
    text-align: center;
    line-height: 33px;
  }


`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


export const ProjectModal = ({ showModal, setShowModal, img, topLine, headline, description, buttonLabel, buttonLabelTwo} ) => {
  return <>{showModal ? (<Background  >



<ModalWrapper showModal={showModal}>

<ModalImg src={img}/>

<ModalContent>

<h1>{topLine}</h1>
<h3>{headline} </h3>

<p>
{description}
</p>


<button><a  target="_blank" href={buttonLabel}>View</a></button>
<button><a  target="_blank" href={buttonLabelTwo}>Git</a></button>


</ModalContent>


<CloseModalButton aria-label='Close modal' onClick={() => {setShowModal(!showModal)}}/>

</ModalWrapper>




  </Background>) : null}</>;
};
