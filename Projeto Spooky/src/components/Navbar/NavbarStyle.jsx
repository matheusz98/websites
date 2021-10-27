import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import NavBg from "../../img/bg.jpg";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 50;
  margin-bottom: -80px;
  font-size: 1.2rem;
  background: ${({ scrollNav }) => (scrollNav ? "#DA723C" : "transparent")};
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const NavbarLogo = styled(LinkScroll)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-family: "Halloween";
  font-size: 1.5rem;
  font-weight: 200;
  color: #ffffff;
  cursor: pointer;
  z-index: 50;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #b34f1a;
  }
`;

export const NavbarIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
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

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    flex-direction: column;
    top: ${({ show }) => (show ? "0px" : "-500px")};
    left: 0;
    padding: 5rem 0 1rem 0;
    border-radius: 0 0 3rem 3rem;
    transition: 0.3s ease-in-out;
    opacity: ${({ show }) => (show ? 1 : 0)};
    background: url(${NavBg});
    background-position: fixed;
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

export const NavbarLinks = styled(LinkScroll)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #ffffff;
  transition: 0.3s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #782c9b;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    color: #782c9b;
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    color: #782c9b;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;

    &:hover {
      color: #782c9b;
    }

    &::after {
      left: 35%;
      bottom: 20%;
      width: 30%;
    }
  }
`;

export const NavbarButton = styled.button`
  background: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 3rem;
  border: 2px solid #ffffff;
  font-size: 1.1rem;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 2rem #7923db;
  }
`;

export const NavbarImg = styled.img`
  display: none;

  @media (max-width: 768px) {
    max-width: 50%;
    position: absolute;
    display: block;
    top: -50px;
    left: 10px;
    z-index: -1;
  }
`;
