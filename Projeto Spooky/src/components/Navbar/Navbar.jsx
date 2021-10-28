import { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarButton,
  NavbarImg,
} from "./NavbarStyle";
import { Button } from "../Button/Button";
import { GiPumpkinMask } from "react-icons/gi";
import { FaSkull } from "react-icons/fa";
import NavImg from "../../img/nav-img.png";
import { navbarData } from "../../data/navbarData";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => {
    setShow(!show);
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
        <NavbarLogo to="home" onClick={show ? toggle : ""}>
          <NavbarIcon src="./assets/images/favicon.png" alt="Logo" />
          SPOOKY
        </NavbarLogo>
        <MobileIcon onClick={toggle}>
          {show ? <FaSkull /> : <GiPumpkinMask />}
        </MobileIcon>
        <NavbarMenu show={show}>
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
          <Button onClick={toggle}>Contact</Button>
          <NavbarImg src={NavImg} alt="Navbar Img"></NavbarImg>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
