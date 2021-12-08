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
  z-index: 99;
  background: transparent;
  font-size: 1.2rem;
  margin-bottom: -80px;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  display: flex;
  justify-content: start;
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
  color: var(--white);
  z-index: 99;
  cursor: pointer;
`;

export const NavbarIcon = styled.img`
  width: 3rem;
  margin-right: 0.2rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 99;
  color: var(--white);

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  transition: 0.3s ease-in-out;

  > li:first-child {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    top: 0;
    left: 0;
    background: var(--bg);
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    padding-top: 30%;
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavbarLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: var(--white);
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid var(--orange);
  }

  @media (max-width: 768px) {
    width: 100%;
    display: table;
    text-align: center;
    padding: 2rem;

    &:hover {
      color: var(--blue);
      border-bottom: none;
    }
  }
`;
