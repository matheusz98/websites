import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarBtn,
  NavbarBtnLink,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">finance</NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks to="about">About</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="discover">Discover</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="services">Services</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="signup">Sign Up</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>
          <NavbarBtn>
            <NavbarBtnLink to="/signin">Sign In</NavbarBtnLink>
          </NavbarBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
