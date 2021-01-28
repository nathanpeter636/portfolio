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
        <SidebarLink to="about"  >
        About
        </SidebarLink>
        <SidebarLink to="work"  >
        Work
        </SidebarLink>
      
    </SidebarMenu>

    <SideBtnWrap>
        <SidebarRoute to="/contact">Contact</SidebarRoute>
    </SideBtnWrap>
</SidebarWrapper>

       </SidebarContainer>
    )
}

export default SideBar
