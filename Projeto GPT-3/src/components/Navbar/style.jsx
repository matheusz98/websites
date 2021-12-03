import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media (max-width: 1060px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const NavbarLogo = styled.a`
  margin-right: 2rem;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const NavbarLinks = styled.div`
  display: flex;

  @media (max-width: 1060px) {
    display: none;
  }
`;

export const NavbarItem = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin: 0 1rem;
  cursor: pointer;
`;

export const NavbarLink = styled.a`
  color: #ffffff;
`;

export const NavbarButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1060px) {
    display: none;
  }
`;

export const SignIn = styled.p`
  font-size: 18px;
  color: #ffffff;
  line-height: 24px;
  margin: 0 1rem;
  cursor: pointer;
`;

export const NavbarMenu = styled.div`
  display: none;
  position: relative;
  margin-left: 1rem;

  @media (max-width: 1060px) {
    display: flex;
  }

  svg {
    cursor: pointer;
  }
`;

export const NavbarMenuContent = styled.div`
  min-width: 210px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  background: var(--color-footer);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const NavbarMenuLinks = styled.div`
  display: none;

  @media (max-width: 1060px) {
    display: block;
  }
`;

export const NavbarMenuItem = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin: 1rem;
  cursor: pointer;
`;

export const NavbarMenuLink = styled.a`
  color: #ffffff;
`;

export const NavbarMenuButtons = styled.div`
  display: none;

  @media (max-width: 1060px) {
    display: block;
    margin-top: 1rem;

    p {
      margin-bottom: 0.5rem;
    }

    button {
      margin: 0.5rem;
    }
  }
`;
