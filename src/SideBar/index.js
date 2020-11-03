import React from 'react'

import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap}  from "./SidebarElements";

const SideBar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>

<Icon  onClick={toggle} >
    <CloseIcon/>
</Icon>

<SidebarWrapper>
    <SidebarMenu>
        <SidebarLink to="about" onClick={toggle} >
        About
        </SidebarLink>
        <SidebarLink to="work" onClick={toggle} >
        Work
        </SidebarLink>
        {/* <SidebarLink to="contact">
        Contact
        </SidebarLink> */}
    </SidebarMenu>

    <SideBtnWrap>
        <SidebarRoute to="/contact">Contact</SidebarRoute>
    </SideBtnWrap>
</SidebarWrapper>

       </SidebarContainer>
    )
}

export default SideBar
