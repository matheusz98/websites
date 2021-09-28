import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  background: #ffffff;
  height: ${({ scrollNav }) => (scrollNav ? "60px" : "80px")};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  font-size: 1rem;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 15px 30px rgba(25, 38, 15, 0.1)" : "none"};
  transition: 0.3s ease-in-out;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 1.5rem;
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: block;
    top: 0;
    right: 0;
    position: absolute;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    color: #0c0c0c;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #ce0c4d;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  color: #0c0c0c;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #ce0c4d;
  }

  &.active {
    border-bottom: 3px solid #ce0c4d;
  }
`;

export const NavBtn = styled.div`
  padding-left: 1rem;
`;
