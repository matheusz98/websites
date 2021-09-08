import { menuData } from "../../data/MenuData";
import { Button } from '../../components/Button/Button';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from "./NavbarStyle";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ROYAL</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
            Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
