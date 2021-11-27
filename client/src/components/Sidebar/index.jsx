import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,SidebarRoute,SidebarLink
} from "./SideElements.js";


const Sidebar = ({isOpen,toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              Discover
            </SidebarLink>
            <SidebarLink to="diets" onClick={toggle}>
              Best Diets
            </SidebarLink>
            <SidebarLink to="create" onClick={toggle}>
              Create!
            </SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            <SidebarRoute to="/about">About</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
