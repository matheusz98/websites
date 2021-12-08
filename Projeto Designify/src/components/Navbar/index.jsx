import { useState } from "react";
import { navbarData } from "../../data/navbarData";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import LogoIMG from "../../assets/images/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavbarIcon,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from "./style";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollTo = (id) => {
    const e = document.getElementById(id);
    e.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMenu = (id) => {
    scrollTo(id);
    setShow(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">
          <NavbarIcon src={LogoIMG} alt="Designify Logo" />
          esignify
        </NavbarLogo>
        <MobileIcon onClick={() => setShow(!show)}>
          {show ? <FaTimes /> : <CgMenuRight />}
        </MobileIcon>
        <NavbarMenu show={show}>
          {navbarData.map((item, index) => (
            <NavbarItem key={index}>
              <NavbarLink to="/" onClick={() => closeMenu(item.to)}>
                {item.text}
              </NavbarLink>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
