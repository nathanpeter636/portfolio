import styled from "styled-components"

import {FaTimes} from 'react-icons/fa'

import {Link as LinkScroll} from 'react-scroll';

import {Link as LinkRouter} from 'react-router-dom';







export const SidebarContainer = styled.div`

position: fixed;
background-color: red;
z-index: 2;
width: 100%;
height: 100%;
background: #0d0d0d;
opacity: 0;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.2s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};

height: ${({isOpen}) => (isOpen ? '100' : '0')};





`;

export const CloseIcon = styled(FaTimes)`

color: white;

`


export const Icon = styled.div`

position: absolute;
top: 1.2rem;
right: 1.2rem;
background: transparent;
cursor: pointer;
font-size: 2rem;
outline: none;


`;

export const SidebarWrapper = styled.div`

color: white;

align-self: center;
`;


export const SidebarMenu = styled.ul`

justify-content: center;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 90px);
text-align: center;


@media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 90px);
  
   align-content: center;
  
}

@media screen and (min-width: 1080px) {
   display: none;
}



`
export const SidebarLink = styled(LinkScroll)`

display: flex;
align-items: center;
justify-content: center;
font-size: 3rem;
text-decoration: none;
list-style: none;

transition: 0.2s ease-in-out;
text-decoration: none;
color: white;

margin: 20px;
width: 20%;

cursor: pointer;


&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;

}


`;

export const SideBtnWrap = styled.div`

display: flex;
justify-content: center;

`;

export const SidebarRoute = styled(LinkRouter)`

border-radius: 50px;
background: #01bf71;
white-space: none;
padding: 16px 64px;
color: #010606;
font-size: 1.3rem;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;



&:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
}
`;