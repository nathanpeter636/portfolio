import React from 'react'

import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap}  from "./SidebarElements";

const SideBar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} >

<Icon  onClick={toggle} >
    <CloseIcon/>
</Icon>

<SidebarWrapper>
    <SidebarMenu>
        <SidebarLink to="about" 
           onClick={toggle}
         
           smooth={true}
           duration={true}
           spy={true}
           exact={true}
           offset={-30} >
        About
        </SidebarLink>
        <SidebarLink 
           onClick={toggle}
           to="projects"
           smooth={true}
           duration={true}
           spy={true}
           exact={true}
           offset={-30}  >
        Work
        </SidebarLink>
      
    </SidebarMenu>

    <SideBtnWrap>
       
    </SideBtnWrap>
</SidebarWrapper>

       </SidebarContainer>
    )
}

export default SideBar
