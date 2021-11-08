import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  Logo,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarBtn,
  NavbarBtnLink,
} from "./style";
import LogoImg from "../../assets/svg/logo.svg";
import Button from "../Button/Button";
import { navbarData } from "../../data/navbarData";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="home">
          <Logo src={LogoImg} alt="Flowbase Logo" onClick={toggle} />
        </NavbarLogo>
        <MobileIcon onClick={toggle} open={open}>
          <div />
          <div />
          <div />
        </MobileIcon>
        <NavbarMenu open={open}>
          {navbarData.map((item, index) => (
            <NavbarItem key={index}>
              <NavbarLinks
                to={`${item.to}`}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={toggle}
              >
                {item.text}
              </NavbarLinks>
            </NavbarItem>
          ))}
          <NavbarBtnLink>
            <Button alt onClick={toggle}>
              Get Started
            </Button>
          </NavbarBtnLink>
        </NavbarMenu>
        <NavbarBtn>
          <Button alt onClick={toggle}>
            Get Started
          </Button>
        </NavbarBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
