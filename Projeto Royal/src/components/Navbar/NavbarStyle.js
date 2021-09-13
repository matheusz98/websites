import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import Bars from '../../images/bars.svg';

const NavLink = css`
  height: 100%;
  display: flex;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #ffffff;
  cursor: pointer;
`;

export const Nav = styled.div`
  width: 100%;
  height: ${({ scrollNav }) => (scrollNav ? '60px' : '80px')};
  background: ${({ scrollNav }) => (scrollNav ? '#15ab97' : 'transparent')};
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  padding: 1rem 2rem;
  transition: 0.5s;
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

export const MenuBars = styled.i`
  display: none;

  @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      display: block;
      top: 0;
      right: 0;
      background: url(${Bars});
      background-size: contain;
      cursor: pointer;
      transform: translate(20%, -15%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -2.5rem;

  @media (max-width: 768px) {
      display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
      display: none;
  }
`;
