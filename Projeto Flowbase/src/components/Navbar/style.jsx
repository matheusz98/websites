import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 50;
  margin-bottom: -80px;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
`;

export const NavbarLogo = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 50;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 200px;

  @media (max-width: 360px) {
    width: 140px;
  }
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
    background: var(--title);
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
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: ${({ open }) => (open ? "0px" : "-500px")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    padding: 100px 0;
    background: var(--body);
    transition: 0.3s ease-in-out;
  }
`;

export const NavbarItem = styled.li`
  height: 60px;
  font-size: 15px;
  line-height: 17px;
  margin: 14px auto;
`;

export const NavbarLinks = styled(LinkScroll)`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 0.5rem 1rem;
  color: var(--title);
  transition: 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 0;
    width: 80%;
    height: 3px;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    color: var(--primary);
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    font-weight: 700;
  }
`;

export const NavbarBtn = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarBtnLink = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
