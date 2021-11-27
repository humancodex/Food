import React from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements.js";

import { FaBars } from "react-icons/fa";

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">FOODLY</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          

            <NavItem>
              <NavLinks to="/home">Recipes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/create">Create One!</NavLinks>
            </NavItem>
          
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/about">About </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      {/* <Link to="/home">
<button>Home</button>
</Link>
<Link to="create">
<button>Create your recipe</button>
</Link> */}
    </>
  );
};

export default NavBar;
