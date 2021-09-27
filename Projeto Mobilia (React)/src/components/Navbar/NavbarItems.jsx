import { Button } from "../Button/Button";
import {
  NavbarItemsContainer,
  NavbarItemsWrapper,
  NavbarMenu,
  NavbarLink,
  NavbarBtnWrapper,
} from "./NavbarItemsStyle";

const NavbarItems = ({ isOpen, toggle }) => {
  return (
    <NavbarItemsContainer isOpen={isOpen} onClick={toggle}>
      <NavbarItemsWrapper>
        <NavbarMenu>
          <NavbarLink to="home" onClick={toggle}>
            Home
          </NavbarLink>
          <NavbarLink to="about" onClick={toggle}>
            Sobre nós
          </NavbarLink>
          <NavbarLink to="products" onClick={toggle}>
            Produtos
          </NavbarLink>
          <NavbarLink to="gallery" onClick={toggle}>
            Galeria
          </NavbarLink>
          <NavbarLink to="contact" onClick={toggle}>
            Contato
          </NavbarLink>
        </NavbarMenu>
        <NavbarBtnWrapper>
          <Button to="/signin" primary white big>
            Login
          </Button>
        </NavbarBtnWrapper>
      </NavbarItemsWrapper>
    </NavbarItemsContainer>
  );
};

export default NavbarItems;
