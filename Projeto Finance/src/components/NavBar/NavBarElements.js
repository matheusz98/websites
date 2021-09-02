import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
  position: sticky;
  margin-top: -5rem;
  background: #000000;
  font-size: 1rem;

  @media (max-width: 960px) {
    transition: 0.3s all ease;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 1.5rem;
`;

export const NavbarLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffff;
  margin-left: 1.5rem;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -1.375rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  height: 5rem;
`;

export const NavbarLinks = styled(LinkScroll)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #ffffff;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01fe95;
  }

  &:hover {
    border-bottom: 3px solid #01fe95;
  }
`;

export const NavbarBtn = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarBtnLink = styled(LinkRouter)`
  font-size: 0.938rem;
  color: #010606;
  background: #01fe95;
  border-radius: 3.125rem;
  padding: 0.625rem 1.375rem;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: #ffffff;
    color: #010606;
    transition: 0.3s all ease-in-out;
  }
`;
