import { useState, useEffect } from "react";
import { navbarData } from "../../data/navbarData";
import Button from "../Button/Button";
import LogoImg from "../../assets/svg/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
} from "./style";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavbarLogo>
          <NavbarIcon
            src={LogoImg}
            alt="Woodies Logo"
            onClick={open ? toggle : ""}
          />
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
          <Button alt onClick={toggle}>
            SIGN UP
          </Button>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
