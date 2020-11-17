import React from 'react'
import styled from "styled-components"


  export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;


  export const ProjectModal = ({showModal, setShowModal}) => {


return (

<>

{showModal ? <div>Modal</div> : null }


</>
)

  }