import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { data } from "../../data/NavbarData";
import { FaTimes } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
} from "./NavbarStyle";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let history = useHistory();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">Innovate</NavbarLogo>
        <MenuIcon onClick={handleClick}>
          {show ? <FaTimes /> : <CgMenuGridO />}
        </MenuIcon>
        <NavbarMenu show={show}>
          {data.map((item, index) => (
            <NavbarItem key={index}>
              <NavbarLinks
                onClick={() => closeMobileMenu(item.to, item.id)}
                to={item.to}
              >
                {item.text}
              </NavbarLinks>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
