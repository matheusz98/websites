import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 50;
  margin-bottom: -80px;
  font-size: 1.2rem;
  background: transparent;
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 2rem;
  font-style: italic;
  font-weight: 200;
  color: #ffffff;
  cursor: pointer;
  z-index: 50;
`;

export const MenuIcon = styled.div`
  display: none;
  z-index: 50;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    color: #ffffff;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    padding-top: 10rem;
    transition: 0.3s ease-in-out;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-50px")});
    background: #aa63ff;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavbarLinks = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #ffffff;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #6216be;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;

    &:hover {
      color: #642baa;
    }
  }
`;
