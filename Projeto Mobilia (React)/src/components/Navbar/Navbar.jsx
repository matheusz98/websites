import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import { Button } from "../Button/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
} from "./NavbarStyle";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const openIcon = <RiMenu2Fill onClick={() => setIsMenuOpen(!isMenuOpen)} />;
  const closeIcon = <MdClose onClick={() => setIsMenuOpen(!isMenuOpen)} />;

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Logo to="/" onClick={toggleHome} />
          <MenuIcon onClick={toggle}>
            {isMenuOpen ? closeIcon : openIcon}
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sobre Nós
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Produtos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Galeria
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavBtn>
                <Button to="/signin" primary white big>
                  Login
                </Button>
              </NavBtn>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
