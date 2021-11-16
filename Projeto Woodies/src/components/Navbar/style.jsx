import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 10;
  background: ${({ scrollNav }) =>
    scrollNav ? "var(--navbar)" : "transparent"};
  font-size: 1.2rem;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 0 10px 2px var(--black)" : ""};
  margin-bottom: -80px;
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  padding: 0 50px;

  @media (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const NavbarLogo = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const NavbarIcon = styled.img`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  width: 2rem;
  height: 2rem;
  top: 0;
  right: 0;
  z-index: 50;
  display: none;
  padding-left: 50px;

  @media (max-width: 990px) {
    display: flex;
    justify-content: space-around;
    position: absolute;
    transform: translate(-100%, 75%);
    flex-flow: column nowrap;
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--black);
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

  @media (max-width: 990px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: ${({ open }) => (open ? 0 : "-100vw")};
    background: var(--navbar);
    padding-top: 80px;
    opacity: ${({ open }) => (open ? "1" : "0")};
    transition: 0.3s ease-in-out;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

export const NavbarLinks = styled(LinkScroll)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-weight: 400;
  line-height: 22px;
  color: rgba(34, 34, 34, 0.75);
  transition: 0.3s ease-in-out;

  &.active {
    color: var(--main);
  }

  &:hover {
    color: var(--main);
    font-weight: 800;
  }

  @media (max-width: 990px) {
    width: 100%;
    display: block;
    padding: 2rem;
    text-align: center;
    transition: 0.3s ease-in-out;

    &:hover {
      color: var(--main);
    }
  }
`;
