import { useState, useEffect } from "react";
import { navbarData } from "../../data/navbarData";
import Button from "../Button/Button";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarBtn,
  NavbarBtnLink,
} from "./style";
import LogoImg from "../../assets/svg/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavbarLogo to="home">
          <NavbarIcon src={LogoImg} alt="IMusic Logo" onClick={toggle} />
          IMusic
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
          <NavbarBtn>
            <NavbarBtnLink to="/sign-up">
              <Button onClick={toggle} fontBig>
                Sign Up
              </Button>
            </NavbarBtnLink>
          </NavbarBtn>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
