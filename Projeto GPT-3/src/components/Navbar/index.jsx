import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navbarData } from "../../data/navbarData";
import LogoImg from "../../assets/images/logo.svg";
import {
  Nav,
  NavbarContent,
  NavbarLogo,
  Logo,
  NavbarLinks,
  NavbarItem,
  NavbarLink,
  NavbarButtons,
  SignIn,
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLinks,
  NavbarMenuItem,
  NavbarMenuLink,
  NavbarMenuButtons,
} from "./style";
import Button from "../Button/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Nav>
      <NavbarContent>
        <NavbarLogo>
          <Logo src={LogoImg} alt="GPT-3 Logo" />
        </NavbarLogo>
        <NavbarLinks>
          {navbarData.map((item, index) => (
            <NavbarItem key={index}>
              <NavbarLink href={item.to}>{item.text}</NavbarLink>
            </NavbarItem>
          ))}
        </NavbarLinks>
      </NavbarContent>
      <NavbarButtons>
        <SignIn>Sign In</SignIn>
        <Button>Sign Up</Button>
      </NavbarButtons>
      <NavbarMenu>
        {toggle ? (
          <RiCloseLine
            size={30}
            color="#ffffff"
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            size={30}
            color="#ffffff"
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <NavbarMenuContent>
            <NavbarMenuLinks>
              {navbarData.map((item, index) => (
                <NavbarMenuItem key={index}>
                  <NavbarMenuLink href={item.to}>{item.text}</NavbarMenuLink>
                </NavbarMenuItem>
              ))}
            </NavbarMenuLinks>
            <NavbarMenuButtons>
              <SignIn>Sign In</SignIn>
              <Button>Sign Up</Button>
            </NavbarMenuButtons>
          </NavbarMenuContent>
        )}
      </NavbarMenu>
    </Nav>
  );
};

export default Navbar;
