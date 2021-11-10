import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#101522" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 999;
  margin-bottom: -80px;
  font-size: 1.2rem;
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  display: flex;
  justify-content: start;

  @media (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const NavbarLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 100;
  z-index: 100;
`;

export const NavbarIcon = styled.img`
  width: 3rem;
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  width: 2rem;
  height: 2rem;
  top: 0;
  right: 0;
  z-index: 50;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    position: absolute;
    transform: translate(-100%, 80%);
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #ffffff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-47deg)" : "rotate(0)")};
    }
  }
`;

export const NavbarMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${({ open }) => (open ? 0 : "-100vh")};
    left: 0;
    background: #101522;
    padding-top: 80px;
    opacity: 1;
    transition: 0.3s ease-in-out;
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

    &:hover {
      border: none;
    }
  }
`;

export const NavbarLinks = styled(LinkScroll)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-weight: 300;
  color: #ffffff;

  &.active {
    border-bottom: 2px solid var(--orange);
  }

  &:hover {
    border-bottom: 2px solid var(--pink);
  }

  @media (max-width: 768px) {
    width: 100%;
    display: table;
    text-align: center;
    padding: 2rem;

    &:hover {
      color: #4b59f7;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const NavbarBtn = styled.li`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: transparent;
    border-radius: 10px;
    border: 2px solid var(--orange);

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const NavbarBtnLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`;
