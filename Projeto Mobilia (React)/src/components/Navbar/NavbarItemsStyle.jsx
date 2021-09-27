import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const NavbarItemsContainer = styled.div`
  width: 100%;
  top: ${({ isOpen }) => (isOpen ? "60px" : "-360px")};
  left: 0;
  z-index: 2;
  display: block;
  position: fixed;
  background: #ffffff;
  padding: 1.25rem 0;
  text-align: center;
  transition: 0.3s ease-in-out;
`;

export const NavbarItemsWrapper = styled.div`
  color: #0c0c0c;
`;

export const NavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: (6, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: (6, 60px);
  }
`;

export const NavbarLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #0c0c0c;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    color: #ce0c4d;
  }
`;

export const NavbarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.625rem;
`;
